from udpwkpf import WuClass, Device
import sys
from udpwkpf_io_interface import *
from twisted.internet import reactor

if __name__ == "__main__":
    class Assigner(WuClass):
        def __init__(self):
            WuClass.__init__(self)
            self.loadClass('SC_Assigner')
            self.types = 4 # 0: unavailable, 1: general, 2: paper, 3: plastic
            self.cans = 2
            self.is_full = [0, 0]

        def update(self,obj,pID=None,val=None):
            # obj properties
            # 0-(cans-1): assign_type, cans-(2*cans-1): alert, 2*cans: clean 
            for can_index in range(0, self.cans, 1):
                obj.setProperty(can_index, 3)
                if pID == self.cans + can_index && val == True:
                    print "Alert from can no. ", can_index
                    obj.setProperty(self.cans * 2, True)

    class MyDevice(Device):
        def __init__(self,addr,localaddr):
            Device.__init__(self,addr,localaddr)

        def init(self):
            cls = Assigner()
            self.addClass(cls,0)
            self.obj_assigner = self.addObject(cls.ID)

    if len(sys.argv) <= 2:
        print 'python %s <gip> <dip>:<port>' % sys.argv[0]
        print '      <gip>: IP addrees of gateway'
        print '      <dip>: IP address of Python device'
        print '      <port>: An unique port number'
        print ' ex. python %s 192.168.4.7 127.0.0.1:3000' % sys.argv[0]
        sys.exit(-1)

    d = MyDevice(sys.argv[1],sys.argv[2])
    reactor.run()

from udpwkpf import WuClass, Device
import sys
from udpwkpf_io_interface import *
from twisted.internet import reactor

if __name__ == "__main__":
    class SC_Can_Controller_2(WuClass):
        def __init__(self):
            WuClass.__init__(self)
            self.loadClass('SC_Can_Controller_2')

        def update(self,obj,pID=None,val=None):
            # obj properties are
            # 0: assigned_val (rw), 1: alert (rw), 2: lock (wr) 

            if pID == 0:
                print "[Assigned] New type val = ", val
                obj.setProperty(0, val)
            elif pID == 1:
                print "[Alert] Can is full"
                obj.setProperty(1, True)

    class MyDevice(Device):
        def __init__(self,addr,localaddr):
            Device.__init__(self,addr,localaddr)

        def init(self):
            cls = SC_Can_Controller_2()
            self.addClass(cls,0)
            self.obj_can_controller = self.addObject(cls.ID)

    if len(sys.argv) <= 2:
        print 'python %s <gip> <dip>:<port>' % sys.argv[0]
        print '      <gip>: IP addrees of gateway'
        print '      <dip>: IP address of Python device'
        print '      <port>: An unique port number'
        print ' ex. python %s 192.168.4.7 127.0.0.1:3000' % sys.argv[0]
        sys.exit(-1)

    d = MyDevice(sys.argv[1],sys.argv[2])
    reactor.run()

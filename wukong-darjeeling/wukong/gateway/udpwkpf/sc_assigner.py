from udpwkpf import WuClass, Device
import sys
from udpwkpf_io_interface import *
from twisted.internet import reactor

class SC_Assigner(WuClass):
    
    def __init__(self):
        WuClass.__init__(self)
        self.loadClass('SC_Assigner')
        
        # types
        self.type_num = 4 # 0: unavailable, 1: general, 2: paper, 3: plastic
        self.type_assigned = [True, False, False, False]
            
        # cans
        self.can_num = 4
        self.can_type  = [0, 0, 0, 0]
        self.can_alert = [False, False, False, False]
            
        # 'clean' asset
        self.clean_index = self.can_num * 2
        self.clean_asserted = False

        # 'ack' asset
        # self.ack_index = self.can_num * 2 + 1

    def update(self,obj,pID=None,val=None):
        
        # obj properties are
        # 0-(cans-1): assign_type, cans-(2*cans-1): alert, 2*cans: clean, 2*cans+1: ack

        # check for alerts 
        for can_index in range(0, self.can_num, 1):
            if pID == self.can_num + can_index:
                if val == True:
                    print "[Alert] Can no. ", can_index, " is full"
                    self.type_assigned[ self.can_type[can_index] ] = False
                    self.can_alert[can_index] = True
                    self.can_type[can_index] = 0
                elif val == False:
                    print "[Cleaned] Can no. ", can_index, " is clean"
                    self.can_alert[can_index] = False
        
        # set clean
        clean = False
        for a in self.can_alert:
            if a == True:
                clean = True
        if clean and not self.clean_asserted:
            obj.setProperty(self.clean_index, True)
            self.clean_asserted = True
        elif not clean:
            obj.setProperty(self.clean_index, False)
            self.clean_asserted = False
        
        # set types
        for type_index in range(1, self.type_num, 1): 
            if self.type_assigned[type_index] == False:     # if a type is not assigned
                print '[Assign] type ', type_index
                assigned = False
                for can_index in range(0, self.can_num, 1):    # find unassigned can that is not full
                    if not self.can_alert[can_index] and self.can_type[can_index] == 0:
                        self.can_type[can_index] = type_index
                        self.type_assigned[type_index] = True
                        assigned = True
                        break
                if not assigned:
                    print '[Error] Unable to assign type'
        for can_index in range(0, self.can_num, 1):
            obj.setProperty(can_index, self.can_type[can_index])
        print 'can_type = ', str(self.can_type), ', can_alert = ', str(self.can_alert), ', type_assigned = ', str(self.type_assigned)

if __name__ == "__main__":
    class MyDevice(Device):
        def __init__(self,addr,localaddr):
            Device.__init__(self,addr,localaddr)

        def init(self):
            cls = SC_Assigner()
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

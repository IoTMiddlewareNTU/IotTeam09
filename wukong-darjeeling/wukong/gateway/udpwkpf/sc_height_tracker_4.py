import traceback
import time,sys
from udpwkpf import WuClass, Device
from twisted.internet import reactor
from udpwkpf_io_interface import *
from grove_rgb_lcd import *

touch_pad = 7
#Trig_Pin = 8
#Echo_Pin = 9
# ultrasonic_ranger = 7;
close = 0

class SC_Height_Tracker(WuClass):
    def __init__(self):
        WuClass.__init__(self)
        self.loadClass('SC_Height_Tracker_4')
        # self.threshold = 10
        self.is_full = False
        self.IO = pin_mode(touch_pad, PIN_TYPE_DIGITAL, PIN_MODE_INPUT)
        
	print "Height tracker init!"

    def update(self,obj,pID=None,val=None):
        try:
            current_value = digital_read(self.IO)
            if current_value:
                self.is_full = not self.is_full
	        obj.setProperty(0, self.is_full)
        except IOError:
            print "Error"

if __name__== "__main__":

    class MyDevice(Device):
        def __init__(self,addr,localaddr):
            Device.__init__(self,addr,localaddr)

        def init(self):
            m = SC_Height_Tracker()
            self.addClass(m, 0)
            self.obj_height_tracker = self.addObject(m.ID)
	

    if len(sys.argv) <= 2:	
        print 'python %s <gip> <dip>:<port>' % sys.argv[0]
	print '      <gip>: IP addrees of gateway'
	print '      <dip>: IP address of Python device'
	print '      <port>: An unique port number'
	print ' ex. python %s 192.168.4.7 127.0.0.1:3000' % sys.argv[0]
	sys.exit(-1)

    d = MyDevice(sys.argv[1],sys.argv[2])

    reactor.run()
    device_cleanup()

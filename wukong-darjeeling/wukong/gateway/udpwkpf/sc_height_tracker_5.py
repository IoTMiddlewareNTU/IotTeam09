import traceback
import time,sys
from udpwkpf import WuClass, Device
from twisted.internet import reactor
from udpwkpf_io_interface import *
from grove_rgb_lcd import *

#Trig_Pin = 8
#Echo_Pin = 9
ultrasonic_ranger = 7;
close = 0

class SC_Height_Tracker(WuClass):
    def __init__(self):
        WuClass.__init__(self)
        self.loadClass('SC_Height_Tracker_5')
        self.threshold = 10
	print "Ultrasound sensor init!"

    def update(self,obj,pID=None,val=None):

        echo_gpio = grovepi.ultrasonicRead(ultrasonic_ranger)
        # print(echo_gpio)
	time.sleep(0.01)
	if echo_gpio > self.threshold:
	    output = False
	    close = 0
	elif echo_gpio <= self.threshold:
	    output = True
	    close = 1
	print output
	obj.setProperty(0, output)

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

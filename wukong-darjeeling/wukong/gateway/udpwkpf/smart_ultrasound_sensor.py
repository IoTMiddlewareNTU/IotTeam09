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

class Ultrasound_sensor(WuClass):
    def __init__(self):
        WuClass.__init__(self)
        self.loadClass('Ultrasound_Sensor')
        print "Ultrasound sensor init!"

    def update(self,obj,pID=None,val=None):

        #echo_gpio = pin_mode(Echo_Pin, PIN_TYPE_DIGITAL, PIN_MODE_INPUT)
        echo_gpio = grovepi.ultrasonicRead(ultrasonic_ranger)
	#centimeter = int(self.pulseIn(echo_gpio))
        print(echo_gpio)
	time.sleep(0.05)
	obj.setProperty(0, echo_gpio)
	global close
	#print "close="+str(close)
	if echo_gpio > 5 and close==1:
	    setText("distance OK\nwariard gay")
	    close = 0
	elif echo_gpio<=5 and close==0:
	    setText("too close\nylc love wariard")
	    close = 1
	    

    def pulseIn(self, echo_gpio):
        pulseOn = -1
        pulseOff = -1
	print(echo_gpio)
        count1 = 0
        while digital_read(echo_gpio) == 0 and count1 < 5000:
            pulseOff = time.time()
            count1 += 1
        count2 = 0
        while digital_read(echo_gpio) == 1 and count2 < 5000:
            pulseOn = time.time()
            count2 += 1
        if pulseOn == -1 or pulseOff == -1 or count1 >= 5000 or count2 >= 5000:
            return -1
        timeDifference = pulseOn - pulseOff

        #should convert under fomula for different companies' sensor
        return timeDifference * 17000 #cm
        #return int((pulse_time/2.0)*0.0343);

class MyDevice(Device):
    def __init__(self,addr,localaddr):
        Device.__init__(self,addr,localaddr)

    def init(self):
        m = Ultrasound_sensor()
        self.addClass(m, 0)
        self.obj_ultrasound_sensor = self.addObject(m.ID)

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

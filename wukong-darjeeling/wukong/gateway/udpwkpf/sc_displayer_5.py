from twisted.internet import reactor
from udpwkpf import WuClass, Device
import sys
from udpwkpf_io_interface import *
from grove_rgb_lcd import *

if __name__ == "__main__":

    class SC_Displayer_5(WuClass):
        def __init__(self):
            WuClass.__init__(self)
            self.loadClass('SC_Displayer_5')
            setText("LCD Displayer \ninit success")
            setRGB(0,128,64)
	    print "LCD Displayer init success"

        def update(self,obj,pID=None,val=None):
            try:
                if pID == 0:
                    if val == 0:
                        setText("Unavailable\n")
			setRGB(128, 64, 0)
                    elif val == 1:
			setText("General garbage\n")
			setRGB(0, 128, 64)
                    elif val == 2:
                        setText("Paper\n")
                        setRGB(0, 128, 64)
                    elif val == 3:
                        setText("Plastic\n")
                        setRGB(0, 128, 64)
            except IOError:
                print ("Error")

    class MyDevice(Device):
        def __init__(self,addr,localaddr):
            Device.__init__(self,addr,localaddr)

        def init(self):
            m1 = SC_Displayer_5()
            self.addClass(m1,0)
            self.obj_sc_displayer = self.addObject(m1.ID)


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

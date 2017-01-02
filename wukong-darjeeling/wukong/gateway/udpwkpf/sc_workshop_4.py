import time,sys
from udpwkpf import WuClass, Device
from udpwkpf_io_interface import *
from twisted.internet import reactor
import random
from math import log
import time

import sc_can_controller_4 as can_controller 
import sc_height_tracker_4 as height_tracker
import sc_displayer_4 as displayer

class MyDevice(Device):
    def __init__(self,addr,localaddr):
        Device.__init__(self,addr,localaddr)

    def init(self):
        m2 = can_controller.SC_Can_Controller()
        self.addClass(m2, 0)
        self.obj_can_controller = self.addObject(m2.ID)
        m3 = height_tracker.SC_Height_Tracker()
        self.addClass(m3,0)
        self.obj_height_tracker = self.addObject(m3.ID)
        m4 = displayer.SC_Displayer()
        self.addClass(m4,0)
        self.obj_displayer = self.addObject(m4.ID)

if len(sys.argv) <= 2:
        print 'python udpwkpf.py <ip> <ip:port>'
        print '      <ip>: IP of the interface'
        print '      <port>: The unique port number in the interface'
        print ' ex. python udpwkpf.py 127.0.0.1 3000'
        sys.exit(-1)

d = MyDevice(sys.argv[1],sys.argv[2])

reactor.run()


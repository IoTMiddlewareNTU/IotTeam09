# WuKong IoT Final Project: SmartCans

#### Issues
* Need refresh rate for any of the classes?
* Where should the gateway be opened, PC or Pi?
* Which device should run the assigner?

#### 1. Team Members
* B03902007 Elise Cheng (elisedc)
* B03902013 Jim Wu (jim841019g)

#### 2. Basic Info
* Raspberry Pi login: (username, password) = (pi, smartcan2016)
* Connect to network 'Kochun'
* IPs: jim 172.20.10.(10, 12) and elisedc 172.20.10.(11, 14)

##### Setup
* **On PC:**
    * Install gradle
        * ` $ sudo apt-get update `
        * ` $ sudo apt-get install gradle `
        * ` $ sudo apt-get install openjdk-7-jdk `
    * ` $ cd src/infuser `
    * ` $ gradle `
* **On Pi:**
    * ` $ sudo apt-get update  `
    * ` $ sudo apt-get install python-twisted python-cjson python-gevent  `
    * ` $ sudo apt-get install sqlite3 python-netifaces `
    * Install grovepi lib:
        * ` $ sudo apt-get install python-smbus i2c-tools `
        * ` $ sudo raspi-config `
        * Go to Advanced --> I2C and select yes
        * ` $ sudo reboot `
        * Check if success: ` $ sudo i2cdetect -y 1 `
    * Install GrovePi environment
        * ` $ cd GrovePi/Script `
        * ` $ sudo chmod +x install.sh `
        * ` $ sudo ./install.sh `
        * ` $ cd Grovepi/Software/Python/ `
        * ` $ sudo python setup.py install `
    * Install RPi.GPIO
        * ` $ sudo apt-get -y install python-rpi.gpio `

##### Execution
* **On PC:**
    * ` $ cd wukong/master `
    * ` $ python master_server.py `
* **On Pi:**
    * ` $ cd wukong/gateway`
    * configure IP settings in `gtwconfig.py`
    * ` $ python start_gateway.py `

#### 3. Equipment
* LCD text display x5
* trash cans x2
* ultrasonic distance detector x2
* catflap x2 (DIY with PE boards)
* LED light bulb x5
* Raspberry pi x5

#### 4. WuClasses
1. SC_Assigner (master/ virtual)
    * keep track of all trash cans & garbage types
    * notify Alerter to change status
    * assets: types (*short*)
    * inputs: alert x5 (*boolean*, **Communicator**)
    * outputs: clean (*boolean*, **Alerter**), assign_type x5 (*short*, **Communicator**)
2. SC_Alerter (light actuator/ hard)
    * cleaning squad
    * inputs: clean (*boolean*)
    * outputs: none
3. SC_Can_Controller (device/ virtual)
    * remember garbage type
    * control LCD displayer
    * communicate with assigner
    * inputs:  assign_type (*short*, **Assigner**), is_full (*boolean*, **Communicator**) 
    * outputs: alert (*boolean*, **Assigner**), type (*short*, **Displayer**), lock (*boolean*, **Lock**)
4. SC_Displayer (LCD displayer/ hard)
    * display garbage type
    * inputs: type (*short*, **Communicator**)
5. SC_Lock (light actuator/ hard)
    * control lock according to *lock* from Communicator
    * inputs: lock (*boolean*, **Communicator**)
6. SC_Height_Tracker (ultrasonic detector/ hard)
    * track height inside trash can

* **Note 1**: type asset values and meanings
    * 0: trash can is unavailable
    * 1: general trash
    * 2: paper
    * 3: plastic
* **Note 2**: naming conventions
	* in **WukongStandardLibrary.xml**: `SC_[ClassName]`
	* in **udpdevice**: `udpdevice_sc_[class_name].py`
	* initialization functions: `[ClassName]()`

#### 4. Scenario & Operation
* Simulate 5 trash cans running on SmartCan application
* **Scenario**: 2-3 types of trash

#### 5. Reference
* Wukong setup for Raspberry Pi: https://wukongsun.gitbooks.io/wukong-release-0-4/content/Ch3/Ch3_Boardsetup_for_Raspberry_Pi_Board.html
* GrovePi install: https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/
* VNC display through ethernet: https://diyhacking.com/connect-raspberry-pi-to-laptop-display/
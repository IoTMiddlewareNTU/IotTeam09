# WuKong IoT Final Project: SmartCans

* Raspberry Pi login: (username, password) = (pi, smartcan2016)
* Connect to network 'elisaroo'

#### Execution
* **On PC:**
    * Install gradle
        * ` $ sudo apt-get update `
        * ` $ sudo apt-get install gradle `
        * ` $ sudo apt-get install openjdk-7-jdk `
    * ` $ cd src/infuser `
    * ` $ gradle `
    * ` $ cd wukong/master `
    * ` $ python master_server.py `
* **On Pi:**
    * Change the update mirror site of Raspbian repository: ` $ sudo nano /etc/apt/sources.list `
    * Replace the link "http://mirrordirector.raspbian.org/raspbian" with the closest server from the official list. https://www.raspbian.org/RaspbianMirrors: ` $ deb http://mirrordirector.raspbian.org/raspbian jessie ... `
    * ` $ sudo apt-get update  `
    * ` $ sudo apt-get install python-twisted python-cjson python-gevent  `
    * ` $ sudo apt-get install sqlite3 python-netifaces `
    * Install grovepi lib:
        * ` $ sudo apt-get install python-smbus i2c-tools `
        * ` $ sudo raspi-config `
    * Install GrovePi environment
        * ` $ cd GrovePi/Script `
        * ` $ sudo chmod +x install.sh `
        * ` $ sudo ./install.sh `
    * ` $ cd wukong/gateway`
    * configure IP settings in `gtwconfig.py`
    * ` $ python start_gateway.py `

#### 1. Equipment
* LCD text display x5
* trash cans x2
* ultrasonic distance detector x2
* catflap x2 (DIY with PE boards)
* LED light bulb x5
* Raspberry pi x5

#### 2. WuClasses
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
5. SC_Height_Tracker (ultrasonic detector/ hard)
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

#### 3. Scenario & Operation
* Simulate 5 trash cans running on SmartCan application
* **Scenario**: 2-3 types of trash

* Reference
    * Wukong setup for Raspberry Pi: https://wukongsun.gitbooks.io/wukong-release-0-4/content/Ch3/Ch3_Boardsetup_for_Raspberry_Pi_Board.html
    * GrovePi install: https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/
    * VNC display through ethernet: https://diyhacking.com/connect-raspberry-pi-to-laptop-display/
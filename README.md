# WuKong IoT Final Project: SmartCans

* Raspberry Pi login: (username, password) = (pi, smartcan2016)
* Connect to network 'elisaroo'

#### Execution
* Install GrovePi environment
* ` $ cd GrovePi/Script `
* ` $ sudo chmod +x install.sh `
* ` $ sudo ./install.sh `
* ` $ cd src/infuser `
* ` $ gradle `
* ` $ cd wukong/master `
* ` $ python master_server.py `
* ` $ cd wukong/gateway`
* Configure IP settings in `gtwconfig.py`
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
    * GrovePi install: https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/
    * VNC display through ethernet: https://diyhacking.com/connect-raspberry-pi-to-laptop-display/
# WuKong IoT Final Project: SmartCans

#### 1. Equipment
* LCD text display * 5
* trash cans * 2
* ultrasonic distance detector * 2
* catflap * 2 (DIY with PE boards)
* LED light bulb * 5
* Raspberry pi * 5

#### 2. WuClasses
1. Assigner (master/ virtual)
    * keep track of all trash cans & garbage types
    * notify Alerter to change status
    * assets: is_full *(boolean)*, types *(short)*
2. Alerter (light actuator/ hard)
    * cleaning squad
    * assets: is_full *(boolean)*
3. Communicator (device/ virtual)
    * remember garbage type
    * control LCD displayer
    * communicate with assigner
    * assets: is_full *(boolean)*, type *(short)*
4. Displayer (LCD displayer/ hard)
    * display garbage type
    * assets: type *(short)*
5. CanLid
    * control lock according to *type* from Communicator
    * assets: open *(boolean)*
5. HeightTracker
    * track height inside trash can
    * assets: is_full *(boolean)*
* **Note 1**: type asset values and meanings
    * -1: trash can is unavailable
    * 0: general trash
    * 1: paper
    * 2: plastic
* **Note 2**: naming conventions
	* in **WukongStandardLibrary.xml**: `SC_[Class_Name]`
	* in **udpdevice**: `udpdevice_sc_[class_name].py`
	* initialization functions: `[Class_Name]()`

#### 3. Scenario & Operation
* Simulate 5 trash cans running on SmartCan application
* **Scenario**: 2-3 types of trash
 

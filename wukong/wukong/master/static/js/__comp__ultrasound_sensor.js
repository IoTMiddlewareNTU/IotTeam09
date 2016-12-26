function Ultrasound_Sensor()
{
  Block.prototype.init.call(this);
  this.type='Ultrasound_Sensor';
  
    
      
      
      
        var signal = this.addSignal( new Signal('current_value','short'));
          
      
    
  
    
      
        var action = this.addAction( new Action('refresh_rate','refresh_rate'));
          
            action.defaultValue = '100'
          
      
      
      
        var signal = this.addSignal( new Signal('refresh_rate','refresh_rate'));
          
            signal.defaultValue = '100'
          
      
    
  
}


Ultrasound_Sensor.prototype = new Block();
Ultrasound_Sensor.prototype.constructor = Ultrasound_Sensor;
Block.register('Ultrasound_Sensor', Ultrasound_Sensor);
function Temperature_Sensor()
{
  Block.prototype.init.call(this);
  this.type='Temperature_Sensor';
  
    
      
      
      
        var signal = this.addSignal( new Signal('current_value','short'));
          
      
    
  
    
      
        var action = this.addAction( new Action('refresh_rate','refresh_rate'));
          
            action.defaultValue = '100'
          
      
      
      
        var signal = this.addSignal( new Signal('refresh_rate','refresh_rate'));
          
            signal.defaultValue = '100'
          
      
    
  
}


Temperature_Sensor.prototype = new Block();
Temperature_Sensor.prototype.constructor = Temperature_Sensor;
Block.register('Temperature_Sensor', Temperature_Sensor);
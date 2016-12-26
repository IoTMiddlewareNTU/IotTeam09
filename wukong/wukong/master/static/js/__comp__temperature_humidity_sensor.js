function Temperature_Humidity_Sensor()
{
  Block.prototype.init.call(this);
  this.type='Temperature_Humidity_Sensor';
  
    
      
      
      
        var signal = this.addSignal( new Signal('current_value_temperature','short'));
          
      
    
  
    
      
      
      
        var signal = this.addSignal( new Signal('current_value_humidity','short'));
          
      
    
  
    
      
        var action = this.addAction( new Action('refresh_rate','refresh_rate'));
          
            action.defaultValue = '10'
          
      
      
      
        var signal = this.addSignal( new Signal('refresh_rate','refresh_rate'));
          
            signal.defaultValue = '10'
          
      
    
  
}


Temperature_Humidity_Sensor.prototype = new Block();
Temperature_Humidity_Sensor.prototype.constructor = Temperature_Humidity_Sensor;
Block.register('Temperature_Humidity_Sensor', Temperature_Humidity_Sensor);
function Light_Sensor()
{
  Block.prototype.init.call(this);
  this.type='Light_Sensor';
  
    
      
      
      
        var signal = this.addSignal( new Signal('current_value','short'));
          
      
    
  
    
      
        var action = this.addAction( new Action('refresh_rate','refresh_rate'));
          
            action.defaultValue = '1000'
          
      
      
      
        var signal = this.addSignal( new Signal('refresh_rate','refresh_rate'));
          
            signal.defaultValue = '1000'
          
      
    
  
}


Light_Sensor.prototype = new Block();
Light_Sensor.prototype.constructor = Light_Sensor;
Block.register('Light_Sensor', Light_Sensor);
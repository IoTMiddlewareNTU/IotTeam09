function PIR_Sensor()
{
  Block.prototype.init.call(this);
  this.type='PIR_Sensor';
  
    
      
      
      
        var signal = this.addSignal( new Signal('current_value','boolean'));
          
      
    
  
    
      
        var action = this.addAction( new Action('refresh_rate','refresh_rate'));
          
            action.defaultValue = '10'
          
      
      
      
        var signal = this.addSignal( new Signal('refresh_rate','refresh_rate'));
          
            signal.defaultValue = '10'
          
      
    
  
}


PIR_Sensor.prototype = new Block();
PIR_Sensor.prototype.constructor = PIR_Sensor;
Block.register('PIR_Sensor', PIR_Sensor);
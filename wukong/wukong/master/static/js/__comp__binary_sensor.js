function Binary_Sensor()
{
  Block.prototype.init.call(this);
  this.type='Binary_Sensor';
  
    
      
        var action = this.addAction( new Action('current_value','boolean'));
          
            action.defaultValue = 'false'
          
      
      
      
        var signal = this.addSignal( new Signal('current_value','boolean'));
          
            signal.defaultValue = 'false'
          
      
    
  
    
      
        var action = this.addAction( new Action('refresh_rate','refresh_rate'));
          
            action.defaultValue = '10'
          
      
      
      
        var signal = this.addSignal( new Signal('refresh_rate','refresh_rate'));
          
            signal.defaultValue = '10'
          
      
    
  
}


Binary_Sensor.prototype = new Block();
Binary_Sensor.prototype.constructor = Binary_Sensor;
Block.register('Binary_Sensor', Binary_Sensor);
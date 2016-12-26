function Binary_TestSensor()
{
  Block.prototype.init.call(this);
  this.type='Binary_TestSensor';
  
    
      
        var action = this.addAction( new Action('current_value','boolean'));
          
      
      
      
        var signal = this.addSignal( new Signal('current_value','boolean'));
          
      
    
  
    
      
        var action = this.addAction( new Action('refresh_rate','refresh_rate'));
          
            action.defaultValue = '10'
          
      
      
      
        var signal = this.addSignal( new Signal('refresh_rate','refresh_rate'));
          
            signal.defaultValue = '10'
          
      
    
  
}


Binary_TestSensor.prototype = new Block();
Binary_TestSensor.prototype.constructor = Binary_TestSensor;
Block.register('Binary_TestSensor', Binary_TestSensor);
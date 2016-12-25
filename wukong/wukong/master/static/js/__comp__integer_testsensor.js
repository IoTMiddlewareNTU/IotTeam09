function Integer_TestSensor()
{
  Block.prototype.init.call(this);
  this.type='Integer_TestSensor';
  
    
      
        var action = this.addAction( new Action('current_value','short'));
          
      
      
      
        var signal = this.addSignal( new Signal('current_value','short'));
          
      
    
  
    
      
        var action = this.addAction( new Action('refresh_rate','refresh_rate'));
          
            action.defaultValue = '10'
          
      
      
      
        var signal = this.addSignal( new Signal('refresh_rate','refresh_rate'));
          
            signal.defaultValue = '10'
          
      
    
  
}


Integer_TestSensor.prototype = new Block();
Integer_TestSensor.prototype.constructor = Integer_TestSensor;
Block.register('Integer_TestSensor', Integer_TestSensor);
function Touch_Sensor()
{
  Block.prototype.init.call(this);
  this.type='Touch_Sensor';
  
    
      
        var action = this.addAction( new Action('current_value','boolean'));
          
            action.defaultValue = 'false'
          
      
      
      
        var signal = this.addSignal( new Signal('current_value','boolean'));
          
            signal.defaultValue = 'false'
          
      
    
  
    
      
        var action = this.addAction( new Action('refresh_rate','refresh_rate'));
          
            action.defaultValue = '100'
          
      
      
      
        var signal = this.addSignal( new Signal('refresh_rate','refresh_rate'));
          
            signal.defaultValue = '100'
          
      
    
  
}


Touch_Sensor.prototype = new Block();
Touch_Sensor.prototype.constructor = Touch_Sensor;
Block.register('Touch_Sensor', Touch_Sensor);
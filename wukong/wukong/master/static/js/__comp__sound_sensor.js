function Sound_Sensor()
{
  Block.prototype.init.call(this);
  this.type='Sound_Sensor';
  
    
      
      
      
        var signal = this.addSignal( new Signal('current_value','short'));
          
      
    
  
    
      
        var action = this.addAction( new Action('refresh_rate','refresh_rate'));
          
            action.defaultValue = '1000'
          
      
      
      
        var signal = this.addSignal( new Signal('refresh_rate','refresh_rate'));
          
            signal.defaultValue = '1000'
          
      
    
  
}


Sound_Sensor.prototype = new Block();
Sound_Sensor.prototype.constructor = Sound_Sensor;
Block.register('Sound_Sensor', Sound_Sensor);
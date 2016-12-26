function Pressure_Sensor_0()
{
  Block.prototype.init.call(this);
  this.type='Pressure_Sensor_0';
  
    
      
        var action = this.addAction( new Action('refresh_rate','refresh_rate'));
          
            action.defaultValue = '100'
          
      
      
      
        var signal = this.addSignal( new Signal('refresh_rate','refresh_rate'));
          
            signal.defaultValue = '100'
          
      
    
  
    
      
        var action = this.addAction( new Action('output','short'));
          
            action.defaultValue = '100'
          
      
      
      
        var signal = this.addSignal( new Signal('output','short'));
          
            signal.defaultValue = '100'
          
      
    
  
    
      
        var action = this.addAction( new Action('high','short'));
          
            action.defaultValue = '0'
          
      
      
      
        var signal = this.addSignal( new Signal('high','short'));
          
            signal.defaultValue = '0'
          
      
    
  
    
      
        var action = this.addAction( new Action('low','short'));
          
            action.defaultValue = '1000'
          
      
      
      
        var signal = this.addSignal( new Signal('low','short'));
          
            signal.defaultValue = '1000'
          
      
    
  
}


Pressure_Sensor_0.prototype = new Block();
Pressure_Sensor_0.prototype.constructor = Pressure_Sensor_0;
Block.register('Pressure_Sensor_0', Pressure_Sensor_0);
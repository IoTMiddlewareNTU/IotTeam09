function Magnetic_Sensor()
{
  Block.prototype.init.call(this);
  this.type='Magnetic_Sensor';
  
    
      
      
      
        var signal = this.addSignal( new Signal('output','boolean'));
          
            signal.defaultValue = 'false'
          
      
    
  
    
      
        var action = this.addAction( new Action('refresh_rate','refresh_rate'));
          
            action.defaultValue = '100'
          
      
      
      
        var signal = this.addSignal( new Signal('refresh_rate','refresh_rate'));
          
            signal.defaultValue = '100'
          
      
    
  
    
      
      
      
        var signal = this.addSignal( new Signal('__pin','Pin'));
          
      
    
  
}


Magnetic_Sensor.prototype = new Block();
Magnetic_Sensor.prototype.constructor = Magnetic_Sensor;
Block.register('Magnetic_Sensor', Magnetic_Sensor);
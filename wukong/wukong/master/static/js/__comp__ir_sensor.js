function Ir_Sensor()
{
  Block.prototype.init.call(this);
  this.type='Ir_Sensor';
  
    
      
      
      
        var signal = this.addSignal( new Signal('current_value','short'));
          
      
    
  
    
      
        var action = this.addAction( new Action('refresh_rate','refresh_rate'));
          
            action.defaultValue = '100'
          
      
      
      
        var signal = this.addSignal( new Signal('refresh_rate','refresh_rate'));
          
            signal.defaultValue = '100'
          
      
    
  
}


Ir_Sensor.prototype = new Block();
Ir_Sensor.prototype.constructor = Ir_Sensor;
Block.register('Ir_Sensor', Ir_Sensor);
function Light_Actuator()
{
  Block.prototype.init.call(this);
  this.type='Light_Actuator';
  
    
      
        var action = this.addAction( new Action('on_off','boolean'));
          
            action.defaultValue = 'false'
          
      
      
      
        var signal = this.addSignal( new Signal('on_off','boolean'));
          
            signal.defaultValue = 'false'
          
      
    
  
}


Light_Actuator.prototype = new Block();
Light_Actuator.prototype.constructor = Light_Actuator;
Block.register('Light_Actuator', Light_Actuator);
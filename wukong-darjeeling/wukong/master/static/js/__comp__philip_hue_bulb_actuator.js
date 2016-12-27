function Philip_Hue_Bulb_Actuator()
{
  Block.prototype.init.call(this);
  this.type='Philip_Hue_Bulb_Actuator';
  
    
      
        var action = this.addAction( new Action('ip_high','short'));
          
            action.defaultValue = '0'
          
      
      
      
    
  
    
      
        var action = this.addAction( new Action('ip_low','short'));
          
            action.defaultValue = '0'
          
      
      
      
    
  
    
      
        var action = this.addAction( new Action('index','short'));
          
            action.defaultValue = '1'
          
      
      
      
    
  
    
      
        var action = this.addAction( new Action('on','boolean'));
          
            action.defaultValue = 'false'
          
      
      
      
    
  
    
      
        var action = this.addAction( new Action('red','short'));
          
            action.defaultValue = '0'
          
      
      
      
    
  
    
      
        var action = this.addAction( new Action('green','short'));
          
            action.defaultValue = '0'
          
      
      
      
    
  
    
      
        var action = this.addAction( new Action('blue','short'));
          
            action.defaultValue = '0'
          
      
      
      
    
  
}


Philip_Hue_Bulb_Actuator.prototype = new Block();
Philip_Hue_Bulb_Actuator.prototype.constructor = Philip_Hue_Bulb_Actuator;
Block.register('Philip_Hue_Bulb_Actuator', Philip_Hue_Bulb_Actuator);
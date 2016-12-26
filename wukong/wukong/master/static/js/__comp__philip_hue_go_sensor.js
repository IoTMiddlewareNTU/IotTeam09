function Philip_Hue_Go_Sensor()
{
  Block.prototype.init.call(this);
  this.type='Philip_Hue_Go_Sensor';
  
    
      
        var action = this.addAction( new Action('ip_high','short'));
          
            action.defaultValue = '0'
          
      
      
      
    
  
    
      
        var action = this.addAction( new Action('ip_low','short'));
          
            action.defaultValue = '0'
          
      
      
      
    
  
    
      
        var action = this.addAction( new Action('index','short'));
          
            action.defaultValue = '0'
          
      
      
      
    
  
    
      
      
      
        var signal = this.addSignal( new Signal('bri','short'));
          
            signal.defaultValue = '0'
          
      
    
  
    
      
      
      
        var signal = this.addSignal( new Signal('red_green','short'));
          
            signal.defaultValue = '0'
          
      
    
  
    
      
      
      
        var signal = this.addSignal( new Signal('blue','short'));
          
            signal.defaultValue = '0'
          
      
    
  
    
      
        var action = this.addAction( new Action('refresh_rate','refresh_rate'));
          
            action.defaultValue = '300'
          
      
      
      
        var signal = this.addSignal( new Signal('refresh_rate','refresh_rate'));
          
            signal.defaultValue = '300'
          
      
    
  
}


Philip_Hue_Go_Sensor.prototype = new Block();
Philip_Hue_Go_Sensor.prototype.constructor = Philip_Hue_Go_Sensor;
Block.register('Philip_Hue_Go_Sensor', Philip_Hue_Go_Sensor);
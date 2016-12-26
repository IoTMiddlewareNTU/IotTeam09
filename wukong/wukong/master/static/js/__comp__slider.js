function Slider()
{
  Block.prototype.init.call(this);
  this.type='Slider';
  
    
      
        var action = this.addAction( new Action('low_value','short'));
          
            action.defaultValue = '0'
          
      
      
      
        var signal = this.addSignal( new Signal('low_value','short'));
          
            signal.defaultValue = '0'
          
      
    
  
    
      
        var action = this.addAction( new Action('high_value','short'));
          
            action.defaultValue = '255'
          
      
      
      
        var signal = this.addSignal( new Signal('high_value','short'));
          
            signal.defaultValue = '255'
          
      
    
  
    
      
        var action = this.addAction( new Action('output','short'));
          
            action.defaultValue = '0'
          
      
      
      
        var signal = this.addSignal( new Signal('output','short'));
          
            signal.defaultValue = '0'
          
      
    
  
    
      
        var action = this.addAction( new Action('refresh_rate','refresh_rate'));
          
            action.defaultValue = '100'
          
      
      
      
        var signal = this.addSignal( new Signal('refresh_rate','refresh_rate'));
          
            signal.defaultValue = '100'
          
      
    
  
}


Slider.prototype = new Block();
Slider.prototype.constructor = Slider;
Block.register('Slider', Slider);
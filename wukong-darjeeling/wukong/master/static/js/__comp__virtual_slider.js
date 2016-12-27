function Virtual_Slider()
{
  Block.prototype.init.call(this);
  this.type='Virtual_Slider';
  
    
      
        var action = this.addAction( new Action('low_value','short'));
          
            action.defaultValue = '0'
          
      
      
      
        var signal = this.addSignal( new Signal('low_value','short'));
          
            signal.defaultValue = '0'
          
      
    
  
    
      
        var action = this.addAction( new Action('high_value','short'));
          
            action.defaultValue = '255'
          
      
      
      
        var signal = this.addSignal( new Signal('high_value','short'));
          
            signal.defaultValue = '255'
          
      
    
  
    
      
        var action = this.addAction( new Action('output','short'));
          
            action.defaultValue = '20'
          
      
      
      
        var signal = this.addSignal( new Signal('output','short'));
          
            signal.defaultValue = '20'
          
      
    
  
}


Virtual_Slider.prototype = new Block();
Virtual_Slider.prototype.constructor = Virtual_Slider;
Block.register('Virtual_Slider', Virtual_Slider);
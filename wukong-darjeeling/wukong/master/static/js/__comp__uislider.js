function UISlider()
{
  Block.prototype.init.call(this);
  this.type='UISlider';
  
    
      
        var action = this.addAction( new Action('number','short'));
          
            action.defaultValue = '0'
          
      
      
      
        var signal = this.addSignal( new Signal('number','short'));
          
            signal.defaultValue = '0'
          
      
    
  
    
      
        var action = this.addAction( new Action('device','short'));
          
            action.defaultValue = '0'
          
      
      
      
        var signal = this.addSignal( new Signal('device','short'));
          
            signal.defaultValue = '0'
          
      
    
  
    
      
        var action = this.addAction( new Action('port','short'));
          
            action.defaultValue = '0'
          
      
      
      
        var signal = this.addSignal( new Signal('port','short'));
          
            signal.defaultValue = '0'
          
      
    
  
    
      
        var action = this.addAction( new Action('mode','boolean'));
          
            action.defaultValue = '0'
          
      
      
      
        var signal = this.addSignal( new Signal('mode','boolean'));
          
            signal.defaultValue = '0'
          
      
    
  
}


UISlider.prototype = new Block();
UISlider.prototype.constructor = UISlider;
Block.register('UISlider', UISlider);
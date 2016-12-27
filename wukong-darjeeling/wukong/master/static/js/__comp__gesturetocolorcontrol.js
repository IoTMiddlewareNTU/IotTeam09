function GestureToColorControl()
{
  Block.prototype.init.call(this);
  this.type='GestureToColorControl';
  
    
      
        var action = this.addAction( new Action('gesture','short'));
          
            action.defaultValue = '0'
          
      
      
      
    
  
    
      
        var action = this.addAction( new Action('red','short'));
          
            action.defaultValue = '0'
          
      
      
      
        var signal = this.addSignal( new Signal('red','short'));
          
            signal.defaultValue = '0'
          
      
    
  
    
      
        var action = this.addAction( new Action('green','short'));
          
            action.defaultValue = '0'
          
      
      
      
        var signal = this.addSignal( new Signal('green','short'));
          
            signal.defaultValue = '0'
          
      
    
  
    
      
        var action = this.addAction( new Action('blue','short'));
          
            action.defaultValue = '0'
          
      
      
      
        var signal = this.addSignal( new Signal('blue','short'));
          
            signal.defaultValue = '0'
          
      
    
  
}


GestureToColorControl.prototype = new Block();
GestureToColorControl.prototype.constructor = GestureToColorControl;
Block.register('GestureToColorControl', GestureToColorControl);
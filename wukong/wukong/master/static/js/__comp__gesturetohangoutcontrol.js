function GestureToHangoutControl()
{
  Block.prototype.init.call(this);
  this.type='GestureToHangoutControl';
  
    
      
        var action = this.addAction( new Action('gesture','short'));
          
            action.defaultValue = '0'
          
      
      
      
    
  
    
      
        var action = this.addAction( new Action('answer','boolean'));
          
            action.defaultValue = 'false'
          
      
      
      
        var signal = this.addSignal( new Signal('answer','boolean'));
          
            signal.defaultValue = 'false'
          
      
    
  
    
      
        var action = this.addAction( new Action('decline','boolean'));
          
            action.defaultValue = 'false'
          
      
      
      
        var signal = this.addSignal( new Signal('decline','boolean'));
          
            signal.defaultValue = 'false'
          
      
    
  
}


GestureToHangoutControl.prototype = new Block();
GestureToHangoutControl.prototype.constructor = GestureToHangoutControl;
Block.register('GestureToHangoutControl', GestureToHangoutControl);
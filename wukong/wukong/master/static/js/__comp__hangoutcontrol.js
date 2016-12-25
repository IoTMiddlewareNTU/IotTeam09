function HangoutControl()
{
  Block.prototype.init.call(this);
  this.type='HangoutControl';
  
    
      
        var action = this.addAction( new Action('answer','boolean'));
          
            action.defaultValue = 'false'
          
      
      
      
        var signal = this.addSignal( new Signal('answer','boolean'));
          
            signal.defaultValue = 'false'
          
      
    
  
    
      
        var action = this.addAction( new Action('decline','boolean'));
          
            action.defaultValue = 'false'
          
      
      
      
        var signal = this.addSignal( new Signal('decline','boolean'));
          
            signal.defaultValue = 'false'
          
      
    
  
}


HangoutControl.prototype = new Block();
HangoutControl.prototype.constructor = HangoutControl;
Block.register('HangoutControl', HangoutControl);
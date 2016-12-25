function UIButton()
{
  Block.prototype.init.call(this);
  this.type='UIButton';
  
    
      
        var action = this.addAction( new Action('click','short'));
          
            action.defaultValue = '0'
          
      
      
      
        var signal = this.addSignal( new Signal('click','short'));
          
            signal.defaultValue = '0'
          
      
    
  
    
      
        var action = this.addAction( new Action('device','short'));
          
            action.defaultValue = '0'
          
      
      
      
        var signal = this.addSignal( new Signal('device','short'));
          
            signal.defaultValue = '0'
          
      
    
  
    
      
        var action = this.addAction( new Action('port','short'));
          
            action.defaultValue = '0'
          
      
      
      
        var signal = this.addSignal( new Signal('port','short'));
          
            signal.defaultValue = '0'
          
      
    
  
}


UIButton.prototype = new Block();
UIButton.prototype.constructor = UIButton;
Block.register('UIButton', UIButton);
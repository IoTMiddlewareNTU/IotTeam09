function Button()
{
  Block.prototype.init.call(this);
  this.type='Button';
  
    
      
        var action = this.addAction( new Action('current_value','boolean'));
          
            action.defaultValue = 'false'
          
      
      
      
        var signal = this.addSignal( new Signal('current_value','boolean'));
          
            signal.defaultValue = 'false'
          
      
    
  
    
      
        var action = this.addAction( new Action('refresh_rate','refresh_rate'));
          
            action.defaultValue = '100'
          
      
      
      
        var signal = this.addSignal( new Signal('refresh_rate','refresh_rate'));
          
            signal.defaultValue = '100'
          
      
    
  
}


Button.prototype = new Block();
Button.prototype.constructor = Button;
Block.register('Button', Button);
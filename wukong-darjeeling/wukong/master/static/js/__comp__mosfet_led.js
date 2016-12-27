function MOSFET_LED()
{
  Block.prototype.init.call(this);
  this.type='MOSFET_LED';
  
    
      
        var action = this.addAction( new Action('brightness','short'));
          
            action.defaultValue = '1'
          
      
      
      
        var signal = this.addSignal( new Signal('brightness','short'));
          
            signal.defaultValue = '1'
          
      
    
  
    
      
        var action = this.addAction( new Action('refresh_rate','refresh_rate'));
          
            action.defaultValue = '50'
          
      
      
      
        var signal = this.addSignal( new Signal('refresh_rate','refresh_rate'));
          
            signal.defaultValue = '50'
          
      
    
  
}


MOSFET_LED.prototype = new Block();
MOSFET_LED.prototype.constructor = MOSFET_LED;
Block.register('MOSFET_LED', MOSFET_LED);
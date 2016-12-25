function MOSFET_Fan()
{
  Block.prototype.init.call(this);
  this.type='MOSFET_Fan';
  
    
      
        var action = this.addAction( new Action('speed','short'));
          
            action.defaultValue = '1'
          
      
      
      
        var signal = this.addSignal( new Signal('speed','short'));
          
            signal.defaultValue = '1'
          
      
    
  
    
      
        var action = this.addAction( new Action('refresh_rate','refresh_rate'));
          
            action.defaultValue = '50'
          
      
      
      
        var signal = this.addSignal( new Signal('refresh_rate','refresh_rate'));
          
            signal.defaultValue = '50'
          
      
    
  
}


MOSFET_Fan.prototype = new Block();
MOSFET_Fan.prototype.constructor = MOSFET_Fan;
Block.register('MOSFET_Fan', MOSFET_Fan);
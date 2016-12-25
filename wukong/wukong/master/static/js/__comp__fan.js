function Fan()
{
  Block.prototype.init.call(this);
  this.type='Fan';
  
    
      
        var action = this.addAction( new Action('on_off','boolean'));
          
            action.defaultValue = 'false'
          
      
      
      
        var signal = this.addSignal( new Signal('on_off','boolean'));
          
            signal.defaultValue = 'false'
          
      
    
  
}


Fan.prototype = new Block();
Fan.prototype.constructor = Fan;
Block.register('Fan', Fan);
function Dimmer()
{
  Block.prototype.init.call(this);
  this.type='Dimmer';
  
    
      
        var action = this.addAction( new Action('level','short'));
          
            action.defaultValue = '0'
          
      
      
      
        var signal = this.addSignal( new Signal('level','short'));
          
            signal.defaultValue = '0'
          
      
    
  
}


Dimmer.prototype = new Block();
Dimmer.prototype.constructor = Dimmer;
Block.register('Dimmer', Dimmer);
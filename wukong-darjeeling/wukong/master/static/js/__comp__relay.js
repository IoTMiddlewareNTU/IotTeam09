function Relay()
{
  Block.prototype.init.call(this);
  this.type='Relay';
  
    
      
        var action = this.addAction( new Action('on_off','boolean'));
          
            action.defaultValue = 'false'
          
      
      
      
        var signal = this.addSignal( new Signal('on_off','boolean'));
          
            signal.defaultValue = 'false'
          
      
    
  
}


Relay.prototype = new Block();
Relay.prototype.constructor = Relay;
Block.register('Relay', Relay);
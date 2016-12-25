function SC_Lock()
{
  Block.prototype.init.call(this);
  this.type='SC_Lock';
  
    
      
        var action = this.addAction( new Action('lock','boolean'));
          
            action.defaultValue = 'true'
          
      
      
      
        var signal = this.addSignal( new Signal('lock','boolean'));
          
            signal.defaultValue = 'true'
          
      
    
  
}


SC_Lock.prototype = new Block();
SC_Lock.prototype.constructor = SC_Lock;
Block.register('SC_Lock', SC_Lock);
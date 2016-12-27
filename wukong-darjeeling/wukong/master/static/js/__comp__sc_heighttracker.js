function SC_HeightTracker()
{
  Block.prototype.init.call(this);
  this.type='SC_HeightTracker';
  
    
      
        var action = this.addAction( new Action('is_full','boolean'));
          
            action.defaultValue = 'false'
          
      
      
      
        var signal = this.addSignal( new Signal('is_full','boolean'));
          
            signal.defaultValue = 'false'
          
      
    
  
}


SC_HeightTracker.prototype = new Block();
SC_HeightTracker.prototype.constructor = SC_HeightTracker;
Block.register('SC_HeightTracker', SC_HeightTracker);
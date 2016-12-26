function SC_Alerter()
{
  Block.prototype.init.call(this);
  this.type='SC_Alerter';
  
    
      
        var action = this.addAction( new Action('clean','boolean'));
          
            action.defaultValue = 'false'
          
      
      
      
        var signal = this.addSignal( new Signal('clean','boolean'));
          
            signal.defaultValue = 'false'
          
      
    
  
}


SC_Alerter.prototype = new Block();
SC_Alerter.prototype.constructor = SC_Alerter;
Block.register('SC_Alerter', SC_Alerter);
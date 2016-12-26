function SC_Displayer()
{
  Block.prototype.init.call(this);
  this.type='SC_Displayer';
  
    
      
        var action = this.addAction( new Action('type','short'));
          
            action.defaultValue = '0'
          
      
      
      
        var signal = this.addSignal( new Signal('type','short'));
          
            signal.defaultValue = '0'
          
      
    
  
}


SC_Displayer.prototype = new Block();
SC_Displayer.prototype.constructor = SC_Displayer;
Block.register('SC_Displayer', SC_Displayer);
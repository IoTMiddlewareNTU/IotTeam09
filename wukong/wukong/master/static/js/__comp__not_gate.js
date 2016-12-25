function Not_Gate()
{
  Block.prototype.init.call(this);
  this.type='Not_Gate';
  
    
      
        var action = this.addAction( new Action('input','boolean'));
          
      
      
      
    
  
    
      
      
      
        var signal = this.addSignal( new Signal('output','boolean'));
          
      
    
  
}


Not_Gate.prototype = new Block();
Not_Gate.prototype.constructor = Not_Gate;
Block.register('Not_Gate', Not_Gate);
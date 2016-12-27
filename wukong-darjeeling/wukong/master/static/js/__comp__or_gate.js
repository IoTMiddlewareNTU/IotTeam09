function Or_Gate()
{
  Block.prototype.init.call(this);
  this.type='Or_Gate';
  
    
      
        var action = this.addAction( new Action('input1','boolean'));
          
      
      
      
    
  
    
      
        var action = this.addAction( new Action('input2','boolean'));
          
      
      
      
    
  
    
      
      
      
        var signal = this.addSignal( new Signal('output','boolean'));
          
      
    
  
}


Or_Gate.prototype = new Block();
Or_Gate.prototype.constructor = Or_Gate;
Block.register('Or_Gate', Or_Gate);
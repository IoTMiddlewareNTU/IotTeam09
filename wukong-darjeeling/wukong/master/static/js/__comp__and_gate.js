function And_Gate()
{
  Block.prototype.init.call(this);
  this.type='And_Gate';
  
    
      
        var action = this.addAction( new Action('input1','boolean'));
          
      
      
      
    
  
    
      
        var action = this.addAction( new Action('input2','boolean'));
          
      
      
      
    
  
    
      
      
      
        var signal = this.addSignal( new Signal('output','boolean'));
          
      
    
  
}


And_Gate.prototype = new Block();
And_Gate.prototype.constructor = And_Gate;
Block.register('And_Gate', And_Gate);
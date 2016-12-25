function Xor_Gate()
{
  Block.prototype.init.call(this);
  this.type='Xor_Gate';
  
    
      
        var action = this.addAction( new Action('input1','boolean'));
          
      
      
      
    
  
    
      
        var action = this.addAction( new Action('input2','boolean'));
          
      
      
      
    
  
    
      
      
      
        var signal = this.addSignal( new Signal('output','boolean'));
          
      
    
  
}


Xor_Gate.prototype = new Block();
Xor_Gate.prototype.constructor = Xor_Gate;
Block.register('Xor_Gate', Xor_Gate);
function Condition_Selector_Short()
{
  Block.prototype.init.call(this);
  this.type='Condition_Selector_Short';
  
    
      
        var action = this.addAction( new Action('input','short'));
          
      
      
      
    
  
    
      
        var action = this.addAction( new Action('control','boolean'));
          
      
      
      
        var signal = this.addSignal( new Signal('control','boolean'));
          
      
    
  
    
      
      
      
        var signal = this.addSignal( new Signal('output1','short'));
          
      
    
  
    
      
      
      
        var signal = this.addSignal( new Signal('output2','short'));
          
      
    
  
}


Condition_Selector_Short.prototype = new Block();
Condition_Selector_Short.prototype.constructor = Condition_Selector_Short;
Block.register('Condition_Selector_Short', Condition_Selector_Short);
function Condition_Selector_Boolean()
{
  Block.prototype.init.call(this);
  this.type='Condition_Selector_Boolean';
  
    
      
        var action = this.addAction( new Action('input','boolean'));
          
      
      
      
    
  
    
      
        var action = this.addAction( new Action('control','boolean'));
          
      
      
      
        var signal = this.addSignal( new Signal('control','boolean'));
          
      
    
  
    
      
      
      
        var signal = this.addSignal( new Signal('output1','boolean'));
          
      
    
  
    
      
      
      
        var signal = this.addSignal( new Signal('output2','boolean'));
          
      
    
  
}


Condition_Selector_Boolean.prototype = new Block();
Condition_Selector_Boolean.prototype.constructor = Condition_Selector_Boolean;
Block.register('Condition_Selector_Boolean', Condition_Selector_Boolean);
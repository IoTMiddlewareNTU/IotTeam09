function If_Boolean()
{
  Block.prototype.init.call(this);
  this.type='If_Boolean';
  
    
      
        var action = this.addAction( new Action('condition','boolean'));
          
      
      
      
    
  
    
      
        var action = this.addAction( new Action('if_true','boolean'));
          
      
      
      
    
  
    
      
        var action = this.addAction( new Action('if_false','boolean'));
          
      
      
      
    
  
    
      
      
      
        var signal = this.addSignal( new Signal('output','boolean'));
          
      
    
  
}


If_Boolean.prototype = new Block();
If_Boolean.prototype.constructor = If_Boolean;
Block.register('If_Boolean', If_Boolean);
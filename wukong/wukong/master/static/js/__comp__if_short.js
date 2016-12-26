function If_Short()
{
  Block.prototype.init.call(this);
  this.type='If_Short';
  
    
      
        var action = this.addAction( new Action('condition','boolean'));
          
      
      
      
    
  
    
      
        var action = this.addAction( new Action('if_true','short'));
          
      
      
      
    
  
    
      
        var action = this.addAction( new Action('if_false','short'));
          
      
      
      
    
  
    
      
      
      
        var signal = this.addSignal( new Signal('output','short'));
          
      
    
  
}


If_Short.prototype = new Block();
If_Short.prototype.constructor = If_Short;
Block.register('If_Short', If_Short);
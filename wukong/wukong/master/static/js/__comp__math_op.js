function Math_Op()
{
  Block.prototype.init.call(this);
  this.type='Math_Op';
  
    
      
        var action = this.addAction( new Action('input1','short'));
          
      
      
      
    
  
    
      
        var action = this.addAction( new Action('input2','short'));
          
      
      
      
    
  
    
      
        var action = this.addAction( new Action('operator','MathOperator'));
          
            action.defaultValue = 'max'
          
      
      
      
        var signal = this.addSignal( new Signal('operator','MathOperator'));
          
            signal.defaultValue = 'max'
          
      
    
  
    
      
      
      
        var signal = this.addSignal( new Signal('output','short'));
          
      
    
  
    
      
      
      
        var signal = this.addSignal( new Signal('remainder','short'));
          
      
    
  
}


Math_Op.prototype = new Block();
Math_Op.prototype.constructor = Math_Op;
Block.register('Math_Op', Math_Op);
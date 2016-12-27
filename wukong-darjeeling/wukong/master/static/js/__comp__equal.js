function Equal()
{
  Block.prototype.init.call(this);
  this.type='Equal';
  
    
      
        var action = this.addAction( new Action('input1','short'));
          
            action.defaultValue = '0'
          
      
      
      
        var signal = this.addSignal( new Signal('input1','short'));
          
            signal.defaultValue = '0'
          
      
    
  
    
      
        var action = this.addAction( new Action('input2','short'));
          
            action.defaultValue = '1'
          
      
      
      
        var signal = this.addSignal( new Signal('input2','short'));
          
            signal.defaultValue = '1'
          
      
    
  
    
      
      
      
        var signal = this.addSignal( new Signal('output','boolean'));
          
            signal.defaultValue = 'false'
          
      
    
  
}


Equal.prototype = new Block();
Equal.prototype.constructor = Equal;
Block.register('Equal', Equal);
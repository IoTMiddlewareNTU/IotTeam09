function BufferEnabledPrClass()
{
  Block.prototype.init.call(this);
  this.type='BufferEnabledPrClass';
  
    
      
        var action = this.addAction( new Action('sinput','short'));
          
            action.defaultValue = '0'
          
      
      
      
        var signal = this.addSignal( new Signal('sinput','short'));
          
            signal.defaultValue = '0'
          
      
    
  
    
      
        var action = this.addAction( new Action('binput','boolean'));
          
            action.defaultValue = '0'
          
      
      
      
        var signal = this.addSignal( new Signal('binput','boolean'));
          
            signal.defaultValue = '0'
          
      
    
  
    
      
        var action = this.addAction( new Action('output','short'));
          
            action.defaultValue = '0'
          
      
      
      
        var signal = this.addSignal( new Signal('output','short'));
          
            signal.defaultValue = '0'
          
      
    
  
}


BufferEnabledPrClass.prototype = new Block();
BufferEnabledPrClass.prototype.constructor = BufferEnabledPrClass;
Block.register('BufferEnabledPrClass', BufferEnabledPrClass);
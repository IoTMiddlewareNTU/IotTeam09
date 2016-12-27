function ICSDemoBloomPrClass()
{
  Block.prototype.init.call(this);
  this.type='ICSDemoBloomPrClass';
  
    
      
      
      
        var signal = this.addSignal( new Signal('on_off','boolean'));
          
            signal.defaultValue = '0'
          
      
    
  
    
      
      
      
        var signal = this.addSignal( new Signal('red','short'));
          
            signal.defaultValue = '0'
          
      
    
  
    
      
      
      
        var signal = this.addSignal( new Signal('green','short'));
          
            signal.defaultValue = '0'
          
      
    
  
    
      
      
      
        var signal = this.addSignal( new Signal('blue','short'));
          
            signal.defaultValue = '0'
          
      
    
  
}


ICSDemoBloomPrClass.prototype = new Block();
ICSDemoBloomPrClass.prototype.constructor = ICSDemoBloomPrClass;
Block.register('ICSDemoBloomPrClass', ICSDemoBloomPrClass);
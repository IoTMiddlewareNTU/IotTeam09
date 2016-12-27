function ICSDemoFloorlampPrClass()
{
  Block.prototype.init.call(this);
  this.type='ICSDemoFloorlampPrClass';
  
    
      
      
      
        var signal = this.addSignal( new Signal('on_off','boolean'));
          
            signal.defaultValue = '0'
          
      
    
  
    
      
      
      
        var signal = this.addSignal( new Signal('red','short'));
          
            signal.defaultValue = '0'
          
      
    
  
    
      
      
      
        var signal = this.addSignal( new Signal('green','short'));
          
            signal.defaultValue = '0'
          
      
    
  
    
      
      
      
        var signal = this.addSignal( new Signal('blue','short'));
          
            signal.defaultValue = '0'
          
      
    
  
}


ICSDemoFloorlampPrClass.prototype = new Block();
ICSDemoFloorlampPrClass.prototype.constructor = ICSDemoFloorlampPrClass;
Block.register('ICSDemoFloorlampPrClass', ICSDemoFloorlampPrClass);
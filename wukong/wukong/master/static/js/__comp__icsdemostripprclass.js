function ICSDemoStripPrClass()
{
  Block.prototype.init.call(this);
  this.type='ICSDemoStripPrClass';
  
    
      
      
      
        var signal = this.addSignal( new Signal('on_off','boolean'));
          
            signal.defaultValue = '0'
          
      
    
  
    
      
      
      
        var signal = this.addSignal( new Signal('red','short'));
          
            signal.defaultValue = '0'
          
      
    
  
    
      
      
      
        var signal = this.addSignal( new Signal('green','short'));
          
            signal.defaultValue = '0'
          
      
    
  
    
      
      
      
        var signal = this.addSignal( new Signal('blue','short'));
          
            signal.defaultValue = '0'
          
      
    
  
}


ICSDemoStripPrClass.prototype = new Block();
ICSDemoStripPrClass.prototype.constructor = ICSDemoStripPrClass;
Block.register('ICSDemoStripPrClass', ICSDemoStripPrClass);
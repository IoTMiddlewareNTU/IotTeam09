function ICSDemoGoPrClass()
{
  Block.prototype.init.call(this);
  this.type='ICSDemoGoPrClass';
  
    
      
      
      
        var signal = this.addSignal( new Signal('on_off','boolean'));
          
            signal.defaultValue = '0'
          
      
    
  
    
      
      
      
        var signal = this.addSignal( new Signal('red','short'));
          
            signal.defaultValue = '0'
          
      
    
  
    
      
      
      
        var signal = this.addSignal( new Signal('green','short'));
          
            signal.defaultValue = '0'
          
      
    
  
    
      
      
      
        var signal = this.addSignal( new Signal('blue','short'));
          
            signal.defaultValue = '0'
          
      
    
  
}


ICSDemoGoPrClass.prototype = new Block();
ICSDemoGoPrClass.prototype.constructor = ICSDemoGoPrClass;
Block.register('ICSDemoGoPrClass', ICSDemoGoPrClass);
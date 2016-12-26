function ICSDemoAromaPrClass()
{
  Block.prototype.init.call(this);
  this.type='ICSDemoAromaPrClass';
  
    
      
      
      
        var signal = this.addSignal( new Signal('aroma_onoff','boolean'));
          
            signal.defaultValue = '0'
          
      
    
  
}


ICSDemoAromaPrClass.prototype = new Block();
ICSDemoAromaPrClass.prototype.constructor = ICSDemoAromaPrClass;
Block.register('ICSDemoAromaPrClass', ICSDemoAromaPrClass);
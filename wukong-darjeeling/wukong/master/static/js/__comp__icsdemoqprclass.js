function ICSDemoQPrClass()
{
  Block.prototype.init.call(this);
  this.type='ICSDemoQPrClass';
  
    
      
      
      
        var signal = this.addSignal( new Signal('question','boolean'));
          
            signal.defaultValue = '0'
          
      
    
  
}


ICSDemoQPrClass.prototype = new Block();
ICSDemoQPrClass.prototype.constructor = ICSDemoQPrClass;
Block.register('ICSDemoQPrClass', ICSDemoQPrClass);
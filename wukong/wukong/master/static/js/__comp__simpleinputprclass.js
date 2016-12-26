function SimpleInputPrClass()
{
  Block.prototype.init.call(this);
  this.type='SimpleInputPrClass';
  
    
      
        var action = this.addAction( new Action('input','boolean'));
          
            action.defaultValue = '0'
          
      
      
      
        var signal = this.addSignal( new Signal('input','boolean'));
          
            signal.defaultValue = '0'
          
      
    
  
}


SimpleInputPrClass.prototype = new Block();
SimpleInputPrClass.prototype.constructor = SimpleInputPrClass;
Block.register('SimpleInputPrClass', SimpleInputPrClass);
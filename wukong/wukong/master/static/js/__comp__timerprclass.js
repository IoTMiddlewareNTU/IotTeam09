function TimerPrClass()
{
  Block.prototype.init.call(this);
  this.type='TimerPrClass';
  
    
      
        var action = this.addAction( new Action('output','short'));
          
            action.defaultValue = '1'
          
      
      
      
        var signal = this.addSignal( new Signal('output','short'));
          
            signal.defaultValue = '1'
          
      
    
  
}


TimerPrClass.prototype = new Block();
TimerPrClass.prototype.constructor = TimerPrClass;
Block.register('TimerPrClass', TimerPrClass);
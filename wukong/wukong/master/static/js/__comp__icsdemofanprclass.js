function ICSDemoFanPrClass()
{
  Block.prototype.init.call(this);
  this.type='ICSDemoFanPrClass';
  
    
      
      
      
        var signal = this.addSignal( new Signal('fan_onoff','boolean'));
          
            signal.defaultValue = '0'
          
      
    
  
    
      
      
      
        var signal = this.addSignal( new Signal('fan_speed','short'));
          
            signal.defaultValue = '0'
          
      
    
  
    
      
      
      
        var signal = this.addSignal( new Signal('fan_rotation','short'));
          
            signal.defaultValue = '0'
          
      
    
  
}


ICSDemoFanPrClass.prototype = new Block();
ICSDemoFanPrClass.prototype.constructor = ICSDemoFanPrClass;
Block.register('ICSDemoFanPrClass', ICSDemoFanPrClass);
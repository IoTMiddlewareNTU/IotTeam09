function ICSDemoTVPrClass()
{
  Block.prototype.init.call(this);
  this.type='ICSDemoTVPrClass';
  
    
      
      
      
        var signal = this.addSignal( new Signal('tv_onoff','boolean'));
          
            signal.defaultValue = '0'
          
      
    
  
    
      
      
      
        var signal = this.addSignal( new Signal('tv_mute','boolean'));
          
            signal.defaultValue = '0'
          
      
    
  
}


ICSDemoTVPrClass.prototype = new Block();
ICSDemoTVPrClass.prototype.constructor = ICSDemoTVPrClass;
Block.register('ICSDemoTVPrClass', ICSDemoTVPrClass);
function ICSDemoMusicPrClass()
{
  Block.prototype.init.call(this);
  this.type='ICSDemoMusicPrClass';
  
    
      
      
      
        var signal = this.addSignal( new Signal('speaker_onoff','boolean'));
          
            signal.defaultValue = '0'
          
      
    
  
    
      
      
      
        var signal = this.addSignal( new Signal('music_genre','short'));
          
            signal.defaultValue = '0'
          
      
    
  
    
      
      
      
        var signal = this.addSignal( new Signal('speaker_volume','short'));
          
            signal.defaultValue = '0'
          
      
    
  
}


ICSDemoMusicPrClass.prototype = new Block();
ICSDemoMusicPrClass.prototype.constructor = ICSDemoMusicPrClass;
Block.register('ICSDemoMusicPrClass', ICSDemoMusicPrClass);
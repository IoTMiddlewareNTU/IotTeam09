function Sound()
{
  Block.prototype.init.call(this);
  this.type='Sound';
  
    
      
        var action = this.addAction( new Action('on_off','boolean'));
          
      
      
      
        var signal = this.addSignal( new Signal('on_off','boolean'));
          
      
    
  
    
      
        var action = this.addAction( new Action('freq','short'));
          
      
      
      
        var signal = this.addSignal( new Signal('freq','short'));
          
      
    
  
}


Sound.prototype = new Block();
Sound.prototype.constructor = Sound;
Block.register('Sound', Sound);
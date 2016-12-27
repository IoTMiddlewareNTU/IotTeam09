function RGBLED()
{
  Block.prototype.init.call(this);
  this.type='RGBLED';
  
    
      
        var action = this.addAction( new Action('hue','short'));
          
      
      
      
        var signal = this.addSignal( new Signal('hue','short'));
          
      
    
  
    
      
        var action = this.addAction( new Action('brightness','short'));
          
      
      
      
        var signal = this.addSignal( new Signal('brightness','short'));
          
      
    
  
    
      
        var action = this.addAction( new Action('on_off','boolean'));
          
      
      
      
        var signal = this.addSignal( new Signal('on_off','boolean'));
          
      
    
  
}


RGBLED.prototype = new Block();
RGBLED.prototype.constructor = RGBLED;
Block.register('RGBLED', RGBLED);
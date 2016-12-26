function Grove_MP3()
{
  Block.prototype.init.call(this);
  this.type='Grove_MP3';
  
    
      
        var action = this.addAction( new Action('on_off','boolean'));
          
      
      
      
        var signal = this.addSignal( new Signal('on_off','boolean'));
          
      
    
  
    
      
        var action = this.addAction( new Action('track','short'));
          
            action.defaultValue = '0'
          
      
      
      
        var signal = this.addSignal( new Signal('track','short'));
          
            signal.defaultValue = '0'
          
      
    
  
    
      
      
      
        var signal = this.addSignal( new Signal('__pin','Pin'));
          
      
    
  
}


Grove_MP3.prototype = new Block();
Grove_MP3.prototype.constructor = Grove_MP3;
Block.register('Grove_MP3', Grove_MP3);
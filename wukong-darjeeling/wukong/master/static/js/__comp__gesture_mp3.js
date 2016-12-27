function Gesture_MP3()
{
  Block.prototype.init.call(this);
  this.type='Gesture_MP3';
  
    
      
        var action = this.addAction( new Action('command','short'));
          
            action.defaultValue = '1'
          
      
      
      
        var signal = this.addSignal( new Signal('command','short'));
          
            signal.defaultValue = '1'
          
      
    
  
    
      
        var action = this.addAction( new Action('instrument','short'));
          
            action.defaultValue = '1'
          
      
      
      
        var signal = this.addSignal( new Signal('instrument','short'));
          
            signal.defaultValue = '1'
          
      
    
  
}


Gesture_MP3.prototype = new Block();
Gesture_MP3.prototype.constructor = Gesture_MP3;
Block.register('Gesture_MP3', Gesture_MP3);
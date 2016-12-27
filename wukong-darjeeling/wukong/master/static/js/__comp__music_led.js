function MUSIC_LED()
{
  Block.prototype.init.call(this);
  this.type='MUSIC_LED';
  
    
      
        var action = this.addAction( new Action('command','short'));
          
            action.defaultValue = '1'
          
      
      
      
        var signal = this.addSignal( new Signal('command','short'));
          
            signal.defaultValue = '1'
          
      
    
  
    
      
        var action = this.addAction( new Action('instrument','short'));
          
            action.defaultValue = '1'
          
      
      
      
        var signal = this.addSignal( new Signal('instrument','short'));
          
            signal.defaultValue = '1'
          
      
    
  
    
      
        var action = this.addAction( new Action('refresh_rate','refresh_rate'));
          
            action.defaultValue = '50'
          
      
      
      
        var signal = this.addSignal( new Signal('refresh_rate','refresh_rate'));
          
            signal.defaultValue = '50'
          
      
    
  
}


MUSIC_LED.prototype = new Block();
MUSIC_LED.prototype.constructor = MUSIC_LED;
Block.register('MUSIC_LED', MUSIC_LED);
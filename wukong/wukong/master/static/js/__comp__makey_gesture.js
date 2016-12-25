function Makey_Gesture()
{
  Block.prototype.init.call(this);
  this.type='Makey_Gesture';
  
    
      
        var action = this.addAction( new Action('number','short'));
          
            action.defaultValue = '7'
          
      
      
      
        var signal = this.addSignal( new Signal('number','short'));
          
            signal.defaultValue = '7'
          
      
    
  
    
      
        var action = this.addAction( new Action('mode','boolean'));
          
            action.defaultValue = 'false'
          
      
      
      
        var signal = this.addSignal( new Signal('mode','boolean'));
          
            signal.defaultValue = 'false'
          
      
    
  
    
      
        var action = this.addAction( new Action('refresh_rate','refresh_rate'));
          
            action.defaultValue = '100'
          
      
      
      
        var signal = this.addSignal( new Signal('refresh_rate','refresh_rate'));
          
            signal.defaultValue = '100'
          
      
    
  
}


Makey_Gesture.prototype = new Block();
Makey_Gesture.prototype.constructor = Makey_Gesture;
Block.register('Makey_Gesture', Makey_Gesture);
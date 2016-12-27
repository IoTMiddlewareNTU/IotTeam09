function GestureSwitch()
{
  Block.prototype.init.call(this);
  this.type='GestureSwitch';
  
    
      
        var action = this.addAction( new Action('change_mode','boolean'));
          
            action.defaultValue = 'false'
          
      
      
      
    
  
    
      
        var action = this.addAction( new Action('gesture','short'));
          
            action.defaultValue = '0'
          
      
      
      
    
  
    
      
        var action = this.addAction( new Action('mode1gesture','short'));
          
            action.defaultValue = '0'
          
      
      
      
        var signal = this.addSignal( new Signal('mode1gesture','short'));
          
            signal.defaultValue = '0'
          
      
    
  
    
      
        var action = this.addAction( new Action('mode2gesture','short'));
          
            action.defaultValue = '0'
          
      
      
      
        var signal = this.addSignal( new Signal('mode2gesture','short'));
          
            signal.defaultValue = '0'
          
      
    
  
    
      
        var action = this.addAction( new Action('mode3gesture','short'));
          
            action.defaultValue = '0'
          
      
      
      
        var signal = this.addSignal( new Signal('mode3gesture','short'));
          
            signal.defaultValue = '0'
          
      
    
  
    
      
        var action = this.addAction( new Action('mode4gesture','short'));
          
            action.defaultValue = '0'
          
      
      
      
        var signal = this.addSignal( new Signal('mode4gesture','short'));
          
            signal.defaultValue = '0'
          
      
    
  
    
      
        var action = this.addAction( new Action('mode5gesture','short'));
          
            action.defaultValue = '0'
          
      
      
      
        var signal = this.addSignal( new Signal('mode5gesture','short'));
          
            signal.defaultValue = '0'
          
      
    
  
}


GestureSwitch.prototype = new Block();
GestureSwitch.prototype.constructor = GestureSwitch;
Block.register('GestureSwitch', GestureSwitch);
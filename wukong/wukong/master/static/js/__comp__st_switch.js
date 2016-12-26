function ST_Switch()
{
  Block.prototype.init.call(this);
  this.type='ST_Switch';
  
    
      
      
      
        var signal = this.addSignal( new Signal('on_off','boolean'));
          
            signal.defaultValue = 'false'
          
      
    
  
    
      
        var action = this.addAction( new Action('on_off_state','boolean'));
          
            action.defaultValue = 'false'
          
      
      
      
        var signal = this.addSignal( new Signal('on_off_state','boolean'));
          
            signal.defaultValue = 'false'
          
      
    
  
    
      
        var action = this.addAction( new Action('refresh_rate','refresh_rate'));
          
            action.defaultValue = '2000'
          
      
      
      
        var signal = this.addSignal( new Signal('refresh_rate','refresh_rate'));
          
            signal.defaultValue = '2000'
          
      
    
  
}


ST_Switch.prototype = new Block();
ST_Switch.prototype.constructor = ST_Switch;
Block.register('ST_Switch', ST_Switch);
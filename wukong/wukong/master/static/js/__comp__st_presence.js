function ST_Presence()
{
  Block.prototype.init.call(this);
  this.type='ST_Presence';
  
    
      
      
      
        var signal = this.addSignal( new Signal('presence','boolean'));
          
            signal.defaultValue = 'false'
          
      
    
  
    
      
        var action = this.addAction( new Action('refresh_rate','refresh_rate'));
          
            action.defaultValue = '2000'
          
      
      
      
        var signal = this.addSignal( new Signal('refresh_rate','refresh_rate'));
          
            signal.defaultValue = '2000'
          
      
    
  
}


ST_Presence.prototype = new Block();
ST_Presence.prototype.constructor = ST_Presence;
Block.register('ST_Presence', ST_Presence);
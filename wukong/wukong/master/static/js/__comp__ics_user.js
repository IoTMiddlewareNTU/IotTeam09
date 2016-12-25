function ICS_User()
{
  Block.prototype.init.call(this);
  this.type='ICS_User';
  
    
      
      
      
        var signal = this.addSignal( new Signal('holder','short'));
          
            signal.defaultValue = '0'
          
      
    
  
    
      
      
      
        var signal = this.addSignal( new Signal('slipper0','short'));
          
            signal.defaultValue = '0'
          
      
    
  
    
      
      
      
        var signal = this.addSignal( new Signal('slipper1','short'));
          
            signal.defaultValue = '0'
          
      
    
  
    
      
      
      
        var signal = this.addSignal( new Signal('slipper2','short'));
          
            signal.defaultValue = '0'
          
      
    
  
    
      
        var action = this.addAction( new Action('refresh_rate','refresh_rate'));
          
            action.defaultValue = '100'
          
      
      
      
        var signal = this.addSignal( new Signal('refresh_rate','refresh_rate'));
          
            signal.defaultValue = '100'
          
      
    
  
}


ICS_User.prototype = new Block();
ICS_User.prototype.constructor = ICS_User;
Block.register('ICS_User', ICS_User);
function PM25()
{
  Block.prototype.init.call(this);
  this.type='PM25';
  
    
      
      
      
        var signal = this.addSignal( new Signal('value','short'));
          
      
    
  
    
      
        var action = this.addAction( new Action('refresh_rate','refresh_rate'));
          
            action.defaultValue = '1000'
          
      
      
      
        var signal = this.addSignal( new Signal('refresh_rate','refresh_rate'));
          
            signal.defaultValue = '1000'
          
      
    
  
}


PM25.prototype = new Block();
PM25.prototype.constructor = PM25;
Block.register('PM25', PM25);
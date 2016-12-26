function LED()
{
  Block.prototype.init.call(this);
  this.type='LED';
  
    
      
        var action = this.addAction( new Action('refresh_rate','refresh_rate'));
          
            action.defaultValue = '1000'
          
      
      
      
        var signal = this.addSignal( new Signal('refresh_rate','refresh_rate'));
          
            signal.defaultValue = '1000'
          
      
    
  
    
      
        var action = this.addAction( new Action('port1','boolean'));
          
            action.defaultValue = 'true'
          
      
      
      
        var signal = this.addSignal( new Signal('port1','boolean'));
          
            signal.defaultValue = 'true'
          
      
    
  
    
      
        var action = this.addAction( new Action('port2','boolean'));
          
            action.defaultValue = 'true'
          
      
      
      
        var signal = this.addSignal( new Signal('port2','boolean'));
          
            signal.defaultValue = 'true'
          
      
    
  
    
      
        var action = this.addAction( new Action('port3','boolean'));
          
            action.defaultValue = 'true'
          
      
      
      
        var signal = this.addSignal( new Signal('port3','boolean'));
          
            signal.defaultValue = 'true'
          
      
    
  
    
      
        var action = this.addAction( new Action('port4','boolean'));
          
            action.defaultValue = 'false'
          
      
      
      
        var signal = this.addSignal( new Signal('port4','boolean'));
          
            signal.defaultValue = 'false'
          
      
    
  
}


LED.prototype = new Block();
LED.prototype.constructor = LED;
Block.register('LED', LED);
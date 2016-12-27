function Buzzer()
{
  Block.prototype.init.call(this);
  this.type='Buzzer';
  
    
      
        var action = this.addAction( new Action('on_off','boolean'));
          
            action.defaultValue = 'false'
          
      
      
      
        var signal = this.addSignal( new Signal('on_off','boolean'));
          
            signal.defaultValue = 'false'
          
      
    
  
    
      
        var action = this.addAction( new Action('freq','short'));
          
            action.defaultValue = '500'
          
      
      
      
        var signal = this.addSignal( new Signal('freq','short'));
          
            signal.defaultValue = '500'
          
      
    
  
    
      
        var action = this.addAction( new Action('duty_cycle','short'));
          
            action.defaultValue = '50'
          
      
      
      
        var signal = this.addSignal( new Signal('duty_cycle','short'));
          
            signal.defaultValue = '50'
          
      
    
  
}


Buzzer.prototype = new Block();
Buzzer.prototype.constructor = Buzzer;
Block.register('Buzzer', Buzzer);
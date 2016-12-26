function Sonos()
{
  Block.prototype.init.call(this);
  this.type='Sonos';
  
    
      
        var action = this.addAction( new Action('on_off','boolean'));
          
            action.defaultValue = 'false'
          
      
      
      
        var signal = this.addSignal( new Signal('on_off','boolean'));
          
            signal.defaultValue = 'false'
          
      
    
  
    
      
        var action = this.addAction( new Action('playlist','short'));
          
            action.defaultValue = '1'
          
      
      
      
        var signal = this.addSignal( new Signal('playlist','short'));
          
            signal.defaultValue = '1'
          
      
    
  
    
      
        var action = this.addAction( new Action('volume','short'));
          
            action.defaultValue = '1'
          
      
      
      
        var signal = this.addSignal( new Signal('volume','short'));
          
            signal.defaultValue = '1'
          
      
    
  
}


Sonos.prototype = new Block();
Sonos.prototype.constructor = Sonos;
Block.register('Sonos', Sonos);
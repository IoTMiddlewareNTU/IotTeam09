function EEGServer()
{
  Block.prototype.init.call(this);
  this.type='EEGServer';
  
    
      
      
      
        var signal = this.addSignal( new Signal('output_short','short'));
          
            signal.defaultValue = '0'
          
      
    
  
    
      
      
      
        var signal = this.addSignal( new Signal('output_boolean','boolean'));
          
            signal.defaultValue = 'false'
          
      
    
  
    
      
        var action = this.addAction( new Action('refresh_rate','refresh_rate'));
          
            action.defaultValue = '100'
          
      
      
      
        var signal = this.addSignal( new Signal('refresh_rate','refresh_rate'));
          
            signal.defaultValue = '100'
          
      
    
  
}


EEGServer.prototype = new Block();
EEGServer.prototype.constructor = EEGServer;
Block.register('EEGServer', EEGServer);
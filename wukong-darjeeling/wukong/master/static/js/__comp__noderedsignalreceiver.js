function NodeREDSignalReceiver()
{
  Block.prototype.init.call(this);
  this.type='NodeREDSignalReceiver';
  
    
      
        var action = this.addAction( new Action('subject','short'));
          
      
      
      
        var signal = this.addSignal( new Signal('subject','short'));
          
      
    
  
    
      
      
      
        var signal = this.addSignal( new Signal('boolean_siganl','boolean'));
          
            signal.defaultValue = 'false'
          
      
    
  
    
      
      
      
        var signal = this.addSignal( new Signal('integer_siganl','short'));
          
            signal.defaultValue = '0'
          
      
    
  
    
      
      
      
        var signal = this.addSignal( new Signal('string_signal','string'));
          
            signal.defaultValue = '1'
          
      
    
  
}


NodeREDSignalReceiver.prototype = new Block();
NodeREDSignalReceiver.prototype.constructor = NodeREDSignalReceiver;
Block.register('NodeREDSignalReceiver', NodeREDSignalReceiver);
function NodeREDSignalSender()
{
  Block.prototype.init.call(this);
  this.type='NodeREDSignalSender';
  
    
      
        var action = this.addAction( new Action('subject','short'));
          
      
      
      
        var signal = this.addSignal( new Signal('subject','short'));
          
      
    
  
    
      
        var action = this.addAction( new Action('boolean_siganl','boolean'));
          
            action.defaultValue = 'false'
          
      
      
      
    
  
    
      
        var action = this.addAction( new Action('integer_siganl','short'));
          
            action.defaultValue = '0'
          
      
      
      
    
  
    
      
        var action = this.addAction( new Action('string_signal','string'));
          
            action.defaultValue = '1'
          
      
      
      
    
  
}


NodeREDSignalSender.prototype = new Block();
NodeREDSignalSender.prototype.constructor = NodeREDSignalSender;
Block.register('NodeREDSignalSender', NodeREDSignalSender);
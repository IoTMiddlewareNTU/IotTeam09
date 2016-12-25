function Debug_Trigger()
{
  Block.prototype.init.call(this);
  this.type='Debug_Trigger';
  
    
      
      
      
        var signal = this.addSignal( new Signal('timestamp','short'));
          
      
    
  
}


Debug_Trigger.prototype = new Block();
Debug_Trigger.prototype.constructor = Debug_Trigger;
Block.register('Debug_Trigger', Debug_Trigger);
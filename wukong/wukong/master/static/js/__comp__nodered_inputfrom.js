function NodeRED_InputFrom()
{
  Block.prototype.init.call(this);
  this.type='NodeRED_InputFrom';
  
    
      
      
      
        var signal = this.addSignal( new Signal('message','short'));
          
      
    
  
}


NodeRED_InputFrom.prototype = new Block();
NodeRED_InputFrom.prototype.constructor = NodeRED_InputFrom;
Block.register('NodeRED_InputFrom', NodeRED_InputFrom);
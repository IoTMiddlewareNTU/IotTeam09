function NodeRED_OutputTo()
{
  Block.prototype.init.call(this);
  this.type='NodeRED_OutputTo';
  
    
      
        var action = this.addAction( new Action('message','short'));
          
      
      
      
    
  
}


NodeRED_OutputTo.prototype = new Block();
NodeRED_OutputTo.prototype.constructor = NodeRED_OutputTo;
Block.register('NodeRED_OutputTo', NodeRED_OutputTo);
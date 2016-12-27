function Debug_Inspector()
{
  Block.prototype.init.call(this);
  this.type='Debug_Inspector';
  
    
      
        var action = this.addAction( new Action('content','short'));
          
      
      
      
    
  
}


Debug_Inspector.prototype = new Block();
Debug_Inspector.prototype.constructor = Debug_Inspector;
Block.register('Debug_Inspector', Debug_Inspector);
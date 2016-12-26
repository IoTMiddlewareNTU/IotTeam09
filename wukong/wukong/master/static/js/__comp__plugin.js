function Plugin()
{
  Block.prototype.init.call(this);
  this.type='Plugin';
  
    
      
      
      
        var signal = this.addSignal( new Signal('name','short'));
          
      
    
  
}


Plugin.prototype = new Block();
Plugin.prototype.constructor = Plugin;
Block.register('Plugin', Plugin);
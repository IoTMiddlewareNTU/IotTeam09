function URL()
{
  Block.prototype.init.call(this);
  this.type='URL';
  
    
      
      
      
        var signal = this.addSignal( new Signal('input','short'));
          
            signal.defaultValue = '0'
          
      
    
  
}


URL.prototype = new Block();
URL.prototype.constructor = URL;
Block.register('URL', URL);
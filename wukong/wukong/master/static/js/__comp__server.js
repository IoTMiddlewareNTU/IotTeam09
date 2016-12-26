function Server()
{
  Block.prototype.init.call(this);
  this.type='Server';
  
    
      
        var action = this.addAction( new Action('input','short'));
          
            action.defaultValue = '100'
          
      
      
      
        var signal = this.addSignal( new Signal('input','short'));
          
            signal.defaultValue = '100'
          
      
    
  
}


Server.prototype = new Block();
Server.prototype.constructor = Server;
Block.register('Server', Server);
function UINumber()
{
  Block.prototype.init.call(this);
  this.type='UINumber';
  
    
      
        var action = this.addAction( new Action('number','short'));
          
            action.defaultValue = '0'
          
      
      
      
    
  
    
      
        var action = this.addAction( new Action('device','short'));
          
            action.defaultValue = '0'
          
      
      
      
        var signal = this.addSignal( new Signal('device','short'));
          
            signal.defaultValue = '0'
          
      
    
  
    
      
        var action = this.addAction( new Action('port','short'));
          
            action.defaultValue = '0'
          
      
      
      
        var signal = this.addSignal( new Signal('port','short'));
          
            signal.defaultValue = '0'
          
      
    
  
}


UINumber.prototype = new Block();
UINumber.prototype.constructor = UINumber;
Block.register('UINumber', UINumber);
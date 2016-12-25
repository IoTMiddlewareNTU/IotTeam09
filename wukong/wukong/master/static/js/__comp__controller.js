function Controller()
{
  Block.prototype.init.call(this);
  this.type='Controller';
  
    
      
        var action = this.addAction( new Action('input','short'));
          
            action.defaultValue = '0'
          
      
      
      
        var signal = this.addSignal( new Signal('input','short'));
          
            signal.defaultValue = '0'
          
      
    
  
    
      
      
      
        var signal = this.addSignal( new Signal('output','short'));
          
            signal.defaultValue = '0'
          
      
    
  
    
      
        var action = this.addAction( new Action('refresh_rate','refresh_rate'));
          
            action.defaultValue = '10'
          
      
      
      
        var signal = this.addSignal( new Signal('refresh_rate','refresh_rate'));
          
            signal.defaultValue = '10'
          
      
    
  
}


Controller.prototype = new Block();
Controller.prototype.constructor = Controller;
Block.register('Controller', Controller);
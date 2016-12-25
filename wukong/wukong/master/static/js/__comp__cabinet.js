function Cabinet()
{
  Block.prototype.init.call(this);
  this.type='Cabinet';
  
    
      
      
      
        var signal = this.addSignal( new Signal('space1','boolean'));
          
            signal.defaultValue = '0'
          
      
    
  
    
      
      
      
        var signal = this.addSignal( new Signal('space2','boolean'));
          
            signal.defaultValue = '0'
          
      
    
  
    
      
      
      
        var signal = this.addSignal( new Signal('space3','boolean'));
          
            signal.defaultValue = '0'
          
      
    
  
    
      
        var action = this.addAction( new Action('refresh_rate','refresh_rate'));
          
            action.defaultValue = '10'
          
      
      
      
        var signal = this.addSignal( new Signal('refresh_rate','refresh_rate'));
          
            signal.defaultValue = '10'
          
      
    
  
}


Cabinet.prototype = new Block();
Cabinet.prototype.constructor = Cabinet;
Block.register('Cabinet', Cabinet);
function Smart_Mug()
{
  Block.prototype.init.call(this);
  this.type='Smart_Mug';
  
    
      
      
      
        var signal = this.addSignal( new Signal('volume','short'));
          
            signal.defaultValue = '0'
          
      
    
  
    
      
      
      
        var signal = this.addSignal( new Signal('color','short'));
          
            signal.defaultValue = '0'
          
      
    
  
    
      
        var action = this.addAction( new Action('refresh_rate','refresh_rate'));
          
            action.defaultValue = '1000'
          
      
      
      
        var signal = this.addSignal( new Signal('refresh_rate','refresh_rate'));
          
            signal.defaultValue = '1000'
          
      
    
  
}


Smart_Mug.prototype = new Block();
Smart_Mug.prototype.constructor = Smart_Mug;
Block.register('Smart_Mug', Smart_Mug);
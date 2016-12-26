function RealSense()
{
  Block.prototype.init.call(this);
  this.type='RealSense';
  
    
      
      
      
        var signal = this.addSignal( new Signal('mode','boolean'));
          
            signal.defaultValue = 'false'
          
      
    
  
    
      
      
      
        var signal = this.addSignal( new Signal('gesture','short'));
          
            signal.defaultValue = '0'
          
      
    
  
    
      
        var action = this.addAction( new Action('refresh_rate','refresh_rate'));
          
            action.defaultValue = '100'
          
      
      
      
        var signal = this.addSignal( new Signal('refresh_rate','refresh_rate'));
          
            signal.defaultValue = '100'
          
      
    
  
}


RealSense.prototype = new Block();
RealSense.prototype.constructor = RealSense;
Block.register('RealSense', RealSense);
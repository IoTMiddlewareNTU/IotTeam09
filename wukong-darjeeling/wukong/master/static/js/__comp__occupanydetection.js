function OccupanyDetection()
{
  Block.prototype.init.call(this);
  this.type='OccupanyDetection';
  
    
      
      
      
        var signal = this.addSignal( new Signal('pir','boolean'));
          
            signal.defaultValue = '0'
          
      
    
  
    
      
        var action = this.addAction( new Action('days','short'));
          
            action.defaultValue = '30'
          
      
      
      
        var signal = this.addSignal( new Signal('days','short'));
          
            signal.defaultValue = '30'
          
      
    
  
    
      
        var action = this.addAction( new Action('topK','short'));
          
            action.defaultValue = '5'
          
      
      
      
        var signal = this.addSignal( new Signal('topK','short'));
          
            signal.defaultValue = '5'
          
      
    
  
    
      
        var action = this.addAction( new Action('interval','short'));
          
            action.defaultValue = '15'
          
      
      
      
        var signal = this.addSignal( new Signal('interval','short'));
          
            signal.defaultValue = '15'
          
      
    
  
    
      
      
      
        var signal = this.addSignal( new Signal('occupany','boolean'));
          
            signal.defaultValue = '0'
          
      
    
  
}


OccupanyDetection.prototype = new Block();
OccupanyDetection.prototype.constructor = OccupanyDetection;
Block.register('OccupanyDetection', OccupanyDetection);
function Threshold()
{
  Block.prototype.init.call(this);
  this.type='Threshold';
  
    
      
        var action = this.addAction( new Action('operator','ThresholdOperator'));
          
            action.defaultValue = 'lt'
          
      
      
      
        var signal = this.addSignal( new Signal('operator','ThresholdOperator'));
          
            signal.defaultValue = 'lt'
          
      
    
  
    
      
        var action = this.addAction( new Action('threshold','short'));
          
            action.defaultValue = '30'
          
      
      
      
        var signal = this.addSignal( new Signal('threshold','short'));
          
            signal.defaultValue = '30'
          
      
    
  
    
      
        var action = this.addAction( new Action('value','short'));
          
            action.defaultValue = '20'
          
      
      
      
        var signal = this.addSignal( new Signal('value','short'));
          
            signal.defaultValue = '20'
          
      
    
  
    
      
      
      
        var signal = this.addSignal( new Signal('output','boolean'));
          
            signal.defaultValue = 'false'
          
      
    
  
}


Threshold.prototype = new Block();
Threshold.prototype.constructor = Threshold;
Block.register('Threshold', Threshold);
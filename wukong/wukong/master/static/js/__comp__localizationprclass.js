function LocalizationPrClass()
{
  Block.prototype.init.call(this);
  this.type='LocalizationPrClass';
  
    
      
        var action = this.addAction( new Action('signal','short'));
          
            action.defaultValue = '0'
          
      
      
      
        var signal = this.addSignal( new Signal('signal','short'));
          
            signal.defaultValue = '0'
          
      
    
  
    
      
        var action = this.addAction( new Action('particleCount','short'));
          
            action.defaultValue = '100'
          
      
      
      
        var signal = this.addSignal( new Signal('particleCount','short'));
          
            signal.defaultValue = '100'
          
      
    
  
    
      
        var action = this.addAction( new Action('movNoise','short'));
          
            action.defaultValue = '0'
          
      
      
      
        var signal = this.addSignal( new Signal('movNoise','short'));
          
            signal.defaultValue = '0'
          
      
    
  
    
      
        var action = this.addAction( new Action('rotNoise','short'));
          
            action.defaultValue = '0'
          
      
      
      
        var signal = this.addSignal( new Signal('rotNoise','short'));
          
            signal.defaultValue = '0'
          
      
    
  
    
      
        var action = this.addAction( new Action('senseNoise','short'));
          
            action.defaultValue = '0'
          
      
      
      
        var signal = this.addSignal( new Signal('senseNoise','short'));
          
            signal.defaultValue = '0'
          
      
    
  
    
      
        var action = this.addAction( new Action('maxr','short'));
          
            action.defaultValue = '0'
          
      
      
      
        var signal = this.addSignal( new Signal('maxr','short'));
          
            signal.defaultValue = '0'
          
      
    
  
    
      
        var action = this.addAction( new Action('output','short'));
          
            action.defaultValue = '0'
          
      
      
      
        var signal = this.addSignal( new Signal('output','short'));
          
            signal.defaultValue = '0'
          
      
    
  
}


LocalizationPrClass.prototype = new Block();
LocalizationPrClass.prototype.constructor = LocalizationPrClass;
Block.register('LocalizationPrClass', LocalizationPrClass);
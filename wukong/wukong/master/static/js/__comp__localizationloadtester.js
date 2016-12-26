function LocalizationLoadTester()
{
  Block.prototype.init.call(this);
  this.type='LocalizationLoadTester';
  
    
      
        var action = this.addAction( new Action('response','short'));
          
            action.defaultValue = '0'
          
      
      
      
        var signal = this.addSignal( new Signal('response','short'));
          
            signal.defaultValue = '0'
          
      
    
  
    
      
        var action = this.addAction( new Action('location','short'));
          
            action.defaultValue = '0'
          
      
      
      
        var signal = this.addSignal( new Signal('location','short'));
          
            signal.defaultValue = '0'
          
      
    
  
}


LocalizationLoadTester.prototype = new Block();
LocalizationLoadTester.prototype.constructor = LocalizationLoadTester;
Block.register('LocalizationLoadTester', LocalizationLoadTester);
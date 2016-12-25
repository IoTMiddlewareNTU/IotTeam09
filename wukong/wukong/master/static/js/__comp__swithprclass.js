function SwithPrClass()
{
  Block.prototype.init.call(this);
  this.type='SwithPrClass';
  
    
      
        var action = this.addAction( new Action('switchinput','short'));
          
            action.defaultValue = '1'
          
      
      
      
        var signal = this.addSignal( new Signal('switchinput','short'));
          
            signal.defaultValue = '1'
          
      
    
  
    
      
        var action = this.addAction( new Action('temparature','short'));
          
            action.defaultValue = '50'
          
      
      
      
        var signal = this.addSignal( new Signal('temparature','short'));
          
            signal.defaultValue = '50'
          
      
    
  
    
      
        var action = this.addAction( new Action('threshold','short'));
          
            action.defaultValue = '1'
          
      
      
      
        var signal = this.addSignal( new Signal('threshold','short'));
          
            signal.defaultValue = '1'
          
      
    
  
}


SwithPrClass.prototype = new Block();
SwithPrClass.prototype.constructor = SwithPrClass;
Block.register('SwithPrClass', SwithPrClass);
function ICSDemoPrClass()
{
  Block.prototype.init.call(this);
  this.type='ICSDemoPrClass';
  
    
      
        var action = this.addAction( new Action('uid','short'));
          
            action.defaultValue = '1'
          
      
      
      
        var signal = this.addSignal( new Signal('uid','short'));
          
            signal.defaultValue = '1'
          
      
    
  
    
      
        var action = this.addAction( new Action('music','short'));
          
            action.defaultValue = '1'
          
      
      
      
        var signal = this.addSignal( new Signal('music','short'));
          
            signal.defaultValue = '1'
          
      
    
  
    
      
        var action = this.addAction( new Action('fan','short'));
          
            action.defaultValue = '1'
          
      
      
      
        var signal = this.addSignal( new Signal('fan','short'));
          
            signal.defaultValue = '1'
          
      
    
  
    
      
        var action = this.addAction( new Action('light','short'));
          
            action.defaultValue = '1'
          
      
      
      
        var signal = this.addSignal( new Signal('light','short'));
          
            signal.defaultValue = '1'
          
      
    
  
}


ICSDemoPrClass.prototype = new Block();
ICSDemoPrClass.prototype.constructor = ICSDemoPrClass;
Block.register('ICSDemoPrClass', ICSDemoPrClass);
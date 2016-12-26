function array_test()
{
  Block.prototype.init.call(this);
  this.type='array_test';
  
    
      
        var action = this.addAction( new Action('array','array'));
          
            action.defaultValue = '0'
          
      
      
      
        var signal = this.addSignal( new Signal('array','array'));
          
            signal.defaultValue = '0'
          
      
    
  
}


array_test.prototype = new Block();
array_test.prototype.constructor = array_test;
Block.register('array_test', array_test);
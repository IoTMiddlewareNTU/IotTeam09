function string_test()
{
  Block.prototype.init.call(this);
  this.type='string_test';
  
    
      
        var action = this.addAction( new Action('string','string'));
          
            action.defaultValue = '0'
          
      
      
      
        var signal = this.addSignal( new Signal('string','string'));
          
            signal.defaultValue = '0'
          
      
    
  
}


string_test.prototype = new Block();
string_test.prototype.constructor = string_test;
Block.register('string_test', string_test);
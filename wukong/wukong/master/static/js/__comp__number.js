function Number()
{
  Block.prototype.init.call(this);
  this.type='Number';
  
    
      
        var action = this.addAction( new Action('input_short','short'));
          
            action.defaultValue = '1'
          
      
      
      
        var signal = this.addSignal( new Signal('input_short','short'));
          
            signal.defaultValue = '1'
          
      
    
  
    
      
        var action = this.addAction( new Action('input_boolean','boolean'));
          
            action.defaultValue = 'false'
          
      
      
      
        var signal = this.addSignal( new Signal('input_boolean','boolean'));
          
            signal.defaultValue = 'false'
          
      
    
  
}


Number.prototype = new Block();
Number.prototype.constructor = Number;
Block.register('Number', Number);
function Aroma()
{
  Block.prototype.init.call(this);
  this.type='Aroma';
  
    
      
        var action = this.addAction( new Action('on_off','boolean'));
          
            action.defaultValue = 'false'
          
      
      
      
        var signal = this.addSignal( new Signal('on_off','boolean'));
          
            signal.defaultValue = 'false'
          
      
    
  
}


Aroma.prototype = new Block();
Aroma.prototype.constructor = Aroma;
Block.register('Aroma', Aroma);
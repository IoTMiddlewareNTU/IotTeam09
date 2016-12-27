function Multiplexer()
{
  Block.prototype.init.call(this);
  this.type='Multiplexer';
  
    
      
        var action = this.addAction( new Action('selector','short'));
          
            action.defaultValue = '0'
          
      
      
      
        var signal = this.addSignal( new Signal('selector','short'));
          
            signal.defaultValue = '0'
          
      
    
  
    
      
        var action = this.addAction( new Action('input1','short'));
          
            action.defaultValue = '1'
          
      
      
      
        var signal = this.addSignal( new Signal('input1','short'));
          
            signal.defaultValue = '1'
          
      
    
  
    
      
        var action = this.addAction( new Action('input2','short'));
          
            action.defaultValue = '2'
          
      
      
      
        var signal = this.addSignal( new Signal('input2','short'));
          
            signal.defaultValue = '2'
          
      
    
  
    
  
    
  
    
      
        var action = this.addAction( new Action('id','short'));
          
            action.defaultValue = '0'
          
      
      
      
        var signal = this.addSignal( new Signal('id','short'));
          
            signal.defaultValue = '0'
          
      
    
  
    
      
        var action = this.addAction( new Action('output','short'));
          
            action.defaultValue = '1'
          
      
      
      
        var signal = this.addSignal( new Signal('output','short'));
          
            signal.defaultValue = '1'
          
      
    
  
}


Multiplexer.prototype = new Block();
Multiplexer.prototype.constructor = Multiplexer;
Block.register('Multiplexer', Multiplexer);
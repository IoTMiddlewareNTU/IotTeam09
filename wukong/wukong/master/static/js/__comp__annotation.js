function Annotation()
{
  Block.prototype.init.call(this);
  this.type='Annotation';
  
    
      
        var action = this.addAction( new Action('content','short'));
          
      
      
      
        var signal = this.addSignal( new Signal('content','short'));
          
      
    
  
}


Annotation.prototype = new Block();
Annotation.prototype.constructor = Annotation;
Block.register('Annotation', Annotation);
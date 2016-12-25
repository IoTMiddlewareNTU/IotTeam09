function ActivityPrclass()
{
  Block.prototype.init.call(this);
  this.type='ActivityPrclass';
  
    
      
        var action = this.addAction( new Action('input','short'));
          
            action.defaultValue = '0'
          
      
      
      
        var signal = this.addSignal( new Signal('input','short'));
          
            signal.defaultValue = '0'
          
      
    
  
    
      
        var action = this.addAction( new Action('output','short'));
          
            action.defaultValue = '0'
          
      
      
      
        var signal = this.addSignal( new Signal('output','short'));
          
            signal.defaultValue = '0'
          
      
    
  
}


ActivityPrclass.prototype = new Block();
ActivityPrclass.prototype.constructor = ActivityPrclass;
Block.register('ActivityPrclass', ActivityPrclass);
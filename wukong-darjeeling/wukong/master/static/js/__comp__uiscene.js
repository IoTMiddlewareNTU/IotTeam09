function UIScene()
{
  Block.prototype.init.call(this);
  this.type='UIScene';
  
    
      
        var action = this.addAction( new Action('number','short'));
          
            action.defaultValue = '0'
          
      
      
      
        var signal = this.addSignal( new Signal('number','short'));
          
            signal.defaultValue = '0'
          
      
    
  
    
      
        var action = this.addAction( new Action('device','short'));
          
            action.defaultValue = '0'
          
      
      
      
        var signal = this.addSignal( new Signal('device','short'));
          
            signal.defaultValue = '0'
          
      
    
  
    
      
        var action = this.addAction( new Action('port','short'));
          
            action.defaultValue = '0'
          
      
      
      
        var signal = this.addSignal( new Signal('port','short'));
          
            signal.defaultValue = '0'
          
      
    
  
}


UIScene.prototype = new Block();
UIScene.prototype.constructor = UIScene;
Block.register('UIScene', UIScene);
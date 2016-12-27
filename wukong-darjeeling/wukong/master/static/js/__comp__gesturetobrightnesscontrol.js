function GestureToBrightnessControl()
{
  Block.prototype.init.call(this);
  this.type='GestureToBrightnessControl';
  
    
      
        var action = this.addAction( new Action('gesture','short'));
          
            action.defaultValue = '0'
          
      
      
      
    
  
    
      
        var action = this.addAction( new Action('brightness','short'));
          
            action.defaultValue = '0'
          
      
      
      
        var signal = this.addSignal( new Signal('brightness','short'));
          
            signal.defaultValue = '0'
          
      
    
  
}


GestureToBrightnessControl.prototype = new Block();
GestureToBrightnessControl.prototype.constructor = GestureToBrightnessControl;
Block.register('GestureToBrightnessControl', GestureToBrightnessControl);
function Grove_LCD()
{
  Block.prototype.init.call(this);
  this.type='Grove_LCD';
  
    
      
        var action = this.addAction( new Action('on_off','boolean'));
          
            action.defaultValue = 'false'
          
      
      
      
    
  
    
      
        var action = this.addAction( new Action('display_value','short'));
          
            action.defaultValue = '0'
          
      
      
      
    
  
    
      
        var action = this.addAction( new Action('brightness','short'));
          
            action.defaultValue = '100'
          
      
      
      
    
  
    
      
        var action = this.addAction( new Action('hue','short'));
          
            action.defaultValue = '100'
          
      
      
      
    
  
    
      
        var action = this.addAction( new Action('saturation','short'));
          
            action.defaultValue = '100'
          
      
      
      
    
  
    
      
        var action = this.addAction( new Action('value','short'));
          
            action.defaultValue = '100'
          
      
      
      
    
  
}


Grove_LCD.prototype = new Block();
Grove_LCD.prototype.constructor = Grove_LCD;
Block.register('Grove_LCD', Grove_LCD);
function Phone()
{
  Block.prototype.init.call(this);
  this.type='Phone';
  
    
      
        var action = this.addAction( new Action('talking','boolean'));
          
            action.defaultValue = 'false'
          
      
      
      
        var signal = this.addSignal( new Signal('talking','boolean'));
          
            signal.defaultValue = 'false'
          
      
    
  
    
      
        var action = this.addAction( new Action('refresh_rate','refresh_rate'));
          
            action.defaultValue = '100'
          
      
      
      
        var signal = this.addSignal( new Signal('refresh_rate','refresh_rate'));
          
            signal.defaultValue = '100'
          
      
    
  
}


Phone.prototype = new Block();
Phone.prototype.constructor = Phone;
Block.register('Phone', Phone);
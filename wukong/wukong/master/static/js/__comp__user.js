function User()
{
  Block.prototype.init.call(this);
  this.type='User';
  
    
      
      
      
        var signal = this.addSignal( new Signal('user','short'));
          
            signal.defaultValue = '0'
          
      
    
  
    
      
        var action = this.addAction( new Action('refresh_rate','refresh_rate'));
          
            action.defaultValue = '100'
          
      
      
      
        var signal = this.addSignal( new Signal('refresh_rate','refresh_rate'));
          
            signal.defaultValue = '100'
          
      
    
  
}


User.prototype = new Block();
User.prototype.constructor = User;
Block.register('User', User);
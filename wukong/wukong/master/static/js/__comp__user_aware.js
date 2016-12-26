function User_Aware()
{
  Block.prototype.init.call(this);
  this.type='User_Aware';
  
    
      
        var action = this.addAction( new Action('on_off','boolean'));
          
            action.defaultValue = '0'
          
      
      
      
        var signal = this.addSignal( new Signal('on_off','boolean'));
          
            signal.defaultValue = '0'
          
      
    
  
    
      
        var action = this.addAction( new Action('user','short'));
          
            action.defaultValue = '0'
          
      
      
      
        var signal = this.addSignal( new Signal('user','short'));
          
            signal.defaultValue = '0'
          
      
    
  
    
      
      
      
        var signal = this.addSignal( new Signal('output_boolean_0','boolean'));
          
            signal.defaultValue = 'false'
          
      
    
  
    
      
      
      
        var signal = this.addSignal( new Signal('output_boolean_1','boolean'));
          
            signal.defaultValue = 'false'
          
      
    
  
    
      
      
      
        var signal = this.addSignal( new Signal('output_boolean_2','boolean'));
          
            signal.defaultValue = 'false'
          
      
    
  
    
      
      
      
        var signal = this.addSignal( new Signal('output_boolean_3','boolean'));
          
            signal.defaultValue = 'false'
          
      
    
  
    
      
      
      
        var signal = this.addSignal( new Signal('output_int_0','short'));
          
            signal.defaultValue = 'false'
          
      
    
  
    
      
        var action = this.addAction( new Action('refresh_rate','refresh_rate'));
          
            action.defaultValue = '100'
          
      
      
      
        var signal = this.addSignal( new Signal('refresh_rate','refresh_rate'));
          
            signal.defaultValue = '100'
          
      
    
  
}


User_Aware.prototype = new Block();
User_Aware.prototype.constructor = User_Aware;
Block.register('User_Aware', User_Aware);
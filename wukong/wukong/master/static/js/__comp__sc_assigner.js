function SC_Assigner()
{
  Block.prototype.init.call(this);
  this.type='SC_Assigner';
  
    
      
        var action = this.addAction( new Action('alert_1','boolean'));
          
            action.defaultValue = 'false'
          
      
      
      
        var signal = this.addSignal( new Signal('alert_1','boolean'));
          
            signal.defaultValue = 'false'
          
      
    
  
    
      
        var action = this.addAction( new Action('alert_2','boolean'));
          
            action.defaultValue = 'false'
          
      
      
      
        var signal = this.addSignal( new Signal('alert_2','boolean'));
          
            signal.defaultValue = 'false'
          
      
    
  
    
      
        var action = this.addAction( new Action('clean','boolean'));
          
            action.defaultValue = 'false'
          
      
      
      
        var signal = this.addSignal( new Signal('clean','boolean'));
          
            signal.defaultValue = 'false'
          
      
    
  
    
      
        var action = this.addAction( new Action('type_1','short'));
          
            action.defaultValue = '0'
          
      
      
      
        var signal = this.addSignal( new Signal('type_1','short'));
          
            signal.defaultValue = '0'
          
      
    
  
    
      
        var action = this.addAction( new Action('type_2','short'));
          
            action.defaultValue = '0'
          
      
      
      
        var signal = this.addSignal( new Signal('type_2','short'));
          
            signal.defaultValue = '0'
          
      
    
  
}


SC_Assigner.prototype = new Block();
SC_Assigner.prototype.constructor = SC_Assigner;
Block.register('SC_Assigner', SC_Assigner);
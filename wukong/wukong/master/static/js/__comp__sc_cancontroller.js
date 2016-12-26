function SC_CanController()
{
  Block.prototype.init.call(this);
  this.type='SC_CanController';
  
    
      
        var action = this.addAction( new Action('assign_type','short'));
          
            action.defaultValue = '0'
          
      
      
      
        var signal = this.addSignal( new Signal('assign_type','short'));
          
            signal.defaultValue = '0'
          
      
    
  
    
      
        var action = this.addAction( new Action('alert','boolean'));
          
            action.defaultValue = 'false'
          
      
      
      
        var signal = this.addSignal( new Signal('alert','boolean'));
          
            signal.defaultValue = 'false'
          
      
    
  
    
      
        var action = this.addAction( new Action('lock','boolean'));
          
            action.defaultValue = 'true'
          
      
      
      
        var signal = this.addSignal( new Signal('lock','boolean'));
          
            signal.defaultValue = 'true'
          
      
    
  
}


SC_CanController.prototype = new Block();
SC_CanController.prototype.constructor = SC_CanController;
Block.register('SC_CanController', SC_CanController);
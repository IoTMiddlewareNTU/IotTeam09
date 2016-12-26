function Gh_Sensor()
{
  Block.prototype.init.call(this);
  this.type='Gh_Sensor';
  
    
      
        var action = this.addAction( new Action('enable','boolean'));
          
            action.defaultValue = 'true'
          
      
      
      
        var signal = this.addSignal( new Signal('enable','boolean'));
          
            signal.defaultValue = 'true'
          
      
    
  
    
      
        var action = this.addAction( new Action('refresh_rate','refresh_rate'));
          
            action.defaultValue = '2000'
          
      
      
      
        var signal = this.addSignal( new Signal('refresh_rate','refresh_rate'));
          
            signal.defaultValue = '2000'
          
      
    
  
}


Gh_Sensor.prototype = new Block();
Gh_Sensor.prototype.constructor = Gh_Sensor;
Block.register('Gh_Sensor', Gh_Sensor);
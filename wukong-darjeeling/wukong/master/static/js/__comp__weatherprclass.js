function WeatherPrClass()
{
  Block.prototype.init.call(this);
  this.type='WeatherPrClass';
  
    
      
        var action = this.addAction( new Action('cityId','short'));
          
            action.defaultValue = '0'
          
      
      
      
        var signal = this.addSignal( new Signal('cityId','short'));
          
            signal.defaultValue = '0'
          
      
    
  
    
      
      
      
        var signal = this.addSignal( new Signal('temperature','short'));
          
            signal.defaultValue = '0'
          
      
    
  
}


WeatherPrClass.prototype = new Block();
WeatherPrClass.prototype.constructor = WeatherPrClass;
Block.register('WeatherPrClass', WeatherPrClass);
function Intel_Sound()
{
  Block.prototype.init.call(this);
  this.type='Intel_Sound';
  
    
      
        var action = this.addAction( new Action('on_off','boolean'));
          
      
      
      
    
  
}


Intel_Sound.prototype = new Block();
Intel_Sound.prototype.constructor = Intel_Sound;
Block.register('Intel_Sound', Intel_Sound);
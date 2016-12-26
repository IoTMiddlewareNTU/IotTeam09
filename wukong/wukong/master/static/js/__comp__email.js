function Email()
{
  Block.prototype.init.call(this);
  this.type='Email';
  
    
      
        var action = this.addAction( new Action('send','short'));
          
            action.defaultValue = '0'
          
      
      
      
    
  
}


Email.prototype = new Block();
Email.prototype.constructor = Email;
Block.register('Email', Email);
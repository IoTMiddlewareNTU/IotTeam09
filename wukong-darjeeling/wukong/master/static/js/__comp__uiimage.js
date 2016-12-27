function UIImage()
{
  Block.prototype.init.call(this);
  this.type='UIImage';
  
    
      
        var action = this.addAction( new Action('picture','short'));
          
            action.defaultValue = '0'
          
      
      
      
    
  
}


UIImage.prototype = new Block();
UIImage.prototype.constructor = UIImage;
Block.register('UIImage', UIImage);
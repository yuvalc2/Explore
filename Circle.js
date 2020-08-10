class Circle
{
  constructor(xCenter, yCenter, rad, speed, angle)
  {
    this.xCenter = xCenter;
    this.yCenter = yCenter;
    this.rad = rad;
    this.speed = speed;
    this.angle = angle;
  }  
  
  Draw(r, g, b, a)
  {    
    let arr = []; //create an array that have all the spots of the pixels 
    for(let y = this.yCenter- this.rad ; y <= this.yCenter + this.rad; y++)
    {
      for(let x = this.xCenter- this.rad ; x <= this.xCenter + this.rad; x++)
       {
          if ((x-this.xCenter)**2 + (y-this.yCenter)**2 <= this.rad**2)
          {           
           arr.push([x,y]);  
          }
       }
    }
    gameEngine.fillPixels(arr, r, g, b, a);       
  }

  Delete()
  {
    this.Draw(0, 0, 0, 0);
    this.visible = false;
  }

  Move()
  {
    this.xCenter += this.speed * Math.cos(this.angle);
    this.yCenter += this.speed * Math.sin(this.angle);
  }    
}
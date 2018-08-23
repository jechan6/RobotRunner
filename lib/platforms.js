class Platforms {
  constructor(x,y,width,height) {
    this.x=x,
    this.y = y,
    this.width = width;
    this.height = height;
    this.img = new Image();
    this.img.src = "./lib/platforms.png";
  }
  draw(ctx) {
    ctx.drawImage(this.img,531,52,this.width,this.height,this.x,this.y,this.width, this.height);
  }
}

module.exports = Platforms;

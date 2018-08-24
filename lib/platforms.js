class Platforms {
  constructor(x,y,width,height) {
    this.x=x,
    this.y = y,
    this.width = width;
    this.height = height;
    this.img = new Image();
    this.img.src = "./lib/new_platforms.png";
  }
  draw(ctx) {
    ctx.drawImage(this.img,4,399,this.width,this.height,this.x,this.y,this.width, this.height);
  }
}

module.exports = Platforms;

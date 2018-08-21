class Platforms {
  constructor(x,y,width,height) {
    this.x=x,
    this.y = y,
    this.width = width;
    this.height = height;
  }
  draw(ctx) {
    ctx.rect(this.x,this.y,this.width, this.height);
  }
}

module.exports = Platforms;

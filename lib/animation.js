
class Animation {
  constructor(ctx,img) {
    this.count = 0;
    this.ctx = ctx;
    this.img = img;
    this.frame = 0;
    this.x_vel = 0;
    this.y_vel = 0;
    this.sheetWidth = 5030;
    this.sheetHeight = 118;
    this.cols = 28;
    this.rows = 1;
    this.width = this.sheetWidth/this.cols;
    this.height = this.sheetHeight/this.rows;
    this.srcX = 0;
    this.srcY = 0;
    this.delay = 8;
  }

  change(frame_set, delay = 8) {

  }

  updateFrame() {
    if(--this.delay > 0){return;};
    this.delay = 8;
    this.frame = ++this.frame % 8;
    this.srcX = this.frame * this.width;
    this.srcY = 0;
    this.x_vel += 10;
    this.ctx.clearRect(this.x_vel,this.y_vel,this.width,this.height);
  }

  drawImage() {
    this.updateFrame();
    this.ctx.fillStyle = 'GREEN';
    this.ctx.fillRect(0,0,800, 800);
    this.ctx.drawImage(this.img, this.srcX, this.srcY,
    this.width, this.height, this.x_vel,this.y_vel,
    this.width, this.height);
  }
  loop() {
    this.drawImage();
    requestAnimationFrame(this.loop.bind(this));
  }
}


module.exports = Animation;

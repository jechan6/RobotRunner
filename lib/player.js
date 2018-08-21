const MovingObject = require("./moving_object");
class Player extends MovingObject  {
  constructor(options = {}) {

    options.pos = [0,0];
    options.vel = [10,0];
    super(options);
    // this.draw = this.draw.bind(this);


    this.width = 158;
    this.height = 92;
    this.moveRight = [[35,6], [241,9], [447,9], [652,10]
    , [859,10], [1064,11], [1270,12], [1471,12], [1676,12],
      [28,122], [234,123], [440,123], [632,123], [851,123],
      [1058,122],[1264,122], [1475,122], [1675,122], [34,232],
      [240,232],[446,231], [652,231], [858,231], [1064,231],
      [1270,231], [1476,229], [1682,228], [34,336], [240,335], [447,333]];
    this.frame_index = this.moveRight.length -1;
    this.frame = this.moveRight[this.frame_index];
  }


  updateFrame() {
    // if(--this.delay > 0){return;};
    // this.delay = 1;
    this.frame_index = (this.frame_index <= 0) ? this.moveRight.length-1 : this.frame_index - 1;
    this.frame = this.moveRight[this.frame_index];
  }
  draw(unicorn,ctx) {
    ctx.drawImage(unicorn, this.frame[0], this.frame[1],
      this.width, this.height, 0,0,
      this.width, this.height);
    this.updateFrame();

  };
}


module.exports = Player;

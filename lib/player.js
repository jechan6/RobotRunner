const MovingObject = require("./moving_object");
class Player extends MovingObject  {
  constructor(options = {}) {

    options.pos = [0,700];
    options.vel = [10,0];
    super(options);
    this.width = 158;
    this.height = 92;
    this.gravity = 2;
    this.velY = 0;
    this.moveRight = [[35,6], [241,9], [447,9], [652,10]
    , [859,10], [1064,11], [1270,12], [1471,12], [1676,12],
      [28,122], [234,123], [440,123], [632,123], [851,123],
      [1058,122],[1264,122], [1475,122], [1675,122], [34,232],
      [240,232],[446,231], [652,231], [858,231], [1064,231],
      [1270,231], [1476,229], [1682,228], [34,336], [240,335], [447,333]].reverse();
    this.jump = [[1578,747,133,133],[1404,748,133,131], [1229,748,135,130], [1052,752,140,121],
      [876,755,144,114], [700,757,147,107], [525,759,150,101], [349,761,153,95],
      [174,763,156,88], [0,765,157,85], [1740,628,157,82],
      [1566,630,158,78], [1392,632,158,74], [1219,633,158,71],
      [1045,634,159,73], [872,636,158,73]];
    this.jumping = false;
    this.frame_index = 0;
    this.frame_set = [this.moveRight, this.jump];
    this.key = 0;
    this.keyPressed = false;
    this.grounded = false;
    this.frame = this.frame_set[this.key][this.frame_index];
  }
  change(key) {
    if(key === "jump") {
      if(!this.jumping) {
        this.keyPressed = true;
        this.jumping = true;
        this.grounded = false;
        this.height = 120;
      }
    }
  }

  updateFrame() {

    if(this.keyPressed && this.jumping) {
      this.key = 1;
      this.velY = -30;
      this.keyPressed = false;
    }
    this.velY += this.gravity;
    this.pos[1] += this.velY;
    if (this.pos[1] + this.height > 800) {
      this.jumping = false;
      this.pos[1] = 700
      this.velY = 0;
      this.key = 0;
    }
    this.pos[0] += 5;
    this.frame_index = ++this.frame_index % this.frame_set[this.key].length;
    this.frame = this.frame_set[this.key][this.frame_index];
  }
  draw(unicorn,ctx) {
    if(this.jumping && this.key === 1) {
      this.width = this.frame[2];
      this.height = this.frame[3];
    } else {
      this.width = 158;
      this.height = 92;
    }
    ctx.drawImage(unicorn, this.frame[0], this.frame[1],
      this.width, this.height, this.pos[0],this.pos[1],
      this.width, this.height);
    this.updateFrame();
  };
}


module.exports = Player;

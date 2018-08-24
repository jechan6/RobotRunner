const MovingObject = require("./moving_object");
class Player extends MovingObject  {
  constructor(options = {}) {

    options.pos = [150,210];
    options.vel = [10,0];
    super(options);
    this.width = 158;
    this.height = 92;
    this.gravity = 4;
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
    this.explode = [[380,1834,397,174]];
    this.falling = [[629,334,162,124], [803,334,162,124], [977,334,162,124], [1151,334,162,124], [1325,334,162,124],
                    [1499,334,162,124], [1673,334,162,124], [1847,334,162,124], [11,473,162,123], [185,473,162,123],
                    [359,472,162,124], [533,472,162,124], [707,472,162,124], [881,472,162,124], [1055,472,162,124],
                    [1228,477,161,116], [1401,482,160,108], [1574,488,159,99], [1746,495,159,89]];
    this.jumping = false;
    this.frame_index = 0;
    this.frame_set = [this.moveRight, this.jump, this.explode, this.falling];
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
      this.velY = -50;
      this.keyPressed = false;
    }
    if(this.jumping) {
      this.velY += this.gravity;
    } else {
      // this.key = 3;
      this.velY += 9;
    }
    this.pos[1] += this.velY;
    if (this.pos[1] + this.height > 800) {
      this.jumping = false;
      this.velY = 0;
      this.key = 0;
    }
    this.frame_index = ++this.frame_index % this.frame_set[this.key].length;
    this.frame = this.frame_set[this.key][this.frame_index];
  }
  draw(unicorn,ctx) {

    if(this.jumping && this.key === 1) {
      this.width = this.frame[2];
      this.height = this.frame[3];

    } else if(this.key === 2) {
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

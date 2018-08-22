const Player = require("./player.js");
const Platforms = require("./platforms.js");
class Game {
  constructor(unicorn) {

    this.player = null;
    this.platforms = [];
    this.unicorn = unicorn;
    this.distance = 0;
    this.addPlayer();
    this.addPlatforms();
    this.background = new Image();
    this.background.src = "./lib/clouds.png";
    this.distance = 0;
  }
  isOutOfBounds(pos) {
    return (pos[0] < 0) || (pos[1] < 0) ||
      (pos[0] > Game.DIM_X) || (pos[1] > Game.DIM_Y);
  }
  addPlayer() {
    this.player = new Player({game: this});
  }
  addPlatforms() {
    this.platforms.push(new Platforms(300,650,200,50));
    this.platforms.push(new Platforms(650,500,150,20));
  }
  checkCollisions(player, object) {
    let x = (player.pos[0] + player.width/2) - (object.x + object.width/2);
    let y = (player.pos[1] + player.height/2) - (object.y + object.height/2);
    let halfWidth = (player.width/2) + (object.width/2);
    let halfHeight = (player.height/2) + (object.height/2);
    let collisionDir = null;
    if(Math.abs(x) < halfWidth && Math.abs(y) < halfHeight) {
      let vX = halfWidth - Math.abs(x);
      let vY = halfHeight - Math.abs(y);
      if(vX >= vY) {
        if(y<0) {
          collisionDir = "top";
          player.pos[1] -= vY;
        } else if(y>0) {
          collisionDir = "bottom";
          player.pos[1] += vY;
        }
      } else {
        if(x < 0) {
          collisionDir = "left";

          // player.pos[0] += x;
        }
      }
    }
    return collisionDir;
  }
  moveObjects(delta) {
    this.player.move(delta);
  }
  draw(ctx, time) {
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    // ctx.fillStyle = Game.BG_COLOR;
    // ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);
    this.scroll(time, ctx);
    this.player.draw(this.unicorn,ctx);
    ctx.fillStyle = "black";
    ctx.beginPath();
    for(let i = 0; i<this.platforms.length; i++) {
      this.platforms[i].draw(ctx);
      let dir = this.checkCollisions(this.player, this.platforms[i]);

      if(dir === "top") {
        this.player.grounded = true;
        this.player.jumping = false;
        this.player.key = 0;
      } else if(dir === "bottom") {
        this.player.velY *= -1;
      }

    }
    if(this.player.grounded){
         this.player.velY = 0;
    }
    this.player[1] += this.player.velY;
    ctx.fill();
  }
  updateScroll() {

  }
  scroll(time, ctx) {
    ctx.clearRect(0,0,Game.DIM_X,Game.DIM_Y);

    if(this.distance >= Game.DIM_X){
       this.distance = 0;
    }
    this.distance+=2;
    ctx.drawImage(this.background,Game.DIM_X-this.distance,0,this.distance,this.background.height, 0, 0, this.distance,this.background.height);
    ctx.drawImage(this.background,this.distance,0,this.background.width, this.background.height);
  }
  step(delta) {
    this.moveObjects(delta);
  // this.checkCollisions();
  }
}
Game.DIM_X = 1024;
Game.DIM_Y = 512;
// Game.BG_COLOR = "gray";
module.exports = Game;

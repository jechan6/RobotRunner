const Player = require("./player.js");
const Platforms = require("./platforms.js");
const _ = require('lodash');
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
    this.speed = 5;
    this.capSpeed = 12;
    this.score = 0;
    this.ogPlatforms = _.cloneDeep(this.platforms);

  }
  isOutOfBounds(pos) {
    return (pos[0] < 0) || (pos[1] < 0) ||
      (pos[0] > Game.DIM_X) || (pos[1] > Game.DIM_Y);
  }
  addPlayer() {
    this.player = new Player({game: this});
  }
  addPlatforms() {
    this.platforms.push(new Platforms(200,350,200,50));
    this.platforms.push(new Platforms(600,250,150,20));
    this.platforms.push(new Platforms(800,150,100,20));
    this.platforms.push(new Platforms(1100,200,250,20));
    this.platforms.push(new Platforms(1250,230,250,20));
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
        }
      }
    }
    return collisionDir;
  }
  moveObjects(delta) {
    this.player.move(delta);
  }
  createPlatforms(i) {
    let newX = this.ogPlatforms[i].x + 1024;
    let newY = Math.floor((Math.random() * 200)) + 50;
    let width = this.ogPlatforms[i].width;
    let height = Math.floor((Math.random() * 50) + 10);
    return new Platforms(newX, newY, width, height);
  }
  increaseSpeed() {
    if(this.maxSpeed !== this.speed) {
      if(this.score % 300 === 0) {
          this.speed++;
      }
    }
  }
  gameOver() {
    if(this.player.pos[1] > Game.DIM_Y) {

      return true;
    }
    return false;
  }
  draw(ctx, time) {
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    this.scroll(time, ctx);
    this.score++;

    this.player.draw(this.unicorn,ctx);
    ctx.fillStyle = "black";
    ctx.beginPath();
    let newPlatforms;
    this.increaseSpeed();
    for(let i = 0; i<this.platforms.length; i++) {
      if(this.platforms[i]) {
        this.platforms[i].draw(ctx);
      }
      let dir = this.checkCollisions(this.player, this.platforms[i]);
      this.platforms[i].x -= this.speed;

        if(this.platforms[i].x + this.platforms[i].width < 0) {
          if(this.platforms[this.platforms.length-1].x < 800) {
            newPlatforms = this.createPlatforms(i);
            this.platforms.push(newPlatforms);
            this.platforms.splice(i,1);
          }
        }

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

  scroll(time, ctx) {
    ctx.clearRect(0,0,Game.DIM_X,Game.DIM_Y);

    if(this.distance >= Game.DIM_X){
       this.distance = 0;
    }
    this.distance += this.speed;
    // ctx.drawImage(this.background,Game.DIM_X-this.distance,0,this.distance,this.background.height, 0, 0, this.distance,this.background.height);
    // ctx.drawImage(this.background,this.distance,0,this.background.width, this.background.height);
    ctx.drawImage(this.background,-this.distance,0,this.background.width, this.background.height);
    ctx.drawImage(this.background,this.background.width-this.distance,0,this.background.width, this.background.height);

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

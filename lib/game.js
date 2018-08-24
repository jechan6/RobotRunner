const Player = require("./player.js");
const Platforms = require("./platforms.js");
const _ = require('lodash');
const sound = require("./sound.js");
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
    this.speed = 6;
    this.capSpeed = 11;
    this.score = 0;
    this.ogPlatforms = _.cloneDeep(this.platforms);
    this.scoreEl = document.getElementsByClassName("score-text")[0];
    this.bombSound = new sound("./lib/bomb.mp3");
    this.bombSound.volume = 0.1;
  }
  isOutOfBounds(pos) {
    return (pos[0] < 0) || (pos[1] < 0) ||
      (pos[0] > Game.DIM_X) || (pos[1] > Game.DIM_Y);
  }
  addPlayer() {
    this.player = new Player({game: this});
  }
  addPlatforms() {
    this.platforms.push(new Platforms(200,350,224,80));
    this.platforms.push(new Platforms(500,250,224,80));
    this.platforms.push(new Platforms(750,150,224,80));
    this.platforms.push(new Platforms(1050,200,224,80));
    this.platforms.push(new Platforms(1400,230,224,80));
  }
  checkCollisions(player, object) {
    let playerX  = player.pos[0];
    let playerY = player.pos[1];
    let collisionDir = null;

    if (playerX < object.x + object.width &&
      playerX + player.width > object.x && playerY < object.y + object.height &&
      player.height + playerY > object.y) {
       let y = (playerY + player.height/2) - (object.y + object.height/2);
       let x = (playerX + player.width/2) - (object.x + object.width/2);
       let vY = (player.height/2 + object.height/2) - Math.abs(y);
       let vX = (player.width/2 + object.width/2) - Math.abs(x);
       if(vX >= vY) {
         if(y<0) {
           collisionDir = "top";
           player.pos[1] -= vY;
           this.player.key = 0;
         } else if(y>=0) {
          collisionDir = "bottom";
          player.pos[1] += vY;
         }
       } else {
         if(x<-60) {
         }
       }
    }
      return collisionDir;

  }
  moveObjects(delta) {
    this.player.move(delta);
  }

  createPlatforms(i) {
    let offset = 1024;


    offset += (offset%this.speed + (this.speed * this.speed) * 1.5 );


    let newX = this.ogPlatforms[i].x + offset;
    let newY = Math.floor((Math.random() * 200)) + 50;
    let width = this.ogPlatforms[i].width;
    let height = 80;
    return new Platforms(newX, newY, width, height);
  }

  increaseSpeed() {
    if(this.speed < this.capSpeed) {

      this.speed+= .01;

    }
  }
  gameOver() {
    if(this.player.pos[1] > Game.DIM_Y - 150) {
      this.player.key = 2;
      if(this.player.pos[1] >= Game.DIM_Y-100) {
        this.bombSound.volume = .1;
        this.bombSound.play();
        return true;
      }
    }

    return false;
  }
  draw(ctx, time) {

    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    this.scroll(time, ctx);
    this.score++;
    document.getElementsByClassName("score-text")[0].innerHTML = "Score: " + Math.floor(this.score/5);
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
          if(this.platforms[this.platforms.length-1].x < 900) {
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
        this.bombSound.play();
        this.ctx = null;
        this.player.key = 2;
        return;
      } else if(dir === "left") {
        this.gameLost = true;
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

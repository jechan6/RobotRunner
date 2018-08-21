const Player = require("./player.js");
class Game {
  constructor(unicorn) {

    this.player = null;
    this.unicorn = unicorn;
    this.addPlayer();
  }
  isOutOfBounds(pos) {
    return (pos[0] < 0) || (pos[1] < 0) ||
      (pos[0] > Game.DIM_X) || (pos[1] > Game.DIM_Y);
  }
  addPlayer() {
    this.player = new Player({game: this});
  }

  moveObjects(delta) {
    this.player.move(delta);
  }
  draw(ctx) {
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    ctx.fillStyle = Game.BG_COLOR;
    ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);
    this.player.draw(this.unicorn,ctx);
  }
  step(delta) {
    this.moveObjects(delta);
  // this.checkCollisions();
  }
}
Game.DIM_X = 800;
Game.DIM_Y = 800;
Game.BG_COLOR = "gray";
module.exports = Game;

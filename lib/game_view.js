class GameView {
  constructor(game, ctx) {
    this.ctx = ctx;
    this.game = game;
  }
  bindKeyHandlers() {
    const player = this.game.player;
    key("z", () => {player.change("jump")});
  }

  start() {
    this.lastTime = 0;
    this.bindKeyHandlers();
    requestAnimationFrame(this.animate.bind(this));
  }

  animate(time) {
    const timeDelta = time - this.lastTime;

    if(!this.game.gameOver()) {
      this.game.draw(this.ctx, time);
      this.lastTime = time;
      requestAnimationFrame(this.animate.bind(this));
    } else {
      console.log("GAME OVER");
    }

  }
}

module.exports = GameView;

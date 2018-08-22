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
    // this.game.step(timeDelta);
    // this.game.scroll(timeDelta,this.ctx);
    this.game.draw(this.ctx, time);
    this.lastTime = time;
    // every call to animate requests causes another call to animate
    requestAnimationFrame(this.animate.bind(this));
  }
}

module.exports = GameView;

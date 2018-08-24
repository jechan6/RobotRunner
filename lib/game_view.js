class GameView {
  constructor(game, ctx) {
    this.ctx = ctx;
    this.game = game;
    this.restart = false;
  }
  bindKeyHandlers() {
    const player = this.game.player;
    key("z", () => {player.change("jump")});
  }

  start() {
    this.lastTime = 0;
    this.bindKeyHandlers();
    document.getElementById("first").innerHTML = "1st: " + localStorage.getItem("first");
    document.getElementById("second").innerHTML = "2nd: " + localStorage.getItem("second");
    document.getElementById("third").innerHTML = "3rd: " + localStorage.getItem("third");
    requestAnimationFrame(this.animate.bind(this));
  }

  animate(time) {
    const timeDelta = time - this.lastTime;
    if(this.restart) {
      this.ctx = null;
      return;
    }
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

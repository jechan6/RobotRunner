class GameView {
  constructor(game, ctx,sound) {
    this.ctx = ctx;
    this.game = game;
    this.restart = false;
    this.sound = sound;
  }
  bindKeyHandlers() {
    const player = this.game.player;

    key("z", () => {
      player.change("jump")
    });
    key("n", () => {
      this.sound.play();
    })
    key("m", () => {
      this.sound.stop();
    });
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
      let scoreTmp = Math.floor(this.game.score/5);
      if(scoreTmp > localStorage.getItem("first")) {
        localStorage.setItem("first", scoreTmp);
      } else if(scoreTmp > localStorage.getItem("second")) {
        debugger;
        localStorage.setItem("second", scoreTmp);
      } else if(scoreTmp > localStorage.getItem("third")) {
        localStorage.setItem("third", scoreTmp);
      }

    }

  }
}

module.exports = GameView;

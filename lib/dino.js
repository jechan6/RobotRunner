const Animation = require("./animation.js");
const Player = require("./player.js");
const Game = require("./game.js");
const GameView = require("./game_view.js");
document.addEventListener("DOMContentLoaded", function(event) {
  const canvas = document.getElementById('game-canvas');
  let ctx = canvas.getContext('2d');
  canvas.width = 1024;
  canvas.height = 512;
  const restart = document.getElementsByClassName("restart-btn")[0];
  // var audio = document.getElementById("audio");
  // audio.autoplay = true;
  // audio.load();
  // audio.play();
  let unicorn = new Image();
  unicorn.src = "./lib/unicorn.png";
  if(!localStorage.getItem("first")) {
    localStorage.setItem("first", this.score);
    localStorage.setItem("second", 0);
    localStorage.setItem("third", 0);
  }
  let game = new Game(unicorn);
  let gameView = new GameView(game,ctx);
  restart.addEventListener("click", () => {

    gameView.restart = true;
    ctx = canvas.getContext('2d');
    game = new Game(unicorn);
    gameView = new GameView(game,ctx);
    gameView.start();
  });
  gameView.start();

});

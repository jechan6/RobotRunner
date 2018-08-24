
const Player = require("./player.js");
const Game = require("./game.js");
const GameView = require("./game_view.js");
const sound = require("./sound.js");

document.addEventListener("DOMContentLoaded", function(event) {
  const canvas = document.getElementById('game-canvas');
  let ctx = canvas.getContext('2d');
  canvas.width = 1024;
  canvas.height = 512;
  const restart = document.getElementsByClassName("restart-btn")[0];

  let unicorn = new Image();
  unicorn.src = "./lib/unicorn.png";
  if(!localStorage.getItem("first")) {
    localStorage.setItem("first", 0);
    localStorage.setItem("second", 0);
    localStorage.setItem("third", 0);
  }

  const mySound = new sound("./lib/App_my_first.mp3");
  let game = new Game(unicorn);
  let gameView = new GameView(game,ctx, mySound);
  restart.addEventListener("click", () => {

    gameView.restart = true;
    ctx = canvas.getContext('2d');
    game = new Game(unicorn);
    gameView = new GameView(game,ctx,mySound);
    gameView.start();
  });
  gameView.start();

});

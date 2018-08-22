const Animation = require("./animation.js");
const Player = require("./player.js");
const Game = require("./game.js");
const GameView = require("./game_view.js");
document.addEventListener("DOMContentLoaded", function(event) {
  const canvas = document.getElementById('game-canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = 1440;
  canvas.height = 900;

  let unicorn = new Image();
  unicorn.src = "./lib/unicorn.png";

  const game = new Game(unicorn);
  new GameView(game,ctx).start();
  // // const animation = new Animation(ctx,unicorn);
  // player.draw(unicorn, ctx);
});

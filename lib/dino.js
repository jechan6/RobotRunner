const Animation = require("./animation.js");
document.addEventListener("DOMContentLoaded", function(event) {
  const canvas = document.getElementById('game-canvas').getContext('2d');
  console.log(canvas);
  let unicorn = new Image();
  unicorn.src = "./lib/dino-sheet.png";
  const animation = new Animation(canvas,unicorn);
  animation.loop();
});

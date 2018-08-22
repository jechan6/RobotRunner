/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/dino.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/animation.js":
/*!**************************!*\
  !*** ./lib/animation.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\nclass Animation {\n  constructor(ctx,img) {\n    this.count = 0;\n    this.ctx = ctx;\n    this.img = img;\n    this.frame = 0;\n    this.x_vel = 0;\n    this.y_vel = 0;\n    this.sheetWidth = 5030;\n    this.sheetHeight = 118;\n    this.cols = 28;\n    this.rows = 1;\n    this.width = this.sheetWidth/this.cols;\n    this.height = this.sheetHeight/this.rows;\n    this.srcX = 0;\n    this.srcY = 0;\n    this.delay = 8;\n  }\n\n  change(frame_set, delay = 8) {\n\n  }\n\n  updateFrame() {\n    if(--this.delay > 0){return;};\n    this.delay = 8;\n    this.frame = ++this.frame % 8;\n    this.srcX = this.frame * this.width;\n    this.srcY = 0;\n    this.x_vel += 10;\n    this.ctx.clearRect(this.x_vel,this.y_vel,this.width,this.height);\n  }\n\n  drawImage() {\n    this.updateFrame();\n    this.ctx.fillStyle = 'GREEN';\n    this.ctx.fillRect(0,0,800, 800);\n    this.ctx.drawImage(this.img, this.srcX, this.srcY,\n    this.width, this.height, this.x_vel,this.y_vel,\n    this.width, this.height);\n  }\n  loop() {\n    this.drawImage();\n    requestAnimationFrame(this.loop.bind(this));\n  }\n}\n\n\nmodule.exports = Animation;\n\n\n//# sourceURL=webpack:///./lib/animation.js?");

/***/ }),

/***/ "./lib/dino.js":
/*!*********************!*\
  !*** ./lib/dino.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Animation = __webpack_require__(/*! ./animation.js */ \"./lib/animation.js\");\nconst Player = __webpack_require__(/*! ./player.js */ \"./lib/player.js\");\nconst Game = __webpack_require__(/*! ./game.js */ \"./lib/game.js\");\nconst GameView = __webpack_require__(/*! ./game_view.js */ \"./lib/game_view.js\");\ndocument.addEventListener(\"DOMContentLoaded\", function(event) {\n  const canvas = document.getElementById('game-canvas');\n  const ctx = canvas.getContext('2d');\n  canvas.width = 1440;\n  canvas.height = 900;\n\n  let unicorn = new Image();\n  unicorn.src = \"./lib/unicorn.png\";\n\n  const game = new Game(unicorn);\n  new GameView(game,ctx).start();\n  // // const animation = new Animation(ctx,unicorn);\n  // player.draw(unicorn, ctx);\n});\n\n\n//# sourceURL=webpack:///./lib/dino.js?");

/***/ }),

/***/ "./lib/game.js":
/*!*********************!*\
  !*** ./lib/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Player = __webpack_require__(/*! ./player.js */ \"./lib/player.js\");\nconst Platforms = __webpack_require__(/*! ./platforms.js */ \"./lib/platforms.js\");\nclass Game {\n  constructor(unicorn) {\n\n    this.player = null;\n    this.platforms = [];\n    this.unicorn = unicorn;\n    this.distance = 0;\n    this.addPlayer();\n    this.addPlatforms();\n    this.background = new Image();\n    this.background.src = \"./lib/castle.jpg\";\n  }\n  isOutOfBounds(pos) {\n    return (pos[0] < 0) || (pos[1] < 0) ||\n      (pos[0] > Game.DIM_X) || (pos[1] > Game.DIM_Y);\n  }\n  addPlayer() {\n    this.player = new Player({game: this});\n  }\n  addPlatforms() {\n    this.platforms.push(new Platforms(300,650,200,50));\n    this.platforms.push(new Platforms(650,500,150,20));\n  }\n  checkCollisions(player, object) {\n    let x = (player.pos[0] + player.width/2) - (object.x + object.width/2);\n    let y = (player.pos[1] + player.height/2) - (object.y + object.height/2);\n    let halfWidth = (player.width/2) + (object.width/2);\n    let halfHeight = (player.height/2) + (object.height/2);\n    let collisionDir = null;\n    if(Math.abs(x) < halfWidth && Math.abs(y) < halfHeight) {\n      let vX = halfWidth - Math.abs(x);\n      let vY = halfHeight - Math.abs(y);\n      if(vX >= vY) {\n        if(y<0) {\n          collisionDir = \"top\";\n          player.pos[1] -= vY;\n        } else if(y>0) {\n          collisionDir = \"bottom\";\n          player.pos[1] += vY;\n        }\n      } else {\n        if(x < 0) {\n          collisionDir = \"left\";\n\n          // player.pos[0] += x;\n        }\n      }\n    }\n    return collisionDir;\n  }\n  moveObjects(delta) {\n    this.player.move(delta);\n  }\n  draw(ctx, time) {\n    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);\n    // ctx.fillStyle = Game.BG_COLOR;\n    // ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);\n    // this.scroll(time, ctx);\n    this.player.draw(this.unicorn,ctx);\n    ctx.fillStyle = \"black\";\n    ctx.beginPath();\n    for(let i = 0; i<this.platforms.length; i++) {\n      this.platforms[i].draw(ctx);\n      let dir = this.checkCollisions(this.player, this.platforms[i]);\n\n      if(dir === \"top\") {\n        this.player.grounded = true;\n        this.player.jumping = false;\n        this.player.key = 0;\n      } else if(dir === \"bottom\") {\n        this.player.velY *= -1;\n      }\n\n    }\n    if(this.player.grounded){\n         this.player.velY = 0;\n    }\n    this.player[1] += this.player.velY;\n    ctx.fill();\n  }\n  calcOffset(time) {\n    let vel = 10;\n    return vel *(time/1000);\n  }\n  scroll(time, ctx) {\n    this.distance += this.calcOffset(time);\n    if(this.distance > this.background.width) {\n      this.distance = 0;\n    }\n    ctx.save();\n    ctx.translate(this.distance,0);\n\n    ctx.drawImage(this.background,-this.background.width+1,0);\n    ctx.drawImage(this.background,0,0);\n    // requestAnimationFrame(this.scroll.bind(this));\n    ctx.restore();\n  }\n  step(delta) {\n    this.moveObjects(delta);\n  // this.checkCollisions();\n  }\n}\nGame.DIM_X = 800;\nGame.DIM_Y = 800;\nGame.BG_COLOR = \"gray\";\nmodule.exports = Game;\n\n\n//# sourceURL=webpack:///./lib/game.js?");

/***/ }),

/***/ "./lib/game_view.js":
/*!**************************!*\
  !*** ./lib/game_view.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class GameView {\n  constructor(game, ctx) {\n    this.ctx = ctx;\n    this.game = game;\n  }\n  bindKeyHandlers() {\n    const player = this.game.player;\n    key(\"z\", () => {player.change(\"jump\")});\n  }\n\n  start() {\n    this.lastTime = 0;\n    this.bindKeyHandlers();\n    requestAnimationFrame(this.animate.bind(this));\n  }\n\n  animate(time) {\n    const timeDelta = time - this.lastTime;\n    // this.game.step(timeDelta);\n    // this.game.scroll(timeDelta,this.ctx);\n    this.game.draw(this.ctx, time);\n    this.lastTime = time;\n    // every call to animate requests causes another call to animate\n    requestAnimationFrame(this.animate.bind(this));\n  }\n}\n\nmodule.exports = GameView;\n\n\n//# sourceURL=webpack:///./lib/game_view.js?");

/***/ }),

/***/ "./lib/moving_object.js":
/*!******************************!*\
  !*** ./lib/moving_object.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class MovingObject {\n  constructor(options) {\n    this.pos = options.pos;\n    this.vel = options.vel;\n    this.game = options.game;\n  }\n\n  move(timeDelta) {\n    const velocityScale = timeDelta / NORMAL_FRAME_TIME_DELTA,\n       offsetX = this.vel[0] * velocityScale,\n       offsetY = this.vel[1] * velocityScale;\n    this.pos = [this.pos[0] + offsetX, this.pos[1] + offsetY];\n    // if (this.game.isOutOfBounds(this.pos)) {\n    //\n    //     this.pos = [0,400];\n    //\n    // }\n  }\n}\n\nconst NORMAL_FRAME_TIME_DELTA = 1000 / 60;\nmodule.exports = MovingObject;\n\n\n//# sourceURL=webpack:///./lib/moving_object.js?");

/***/ }),

/***/ "./lib/platforms.js":
/*!**************************!*\
  !*** ./lib/platforms.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class Platforms {\n  constructor(x,y,width,height) {\n    this.x=x,\n    this.y = y,\n    this.width = width;\n    this.height = height;\n  }\n  draw(ctx) {\n    ctx.rect(this.x,this.y,this.width, this.height);\n  }\n}\n\nmodule.exports = Platforms;\n\n\n//# sourceURL=webpack:///./lib/platforms.js?");

/***/ }),

/***/ "./lib/player.js":
/*!***********************!*\
  !*** ./lib/player.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object */ \"./lib/moving_object.js\");\nclass Player extends MovingObject  {\n  constructor(options = {}) {\n\n    options.pos = [0,700];\n    options.vel = [10,0];\n    super(options);\n    this.width = 158;\n    this.height = 92;\n    this.gravity = 2;\n    this.velY = 0;\n    this.moveRight = [[35,6], [241,9], [447,9], [652,10]\n    , [859,10], [1064,11], [1270,12], [1471,12], [1676,12],\n      [28,122], [234,123], [440,123], [632,123], [851,123],\n      [1058,122],[1264,122], [1475,122], [1675,122], [34,232],\n      [240,232],[446,231], [652,231], [858,231], [1064,231],\n      [1270,231], [1476,229], [1682,228], [34,336], [240,335], [447,333]].reverse();\n    this.jump = [[1578,747,133,133],[1404,748,133,131], [1229,748,135,130], [1052,752,140,121],\n      [876,755,144,114], [700,757,147,107], [525,759,150,101], [349,761,153,95],\n      [174,763,156,88], [0,765,157,85], [1740,628,157,82],\n      [1566,630,158,78], [1392,632,158,74], [1219,633,158,71],\n      [1045,634,159,73], [872,636,158,73]];\n    this.jumping = false;\n    this.frame_index = 0;\n    this.frame_set = [this.moveRight, this.jump];\n    this.key = 0;\n    this.keyPressed = false;\n    this.grounded = false;\n    this.frame = this.frame_set[this.key][this.frame_index];\n  }\n  change(key) {\n    if(key === \"jump\") {\n      if(!this.jumping) {\n        this.keyPressed = true;\n        this.jumping = true;\n        this.grounded = false;\n        this.height = 120;\n      }\n    }\n  }\n\n  updateFrame() {\n\n    if(this.keyPressed && this.jumping) {\n      this.key = 1;\n      this.velY = -30;\n      this.keyPressed = false;\n    }\n    this.velY += this.gravity;\n    this.pos[1] += this.velY;\n    if (this.pos[1] + this.height > 800) {\n      this.jumping = false;\n      this.pos[1] = 700\n      this.velY = 0;\n      this.key = 0;\n    }\n    this.pos[0] += 5;\n    this.frame_index = ++this.frame_index % this.frame_set[this.key].length;\n    this.frame = this.frame_set[this.key][this.frame_index];\n  }\n  draw(unicorn,ctx) {\n    if(this.jumping && this.key === 1) {\n      this.width = this.frame[2];\n      this.height = this.frame[3];\n    } else {\n      this.width = 158;\n      this.height = 92;\n    }\n    ctx.drawImage(unicorn, this.frame[0], this.frame[1],\n      this.width, this.height, this.pos[0],this.pos[1],\n      this.width, this.height);\n    this.updateFrame();\n  };\n}\n\n\nmodule.exports = Player;\n\n\n//# sourceURL=webpack:///./lib/player.js?");

/***/ })

/******/ });
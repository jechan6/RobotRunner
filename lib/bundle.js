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

eval("const Animation = __webpack_require__(/*! ./animation.js */ \"./lib/animation.js\");\nconst Player = __webpack_require__(/*! ./player.js */ \"./lib/player.js\");\nconst Game = __webpack_require__(/*! ./game.js */ \"./lib/game.js\");\nconst GameView = __webpack_require__(/*! ./game_view.js */ \"./lib/game_view.js\");\ndocument.addEventListener(\"DOMContentLoaded\", function(event) {\n  const canvas = document.getElementById('game-canvas');\n  const ctx = canvas.getContext('2d');\n  canvas.width = 800;\n  canvas.height = 800;\n\n  let unicorn = new Image();\n  unicorn.src = \"./lib/unicorn.png\";\n\n  const game = new Game(unicorn);\n  new GameView(game,ctx).start();\n  // // const animation = new Animation(ctx,unicorn);\n  // player.draw(unicorn, ctx);\n});\n\n\n//# sourceURL=webpack:///./lib/dino.js?");

/***/ }),

/***/ "./lib/game.js":
/*!*********************!*\
  !*** ./lib/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Player = __webpack_require__(/*! ./player.js */ \"./lib/player.js\");\nclass Game {\n  constructor(unicorn) {\n\n    this.player = null;\n    this.unicorn = unicorn;\n    this.addPlayer();\n  }\n\n  addPlayer() {\n    this.player = new Player({game: this});\n  }\n\n  moveObjects(delta) {\n    this.player.move(delta);\n  }\n  draw(ctx) {\n    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);\n    ctx.fillStyle = Game.BG_COLOR;\n    ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);\n    this.player.draw(this.unicorn,ctx);\n  }\n  step(delta) {\n    this.moveObjects(delta);\n  // this.checkCollisions();\n  }\n}\nGame.DIM_X = 800;\nGame.DIM_Y = 800;\nGame.BG_COLOR = \"gray\";\nmodule.exports = Game;\n\n\n//# sourceURL=webpack:///./lib/game.js?");

/***/ }),

/***/ "./lib/game_view.js":
/*!**************************!*\
  !*** ./lib/game_view.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class GameView {\n  constructor(game, ctx) {\n    this.ctx = ctx;\n    this.game = game;\n  }\n  start() {\n    this.lastTime = 0;\n    requestAnimationFrame(this.animate.bind(this));\n  }\n  animate(time) {\n    const timeDelta = time - this.lastTime;\n    // this.game.step(timeDelta);\n\n    this.game.draw(this.ctx);\n    this.lastTime = time;\n    // every call to animate requests causes another call to animate\n    requestAnimationFrame(this.animate.bind(this));\n  }\n}\n\nmodule.exports = GameView;\n\n\n//# sourceURL=webpack:///./lib/game_view.js?");

/***/ }),

/***/ "./lib/moving_object.js":
/*!******************************!*\
  !*** ./lib/moving_object.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class MovingObject {\n  constructor(options) {\n    this.pos = options.pos;\n    this.vel = options.vel;\n    this.game = options.game;\n  }\n\n  move(timeDelta) {\n    const velocityScale = timeDelta / NORMAL_FRAME_TIME_DELTA,\n       offsetX = this.vel[0] * velocityScale,\n       offsetY = this.vel[1] * velocityScale;\n    this.pos = [this.pos[0] + offsetX, this.pos[1] + offsetY];\n  }\n}\n\nconst NORMAL_FRAME_TIME_DELTA = 1000 / 60;\nmodule.exports = MovingObject;\n\n\n//# sourceURL=webpack:///./lib/moving_object.js?");

/***/ }),

/***/ "./lib/player.js":
/*!***********************!*\
  !*** ./lib/player.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object */ \"./lib/moving_object.js\");\nclass Player extends MovingObject  {\n  constructor(options = {}) {\n\n    options.pos = [0,0];\n    options.vel = [10,0];\n    super(options);\n    // this.draw = this.draw.bind(this);\n\n\n    this.width = 158;\n    this.height = 92;\n    this.moveRight = [[35,6], [241,9], [447,9], [652,10]\n    , [859,10], [1064,11], [1270,12], [1471,12], [1676,12],\n      [28,122], [234,123], [440,123], [632,123], [851,123],\n      [1058,122],[1264,122], [1475,122], [1675,122], [34,232],\n      [240,232],[446,231], [652,231], [858,231], [1064,231],\n      [1270,231], [1476,229], [1682,228], [34,336], [240,335], [447,333]];\n    this.frame_index = this.moveRight.length -1;\n    this.frame = this.moveRight[this.frame_index];\n  }\n\n\n  updateFrame() {\n    // if(--this.delay > 0){return;};\n    // this.delay = 1;\n    this.frame_index = (this.frame_index <= 0) ? this.moveRight.length-1 : this.frame_index - 1;\n    this.frame = this.moveRight[this.frame_index];\n  }\n  draw(unicorn,ctx) {\n    ctx.drawImage(unicorn, this.frame[0], this.frame[1],\n      this.width, this.height, 0,0,\n      this.width, this.height);\n    this.updateFrame();\n\n  };\n}\n\n\nmodule.exports = Player;\n\n\n//# sourceURL=webpack:///./lib/player.js?");

/***/ })

/******/ });
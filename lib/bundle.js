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

eval("\nclass Animation {\n  constructor(ctx,img) {\n    this.count = 0;\n    this.numRender = 0;\n    this.ctx = ctx;\n    this.img = img;\n    this.frame = 0;\n    this.sheetWidth = 5030;\n    this.sheetHeight = 118;\n    this.cols = 28;\n    this.rows = 1;\n    this.width = this.sheetWidth/this.cols;\n    this.height = this.sheetHeight/this.rows;\n    this.srcX = 0;\n    this.srcY = 0;\n    this.delay = 8;\n  }\n\n  change(frame_set, delay = 15) {\n\n  }\n\n  updateFrame() {\n    if(--this.delay > 0){return;};\n    this.delay = 8;\n    this.frame = ++this.frame % 8;\n    this.srcX = this.frame * this.width;\n\n    this.srcY = 0;\n    this.ctx.clearRect(0,0,this.width,this.height);\n  }\n  drawImage() {\n    // this.ctx.clearRect(0, 0,1000,1000);\n    // this.ctx.fillStyle = 'GREEN';\n    // this.ctx.fillRect(0,0,1000, 1000);\n    this.updateFrame();\n    this.ctx.drawImage(this.img, this.srcX, this.srcY,\n    this.width, this.height, 0,0,\n    this.width, this.height);\n  }\n  loop() {\n    this.drawImage();\n    requestAnimationFrame(this.loop.bind(this));\n  }\n}\n\n\nmodule.exports = Animation;\n\n\n//# sourceURL=webpack:///./lib/animation.js?");

/***/ }),

/***/ "./lib/dino.js":
/*!*********************!*\
  !*** ./lib/dino.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Animation = __webpack_require__(/*! ./animation.js */ \"./lib/animation.js\");\ndocument.addEventListener(\"DOMContentLoaded\", function(event) {\n  const canvas = document.getElementById('game-canvas').getContext('2d');\n  console.log(canvas);\n  let unicorn = new Image();\n  unicorn.src = \"./lib/dino-sheet.png\";\n  const animation = new Animation(canvas,unicorn);\n  animation.loop();\n});\n\n\n//# sourceURL=webpack:///./lib/dino.js?");

/***/ })

/******/ });
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ts/navbar-effects.ts":
/*!**********************************!*\
  !*** ./src/ts/navbar-effects.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   NavbarEffects: () => (/* binding */ NavbarEffects)\n/* harmony export */ });\nclass NavbarEffects {\n    constructor() {\n        this.lastScroll = 0;\n        this.navbar = document.getElementById('navbar');\n        this.init();\n    }\n    init() {\n        if (!this.navbar)\n            return;\n        window.addEventListener('scroll', () => this.handleScroll());\n        this.handleScroll(); // Executa imediatamente para estado inicial\n    }\n    handleScroll() {\n        if (!this.navbar)\n            return;\n        const currentScroll = window.pageYOffset;\n        if (currentScroll <= 10) {\n            // No topo da página\n            this.navbar.classList.remove('navbar-scrolled');\n            this.navbar.classList.remove('shadow-lg');\n        }\n        else {\n            // Rolando para baixo\n            this.navbar.classList.add('navbar-scrolled');\n            if (currentScroll > this.lastScroll && currentScroll > 100) {\n                // Rolando para baixo - esconde navbar\n                this.navbar.style.transform = 'translateY(-100%)';\n            }\n            else {\n                // Rolando para cima - mostra navbar\n                this.navbar.style.transform = 'translateY(0)';\n            }\n        }\n        this.lastScroll = currentScroll;\n    }\n}\n// Inicializa\ndocument.addEventListener('DOMContentLoaded', () => {\n    new NavbarEffects();\n});\n\n\n//# sourceURL=webpack://cleython/./src/ts/navbar-effects.ts?\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/ts/navbar-effects.ts"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;
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

/***/ "./src/ts/components/navbar.ts":
/*!*************************************!*\
  !*** ./src/ts/components/navbar.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Navbar: () => (/* binding */ Navbar)\n/* harmony export */ });\n// src/ts/components/navbar.ts\nclass Navbar {\n    constructor() {\n        this.initTheme();\n    }\n    initTheme() {\n        var _a;\n        // Verifica se já tem tema definido\n        const savedTheme = localStorage.getItem('theme');\n        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;\n        // Aplica o tema inicial\n        const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');\n        this.applyTheme(initialTheme, false); // false = não salva no localStorage\n        // Configura o toggle\n        (_a = document.getElementById('theme-toggle')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {\n            const isDark = !document.documentElement.classList.contains('dark');\n            this.applyTheme(isDark ? 'dark' : 'light');\n        });\n    }\n    applyTheme(theme, saveToStorage = true) {\n        console.log(`Aplicando tema: ${theme}`);\n        // Aplica as classes\n        document.documentElement.classList.toggle('dark', theme === 'dark');\n        document.body.classList.toggle('dark', theme === 'dark');\n        // Atualiza o ícone\n        this.updateThemeIcon(theme);\n        // Salva preferência\n        if (saveToStorage) {\n            localStorage.setItem('theme', theme);\n        }\n    }\n    updateThemeIcon(theme) {\n        var _a;\n        const iconPath = (_a = document.getElementById('theme-toggle')) === null || _a === void 0 ? void 0 : _a.querySelector('path');\n        if (!iconPath)\n            return;\n        const iconPaths = {\n            dark: 'M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z',\n            light: 'M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z'\n        };\n        iconPath.setAttribute('d', iconPaths[theme]);\n    }\n    static init() {\n        if (!Navbar.instance) {\n            Navbar.instance = new Navbar();\n        }\n        return Navbar.instance;\n    }\n}\n\n\n//# sourceURL=webpack://cleython/./src/ts/components/navbar.ts?\n}");

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
/******/ 	__webpack_modules__["./src/ts/components/navbar.ts"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;
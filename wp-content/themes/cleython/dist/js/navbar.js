/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ts/navbar.ts":
/*!**************************!*\
  !*** ./src/ts/navbar.ts ***!
  \**************************/
/***/ (() => {

eval("{var Navbar = /** @class */ (function () {\n    function Navbar() {\n        this.init();\n    }\n    Navbar.prototype.init = function () {\n        this.render();\n        this.setupEventListeners();\n    };\n    Navbar.prototype.render = function () {\n        var navbar = document.getElementById('navbar');\n        if (!navbar)\n            return;\n        navbar.innerHTML = \"\\n      <div class=\\\"container mx-auto px-4\\\">\\n        <div class=\\\"flex justify-between items-center py-4\\\">\\n          <a href=\\\"/\\\" class=\\\"text-2xl font-bold text-indigo-600\\\">\".concat(this.getSiteName(), \"</a>\\n          <div class=\\\"hidden md:flex space-x-8\\\">\\n            \").concat(this.renderMenuItems(), \"\\n          </div>\\n          <button id=\\\"mobileMenuButton\\\" class=\\\"md:hidden\\\">\\n            <!-- \\u00CDcone do menu mobile -->\\n          </button>\\n        </div>\\n      </div>\\n    \");\n    };\n    Navbar.prototype.getSiteName = function () {\n        var _a, _b;\n        return ((_b = (_a = document.querySelector('title')) === null || _a === void 0 ? void 0 : _a.textContent) === null || _b === void 0 ? void 0 : _b.split('|')[0]) || 'Meu Site';\n    };\n    Navbar.prototype.renderMenuItems = function () {\n        return \"\\n      <a href=\\\"/\\\" class=\\\"nav-link\\\">Home</a>\\n      <a href=\\\"/sobre-nos\\\" class=\\\"nav-link\\\">Sobre N\\u00F3s</a>\\n      <a href=\\\"/contato\\\" class=\\\"nav-link\\\">Contato</a>\\n    \";\n    };\n    Navbar.prototype.setupEventListeners = function () {\n        // Adicione listeners para menu mobile\n    };\n    return Navbar;\n}());\n// Inicializa quando o DOM estiver pronto\ndocument.addEventListener('DOMContentLoaded', function () {\n    new Navbar();\n});\n\n\n//# sourceURL=webpack://cleython/./src/ts/navbar.ts?\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/ts/navbar.ts"]();
/******/ 	
/******/ })()
;
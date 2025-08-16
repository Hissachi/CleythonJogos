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

/***/ "./src/ts/navbar.ts":
/*!**************************!*\
  !*** ./src/ts/navbar.ts ***!
  \**************************/
/***/ (() => {

eval("{\nclass Navbar {\n    constructor() {\n        this.isMobileMenuOpen = false;\n        this.init();\n    }\n    init() {\n        this.render();\n        this.setupEventListeners();\n    }\n    render() {\n        const navbar = document.getElementById('navbar');\n        if (!navbar)\n            return;\n        navbar.innerHTML = `\r\n      <div class=\"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8\">\r\n        <div class=\"flex justify-between h-20 items-center\">\r\n          <!-- Logo -->\r\n          <div class=\"flex-shrink-0 flex items-center\">\r\n            <a href=\"/\" class=\"text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent\">\r\n              ${this.getSiteName()}\r\n            </a>\r\n          </div>\r\n\r\n          <!-- Menu Desktop -->\r\n          <div class=\"hidden md:ml-6 md:flex md:items-center md:space-x-8\">\r\n            ${this.renderMenuItems()}\r\n            <a href=\"/contato\" class=\"px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 transition-colors duration-200\">\r\n              Contato\r\n            </a>\r\n          </div>\r\n\r\n          <!-- Botão Mobile -->\r\n          <div class=\"-mr-2 flex items-center md:hidden\">\r\n            <button id=\"mobileMenuButton\" type=\"button\" class=\"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none\">\r\n              <span class=\"sr-only\">Abrir menu</span>\r\n              ${this.getMenuIcon()}\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Menu Mobile -->\r\n      <div id=\"mobileMenu\" class=\"md:hidden hidden\">\r\n        <div class=\"px-2 pt-2 pb-3 space-y-1 sm:px-3\">\r\n          ${this.renderMobileMenuItems()}\r\n        </div>\r\n      </div>\r\n    `;\n    }\n    getSiteName() {\n        var _a, _b, _c;\n        return ((_c = (_b = (_a = document.querySelector('title')) === null || _a === void 0 ? void 0 : _a.textContent) === null || _b === void 0 ? void 0 : _b.split('|')[0]) === null || _c === void 0 ? void 0 : _c.trim()) || 'Cleython';\n    }\n    renderMenuItems() {\n        const currentPath = window.location.pathname;\n        const items = [\n            { path: '/', label: 'Home' },\n            { path: '/sobre-nos', label: 'Sobre Nós' },\n            { path: '/blog', label: 'Blog' }\n        ];\n        return items.map(item => `\r\n      <a href=\"${item.path}\" class=\"${this.isActive(item.path, currentPath) ?\n            'border-indigo-500 text-gray-900' :\n            'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'} \r\n        inline-flex items-center px-1 pt-1 border-b-2 text-lg font-medium\">\r\n        ${item.label}\r\n      </a>\r\n    `).join('');\n    }\n    renderMobileMenuItems() {\n        const currentPath = window.location.pathname;\n        const items = [\n            { path: '/', label: 'Home' },\n            { path: '/sobre-nos', label: 'Sobre Nós' },\n            { path: '/blog', label: 'Blog' },\n            { path: '/contato', label: 'Contato' }\n        ];\n        return items.map(item => `\r\n      <a href=\"${item.path}\" class=\"${this.isActive(item.path, currentPath) ?\n            'bg-indigo-50 text-indigo-700' :\n            'text-gray-700 hover:bg-gray-100 hover:text-gray-900'} \r\n        block px-3 py-2 rounded-md text-base font-medium\">\r\n        ${item.label}\r\n      </a>\r\n    `).join('');\n    }\n    isActive(path, currentPath) {\n        return currentPath === path || (path !== '/' && currentPath.startsWith(path));\n    }\n    getMenuIcon() {\n        return this.isMobileMenuOpen ? `\r\n      <svg class=\"h-6 w-6\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\">\r\n        <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M6 18L18 6M6 6l12 12\" />\r\n      </svg>\r\n    ` : `\r\n      <svg class=\"h-6 w-6\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\">\r\n        <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4 6h16M4 12h16M4 18h16\" />\r\n      </svg>\r\n    `;\n    }\n    setupEventListeners() {\n        const mobileMenuButton = document.getElementById('mobileMenuButton');\n        const mobileMenu = document.getElementById('mobileMenu');\n        if (mobileMenuButton && mobileMenu) {\n            mobileMenuButton.addEventListener('click', () => {\n                this.isMobileMenuOpen = !this.isMobileMenuOpen;\n                mobileMenu.classList.toggle('hidden');\n                mobileMenuButton.innerHTML = this.getMenuIcon();\n            });\n        }\n    }\n}\n// Inicializa quando o DOM estiver pronto\ndocument.addEventListener('DOMContentLoaded', () => {\n    new Navbar();\n});\n\n\n//# sourceURL=webpack://cleython/./src/ts/navbar.ts?\n}");

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
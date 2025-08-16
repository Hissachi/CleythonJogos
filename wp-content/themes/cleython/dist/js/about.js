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

/***/ "./src/ts/about-page.ts":
/*!******************************!*\
  !*** ./src/ts/about-page.ts ***!
  \******************************/
/***/ (() => {

eval("{\nclass AboutPage {\n    constructor() {\n        this.teamMembers = [\n            {\n                name: 'João Silva',\n                role: 'CEO',\n                bio: 'Fundador da empresa com 10 anos de experiência',\n                photo: 'https://randomuser.me/api/portraits/men/1.jpg'\n            },\n            {\n                name: 'Maria Souza',\n                role: 'Designer',\n                bio: 'Especialista em UX/UI com diversos prêmios',\n                photo: 'https://randomuser.me/api/portraits/women/1.jpg'\n            }\n        ];\n        this.init();\n    }\n    init() {\n        this.renderContent();\n        this.setupEventListeners();\n    }\n    renderContent() {\n        const contentElement = document.getElementById('aboutContent');\n        if (contentElement) {\n            contentElement.innerHTML = `\r\n          <p>${this.getDynamicContent()}</p>\r\n          <p class=\"mt-4\">Fundada em ${new Date().getFullYear() - 5}</p>\r\n        `;\n        }\n        this.renderTeamMembers();\n    }\n    renderTeamMembers() {\n        const teamContainer = document.getElementById('teamMembers');\n        if (!teamContainer)\n            return;\n        teamContainer.innerHTML = this.teamMembers.map(member => `\r\n        <div class=\"team-card bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow\">\r\n          <img src=\"${member.photo}\" alt=\"${member.name}\" class=\"w-32 h-32 rounded-full mx-auto mb-4 object-cover\">\r\n          <h3 class=\"text-xl font-bold text-center\">${member.name}</h3>\r\n          <p class=\"text-indigo-600 text-center mb-3\">${member.role}</p>\r\n          <p class=\"text-gray-600\">${member.bio}</p>\r\n        </div>\r\n      `).join('');\n    }\n    setupEventListeners() {\n        const contactBtn = document.getElementById('contactBtn');\n        if (contactBtn) {\n            contactBtn.addEventListener('click', () => {\n                this.handleContactClick();\n            });\n        }\n    }\n    handleContactClick() {\n        if (typeof wp_theme_vars !== 'undefined') {\n            fetch(wp_theme_vars.ajaxurl, {\n                method: 'POST',\n                headers: {\n                    'Content-Type': 'application/x-www-form-urlencoded',\n                },\n                body: new URLSearchParams({\n                    action: 'track_about_page_click',\n                    nonce: wp_theme_vars.nonce\n                })\n            })\n                .then(response => response.json())\n                .then(data => {\n                console.log('Sucesso:', data);\n                window.location.href = '/contato';\n            });\n        }\n        else {\n            window.location.href = '/contato';\n        }\n    }\n    getDynamicContent() {\n        return 'Somos uma empresa dedicada a criar soluções inovadoras para nossos clientes.';\n    }\n}\ndocument.addEventListener('DOMContentLoaded', () => {\n    new AboutPage();\n});\n\n\n//# sourceURL=webpack://cleython/./src/ts/about-page.ts?\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/ts/about-page.ts"]();
/******/ 	
/******/ })()
;
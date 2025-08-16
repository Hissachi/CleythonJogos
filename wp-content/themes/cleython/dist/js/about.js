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

/***/ "./src/ts/about-page.ts":
/*!******************************!*\
  !*** ./src/ts/about-page.ts ***!
  \******************************/
/***/ (() => {

eval("{var AboutPage = /** @class */ (function () {\n    function AboutPage() {\n        this.teamMembers = [\n            {\n                name: 'João Silva',\n                role: 'CEO',\n                bio: 'Fundador da empresa com 10 anos de experiência',\n                photo: 'https://randomuser.me/api/portraits/men/1.jpg'\n            },\n            {\n                name: 'Maria Souza',\n                role: 'Designer',\n                bio: 'Especialista em UX/UI com diversos prêmios',\n                photo: 'https://randomuser.me/api/portraits/women/1.jpg'\n            }\n        ];\n        this.init();\n    }\n    AboutPage.prototype.init = function () {\n        this.renderContent();\n        this.setupEventListeners();\n    };\n    AboutPage.prototype.renderContent = function () {\n        // Renderiza conteúdo dinâmico\n        var contentElement = document.getElementById('aboutContent');\n        if (contentElement) {\n            contentElement.innerHTML = \"\\n          <p>\".concat(this.getDynamicContent(), \"</p>\\n          <p class=\\\"mt-4\\\">Fundada em \").concat(new Date().getFullYear() - 5, \"</p>\\n        \");\n        }\n        // Renderiza membros do time\n        this.renderTeamMembers();\n    };\n    AboutPage.prototype.renderTeamMembers = function () {\n        var teamContainer = document.getElementById('teamMembers');\n        if (!teamContainer)\n            return;\n        teamContainer.innerHTML = this.teamMembers.map(function (member) { return \"\\n        <div class=\\\"team-card bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow\\\">\\n          <img src=\\\"\".concat(member.photo, \"\\\" alt=\\\"\").concat(member.name, \"\\\" class=\\\"w-32 h-32 rounded-full mx-auto mb-4 object-cover\\\">\\n          <h3 class=\\\"text-xl font-bold text-center\\\">\").concat(member.name, \"</h3>\\n          <p class=\\\"text-indigo-600 text-center mb-3\\\">\").concat(member.role, \"</p>\\n          <p class=\\\"text-gray-600\\\">\").concat(member.bio, \"</p>\\n        </div>\\n      \"); }).join('');\n    };\n    AboutPage.prototype.setupEventListeners = function () {\n        var _this = this;\n        var contactBtn = document.getElementById('contactBtn');\n        if (contactBtn) {\n            contactBtn.addEventListener('click', function () {\n                _this.handleContactClick();\n            });\n        }\n    };\n    AboutPage.prototype.handleContactClick = function () {\n        if (typeof wp_theme_vars !== 'undefined') {\n            // Exemplo de chamada AJAX\n            fetch(wp_theme_vars.ajaxurl, {\n                method: 'POST',\n                headers: {\n                    'Content-Type': 'application/x-www-form-urlencoded',\n                },\n                body: new URLSearchParams({\n                    action: 'track_about_page_click',\n                    nonce: wp_theme_vars.nonce\n                })\n            })\n                .then(function (response) { return response.json(); })\n                .then(function (data) {\n                console.log('Sucesso:', data);\n                window.location.href = '/contato';\n            });\n        }\n        else {\n            window.location.href = '/contato';\n        }\n    };\n    AboutPage.prototype.getDynamicContent = function () {\n        return 'Somos uma empresa dedicada a criar soluções inovadoras para nossos clientes.';\n    };\n    return AboutPage;\n}());\n// Inicializa quando o DOM estiver pronto\ndocument.addEventListener('DOMContentLoaded', function () {\n    new AboutPage();\n});\n\n\n//# sourceURL=webpack://cleython/./src/ts/about-page.ts?\n}");

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
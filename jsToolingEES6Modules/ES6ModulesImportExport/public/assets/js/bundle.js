/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modulo1.js":
/*!************************!*\
  !*** ./src/modulo1.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "nome": () => (/* binding */ nome),
/* harmony export */   "sobrenome": () => (/* binding */ sobrenome),
/* harmony export */   "idade": () => (/* binding */ idade),
/* harmony export */   "soma": () => (/* binding */ soma),
/* harmony export */   "Pessoa": () => (/* binding */ Pessoa),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/*
//Exemplo com export no final.

const nome = 'Diego'
const sobrenome = 'Lepamar';
const idade = 30;

function soma(x,y){
    return x+y
}



//para exportar apenas nome e sobrenome
export { nome, sobrenome, idade, soma };



 */
var nome = 'Diego';
var sobrenome = 'Lepamar';
var idade = 30;
/* 
    se criar algo dentro do modulo sem exportar você está tornando 
    esse algo em privado. Onde apenas o Módulo tem acesso! Também
    não acessando o escopo global!
*/

var segredoDoModulo = 'sou uma variavel privada do módulo';
function soma(x, y) {
  return x + y;
}
var Pessoa = /*#__PURE__*/function () {
  function Pessoa(nome, sobrenome) {
    _classCallCheck(this, Pessoa);

    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  _createClass(Pessoa, [{
    key: "falar",
    value: function falar() {
      return "".concat(this.nome, " est\xE1 falando que seu sobrenome \xE9 ").concat(this.sobrenome);
    }
  }]);

  return Pessoa;
}();
var cor = 'amarelo';
var modelo = 'Bravo'; //o default serve para exportar algo como padrão onde não precisa pegar exatamente
//no import.

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  cor: cor,
  modelo: modelo
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modulo1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modulo1 */ "./src/modulo1.js");
//import do que eu preciso e também posso renomear o dado que vier
//como em nome, também posso mudar no export usando o AS


/* 
    também podemos importar tudo dessa maneira:
    import * as meuModulo from './modulo1';
    porém assim ele vai trazer meuModulo como um objeto!

    Lembrando que sempre que importamos sem as chaves é sempre o DEFAULT
*/

console.log((0,_modulo1__WEBPACK_IMPORTED_MODULE_0__.soma)(1, 4));
console.log(_modulo1__WEBPACK_IMPORTED_MODULE_0__.nome);
console.log(_modulo1__WEBPACK_IMPORTED_MODULE_0__.sobrenome);
var p1 = new _modulo1__WEBPACK_IMPORTED_MODULE_0__.Pessoa(_modulo1__WEBPACK_IMPORTED_MODULE_0__.nome, _modulo1__WEBPACK_IMPORTED_MODULE_0__.sobrenome);
var p2 = new _modulo1__WEBPACK_IMPORTED_MODULE_0__.Pessoa('Nicole', 'Ikeda');
console.log(p1.falar());
console.log(p2.falar());
console.log(_modulo1__WEBPACK_IMPORTED_MODULE_0__["default"].modelo, " ", _modulo1__WEBPACK_IMPORTED_MODULE_0__["default"].cor);
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map
var I18N;I18N =
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _assertThisInitialized)
/* harmony export */ });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _classCallCheck)
/* harmony export */ });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _createClass)
/* harmony export */ });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _defineProperty)
/* harmony export */ });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _getPrototypeOf)
/* harmony export */ });
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inherits.js":
/*!*************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inherits.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _inherits)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_setPrototypeOf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/setPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) (0,_babel_runtime_helpers_esm_setPrototypeOf__WEBPACK_IMPORTED_MODULE_0__.default)(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectSpread.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _objectSpread)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? Object(arguments[i]) : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _possibleConstructorReturn)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && ((0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__.default)(call) === "object" || typeof call === "function")) {
    return call;
  }

  return (0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _setPrototypeOf)
/* harmony export */ });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _typeof)
/* harmony export */ });
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./src/attributeManager.js":
/*!*********************************!*\
  !*** ./src/attributeManager.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "manageElementDataAttribute": () => (/* binding */ manageElementDataAttribute)
/* harmony export */ });
/* harmony import */ var _i18next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./i18next */ "./src/i18next.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


function manageElementDataAttribute(elem, datasetKey) {
  /* get clean dataset of the element */
  var dataset = sortElementDataAttribute(elem, datasetKey);
  Object.keys(dataset).forEach(function (key) {
    if (key === datasetKey) {
      /* default case es. data-lang */
      var opt = dataset[key].split(";");
      /* if there are some options passed like position */

      if (opt.length > 1) {
        /* clean the dataset(eg. T_saluto;1) and parseInt optional position */
        dataset[key] = dataset[key].split(";")[0];
        defaultCase(elem, dataset, key, parseInt(opt[1]));
      } else defaultCase(elem, dataset, key, 0);
    } else {
      /* advanced case es. data-lang-alt */
      advancedCase(elem, dataset, key);
    }
  });
}

function defaultCase(elem, dataset, key, position) {
  /* by using position, the translation will be positioned accordingly */
  var nodeList = _toConsumableArray(elem.querySelectorAll("*"));

  if (position === 0) {
    /* translation will be positioned as first node inside elem herarchy */
    elem.textContent = _i18next__WEBPACK_IMPORTED_MODULE_0__.default.t("".concat(dataset[key]));
    nodeList.forEach(function (node) {
      return elem.appendChild(node);
    });
  } else {
    /* translation will be positioned as position option is set */

    /* split the nodeList present now */
    var start = nodeList.slice(0, position);
    var end = nodeList.slice(position, nodeList.length);
    /* create a txt node with the translation */

    var txtNode = document.createTextNode(_i18next__WEBPACK_IMPORTED_MODULE_0__.default.t("".concat(dataset[key])));
    start.push(txtNode);
    /* put all together */

    nodeList = start.concat(end);
    /* clean the element */

    elem.textContent = "";
    /* add all nodes to the dome in order */

    nodeList.forEach(function (node) {
      return elem.appendChild(node);
    });
  }
}

function advancedCase(elem, dataset, key) {
  /* try to split name so it could be managed es. langAlt => [lang ,Alt]*/

  /* if there are more then 2 attributes es. [lang,Alt,titol]  create all attributes*/
  var attributes = key.split(/(?=[A-Z])/);
  /* try to create all attributes one by one */

  attributes.forEach(function (OptionalAttr, i) {
    if (i !== 0) {
      elem[OptionalAttr.toLowerCase()] = _i18next__WEBPACK_IMPORTED_MODULE_0__.default.t("".concat(dataset[key]));
    }
  });
}
/* this function will decide how the element will be translated and managed */


function sortElementDataAttribute(elem, datasetKey) {
  var dataset = Object.keys(elem.dataset).filter(function (dSet) {
    return dSet.substring(0, datasetKey.length) === datasetKey;
  });
  var purifiedDataset = {};
  dataset.forEach(function (langKey) {
    purifiedDataset[langKey] = elem.dataset[langKey];
  });
  return purifiedDataset;
}

/***/ }),

/***/ "./src/config/mainI18N.config.js":
/*!***************************************!*\
  !*** ./src/config/mainI18N.config.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AAttr": () => (/* binding */ AAttr),
/* harmony export */   "inizializationDefault": () => (/* binding */ inizializationDefault)
/* harmony export */ });
/* CONFIGURATION */
var AAttr = ["value", "title", "src", "alt", "placeholder"];
var inizializationDefault = {
  lng: "it",
  fallbackLng: "it",
  debug: true,
  whiteList: ["it", "en"],
  backend: {
    // load from i18next-gitbook repo
    loadPath: "./locales/{{lng}}/{{ns}}.json",
    crossDomain: true
  }
};

/***/ }),

/***/ "./src/config/testing_scripts.js":
/*!***************************************!*\
  !*** ./src/config/testing_scripts.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_dynamicElements": () => (/* binding */ _dynamicElements),
/* harmony export */   "_setInterval": () => (/* binding */ _setInterval),
/* harmony export */   "_PerformanceTests": () => (/* binding */ _PerformanceTests)
/* harmony export */ });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/utils */ "./src/utils/utils.js");
/* harmony import */ var _i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../i18next */ "./src/i18next.js");


var autTran = document.getElementById("automationTranslation");
function _dynamicElements() {
  var numElements = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

  if (numElements) {
    var msgContainer = document.createDocumentFragment();

    if (autTran) {
      for (var i = 0; i < 10; i++) {
        msgContainer.appendChild(create("option", {
          "data-lang": "T_info",
          id: i
        }));
      }

      autTran.appendChild(msgContainer);
    }
  }
}
function _setInterval() {
  if (autTran) {
    setInterval(function () {
      var newEl = document.createElement("div");
      newEl.setAttribute("data-lang", "T_info");
      autTran.append(newEl);
      (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.Logger)("added Element");
    }, 7000);
  }
}
function _PerformanceTests() {
  var _event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "start";

  var logText = arguments.length > 1 ? arguments[1] : undefined;

  if (_i18next__WEBPACK_IMPORTED_MODULE_1__.initialConfig.debug) {
    switch (_event) {
      case "start":
        console.time("PerformanceTest", "Performance Test Started...");
        break;

      case "log":
        console.timeLog("PerformanceTest", logText);
        break;

      case "stop":
        console.timeEnd("PerformanceTest", "Performance Test Ended...");
        break;
    }
  }
}

function create(name, props) {
  var el = document.createElement(name);

  for (var p in props) {
    el.setAttribute([p], props[p]);
  }

  return el;
}

/***/ }),

/***/ "./src/i18next.js":
/*!************************!*\
  !*** ./src/i18next.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialConfig": () => (/* binding */ initialConfig),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! i18next */ "./node_modules/i18next/dist/esm/i18next.js");
/* harmony import */ var i18next_http_backend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! i18next-http-backend */ "./node_modules/i18next-http-backend/esm/index.js");
/* harmony import */ var _config_mainI18N_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config/mainI18N.config */ "./src/config/mainI18N.config.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/utils */ "./src/utils/utils.js");


/* PERSONALIZED CONFIG */


/* UTILS */


var initialConfig;
/* END CONFIGURATION */

/* INITIALIZATION */

try {
  /* if it cant retriev enough configuration then will retry with "inizializationDefault" */
  initialConfig = initOptI18N;
  i18next__WEBPACK_IMPORTED_MODULE_0__.default.use(i18next_http_backend__WEBPACK_IMPORTED_MODULE_1__.default).init(initialConfig).then(function (t) {});
} catch (err) {
  initialConfig = _config_mainI18N_config__WEBPACK_IMPORTED_MODULE_2__.inizializationDefault;
  i18next__WEBPACK_IMPORTED_MODULE_0__.default.use(i18next_http_backend__WEBPACK_IMPORTED_MODULE_1__.default).init(initialConfig).then(function (t) {});
}

(0,_utils_utils__WEBPACK_IMPORTED_MODULE_3__.Logger)("CONFIGURATION IN USE:");
(0,_utils_utils__WEBPACK_IMPORTED_MODULE_3__.Logger)(initialConfig);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (i18next__WEBPACK_IMPORTED_MODULE_0__.default);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "changeLng": () => (/* binding */ changeLng)
/* harmony export */ });
/* harmony import */ var _i18next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./i18next */ "./src/i18next.js");
/* harmony import */ var _attributeManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./attributeManager */ "./src/attributeManager.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/utils */ "./src/utils/utils.js");
/* harmony import */ var _config_testing_scripts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config/testing_scripts */ "./src/config/testing_scripts.js");
/* PERSONALIZED CONFIG */


/* UTILS */




if (_i18next__WEBPACK_IMPORTED_MODULE_0__.initialConfig.debug) {
  /* TESTING PURPOSE */
  (0,_config_testing_scripts__WEBPACK_IMPORTED_MODULE_3__._setInterval)();

  (0,_config_testing_scripts__WEBPACK_IMPORTED_MODULE_3__._dynamicElements)(30);
}
/* TESTING PURPOSE */


function updateContent() {
  (0,_config_testing_scripts__WEBPACK_IMPORTED_MODULE_3__._PerformanceTests)("start");

  stopObserving();

  try {
    /* gets all elements that needs some kind of translation */
    var elList = document.querySelectorAll("[data-lang]");
    elList.forEach(function (elem, i) {
      (0,_attributeManager__WEBPACK_IMPORTED_MODULE_1__.manageElementDataAttribute)(elem, "lang");
    });
    (0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__.Logger)("detected user language: \"".concat(_i18next__WEBPACK_IMPORTED_MODULE_0__.default.language, "\" --> loaded languages: \"").concat(_i18next__WEBPACK_IMPORTED_MODULE_0__.initialConfig.whiteList.join(", "), "\""));
    startObserving();
  } catch (err) {
    throw new Error(err);
  }

  (0,_config_testing_scripts__WEBPACK_IMPORTED_MODULE_3__._PerformanceTests)("stop");
}

function changeLng(lng) {
  _i18next__WEBPACK_IMPORTED_MODULE_0__.default.changeLanguage(lng);
}
/* I18N EVENTS */

_i18next__WEBPACK_IMPORTED_MODULE_0__.default.on("initialized", function (options) {// init set content

  /* startObserving(); */
});
_i18next__WEBPACK_IMPORTED_MODULE_0__.default.on("languageChanged", function (lang) {
  updateContent();
});
_i18next__WEBPACK_IMPORTED_MODULE_0__.default.on("loaded", function (loaded) {
  (0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__.Logger)("new resource loaded: ");
  (0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__.Logger)(loaded);
});
/* END I18N EVENTS  */

/* PERSONALIZED API */
// Observe a specific DOM element:

/* PERSONALIZED DOM OBSERVER! */

var mutationObserver;
var observing = false;

function startObserving() {
  (0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__.Logger)("STARTED Observing...");
  mutationObserver = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      (0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__.Logger)(mutation);
      updateContent();
    });
  }); // Starts listening for changes in the root HTML element of the page.

  mutationObserver.observe(document.documentElement, {
    characterDataOldValue: false,
    characterData: false,
    childList: true,
    subtree: true,
    attributeOldValue: true,
    attributes: true,
    attributeFilter: ["data-lang"]
  });
  observing = true;
}

function stopObserving() {
  (0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__.Logger)("STOPED Observing...");
  if (observing) mutationObserver.disconnect();
  observing = false;
}

/***/ }),

/***/ "./src/utils/utils.js":
/*!****************************!*\
  !*** ./src/utils/utils.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Logger": () => (/* binding */ Logger)
/* harmony export */ });
/* harmony import */ var _i18next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../i18next */ "./src/i18next.js");
/* CONFIG */

function Logger(message) {
  /* if debug is set to be true then logg  */
  if (_i18next__WEBPACK_IMPORTED_MODULE_0__.initialConfig.debug) {
    console.log(message);
  }
}

/***/ }),

/***/ "./node_modules/i18next-http-backend/esm/getFetch.cjs":
/*!************************************************************!*\
  !*** ./node_modules/i18next-http-backend/esm/getFetch.cjs ***!
  \************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var fetchApi
if (typeof fetch === 'function') {
  if (typeof __webpack_require__.g !== 'undefined' && __webpack_require__.g.fetch) {
    fetchApi = __webpack_require__.g.fetch
  } else if (typeof window !== 'undefined' && window.fetch) {
    fetchApi = window.fetch
  }
}

if ( true && (typeof window === 'undefined' || typeof window.document === 'undefined')) {
  var f = fetchApi || __webpack_require__(/*! node-fetch */ "./node_modules/node-fetch/browser.js")
  if (f.default) f = f.default
  exports.default = f
  module.exports = exports.default
}


/***/ }),

/***/ "./node_modules/i18next-http-backend/esm/index.js":
/*!********************************************************!*\
  !*** ./node_modules/i18next-http-backend/esm/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./node_modules/i18next-http-backend/esm/utils.js");
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./request.js */ "./node_modules/i18next-http-backend/esm/request.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var getDefaults = function getDefaults() {
  return {
    loadPath: '/locales/{{lng}}/{{ns}}.json',
    addPath: '/locales/add/{{lng}}/{{ns}}',
    allowMultiLoading: false,
    parse: function parse(data) {
      return JSON.parse(data);
    },
    stringify: JSON.stringify,
    parsePayload: function parsePayload(namespace, key, fallbackValue) {
      return _defineProperty({}, key, fallbackValue || '');
    },
    request: _request_js__WEBPACK_IMPORTED_MODULE_1__.default,
    reloadInterval: typeof window !== 'undefined' ? false : 60 * 60 * 1000,
    customHeaders: {},
    queryStringParams: {},
    crossDomain: false,
    withCredentials: false,
    overrideMimeType: false,
    requestOptions: {
      mode: 'cors',
      credentials: 'same-origin',
      cache: 'default'
    }
  };
};

var Backend = function () {
  function Backend(services) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var allOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    _classCallCheck(this, Backend);

    this.services = services;
    this.options = options;
    this.allOptions = allOptions;
    this.type = 'backend';
    this.init(services, options, allOptions);
  }

  _createClass(Backend, [{
    key: "init",
    value: function init(services) {
      var _this = this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var allOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      this.services = services;
      this.options = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.defaults)(options, this.options || {}, getDefaults());
      this.allOptions = allOptions;

      if (this.services && this.options.reloadInterval) {
        setInterval(function () {
          return _this.reload();
        }, this.options.reloadInterval);
      }
    }
  }, {
    key: "readMulti",
    value: function readMulti(languages, namespaces, callback) {
      var loadPath = this.options.loadPath;

      if (typeof this.options.loadPath === 'function') {
        loadPath = this.options.loadPath(languages, namespaces);
      }

      var url = this.services.interpolator.interpolate(loadPath, {
        lng: languages.join('+'),
        ns: namespaces.join('+')
      });
      this.loadUrl(url, callback, languages, namespaces);
    }
  }, {
    key: "read",
    value: function read(language, namespace, callback) {
      var loadPath = this.options.loadPath;

      if (typeof this.options.loadPath === 'function') {
        loadPath = this.options.loadPath([language], [namespace]);
      }

      var url = this.services.interpolator.interpolate(loadPath, {
        lng: language,
        ns: namespace
      });
      this.loadUrl(url, callback, language, namespace);
    }
  }, {
    key: "loadUrl",
    value: function loadUrl(url, callback, languages, namespaces) {
      var _this2 = this;

      this.options.request(this.options, url, undefined, function (err, res) {
        if (res && (res.status >= 500 && res.status < 600 || !res.status)) return callback('failed loading ' + url + '; status code: ' + res.status, true);
        if (res && res.status >= 400 && res.status < 500) return callback('failed loading ' + url + '; status code: ' + res.status, false);
        if (!res && err && err.message && err.message.indexOf('Failed to fetch') > -1) return callback('failed loading ' + url + ': ' + err.message, true);
        if (err) return callback(err, false);
        var ret, parseErr;

        try {
          if (typeof res.data === 'string') {
            ret = _this2.options.parse(res.data, languages, namespaces);
          } else {
            ret = res.data;
          }
        } catch (e) {
          parseErr = 'failed parsing ' + url + ' to json';
        }

        if (parseErr) return callback(parseErr, false);
        callback(null, ret);
      });
    }
  }, {
    key: "create",
    value: function create(languages, namespace, key, fallbackValue, callback) {
      var _this3 = this;

      if (!this.options.addPath) return;
      if (typeof languages === 'string') languages = [languages];
      var payload = this.options.parsePayload(namespace, key, fallbackValue);
      var finished = 0;
      var dataArray = [];
      var resArray = [];
      languages.forEach(function (lng) {
        var addPath = _this3.options.addPath;

        if (typeof _this3.options.addPath === 'function') {
          addPath = _this3.options.addPath(lng, namespace);
        }

        var url = _this3.services.interpolator.interpolate(addPath, {
          lng: lng,
          ns: namespace
        });

        _this3.options.request(_this3.options, url, payload, function (data, res) {
          finished += 1;
          dataArray.push(data);
          resArray.push(res);

          if (finished === languages.length) {
            if (callback) callback(dataArray, resArray);
          }
        });
      });
    }
  }, {
    key: "reload",
    value: function reload() {
      var _this4 = this;

      var _this$services = this.services,
          backendConnector = _this$services.backendConnector,
          languageUtils = _this$services.languageUtils,
          logger = _this$services.logger;
      var currentLanguage = backendConnector.language;
      if (currentLanguage && currentLanguage.toLowerCase() === 'cimode') return;
      var toLoad = [];

      var append = function append(lng) {
        var lngs = languageUtils.toResolveHierarchy(lng);
        lngs.forEach(function (l) {
          if (toLoad.indexOf(l) < 0) toLoad.push(l);
        });
      };

      append(currentLanguage);
      if (this.allOptions.preload) this.allOptions.preload.forEach(function (l) {
        return append(l);
      });
      toLoad.forEach(function (lng) {
        _this4.allOptions.ns.forEach(function (ns) {
          backendConnector.read(lng, ns, 'read', null, null, function (err, data) {
            if (err) logger.warn("loading namespace ".concat(ns, " for language ").concat(lng, " failed"), err);
            if (!err && data) logger.log("loaded namespace ".concat(ns, " for language ").concat(lng), data);
            backendConnector.loaded("".concat(lng, "|").concat(ns), err, data);
          });
        });
      });
    }
  }]);

  return Backend;
}();

Backend.type = 'backend';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Backend);

/***/ }),

/***/ "./node_modules/i18next-http-backend/esm/request.js":
/*!**********************************************************!*\
  !*** ./node_modules/i18next-http-backend/esm/request.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
var _getFetch_cjs__WEBPACK_IMPORTED_MODULE_1___namespace_cache;
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./node_modules/i18next-http-backend/esm/utils.js");
/* harmony import */ var _getFetch_cjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getFetch.cjs */ "./node_modules/i18next-http-backend/esm/getFetch.cjs");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }



var fetchApi;

if (typeof fetch === 'function') {
  if (typeof global !== 'undefined' && global.fetch) {
    fetchApi = global.fetch;
  } else if (typeof window !== 'undefined' && window.fetch) {
    fetchApi = window.fetch;
  }
}

var XmlHttpRequestApi;

if (_utils_js__WEBPACK_IMPORTED_MODULE_0__.hasXMLHttpRequest) {
  if (typeof global !== 'undefined' && global.XMLHttpRequest) {
    XmlHttpRequestApi = global.XMLHttpRequest;
  } else if (typeof window !== 'undefined' && window.XMLHttpRequest) {
    XmlHttpRequestApi = window.XMLHttpRequest;
  }
}

var ActiveXObjectApi;

if (typeof ActiveXObject === 'function') {
  if (typeof global !== 'undefined' && global.ActiveXObject) {
    ActiveXObjectApi = global.ActiveXObject;
  } else if (typeof window !== 'undefined' && window.ActiveXObject) {
    ActiveXObjectApi = window.ActiveXObject;
  }
}

if (!fetchApi && /*#__PURE__*/ (_getFetch_cjs__WEBPACK_IMPORTED_MODULE_1___namespace_cache || (_getFetch_cjs__WEBPACK_IMPORTED_MODULE_1___namespace_cache = __webpack_require__.t(_getFetch_cjs__WEBPACK_IMPORTED_MODULE_1__, 2))) && !XmlHttpRequestApi && !ActiveXObjectApi) fetchApi = _getFetch_cjs__WEBPACK_IMPORTED_MODULE_1__ || /*#__PURE__*/ (_getFetch_cjs__WEBPACK_IMPORTED_MODULE_1___namespace_cache || (_getFetch_cjs__WEBPACK_IMPORTED_MODULE_1___namespace_cache = __webpack_require__.t(_getFetch_cjs__WEBPACK_IMPORTED_MODULE_1__, 2)));
if (typeof fetchApi !== 'function') fetchApi = undefined;

var addQueryString = function addQueryString(url, params) {
  if (params && _typeof(params) === 'object') {
    var queryString = '';

    for (var paramName in params) {
      queryString += '&' + encodeURIComponent(paramName) + '=' + encodeURIComponent(params[paramName]);
    }

    if (!queryString) return url;
    url = url + (url.indexOf('?') !== -1 ? '&' : '?') + queryString.slice(1);
  }

  return url;
};

var requestWithFetch = function requestWithFetch(options, url, payload, callback) {
  if (options.queryStringParams) {
    url = addQueryString(url, options.queryStringParams);
  }

  var headers = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.defaults)({}, typeof options.customHeaders === 'function' ? options.customHeaders() : options.customHeaders);
  if (payload) headers['Content-Type'] = 'application/json';
  fetchApi(url, (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.defaults)({
    method: payload ? 'POST' : 'GET',
    body: payload ? options.stringify(payload) : undefined,
    headers: headers
  }, typeof options.requestOptions === 'function' ? options.requestOptions(payload) : options.requestOptions)).then(function (response) {
    if (!response.ok) return callback(response.statusText || 'Error', {
      status: response.status
    });
    response.text().then(function (data) {
      callback(null, {
        status: response.status,
        data: data
      });
    }).catch(callback);
  }).catch(callback);
};

var requestWithXmlHttpRequest = function requestWithXmlHttpRequest(options, url, payload, callback) {
  if (payload && _typeof(payload) === 'object') {
    payload = addQueryString('', payload).slice(1);
  }

  if (options.queryStringParams) {
    url = addQueryString(url, options.queryStringParams);
  }

  try {
    var x;

    if (XmlHttpRequestApi) {
      x = new XmlHttpRequestApi();
    } else {
      x = new ActiveXObjectApi('MSXML2.XMLHTTP.3.0');
    }

    x.open(payload ? 'POST' : 'GET', url, 1);

    if (!options.crossDomain) {
      x.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    }

    x.withCredentials = !!options.withCredentials;

    if (payload) {
      x.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    }

    if (x.overrideMimeType) {
      x.overrideMimeType('application/json');
    }

    var h = options.customHeaders;
    h = typeof h === 'function' ? h() : h;

    if (h) {
      for (var i in h) {
        x.setRequestHeader(i, h[i]);
      }
    }

    x.onreadystatechange = function () {
      x.readyState > 3 && callback(x.status >= 400 ? x.statusText : null, {
        status: x.status,
        data: x.responseText
      });
    };

    x.send(payload);
  } catch (e) {
    console && console.log(e);
  }
};

var request = function request(options, url, payload, callback) {
  if (typeof payload === 'function') {
    callback = payload;
    payload = undefined;
  }

  callback = callback || function () {};

  if (fetchApi) {
    return requestWithFetch(options, url, payload, callback);
  }

  if (_utils_js__WEBPACK_IMPORTED_MODULE_0__.hasXMLHttpRequest || typeof ActiveXObject === 'function') {
    return requestWithXmlHttpRequest(options, url, payload, callback);
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (request);

/***/ }),

/***/ "./node_modules/i18next-http-backend/esm/utils.js":
/*!********************************************************!*\
  !*** ./node_modules/i18next-http-backend/esm/utils.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaults": () => (/* binding */ defaults),
/* harmony export */   "hasXMLHttpRequest": () => (/* binding */ hasXMLHttpRequest)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var arr = [];
var each = arr.forEach;
var slice = arr.slice;
function defaults(obj) {
  each.call(slice.call(arguments, 1), function (source) {
    if (source) {
      for (var prop in source) {
        if (obj[prop] === undefined) obj[prop] = source[prop];
      }
    }
  });
  return obj;
}
function hasXMLHttpRequest() {
  return typeof XMLHttpRequest === 'function' || (typeof XMLHttpRequest === "undefined" ? "undefined" : _typeof(XMLHttpRequest)) === 'object';
}

/***/ }),

/***/ "./node_modules/i18next/dist/esm/i18next.js":
/*!**************************************************!*\
  !*** ./node_modules/i18next/dist/esm/i18next.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread */ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");









var consoleLogger = {
  type: 'logger',
  log: function log(args) {
    this.output('log', args);
  },
  warn: function warn(args) {
    this.output('warn', args);
  },
  error: function error(args) {
    this.output('error', args);
  },
  output: function output(type, args) {
    if (console && console[type]) console[type].apply(console, args);
  }
};

var Logger = function () {
  function Logger(concreteLogger) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    (0,_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__.default)(this, Logger);

    this.init(concreteLogger, options);
  }

  (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__.default)(Logger, [{
    key: "init",
    value: function init(concreteLogger) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      this.prefix = options.prefix || 'i18next:';
      this.logger = concreteLogger || consoleLogger;
      this.options = options;
      this.debug = options.debug;
    }
  }, {
    key: "setDebug",
    value: function setDebug(bool) {
      this.debug = bool;
    }
  }, {
    key: "log",
    value: function log() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return this.forward(args, 'log', '', true);
    }
  }, {
    key: "warn",
    value: function warn() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return this.forward(args, 'warn', '', true);
    }
  }, {
    key: "error",
    value: function error() {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      return this.forward(args, 'error', '');
    }
  }, {
    key: "deprecate",
    value: function deprecate() {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }

      return this.forward(args, 'warn', 'WARNING DEPRECATED: ', true);
    }
  }, {
    key: "forward",
    value: function forward(args, lvl, prefix, debugOnly) {
      if (debugOnly && !this.debug) return null;
      if (typeof args[0] === 'string') args[0] = "".concat(prefix).concat(this.prefix, " ").concat(args[0]);
      return this.logger[lvl](args);
    }
  }, {
    key: "create",
    value: function create(moduleName) {
      return new Logger(this.logger, (0,_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__.default)({}, {
        prefix: "".concat(this.prefix, ":").concat(moduleName, ":")
      }, this.options));
    }
  }]);

  return Logger;
}();

var baseLogger = new Logger();

var EventEmitter = function () {
  function EventEmitter() {
    (0,_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__.default)(this, EventEmitter);

    this.observers = {};
  }

  (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__.default)(EventEmitter, [{
    key: "on",
    value: function on(events, listener) {
      var _this = this;

      events.split(' ').forEach(function (event) {
        _this.observers[event] = _this.observers[event] || [];

        _this.observers[event].push(listener);
      });
      return this;
    }
  }, {
    key: "off",
    value: function off(event, listener) {
      if (!this.observers[event]) return;

      if (!listener) {
        delete this.observers[event];
        return;
      }

      this.observers[event] = this.observers[event].filter(function (l) {
        return l !== listener;
      });
    }
  }, {
    key: "emit",
    value: function emit(event) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      if (this.observers[event]) {
        var cloned = [].concat(this.observers[event]);
        cloned.forEach(function (observer) {
          observer.apply(void 0, args);
        });
      }

      if (this.observers['*']) {
        var _cloned = [].concat(this.observers['*']);

        _cloned.forEach(function (observer) {
          observer.apply(observer, [event].concat(args));
        });
      }
    }
  }]);

  return EventEmitter;
}();

function defer() {
  var res;
  var rej;
  var promise = new Promise(function (resolve, reject) {
    res = resolve;
    rej = reject;
  });
  promise.resolve = res;
  promise.reject = rej;
  return promise;
}
function makeString(object) {
  if (object == null) return '';
  return '' + object;
}
function copy(a, s, t) {
  a.forEach(function (m) {
    if (s[m]) t[m] = s[m];
  });
}

function getLastOfPath(object, path, Empty) {
  function cleanKey(key) {
    return key && key.indexOf('###') > -1 ? key.replace(/###/g, '.') : key;
  }

  function canNotTraverseDeeper() {
    return !object || typeof object === 'string';
  }

  var stack = typeof path !== 'string' ? [].concat(path) : path.split('.');

  while (stack.length > 1) {
    if (canNotTraverseDeeper()) return {};
    var key = cleanKey(stack.shift());
    if (!object[key] && Empty) object[key] = new Empty();

    if (Object.prototype.hasOwnProperty.call(object, key)) {
      object = object[key];
    } else {
      object = {};
    }
  }

  if (canNotTraverseDeeper()) return {};
  return {
    obj: object,
    k: cleanKey(stack.shift())
  };
}

function setPath(object, path, newValue) {
  var _getLastOfPath = getLastOfPath(object, path, Object),
      obj = _getLastOfPath.obj,
      k = _getLastOfPath.k;

  obj[k] = newValue;
}
function pushPath(object, path, newValue, concat) {
  var _getLastOfPath2 = getLastOfPath(object, path, Object),
      obj = _getLastOfPath2.obj,
      k = _getLastOfPath2.k;

  obj[k] = obj[k] || [];
  if (concat) obj[k] = obj[k].concat(newValue);
  if (!concat) obj[k].push(newValue);
}
function getPath(object, path) {
  var _getLastOfPath3 = getLastOfPath(object, path),
      obj = _getLastOfPath3.obj,
      k = _getLastOfPath3.k;

  if (!obj) return undefined;
  return obj[k];
}
function getPathWithDefaults(data, defaultData, key) {
  var value = getPath(data, key);

  if (value !== undefined) {
    return value;
  }

  return getPath(defaultData, key);
}
function deepExtend(target, source, overwrite) {
  for (var prop in source) {
    if (prop !== '__proto__' && prop !== 'constructor') {
      if (prop in target) {
        if (typeof target[prop] === 'string' || target[prop] instanceof String || typeof source[prop] === 'string' || source[prop] instanceof String) {
          if (overwrite) target[prop] = source[prop];
        } else {
          deepExtend(target[prop], source[prop], overwrite);
        }
      } else {
        target[prop] = source[prop];
      }
    }
  }

  return target;
}
function regexEscape(str) {
  return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
}
var _entityMap = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
  '/': '&#x2F;'
};
function escape(data) {
  if (typeof data === 'string') {
    return data.replace(/[&<>"'\/]/g, function (s) {
      return _entityMap[s];
    });
  }

  return data;
}
var isIE10 = typeof window !== 'undefined' && window.navigator && window.navigator.userAgent && window.navigator.userAgent.indexOf('MSIE') > -1;

var ResourceStore = function (_EventEmitter) {
  (0,_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__.default)(ResourceStore, _EventEmitter);

  function ResourceStore(data) {
    var _this;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
      ns: ['translation'],
      defaultNS: 'translation'
    };

    (0,_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__.default)(this, ResourceStore);

    _this = (0,_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__.default)(this, (0,_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__.default)(ResourceStore).call(this));

    if (isIE10) {
      EventEmitter.call((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__.default)(_this));
    }

    _this.data = data || {};
    _this.options = options;

    if (_this.options.keySeparator === undefined) {
      _this.options.keySeparator = '.';
    }

    return _this;
  }

  (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__.default)(ResourceStore, [{
    key: "addNamespaces",
    value: function addNamespaces(ns) {
      if (this.options.ns.indexOf(ns) < 0) {
        this.options.ns.push(ns);
      }
    }
  }, {
    key: "removeNamespaces",
    value: function removeNamespaces(ns) {
      var index = this.options.ns.indexOf(ns);

      if (index > -1) {
        this.options.ns.splice(index, 1);
      }
    }
  }, {
    key: "getResource",
    value: function getResource(lng, ns, key) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      var keySeparator = options.keySeparator !== undefined ? options.keySeparator : this.options.keySeparator;
      var path = [lng, ns];
      if (key && typeof key !== 'string') path = path.concat(key);
      if (key && typeof key === 'string') path = path.concat(keySeparator ? key.split(keySeparator) : key);

      if (lng.indexOf('.') > -1) {
        path = lng.split('.');
      }

      return getPath(this.data, path);
    }
  }, {
    key: "addResource",
    value: function addResource(lng, ns, key, value) {
      var options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {
        silent: false
      };
      var keySeparator = this.options.keySeparator;
      if (keySeparator === undefined) keySeparator = '.';
      var path = [lng, ns];
      if (key) path = path.concat(keySeparator ? key.split(keySeparator) : key);

      if (lng.indexOf('.') > -1) {
        path = lng.split('.');
        value = ns;
        ns = path[1];
      }

      this.addNamespaces(ns);
      setPath(this.data, path, value);
      if (!options.silent) this.emit('added', lng, ns, key, value);
    }
  }, {
    key: "addResources",
    value: function addResources(lng, ns, resources) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {
        silent: false
      };

      for (var m in resources) {
        if (typeof resources[m] === 'string' || Object.prototype.toString.apply(resources[m]) === '[object Array]') this.addResource(lng, ns, m, resources[m], {
          silent: true
        });
      }

      if (!options.silent) this.emit('added', lng, ns, resources);
    }
  }, {
    key: "addResourceBundle",
    value: function addResourceBundle(lng, ns, resources, deep, overwrite) {
      var options = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {
        silent: false
      };
      var path = [lng, ns];

      if (lng.indexOf('.') > -1) {
        path = lng.split('.');
        deep = resources;
        resources = ns;
        ns = path[1];
      }

      this.addNamespaces(ns);
      var pack = getPath(this.data, path) || {};

      if (deep) {
        deepExtend(pack, resources, overwrite);
      } else {
        pack = (0,_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__.default)({}, pack, resources);
      }

      setPath(this.data, path, pack);
      if (!options.silent) this.emit('added', lng, ns, resources);
    }
  }, {
    key: "removeResourceBundle",
    value: function removeResourceBundle(lng, ns) {
      if (this.hasResourceBundle(lng, ns)) {
        delete this.data[lng][ns];
      }

      this.removeNamespaces(ns);
      this.emit('removed', lng, ns);
    }
  }, {
    key: "hasResourceBundle",
    value: function hasResourceBundle(lng, ns) {
      return this.getResource(lng, ns) !== undefined;
    }
  }, {
    key: "getResourceBundle",
    value: function getResourceBundle(lng, ns) {
      if (!ns) ns = this.options.defaultNS;
      if (this.options.compatibilityAPI === 'v1') return (0,_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__.default)({}, {}, this.getResource(lng, ns));
      return this.getResource(lng, ns);
    }
  }, {
    key: "getDataByLanguage",
    value: function getDataByLanguage(lng) {
      return this.data[lng];
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      return this.data;
    }
  }]);

  return ResourceStore;
}(EventEmitter);

var postProcessor = {
  processors: {},
  addPostProcessor: function addPostProcessor(module) {
    this.processors[module.name] = module;
  },
  handle: function handle(processors, value, key, options, translator) {
    var _this = this;

    processors.forEach(function (processor) {
      if (_this.processors[processor]) value = _this.processors[processor].process(value, key, options, translator);
    });
    return value;
  }
};

var checkedLoadedFor = {};

var Translator = function (_EventEmitter) {
  (0,_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__.default)(Translator, _EventEmitter);

  function Translator(services) {
    var _this;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    (0,_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__.default)(this, Translator);

    _this = (0,_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__.default)(this, (0,_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__.default)(Translator).call(this));

    if (isIE10) {
      EventEmitter.call((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__.default)(_this));
    }

    copy(['resourceStore', 'languageUtils', 'pluralResolver', 'interpolator', 'backendConnector', 'i18nFormat', 'utils'], services, (0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__.default)(_this));
    _this.options = options;

    if (_this.options.keySeparator === undefined) {
      _this.options.keySeparator = '.';
    }

    _this.logger = baseLogger.create('translator');
    return _this;
  }

  (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__.default)(Translator, [{
    key: "changeLanguage",
    value: function changeLanguage(lng) {
      if (lng) this.language = lng;
    }
  }, {
    key: "exists",
    value: function exists(key) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        interpolation: {}
      };
      var resolved = this.resolve(key, options);
      return resolved && resolved.res !== undefined;
    }
  }, {
    key: "extractFromKey",
    value: function extractFromKey(key, options) {
      var nsSeparator = options.nsSeparator !== undefined ? options.nsSeparator : this.options.nsSeparator;
      if (nsSeparator === undefined) nsSeparator = ':';
      var keySeparator = options.keySeparator !== undefined ? options.keySeparator : this.options.keySeparator;
      var namespaces = options.ns || this.options.defaultNS;

      if (nsSeparator && key.indexOf(nsSeparator) > -1) {
        var m = key.match(this.interpolator.nestingRegexp);

        if (m && m.length > 0) {
          return {
            key: key,
            namespaces: namespaces
          };
        }

        var parts = key.split(nsSeparator);
        if (nsSeparator !== keySeparator || nsSeparator === keySeparator && this.options.ns.indexOf(parts[0]) > -1) namespaces = parts.shift();
        key = parts.join(keySeparator);
      }

      if (typeof namespaces === 'string') namespaces = [namespaces];
      return {
        key: key,
        namespaces: namespaces
      };
    }
  }, {
    key: "translate",
    value: function translate(keys, options, lastKey) {
      var _this2 = this;

      if ((0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__.default)(options) !== 'object' && this.options.overloadTranslationOptionHandler) {
        options = this.options.overloadTranslationOptionHandler(arguments);
      }

      if (!options) options = {};
      if (keys === undefined || keys === null) return '';
      if (!Array.isArray(keys)) keys = [String(keys)];
      var keySeparator = options.keySeparator !== undefined ? options.keySeparator : this.options.keySeparator;

      var _this$extractFromKey = this.extractFromKey(keys[keys.length - 1], options),
          key = _this$extractFromKey.key,
          namespaces = _this$extractFromKey.namespaces;

      var namespace = namespaces[namespaces.length - 1];
      var lng = options.lng || this.language;
      var appendNamespaceToCIMode = options.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;

      if (lng && lng.toLowerCase() === 'cimode') {
        if (appendNamespaceToCIMode) {
          var nsSeparator = options.nsSeparator || this.options.nsSeparator;
          return namespace + nsSeparator + key;
        }

        return key;
      }

      var resolved = this.resolve(keys, options);
      var res = resolved && resolved.res;
      var resUsedKey = resolved && resolved.usedKey || key;
      var resExactUsedKey = resolved && resolved.exactUsedKey || key;
      var resType = Object.prototype.toString.apply(res);
      var noObject = ['[object Number]', '[object Function]', '[object RegExp]'];
      var joinArrays = options.joinArrays !== undefined ? options.joinArrays : this.options.joinArrays;
      var handleAsObjectInI18nFormat = !this.i18nFormat || this.i18nFormat.handleAsObject;
      var handleAsObject = typeof res !== 'string' && typeof res !== 'boolean' && typeof res !== 'number';

      if (handleAsObjectInI18nFormat && res && handleAsObject && noObject.indexOf(resType) < 0 && !(typeof joinArrays === 'string' && resType === '[object Array]')) {
        if (!options.returnObjects && !this.options.returnObjects) {
          this.logger.warn('accessing an object - but returnObjects options is not enabled!');
          return this.options.returnedObjectHandler ? this.options.returnedObjectHandler(resUsedKey, res, options) : "key '".concat(key, " (").concat(this.language, ")' returned an object instead of string.");
        }

        if (keySeparator) {
          var resTypeIsArray = resType === '[object Array]';
          var copy = resTypeIsArray ? [] : {};
          var newKeyToUse = resTypeIsArray ? resExactUsedKey : resUsedKey;

          for (var m in res) {
            if (Object.prototype.hasOwnProperty.call(res, m)) {
              var deepKey = "".concat(newKeyToUse).concat(keySeparator).concat(m);
              copy[m] = this.translate(deepKey, (0,_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__.default)({}, options, {
                joinArrays: false,
                ns: namespaces
              }));
              if (copy[m] === deepKey) copy[m] = res[m];
            }
          }

          res = copy;
        }
      } else if (handleAsObjectInI18nFormat && typeof joinArrays === 'string' && resType === '[object Array]') {
        res = res.join(joinArrays);
        if (res) res = this.extendTranslation(res, keys, options, lastKey);
      } else {
        var usedDefault = false;
        var usedKey = false;

        if (!this.isValidLookup(res) && options.defaultValue !== undefined) {
          usedDefault = true;

          if (options.count !== undefined) {
            var suffix = this.pluralResolver.getSuffix(lng, options.count);
            res = options["defaultValue".concat(suffix)];
          }

          if (!res) res = options.defaultValue;
        }

        if (!this.isValidLookup(res)) {
          usedKey = true;
          res = key;
        }

        var updateMissing = options.defaultValue && options.defaultValue !== res && this.options.updateMissing;

        if (usedKey || usedDefault || updateMissing) {
          this.logger.log(updateMissing ? 'updateKey' : 'missingKey', lng, namespace, key, updateMissing ? options.defaultValue : res);

          if (keySeparator) {
            var fk = this.resolve(key, (0,_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__.default)({}, options, {
              keySeparator: false
            }));
            if (fk && fk.res) this.logger.warn('Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.');
          }

          var lngs = [];
          var fallbackLngs = this.languageUtils.getFallbackCodes(this.options.fallbackLng, options.lng || this.language);

          if (this.options.saveMissingTo === 'fallback' && fallbackLngs && fallbackLngs[0]) {
            for (var i = 0; i < fallbackLngs.length; i++) {
              lngs.push(fallbackLngs[i]);
            }
          } else if (this.options.saveMissingTo === 'all') {
            lngs = this.languageUtils.toResolveHierarchy(options.lng || this.language);
          } else {
            lngs.push(options.lng || this.language);
          }

          var send = function send(l, k) {
            if (_this2.options.missingKeyHandler) {
              _this2.options.missingKeyHandler(l, namespace, k, updateMissing ? options.defaultValue : res, updateMissing, options);
            } else if (_this2.backendConnector && _this2.backendConnector.saveMissing) {
              _this2.backendConnector.saveMissing(l, namespace, k, updateMissing ? options.defaultValue : res, updateMissing, options);
            }

            _this2.emit('missingKey', l, namespace, k, res);
          };

          if (this.options.saveMissing) {
            var needsPluralHandling = options.count !== undefined && typeof options.count !== 'string';

            if (this.options.saveMissingPlurals && needsPluralHandling) {
              lngs.forEach(function (l) {
                var plurals = _this2.pluralResolver.getPluralFormsOfKey(l, key);

                plurals.forEach(function (p) {
                  return send([l], p);
                });
              });
            } else {
              send(lngs, key);
            }
          }
        }

        res = this.extendTranslation(res, keys, options, resolved, lastKey);
        if (usedKey && res === key && this.options.appendNamespaceToMissingKey) res = "".concat(namespace, ":").concat(key);
        if (usedKey && this.options.parseMissingKeyHandler) res = this.options.parseMissingKeyHandler(res);
      }

      return res;
    }
  }, {
    key: "extendTranslation",
    value: function extendTranslation(res, key, options, resolved, lastKey) {
      var _this3 = this;

      if (this.i18nFormat && this.i18nFormat.parse) {
        res = this.i18nFormat.parse(res, options, resolved.usedLng, resolved.usedNS, resolved.usedKey, {
          resolved: resolved
        });
      } else if (!options.skipInterpolation) {
        if (options.interpolation) this.interpolator.init((0,_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__.default)({}, options, {
          interpolation: (0,_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__.default)({}, this.options.interpolation, options.interpolation)
        }));
        var skipOnVariables = options.interpolation && options.interpolation.skipOnVariables || this.options.interpolation.skipOnVariables;
        var nestBef;

        if (skipOnVariables) {
          var nb = res.match(this.interpolator.nestingRegexp);
          nestBef = nb && nb.length;
        }

        var data = options.replace && typeof options.replace !== 'string' ? options.replace : options;
        if (this.options.interpolation.defaultVariables) data = (0,_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__.default)({}, this.options.interpolation.defaultVariables, data);
        res = this.interpolator.interpolate(res, data, options.lng || this.language, options);

        if (skipOnVariables) {
          var na = res.match(this.interpolator.nestingRegexp);
          var nestAft = na && na.length;
          if (nestBef < nestAft) options.nest = false;
        }

        if (options.nest !== false) res = this.interpolator.nest(res, function () {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          if (lastKey && lastKey[0] === args[0] && !options.context) {
            _this3.logger.warn("It seems you are nesting recursively key: ".concat(args[0], " in key: ").concat(key[0]));

            return null;
          }

          return _this3.translate.apply(_this3, args.concat([key]));
        }, options);
        if (options.interpolation) this.interpolator.reset();
      }

      var postProcess = options.postProcess || this.options.postProcess;
      var postProcessorNames = typeof postProcess === 'string' ? [postProcess] : postProcess;

      if (res !== undefined && res !== null && postProcessorNames && postProcessorNames.length && options.applyPostProcessor !== false) {
        res = postProcessor.handle(postProcessorNames, res, key, this.options && this.options.postProcessPassResolved ? (0,_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__.default)({
          i18nResolved: resolved
        }, options) : options, this);
      }

      return res;
    }
  }, {
    key: "resolve",
    value: function resolve(keys) {
      var _this4 = this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var found;
      var usedKey;
      var exactUsedKey;
      var usedLng;
      var usedNS;
      if (typeof keys === 'string') keys = [keys];
      keys.forEach(function (k) {
        if (_this4.isValidLookup(found)) return;

        var extracted = _this4.extractFromKey(k, options);

        var key = extracted.key;
        usedKey = key;
        var namespaces = extracted.namespaces;
        if (_this4.options.fallbackNS) namespaces = namespaces.concat(_this4.options.fallbackNS);
        var needsPluralHandling = options.count !== undefined && typeof options.count !== 'string';
        var needsContextHandling = options.context !== undefined && typeof options.context === 'string' && options.context !== '';
        var codes = options.lngs ? options.lngs : _this4.languageUtils.toResolveHierarchy(options.lng || _this4.language, options.fallbackLng);
        namespaces.forEach(function (ns) {
          if (_this4.isValidLookup(found)) return;
          usedNS = ns;

          if (!checkedLoadedFor["".concat(codes[0], "-").concat(ns)] && _this4.utils && _this4.utils.hasLoadedNamespace && !_this4.utils.hasLoadedNamespace(usedNS)) {
            checkedLoadedFor["".concat(codes[0], "-").concat(ns)] = true;

            _this4.logger.warn("key \"".concat(usedKey, "\" for languages \"").concat(codes.join(', '), "\" won't get resolved as namespace \"").concat(usedNS, "\" was not yet loaded"), 'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!');
          }

          codes.forEach(function (code) {
            if (_this4.isValidLookup(found)) return;
            usedLng = code;
            var finalKey = key;
            var finalKeys = [finalKey];

            if (_this4.i18nFormat && _this4.i18nFormat.addLookupKeys) {
              _this4.i18nFormat.addLookupKeys(finalKeys, key, code, ns, options);
            } else {
              var pluralSuffix;
              if (needsPluralHandling) pluralSuffix = _this4.pluralResolver.getSuffix(code, options.count);
              if (needsPluralHandling && needsContextHandling) finalKeys.push(finalKey + pluralSuffix);
              if (needsContextHandling) finalKeys.push(finalKey += "".concat(_this4.options.contextSeparator).concat(options.context));
              if (needsPluralHandling) finalKeys.push(finalKey += pluralSuffix);
            }

            var possibleKey;

            while (possibleKey = finalKeys.pop()) {
              if (!_this4.isValidLookup(found)) {
                exactUsedKey = possibleKey;
                found = _this4.getResource(code, ns, possibleKey, options);
              }
            }
          });
        });
      });
      return {
        res: found,
        usedKey: usedKey,
        exactUsedKey: exactUsedKey,
        usedLng: usedLng,
        usedNS: usedNS
      };
    }
  }, {
    key: "isValidLookup",
    value: function isValidLookup(res) {
      return res !== undefined && !(!this.options.returnNull && res === null) && !(!this.options.returnEmptyString && res === '');
    }
  }, {
    key: "getResource",
    value: function getResource(code, ns, key) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      if (this.i18nFormat && this.i18nFormat.getResource) return this.i18nFormat.getResource(code, ns, key, options);
      return this.resourceStore.getResource(code, ns, key, options);
    }
  }]);

  return Translator;
}(EventEmitter);

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

var LanguageUtil = function () {
  function LanguageUtil(options) {
    (0,_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__.default)(this, LanguageUtil);

    this.options = options;
    this.whitelist = this.options.supportedLngs || false;
    this.supportedLngs = this.options.supportedLngs || false;
    this.logger = baseLogger.create('languageUtils');
  }

  (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__.default)(LanguageUtil, [{
    key: "getScriptPartFromCode",
    value: function getScriptPartFromCode(code) {
      if (!code || code.indexOf('-') < 0) return null;
      var p = code.split('-');
      if (p.length === 2) return null;
      p.pop();
      if (p[p.length - 1].toLowerCase() === 'x') return null;
      return this.formatLanguageCode(p.join('-'));
    }
  }, {
    key: "getLanguagePartFromCode",
    value: function getLanguagePartFromCode(code) {
      if (!code || code.indexOf('-') < 0) return code;
      var p = code.split('-');
      return this.formatLanguageCode(p[0]);
    }
  }, {
    key: "formatLanguageCode",
    value: function formatLanguageCode(code) {
      if (typeof code === 'string' && code.indexOf('-') > -1) {
        var specialCases = ['hans', 'hant', 'latn', 'cyrl', 'cans', 'mong', 'arab'];
        var p = code.split('-');

        if (this.options.lowerCaseLng) {
          p = p.map(function (part) {
            return part.toLowerCase();
          });
        } else if (p.length === 2) {
          p[0] = p[0].toLowerCase();
          p[1] = p[1].toUpperCase();
          if (specialCases.indexOf(p[1].toLowerCase()) > -1) p[1] = capitalize(p[1].toLowerCase());
        } else if (p.length === 3) {
          p[0] = p[0].toLowerCase();
          if (p[1].length === 2) p[1] = p[1].toUpperCase();
          if (p[0] !== 'sgn' && p[2].length === 2) p[2] = p[2].toUpperCase();
          if (specialCases.indexOf(p[1].toLowerCase()) > -1) p[1] = capitalize(p[1].toLowerCase());
          if (specialCases.indexOf(p[2].toLowerCase()) > -1) p[2] = capitalize(p[2].toLowerCase());
        }

        return p.join('-');
      }

      return this.options.cleanCode || this.options.lowerCaseLng ? code.toLowerCase() : code;
    }
  }, {
    key: "isWhitelisted",
    value: function isWhitelisted(code) {
      this.logger.deprecate('languageUtils.isWhitelisted', 'function "isWhitelisted" will be renamed to "isSupportedCode" in the next major - please make sure to rename it\'s usage asap.');
      return this.isSupportedCode(code);
    }
  }, {
    key: "isSupportedCode",
    value: function isSupportedCode(code) {
      if (this.options.load === 'languageOnly' || this.options.nonExplicitSupportedLngs) {
        code = this.getLanguagePartFromCode(code);
      }

      return !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(code) > -1;
    }
  }, {
    key: "getBestMatchFromCodes",
    value: function getBestMatchFromCodes(codes) {
      var _this = this;

      if (!codes) return null;
      var found;
      codes.forEach(function (code) {
        if (found) return;

        var cleanedLng = _this.formatLanguageCode(code);

        if (!_this.options.supportedLngs || _this.isSupportedCode(cleanedLng)) found = cleanedLng;
      });

      if (!found && this.options.supportedLngs) {
        codes.forEach(function (code) {
          if (found) return;

          var lngOnly = _this.getLanguagePartFromCode(code);

          if (_this.isSupportedCode(lngOnly)) return found = lngOnly;
          found = _this.options.supportedLngs.find(function (supportedLng) {
            if (supportedLng.indexOf(lngOnly) === 0) return supportedLng;
          });
        });
      }

      if (!found) found = this.getFallbackCodes(this.options.fallbackLng)[0];
      return found;
    }
  }, {
    key: "getFallbackCodes",
    value: function getFallbackCodes(fallbacks, code) {
      if (!fallbacks) return [];
      if (typeof fallbacks === 'function') fallbacks = fallbacks(code);
      if (typeof fallbacks === 'string') fallbacks = [fallbacks];
      if (Object.prototype.toString.apply(fallbacks) === '[object Array]') return fallbacks;
      if (!code) return fallbacks["default"] || [];
      var found = fallbacks[code];
      if (!found) found = fallbacks[this.getScriptPartFromCode(code)];
      if (!found) found = fallbacks[this.formatLanguageCode(code)];
      if (!found) found = fallbacks[this.getLanguagePartFromCode(code)];
      if (!found) found = fallbacks["default"];
      return found || [];
    }
  }, {
    key: "toResolveHierarchy",
    value: function toResolveHierarchy(code, fallbackCode) {
      var _this2 = this;

      var fallbackCodes = this.getFallbackCodes(fallbackCode || this.options.fallbackLng || [], code);
      var codes = [];

      var addCode = function addCode(c) {
        if (!c) return;

        if (_this2.isSupportedCode(c)) {
          codes.push(c);
        } else {
          _this2.logger.warn("rejecting language code not found in supportedLngs: ".concat(c));
        }
      };

      if (typeof code === 'string' && code.indexOf('-') > -1) {
        if (this.options.load !== 'languageOnly') addCode(this.formatLanguageCode(code));
        if (this.options.load !== 'languageOnly' && this.options.load !== 'currentOnly') addCode(this.getScriptPartFromCode(code));
        if (this.options.load !== 'currentOnly') addCode(this.getLanguagePartFromCode(code));
      } else if (typeof code === 'string') {
        addCode(this.formatLanguageCode(code));
      }

      fallbackCodes.forEach(function (fc) {
        if (codes.indexOf(fc) < 0) addCode(_this2.formatLanguageCode(fc));
      });
      return codes;
    }
  }]);

  return LanguageUtil;
}();

var sets = [{
  lngs: ['ach', 'ak', 'am', 'arn', 'br', 'fil', 'gun', 'ln', 'mfe', 'mg', 'mi', 'oc', 'pt', 'pt-BR', 'tg', 'ti', 'tr', 'uz', 'wa'],
  nr: [1, 2],
  fc: 1
}, {
  lngs: ['af', 'an', 'ast', 'az', 'bg', 'bn', 'ca', 'da', 'de', 'dev', 'el', 'en', 'eo', 'es', 'et', 'eu', 'fi', 'fo', 'fur', 'fy', 'gl', 'gu', 'ha', 'hi', 'hu', 'hy', 'ia', 'it', 'kn', 'ku', 'lb', 'mai', 'ml', 'mn', 'mr', 'nah', 'nap', 'nb', 'ne', 'nl', 'nn', 'no', 'nso', 'pa', 'pap', 'pms', 'ps', 'pt-PT', 'rm', 'sco', 'se', 'si', 'so', 'son', 'sq', 'sv', 'sw', 'ta', 'te', 'tk', 'ur', 'yo'],
  nr: [1, 2],
  fc: 2
}, {
  lngs: ['ay', 'bo', 'cgg', 'fa', 'ht', 'id', 'ja', 'jbo', 'ka', 'kk', 'km', 'ko', 'ky', 'lo', 'ms', 'sah', 'su', 'th', 'tt', 'ug', 'vi', 'wo', 'zh'],
  nr: [1],
  fc: 3
}, {
  lngs: ['be', 'bs', 'cnr', 'dz', 'hr', 'ru', 'sr', 'uk'],
  nr: [1, 2, 5],
  fc: 4
}, {
  lngs: ['ar'],
  nr: [0, 1, 2, 3, 11, 100],
  fc: 5
}, {
  lngs: ['cs', 'sk'],
  nr: [1, 2, 5],
  fc: 6
}, {
  lngs: ['csb', 'pl'],
  nr: [1, 2, 5],
  fc: 7
}, {
  lngs: ['cy'],
  nr: [1, 2, 3, 8],
  fc: 8
}, {
  lngs: ['fr'],
  nr: [1, 2],
  fc: 9
}, {
  lngs: ['ga'],
  nr: [1, 2, 3, 7, 11],
  fc: 10
}, {
  lngs: ['gd'],
  nr: [1, 2, 3, 20],
  fc: 11
}, {
  lngs: ['is'],
  nr: [1, 2],
  fc: 12
}, {
  lngs: ['jv'],
  nr: [0, 1],
  fc: 13
}, {
  lngs: ['kw'],
  nr: [1, 2, 3, 4],
  fc: 14
}, {
  lngs: ['lt'],
  nr: [1, 2, 10],
  fc: 15
}, {
  lngs: ['lv'],
  nr: [1, 2, 0],
  fc: 16
}, {
  lngs: ['mk'],
  nr: [1, 2],
  fc: 17
}, {
  lngs: ['mnk'],
  nr: [0, 1, 2],
  fc: 18
}, {
  lngs: ['mt'],
  nr: [1, 2, 11, 20],
  fc: 19
}, {
  lngs: ['or'],
  nr: [2, 1],
  fc: 2
}, {
  lngs: ['ro'],
  nr: [1, 2, 20],
  fc: 20
}, {
  lngs: ['sl'],
  nr: [5, 1, 2, 3],
  fc: 21
}, {
  lngs: ['he', 'iw'],
  nr: [1, 2, 20, 21],
  fc: 22
}];
var _rulesPluralsTypes = {
  1: function _(n) {
    return Number(n > 1);
  },
  2: function _(n) {
    return Number(n != 1);
  },
  3: function _(n) {
    return 0;
  },
  4: function _(n) {
    return Number(n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
  },
  5: function _(n) {
    return Number(n == 0 ? 0 : n == 1 ? 1 : n == 2 ? 2 : n % 100 >= 3 && n % 100 <= 10 ? 3 : n % 100 >= 11 ? 4 : 5);
  },
  6: function _(n) {
    return Number(n == 1 ? 0 : n >= 2 && n <= 4 ? 1 : 2);
  },
  7: function _(n) {
    return Number(n == 1 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
  },
  8: function _(n) {
    return Number(n == 1 ? 0 : n == 2 ? 1 : n != 8 && n != 11 ? 2 : 3);
  },
  9: function _(n) {
    return Number(n >= 2);
  },
  10: function _(n) {
    return Number(n == 1 ? 0 : n == 2 ? 1 : n < 7 ? 2 : n < 11 ? 3 : 4);
  },
  11: function _(n) {
    return Number(n == 1 || n == 11 ? 0 : n == 2 || n == 12 ? 1 : n > 2 && n < 20 ? 2 : 3);
  },
  12: function _(n) {
    return Number(n % 10 != 1 || n % 100 == 11);
  },
  13: function _(n) {
    return Number(n !== 0);
  },
  14: function _(n) {
    return Number(n == 1 ? 0 : n == 2 ? 1 : n == 3 ? 2 : 3);
  },
  15: function _(n) {
    return Number(n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
  },
  16: function _(n) {
    return Number(n % 10 == 1 && n % 100 != 11 ? 0 : n !== 0 ? 1 : 2);
  },
  17: function _(n) {
    return Number(n == 1 || n % 10 == 1 && n % 100 != 11 ? 0 : 1);
  },
  18: function _(n) {
    return Number(n == 0 ? 0 : n == 1 ? 1 : 2);
  },
  19: function _(n) {
    return Number(n == 1 ? 0 : n == 0 || n % 100 > 1 && n % 100 < 11 ? 1 : n % 100 > 10 && n % 100 < 20 ? 2 : 3);
  },
  20: function _(n) {
    return Number(n == 1 ? 0 : n == 0 || n % 100 > 0 && n % 100 < 20 ? 1 : 2);
  },
  21: function _(n) {
    return Number(n % 100 == 1 ? 1 : n % 100 == 2 ? 2 : n % 100 == 3 || n % 100 == 4 ? 3 : 0);
  },
  22: function _(n) {
    return Number(n == 1 ? 0 : n == 2 ? 1 : (n < 0 || n > 10) && n % 10 == 0 ? 2 : 3);
  }
};

function createRules() {
  var rules = {};
  sets.forEach(function (set) {
    set.lngs.forEach(function (l) {
      rules[l] = {
        numbers: set.nr,
        plurals: _rulesPluralsTypes[set.fc]
      };
    });
  });
  return rules;
}

var PluralResolver = function () {
  function PluralResolver(languageUtils) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    (0,_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__.default)(this, PluralResolver);

    this.languageUtils = languageUtils;
    this.options = options;
    this.logger = baseLogger.create('pluralResolver');
    this.rules = createRules();
  }

  (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__.default)(PluralResolver, [{
    key: "addRule",
    value: function addRule(lng, obj) {
      this.rules[lng] = obj;
    }
  }, {
    key: "getRule",
    value: function getRule(code) {
      return this.rules[code] || this.rules[this.languageUtils.getLanguagePartFromCode(code)];
    }
  }, {
    key: "needsPlural",
    value: function needsPlural(code) {
      var rule = this.getRule(code);
      return rule && rule.numbers.length > 1;
    }
  }, {
    key: "getPluralFormsOfKey",
    value: function getPluralFormsOfKey(code, key) {
      var _this = this;

      var ret = [];
      var rule = this.getRule(code);
      if (!rule) return ret;
      rule.numbers.forEach(function (n) {
        var suffix = _this.getSuffix(code, n);

        ret.push("".concat(key).concat(suffix));
      });
      return ret;
    }
  }, {
    key: "getSuffix",
    value: function getSuffix(code, count) {
      var _this2 = this;

      var rule = this.getRule(code);

      if (rule) {
        var idx = rule.noAbs ? rule.plurals(count) : rule.plurals(Math.abs(count));
        var suffix = rule.numbers[idx];

        if (this.options.simplifyPluralSuffix && rule.numbers.length === 2 && rule.numbers[0] === 1) {
          if (suffix === 2) {
            suffix = 'plural';
          } else if (suffix === 1) {
            suffix = '';
          }
        }

        var returnSuffix = function returnSuffix() {
          return _this2.options.prepend && suffix.toString() ? _this2.options.prepend + suffix.toString() : suffix.toString();
        };

        if (this.options.compatibilityJSON === 'v1') {
          if (suffix === 1) return '';
          if (typeof suffix === 'number') return "_plural_".concat(suffix.toString());
          return returnSuffix();
        } else if (this.options.compatibilityJSON === 'v2') {
          return returnSuffix();
        } else if (this.options.simplifyPluralSuffix && rule.numbers.length === 2 && rule.numbers[0] === 1) {
          return returnSuffix();
        }

        return this.options.prepend && idx.toString() ? this.options.prepend + idx.toString() : idx.toString();
      }

      this.logger.warn("no plural rule found for: ".concat(code));
      return '';
    }
  }]);

  return PluralResolver;
}();

var Interpolator = function () {
  function Interpolator() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    (0,_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__.default)(this, Interpolator);

    this.logger = baseLogger.create('interpolator');
    this.options = options;

    this.format = options.interpolation && options.interpolation.format || function (value) {
      return value;
    };

    this.init(options);
  }

  (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__.default)(Interpolator, [{
    key: "init",
    value: function init() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      if (!options.interpolation) options.interpolation = {
        escapeValue: true
      };
      var iOpts = options.interpolation;
      this.escape = iOpts.escape !== undefined ? iOpts.escape : escape;
      this.escapeValue = iOpts.escapeValue !== undefined ? iOpts.escapeValue : true;
      this.useRawValueToEscape = iOpts.useRawValueToEscape !== undefined ? iOpts.useRawValueToEscape : false;
      this.prefix = iOpts.prefix ? regexEscape(iOpts.prefix) : iOpts.prefixEscaped || '{{';
      this.suffix = iOpts.suffix ? regexEscape(iOpts.suffix) : iOpts.suffixEscaped || '}}';
      this.formatSeparator = iOpts.formatSeparator ? iOpts.formatSeparator : iOpts.formatSeparator || ',';
      this.unescapePrefix = iOpts.unescapeSuffix ? '' : iOpts.unescapePrefix || '-';
      this.unescapeSuffix = this.unescapePrefix ? '' : iOpts.unescapeSuffix || '';
      this.nestingPrefix = iOpts.nestingPrefix ? regexEscape(iOpts.nestingPrefix) : iOpts.nestingPrefixEscaped || regexEscape('$t(');
      this.nestingSuffix = iOpts.nestingSuffix ? regexEscape(iOpts.nestingSuffix) : iOpts.nestingSuffixEscaped || regexEscape(')');
      this.nestingOptionsSeparator = iOpts.nestingOptionsSeparator ? iOpts.nestingOptionsSeparator : iOpts.nestingOptionsSeparator || ',';
      this.maxReplaces = iOpts.maxReplaces ? iOpts.maxReplaces : 1000;
      this.alwaysFormat = iOpts.alwaysFormat !== undefined ? iOpts.alwaysFormat : false;
      this.resetRegExp();
    }
  }, {
    key: "reset",
    value: function reset() {
      if (this.options) this.init(this.options);
    }
  }, {
    key: "resetRegExp",
    value: function resetRegExp() {
      var regexpStr = "".concat(this.prefix, "(.+?)").concat(this.suffix);
      this.regexp = new RegExp(regexpStr, 'g');
      var regexpUnescapeStr = "".concat(this.prefix).concat(this.unescapePrefix, "(.+?)").concat(this.unescapeSuffix).concat(this.suffix);
      this.regexpUnescape = new RegExp(regexpUnescapeStr, 'g');
      var nestingRegexpStr = "".concat(this.nestingPrefix, "(.+?)").concat(this.nestingSuffix);
      this.nestingRegexp = new RegExp(nestingRegexpStr, 'g');
    }
  }, {
    key: "interpolate",
    value: function interpolate(str, data, lng, options) {
      var _this = this;

      var match;
      var value;
      var replaces;
      var defaultData = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {};

      function regexSafe(val) {
        return val.replace(/\$/g, '$$$$');
      }

      var handleFormat = function handleFormat(key) {
        if (key.indexOf(_this.formatSeparator) < 0) {
          var path = getPathWithDefaults(data, defaultData, key);
          return _this.alwaysFormat ? _this.format(path, undefined, lng) : path;
        }

        var p = key.split(_this.formatSeparator);
        var k = p.shift().trim();
        var f = p.join(_this.formatSeparator).trim();
        return _this.format(getPathWithDefaults(data, defaultData, k), f, lng, options);
      };

      this.resetRegExp();
      var missingInterpolationHandler = options && options.missingInterpolationHandler || this.options.missingInterpolationHandler;
      var skipOnVariables = options && options.interpolation && options.interpolation.skipOnVariables || this.options.interpolation.skipOnVariables;
      var todos = [{
        regex: this.regexpUnescape,
        safeValue: function safeValue(val) {
          return regexSafe(val);
        }
      }, {
        regex: this.regexp,
        safeValue: function safeValue(val) {
          return _this.escapeValue ? regexSafe(_this.escape(val)) : regexSafe(val);
        }
      }];
      todos.forEach(function (todo) {
        replaces = 0;

        while (match = todo.regex.exec(str)) {
          value = handleFormat(match[1].trim());

          if (value === undefined) {
            if (typeof missingInterpolationHandler === 'function') {
              var temp = missingInterpolationHandler(str, match, options);
              value = typeof temp === 'string' ? temp : '';
            } else if (skipOnVariables) {
              value = match[0];
              continue;
            } else {
              _this.logger.warn("missed to pass in variable ".concat(match[1], " for interpolating ").concat(str));

              value = '';
            }
          } else if (typeof value !== 'string' && !_this.useRawValueToEscape) {
            value = makeString(value);
          }

          str = str.replace(match[0], todo.safeValue(value));
          todo.regex.lastIndex = 0;
          replaces++;

          if (replaces >= _this.maxReplaces) {
            break;
          }
        }
      });
      return str;
    }
  }, {
    key: "nest",
    value: function nest(str, fc) {
      var _this2 = this;

      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var match;
      var value;

      var clonedOptions = (0,_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__.default)({}, options);

      clonedOptions.applyPostProcessor = false;
      delete clonedOptions.defaultValue;

      function handleHasOptions(key, inheritedOptions) {
        var sep = this.nestingOptionsSeparator;
        if (key.indexOf(sep) < 0) return key;
        var c = key.split(new RegExp("".concat(sep, "[ ]*{")));
        var optionsString = "{".concat(c[1]);
        key = c[0];
        optionsString = this.interpolate(optionsString, clonedOptions);
        optionsString = optionsString.replace(/'/g, '"');

        try {
          clonedOptions = JSON.parse(optionsString);
          if (inheritedOptions) clonedOptions = (0,_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__.default)({}, inheritedOptions, clonedOptions);
        } catch (e) {
          this.logger.warn("failed parsing options string in nesting for key ".concat(key), e);
          return "".concat(key).concat(sep).concat(optionsString);
        }

        delete clonedOptions.defaultValue;
        return key;
      }

      while (match = this.nestingRegexp.exec(str)) {
        var formatters = [];
        var doReduce = false;

        if (match[0].includes(this.formatSeparator) && !/{.*}/.test(match[1])) {
          var r = match[1].split(this.formatSeparator).map(function (elem) {
            return elem.trim();
          });
          match[1] = r.shift();
          formatters = r;
          doReduce = true;
        }

        value = fc(handleHasOptions.call(this, match[1].trim(), clonedOptions), clonedOptions);
        if (value && match[0] === str && typeof value !== 'string') return value;
        if (typeof value !== 'string') value = makeString(value);

        if (!value) {
          this.logger.warn("missed to resolve ".concat(match[1], " for nesting ").concat(str));
          value = '';
        }

        if (doReduce) {
          value = formatters.reduce(function (v, f) {
            return _this2.format(v, f, options.lng, options);
          }, value.trim());
        }

        str = str.replace(match[0], value);
        this.regexp.lastIndex = 0;
      }

      return str;
    }
  }]);

  return Interpolator;
}();

function remove(arr, what) {
  var found = arr.indexOf(what);

  while (found !== -1) {
    arr.splice(found, 1);
    found = arr.indexOf(what);
  }
}

var Connector = function (_EventEmitter) {
  (0,_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__.default)(Connector, _EventEmitter);

  function Connector(backend, store, services) {
    var _this;

    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    (0,_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__.default)(this, Connector);

    _this = (0,_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__.default)(this, (0,_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__.default)(Connector).call(this));

    if (isIE10) {
      EventEmitter.call((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__.default)(_this));
    }

    _this.backend = backend;
    _this.store = store;
    _this.services = services;
    _this.languageUtils = services.languageUtils;
    _this.options = options;
    _this.logger = baseLogger.create('backendConnector');
    _this.state = {};
    _this.queue = [];

    if (_this.backend && _this.backend.init) {
      _this.backend.init(services, options.backend, options);
    }

    return _this;
  }

  (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__.default)(Connector, [{
    key: "queueLoad",
    value: function queueLoad(languages, namespaces, options, callback) {
      var _this2 = this;

      var toLoad = [];
      var pending = [];
      var toLoadLanguages = [];
      var toLoadNamespaces = [];
      languages.forEach(function (lng) {
        var hasAllNamespaces = true;
        namespaces.forEach(function (ns) {
          var name = "".concat(lng, "|").concat(ns);

          if (!options.reload && _this2.store.hasResourceBundle(lng, ns)) {
            _this2.state[name] = 2;
          } else if (_this2.state[name] < 0) ; else if (_this2.state[name] === 1) {
            if (pending.indexOf(name) < 0) pending.push(name);
          } else {
            _this2.state[name] = 1;
            hasAllNamespaces = false;
            if (pending.indexOf(name) < 0) pending.push(name);
            if (toLoad.indexOf(name) < 0) toLoad.push(name);
            if (toLoadNamespaces.indexOf(ns) < 0) toLoadNamespaces.push(ns);
          }
        });
        if (!hasAllNamespaces) toLoadLanguages.push(lng);
      });

      if (toLoad.length || pending.length) {
        this.queue.push({
          pending: pending,
          loaded: {},
          errors: [],
          callback: callback
        });
      }

      return {
        toLoad: toLoad,
        pending: pending,
        toLoadLanguages: toLoadLanguages,
        toLoadNamespaces: toLoadNamespaces
      };
    }
  }, {
    key: "loaded",
    value: function loaded(name, err, data) {
      var s = name.split('|');
      var lng = s[0];
      var ns = s[1];
      if (err) this.emit('failedLoading', lng, ns, err);

      if (data) {
        this.store.addResourceBundle(lng, ns, data);
      }

      this.state[name] = err ? -1 : 2;
      var loaded = {};
      this.queue.forEach(function (q) {
        pushPath(q.loaded, [lng], ns);
        remove(q.pending, name);
        if (err) q.errors.push(err);

        if (q.pending.length === 0 && !q.done) {
          Object.keys(q.loaded).forEach(function (l) {
            if (!loaded[l]) loaded[l] = [];

            if (q.loaded[l].length) {
              q.loaded[l].forEach(function (ns) {
                if (loaded[l].indexOf(ns) < 0) loaded[l].push(ns);
              });
            }
          });
          q.done = true;

          if (q.errors.length) {
            q.callback(q.errors);
          } else {
            q.callback();
          }
        }
      });
      this.emit('loaded', loaded);
      this.queue = this.queue.filter(function (q) {
        return !q.done;
      });
    }
  }, {
    key: "read",
    value: function read(lng, ns, fcName) {
      var _this3 = this;

      var tried = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      var wait = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 350;
      var callback = arguments.length > 5 ? arguments[5] : undefined;
      if (!lng.length) return callback(null, {});
      return this.backend[fcName](lng, ns, function (err, data) {
        if (err && data && tried < 5) {
          setTimeout(function () {
            _this3.read.call(_this3, lng, ns, fcName, tried + 1, wait * 2, callback);
          }, wait);
          return;
        }

        callback(err, data);
      });
    }
  }, {
    key: "prepareLoading",
    value: function prepareLoading(languages, namespaces) {
      var _this4 = this;

      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var callback = arguments.length > 3 ? arguments[3] : undefined;

      if (!this.backend) {
        this.logger.warn('No backend was added via i18next.use. Will not load resources.');
        return callback && callback();
      }

      if (typeof languages === 'string') languages = this.languageUtils.toResolveHierarchy(languages);
      if (typeof namespaces === 'string') namespaces = [namespaces];
      var toLoad = this.queueLoad(languages, namespaces, options, callback);

      if (!toLoad.toLoad.length) {
        if (!toLoad.pending.length) callback();
        return null;
      }

      toLoad.toLoad.forEach(function (name) {
        _this4.loadOne(name);
      });
    }
  }, {
    key: "load",
    value: function load(languages, namespaces, callback) {
      this.prepareLoading(languages, namespaces, {}, callback);
    }
  }, {
    key: "reload",
    value: function reload(languages, namespaces, callback) {
      this.prepareLoading(languages, namespaces, {
        reload: true
      }, callback);
    }
  }, {
    key: "loadOne",
    value: function loadOne(name) {
      var _this5 = this;

      var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      var s = name.split('|');
      var lng = s[0];
      var ns = s[1];
      this.read(lng, ns, 'read', undefined, undefined, function (err, data) {
        if (err) _this5.logger.warn("".concat(prefix, "loading namespace ").concat(ns, " for language ").concat(lng, " failed"), err);
        if (!err && data) _this5.logger.log("".concat(prefix, "loaded namespace ").concat(ns, " for language ").concat(lng), data);

        _this5.loaded(name, err, data);
      });
    }
  }, {
    key: "saveMissing",
    value: function saveMissing(languages, namespace, key, fallbackValue, isUpdate) {
      var options = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};

      if (this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(namespace)) {
        this.logger.warn("did not save key \"".concat(key, "\" as the namespace \"").concat(namespace, "\" was not yet loaded"), 'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!');
        return;
      }

      if (key === undefined || key === null || key === '') return;

      if (this.backend && this.backend.create) {
        this.backend.create(languages, namespace, key, fallbackValue, null, (0,_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__.default)({}, options, {
          isUpdate: isUpdate
        }));
      }

      if (!languages || !languages[0]) return;
      this.store.addResource(languages[0], namespace, key, fallbackValue);
    }
  }]);

  return Connector;
}(EventEmitter);

function get() {
  return {
    debug: false,
    initImmediate: true,
    ns: ['translation'],
    defaultNS: ['translation'],
    fallbackLng: ['dev'],
    fallbackNS: false,
    whitelist: false,
    nonExplicitWhitelist: false,
    supportedLngs: false,
    nonExplicitSupportedLngs: false,
    load: 'all',
    preload: false,
    simplifyPluralSuffix: true,
    keySeparator: '.',
    nsSeparator: ':',
    pluralSeparator: '_',
    contextSeparator: '_',
    partialBundledLanguages: false,
    saveMissing: false,
    updateMissing: false,
    saveMissingTo: 'fallback',
    saveMissingPlurals: true,
    missingKeyHandler: false,
    missingInterpolationHandler: false,
    postProcess: false,
    postProcessPassResolved: false,
    returnNull: true,
    returnEmptyString: true,
    returnObjects: false,
    joinArrays: false,
    returnedObjectHandler: false,
    parseMissingKeyHandler: false,
    appendNamespaceToMissingKey: false,
    appendNamespaceToCIMode: false,
    overloadTranslationOptionHandler: function handle(args) {
      var ret = {};
      if ((0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__.default)(args[1]) === 'object') ret = args[1];
      if (typeof args[1] === 'string') ret.defaultValue = args[1];
      if (typeof args[2] === 'string') ret.tDescription = args[2];

      if ((0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__.default)(args[2]) === 'object' || (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__.default)(args[3]) === 'object') {
        var options = args[3] || args[2];
        Object.keys(options).forEach(function (key) {
          ret[key] = options[key];
        });
      }

      return ret;
    },
    interpolation: {
      escapeValue: true,
      format: function format(value, _format, lng, options) {
        return value;
      },
      prefix: '{{',
      suffix: '}}',
      formatSeparator: ',',
      unescapePrefix: '-',
      nestingPrefix: '$t(',
      nestingSuffix: ')',
      nestingOptionsSeparator: ',',
      maxReplaces: 1000,
      skipOnVariables: false
    }
  };
}
function transformOptions(options) {
  if (typeof options.ns === 'string') options.ns = [options.ns];
  if (typeof options.fallbackLng === 'string') options.fallbackLng = [options.fallbackLng];
  if (typeof options.fallbackNS === 'string') options.fallbackNS = [options.fallbackNS];

  if (options.whitelist) {
    if (options.whitelist && options.whitelist.indexOf('cimode') < 0) {
      options.whitelist = options.whitelist.concat(['cimode']);
    }

    options.supportedLngs = options.whitelist;
  }

  if (options.nonExplicitWhitelist) {
    options.nonExplicitSupportedLngs = options.nonExplicitWhitelist;
  }

  if (options.supportedLngs && options.supportedLngs.indexOf('cimode') < 0) {
    options.supportedLngs = options.supportedLngs.concat(['cimode']);
  }

  return options;
}

function noop() {}

var I18n = function (_EventEmitter) {
  (0,_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__.default)(I18n, _EventEmitter);

  function I18n() {
    var _this;

    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var callback = arguments.length > 1 ? arguments[1] : undefined;

    (0,_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__.default)(this, I18n);

    _this = (0,_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__.default)(this, (0,_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__.default)(I18n).call(this));

    if (isIE10) {
      EventEmitter.call((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__.default)(_this));
    }

    _this.options = transformOptions(options);
    _this.services = {};
    _this.logger = baseLogger;
    _this.modules = {
      external: []
    };

    if (callback && !_this.isInitialized && !options.isClone) {
      if (!_this.options.initImmediate) {
        _this.init(options, callback);

        return (0,_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__.default)(_this, (0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__.default)(_this));
      }

      setTimeout(function () {
        _this.init(options, callback);
      }, 0);
    }

    return _this;
  }

  (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__.default)(I18n, [{
    key: "init",
    value: function init() {
      var _this2 = this;

      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var callback = arguments.length > 1 ? arguments[1] : undefined;

      if (typeof options === 'function') {
        callback = options;
        options = {};
      }

      if (options.whitelist && !options.supportedLngs) {
        this.logger.deprecate('whitelist', 'option "whitelist" will be renamed to "supportedLngs" in the next major - please make sure to rename this option asap.');
      }

      if (options.nonExplicitWhitelist && !options.nonExplicitSupportedLngs) {
        this.logger.deprecate('whitelist', 'options "nonExplicitWhitelist" will be renamed to "nonExplicitSupportedLngs" in the next major - please make sure to rename this option asap.');
      }

      this.options = (0,_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__.default)({}, get(), this.options, transformOptions(options));
      this.format = this.options.interpolation.format;
      if (!callback) callback = noop;

      function createClassOnDemand(ClassOrObject) {
        if (!ClassOrObject) return null;
        if (typeof ClassOrObject === 'function') return new ClassOrObject();
        return ClassOrObject;
      }

      if (!this.options.isClone) {
        if (this.modules.logger) {
          baseLogger.init(createClassOnDemand(this.modules.logger), this.options);
        } else {
          baseLogger.init(null, this.options);
        }

        var lu = new LanguageUtil(this.options);
        this.store = new ResourceStore(this.options.resources, this.options);
        var s = this.services;
        s.logger = baseLogger;
        s.resourceStore = this.store;
        s.languageUtils = lu;
        s.pluralResolver = new PluralResolver(lu, {
          prepend: this.options.pluralSeparator,
          compatibilityJSON: this.options.compatibilityJSON,
          simplifyPluralSuffix: this.options.simplifyPluralSuffix
        });
        s.interpolator = new Interpolator(this.options);
        s.utils = {
          hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
        };
        s.backendConnector = new Connector(createClassOnDemand(this.modules.backend), s.resourceStore, s, this.options);
        s.backendConnector.on('*', function (event) {
          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }

          _this2.emit.apply(_this2, [event].concat(args));
        });

        if (this.modules.languageDetector) {
          s.languageDetector = createClassOnDemand(this.modules.languageDetector);
          s.languageDetector.init(s, this.options.detection, this.options);
        }

        if (this.modules.i18nFormat) {
          s.i18nFormat = createClassOnDemand(this.modules.i18nFormat);
          if (s.i18nFormat.init) s.i18nFormat.init(this);
        }

        this.translator = new Translator(this.services, this.options);
        this.translator.on('*', function (event) {
          for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            args[_key2 - 1] = arguments[_key2];
          }

          _this2.emit.apply(_this2, [event].concat(args));
        });
        this.modules.external.forEach(function (m) {
          if (m.init) m.init(_this2);
        });
      }

      if (this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
        var codes = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
        if (codes.length > 0 && codes[0] !== 'dev') this.options.lng = codes[0];
      }

      if (!this.services.languageDetector && !this.options.lng) {
        this.logger.warn('init: no languageDetector is used and no lng is defined');
      }

      var storeApi = ['getResource', 'hasResourceBundle', 'getResourceBundle', 'getDataByLanguage'];
      storeApi.forEach(function (fcName) {
        _this2[fcName] = function () {
          var _this2$store;

          return (_this2$store = _this2.store)[fcName].apply(_this2$store, arguments);
        };
      });
      var storeApiChained = ['addResource', 'addResources', 'addResourceBundle', 'removeResourceBundle'];
      storeApiChained.forEach(function (fcName) {
        _this2[fcName] = function () {
          var _this2$store2;

          (_this2$store2 = _this2.store)[fcName].apply(_this2$store2, arguments);

          return _this2;
        };
      });
      var deferred = defer();

      var load = function load() {
        _this2.changeLanguage(_this2.options.lng, function (err, t) {
          _this2.isInitialized = true;
          if (!_this2.options.isClone) _this2.logger.log('initialized', _this2.options);

          _this2.emit('initialized', _this2.options);

          deferred.resolve(t);
          callback(err, t);
        });
      };

      if (this.options.resources || !this.options.initImmediate) {
        load();
      } else {
        setTimeout(load, 0);
      }

      return deferred;
    }
  }, {
    key: "loadResources",
    value: function loadResources(language) {
      var _this3 = this;

      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;
      var usedCallback = callback;
      var usedLng = typeof language === 'string' ? language : this.language;
      if (typeof language === 'function') usedCallback = language;

      if (!this.options.resources || this.options.partialBundledLanguages) {
        if (usedLng && usedLng.toLowerCase() === 'cimode') return usedCallback();
        var toLoad = [];

        var append = function append(lng) {
          if (!lng) return;

          var lngs = _this3.services.languageUtils.toResolveHierarchy(lng);

          lngs.forEach(function (l) {
            if (toLoad.indexOf(l) < 0) toLoad.push(l);
          });
        };

        if (!usedLng) {
          var fallbacks = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
          fallbacks.forEach(function (l) {
            return append(l);
          });
        } else {
          append(usedLng);
        }

        if (this.options.preload) {
          this.options.preload.forEach(function (l) {
            return append(l);
          });
        }

        this.services.backendConnector.load(toLoad, this.options.ns, usedCallback);
      } else {
        usedCallback(null);
      }
    }
  }, {
    key: "reloadResources",
    value: function reloadResources(lngs, ns, callback) {
      var deferred = defer();
      if (!lngs) lngs = this.languages;
      if (!ns) ns = this.options.ns;
      if (!callback) callback = noop;
      this.services.backendConnector.reload(lngs, ns, function (err) {
        deferred.resolve();
        callback(err);
      });
      return deferred;
    }
  }, {
    key: "use",
    value: function use(module) {
      if (!module) throw new Error('You are passing an undefined module! Please check the object you are passing to i18next.use()');
      if (!module.type) throw new Error('You are passing a wrong module! Please check the object you are passing to i18next.use()');

      if (module.type === 'backend') {
        this.modules.backend = module;
      }

      if (module.type === 'logger' || module.log && module.warn && module.error) {
        this.modules.logger = module;
      }

      if (module.type === 'languageDetector') {
        this.modules.languageDetector = module;
      }

      if (module.type === 'i18nFormat') {
        this.modules.i18nFormat = module;
      }

      if (module.type === 'postProcessor') {
        postProcessor.addPostProcessor(module);
      }

      if (module.type === '3rdParty') {
        this.modules.external.push(module);
      }

      return this;
    }
  }, {
    key: "changeLanguage",
    value: function changeLanguage(lng, callback) {
      var _this4 = this;

      this.isLanguageChangingTo = lng;
      var deferred = defer();
      this.emit('languageChanging', lng);

      var done = function done(err, l) {
        if (l) {
          _this4.language = l;
          _this4.languages = _this4.services.languageUtils.toResolveHierarchy(l);

          _this4.translator.changeLanguage(l);

          _this4.isLanguageChangingTo = undefined;

          _this4.emit('languageChanged', l);

          _this4.logger.log('languageChanged', l);
        } else {
          _this4.isLanguageChangingTo = undefined;
        }

        deferred.resolve(function () {
          return _this4.t.apply(_this4, arguments);
        });
        if (callback) callback(err, function () {
          return _this4.t.apply(_this4, arguments);
        });
      };

      var setLng = function setLng(lngs) {
        var l = typeof lngs === 'string' ? lngs : _this4.services.languageUtils.getBestMatchFromCodes(lngs);

        if (l) {
          if (!_this4.language) {
            _this4.language = l;
            _this4.languages = _this4.services.languageUtils.toResolveHierarchy(l);
          }

          if (!_this4.translator.language) _this4.translator.changeLanguage(l);
          if (_this4.services.languageDetector) _this4.services.languageDetector.cacheUserLanguage(l);
        }

        _this4.loadResources(l, function (err) {
          done(err, l);
        });
      };

      if (!lng && this.services.languageDetector && !this.services.languageDetector.async) {
        setLng(this.services.languageDetector.detect());
      } else if (!lng && this.services.languageDetector && this.services.languageDetector.async) {
        this.services.languageDetector.detect(setLng);
      } else {
        setLng(lng);
      }

      return deferred;
    }
  }, {
    key: "getFixedT",
    value: function getFixedT(lng, ns) {
      var _this5 = this;

      var fixedT = function fixedT(key, opts) {
        var options;

        if ((0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__.default)(opts) !== 'object') {
          for (var _len3 = arguments.length, rest = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
            rest[_key3 - 2] = arguments[_key3];
          }

          options = _this5.options.overloadTranslationOptionHandler([key, opts].concat(rest));
        } else {
          options = (0,_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__.default)({}, opts);
        }

        options.lng = options.lng || fixedT.lng;
        options.lngs = options.lngs || fixedT.lngs;
        options.ns = options.ns || fixedT.ns;
        return _this5.t(key, options);
      };

      if (typeof lng === 'string') {
        fixedT.lng = lng;
      } else {
        fixedT.lngs = lng;
      }

      fixedT.ns = ns;
      return fixedT;
    }
  }, {
    key: "t",
    value: function t() {
      var _this$translator;

      return this.translator && (_this$translator = this.translator).translate.apply(_this$translator, arguments);
    }
  }, {
    key: "exists",
    value: function exists() {
      var _this$translator2;

      return this.translator && (_this$translator2 = this.translator).exists.apply(_this$translator2, arguments);
    }
  }, {
    key: "setDefaultNamespace",
    value: function setDefaultNamespace(ns) {
      this.options.defaultNS = ns;
    }
  }, {
    key: "hasLoadedNamespace",
    value: function hasLoadedNamespace(ns) {
      var _this6 = this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if (!this.isInitialized) {
        this.logger.warn('hasLoadedNamespace: i18next was not initialized', this.languages);
        return false;
      }

      if (!this.languages || !this.languages.length) {
        this.logger.warn('hasLoadedNamespace: i18n.languages were undefined or empty', this.languages);
        return false;
      }

      var lng = this.languages[0];
      var fallbackLng = this.options ? this.options.fallbackLng : false;
      var lastLng = this.languages[this.languages.length - 1];
      if (lng.toLowerCase() === 'cimode') return true;

      var loadNotPending = function loadNotPending(l, n) {
        var loadState = _this6.services.backendConnector.state["".concat(l, "|").concat(n)];

        return loadState === -1 || loadState === 2;
      };

      if (options.precheck) {
        var preResult = options.precheck(this, loadNotPending);
        if (preResult !== undefined) return preResult;
      }

      if (this.hasResourceBundle(lng, ns)) return true;
      if (!this.services.backendConnector.backend) return true;
      if (loadNotPending(lng, ns) && (!fallbackLng || loadNotPending(lastLng, ns))) return true;
      return false;
    }
  }, {
    key: "loadNamespaces",
    value: function loadNamespaces(ns, callback) {
      var _this7 = this;

      var deferred = defer();

      if (!this.options.ns) {
        callback && callback();
        return Promise.resolve();
      }

      if (typeof ns === 'string') ns = [ns];
      ns.forEach(function (n) {
        if (_this7.options.ns.indexOf(n) < 0) _this7.options.ns.push(n);
      });
      this.loadResources(function (err) {
        deferred.resolve();
        if (callback) callback(err);
      });
      return deferred;
    }
  }, {
    key: "loadLanguages",
    value: function loadLanguages(lngs, callback) {
      var deferred = defer();
      if (typeof lngs === 'string') lngs = [lngs];
      var preloaded = this.options.preload || [];
      var newLngs = lngs.filter(function (lng) {
        return preloaded.indexOf(lng) < 0;
      });

      if (!newLngs.length) {
        if (callback) callback();
        return Promise.resolve();
      }

      this.options.preload = preloaded.concat(newLngs);
      this.loadResources(function (err) {
        deferred.resolve();
        if (callback) callback(err);
      });
      return deferred;
    }
  }, {
    key: "dir",
    value: function dir(lng) {
      if (!lng) lng = this.languages && this.languages.length > 0 ? this.languages[0] : this.language;
      if (!lng) return 'rtl';
      var rtlLngs = ['ar', 'shu', 'sqr', 'ssh', 'xaa', 'yhd', 'yud', 'aao', 'abh', 'abv', 'acm', 'acq', 'acw', 'acx', 'acy', 'adf', 'ads', 'aeb', 'aec', 'afb', 'ajp', 'apc', 'apd', 'arb', 'arq', 'ars', 'ary', 'arz', 'auz', 'avl', 'ayh', 'ayl', 'ayn', 'ayp', 'bbz', 'pga', 'he', 'iw', 'ps', 'pbt', 'pbu', 'pst', 'prp', 'prd', 'ug', 'ur', 'ydd', 'yds', 'yih', 'ji', 'yi', 'hbo', 'men', 'xmn', 'fa', 'jpr', 'peo', 'pes', 'prs', 'dv', 'sam'];
      return rtlLngs.indexOf(this.services.languageUtils.getLanguagePartFromCode(lng)) >= 0 ? 'rtl' : 'ltr';
    }
  }, {
    key: "createInstance",
    value: function createInstance() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var callback = arguments.length > 1 ? arguments[1] : undefined;
      return new I18n(options, callback);
    }
  }, {
    key: "cloneInstance",
    value: function cloneInstance() {
      var _this8 = this;

      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;

      var mergedOptions = (0,_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__.default)({}, this.options, options, {
        isClone: true
      });

      var clone = new I18n(mergedOptions);
      var membersToCopy = ['store', 'services', 'language'];
      membersToCopy.forEach(function (m) {
        clone[m] = _this8[m];
      });
      clone.services = (0,_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__.default)({}, this.services);
      clone.services.utils = {
        hasLoadedNamespace: clone.hasLoadedNamespace.bind(clone)
      };
      clone.translator = new Translator(clone.services, clone.options);
      clone.translator.on('*', function (event) {
        for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
          args[_key4 - 1] = arguments[_key4];
        }

        clone.emit.apply(clone, [event].concat(args));
      });
      clone.init(mergedOptions, callback);
      clone.translator.options = clone.options;
      clone.translator.backendConnector.services.utils = {
        hasLoadedNamespace: clone.hasLoadedNamespace.bind(clone)
      };
      return clone;
    }
  }]);

  return I18n;
}(EventEmitter);

var i18next = new I18n();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (i18next);


/***/ }),

/***/ "./node_modules/node-fetch/browser.js":
/*!********************************************!*\
  !*** ./node_modules/node-fetch/browser.js ***!
  \********************************************/
/***/ ((module, exports) => {

"use strict";


// ref: https://github.com/tc39/proposal-global
var getGlobal = function () {
	// the only reliable means to get the global object is
	// `Function('return this')()`
	// However, this causes CSP violations in Chrome apps.
	if (typeof self !== 'undefined') { return self; }
	if (typeof window !== 'undefined') { return window; }
	if (typeof global !== 'undefined') { return global; }
	throw new Error('unable to locate global object');
}

var global = getGlobal();

module.exports = exports = global.fetch;

// Needed for TypeScript and Webpack.
if (global.fetch) {
	exports.default = global.fetch.bind(global);
}

exports.Headers = global.Headers;
exports.Request = global.Request;
exports.Response = global.Response;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach(key => def[key] = () => value[key]);
/******/ 			}
/******/ 			def['default'] = () => value;
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__("./src/index.js");
/******/ })()
;
//# sourceMappingURL=I18N.bundle.js.map
// ==UserScript==
// @name        npu-next
// @namespace   https://mmate.xyz/
// @version     0.0.1
// @author      mmate <mmateka89@gmail.com>
// @source      https://github.com/l1pz/npu-next
// @license     MIT
// @match       https://neptun2.ppke.hu/hallgato2_uj/*
// @run-at      document-end
// ==/UserScript==

/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/.pnpm/css-loader@7.1.2_webpack@5.94.0_webpack-cli@5.1.4_/node_modules/css-loader/dist/cjs.js!./node_modules/.pnpm/less-loader@12.2.0_less@4.2.0_webpack@5.94.0_webpack-cli@5.1.4_/node_modules/less-loader/dist/cjs.js!./src/style/main.less":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_pnpm_css_loader_7_1_2_webpack_5_94_0_webpack_cli_5_1_4_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/.pnpm/css-loader@7.1.2_webpack@5.94.0_webpack-cli@5.1.4_/node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_pnpm_css_loader_7_1_2_webpack_5_94_0_webpack_cli_5_1_4_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_7_1_2_webpack_5_94_0_webpack_cli_5_1_4_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_css_loader_7_1_2_webpack_5_94_0_webpack_cli_5_1_4_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/.pnpm/css-loader@7.1.2_webpack@5.94.0_webpack-cli@5.1.4_/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_pnpm_css_loader_7_1_2_webpack_5_94_0_webpack_cli_5_1_4_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_7_1_2_webpack_5_94_0_webpack_cli_5_1_4_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_pnpm_css_loader_7_1_2_webpack_5_94_0_webpack_cli_5_1_4_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_pnpm_css_loader_7_1_2_webpack_5_94_0_webpack_cli_5_1_4_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/.pnpm/css-loader@7.1.2_webpack@5.94.0_webpack-cli@5.1.4_/node_modules/css-loader/dist/runtime/api.js":
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/.pnpm/css-loader@7.1.2_webpack@5.94.0_webpack-cli@5.1.4_/node_modules/css-loader/dist/runtime/noSourceMaps.js":
/***/ ((module) => {



module.exports = function (i) {
  return i[1];
};

/***/ }),

/***/ "./node_modules/.pnpm/style-loader@4.0.0_webpack@5.94.0_webpack-cli@5.1.4_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/.pnpm/style-loader@4.0.0_webpack@5.94.0_webpack-cli@5.1.4_/node_modules/style-loader/dist/runtime/insertBySelector.js":
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/.pnpm/style-loader@4.0.0_webpack@5.94.0_webpack-cli@5.1.4_/node_modules/style-loader/dist/runtime/insertStyleElement.js":
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/.pnpm/style-loader@4.0.0_webpack@5.94.0_webpack-cli@5.1.4_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/.pnpm/style-loader@4.0.0_webpack@5.94.0_webpack-cli@5.1.4_/node_modules/style-loader/dist/runtime/styleDomAPI.js":
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/.pnpm/style-loader@4.0.0_webpack@5.94.0_webpack-cli@5.1.4_/node_modules/style-loader/dist/runtime/styleTagTransform.js":
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.94.0_webpack-cli@5.1.4_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__("./node_modules/.pnpm/style-loader@4.0.0_webpack@5.94.0_webpack-cli@5.1.4_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.94.0_webpack-cli@5.1.4_/node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__("./node_modules/.pnpm/style-loader@4.0.0_webpack@5.94.0_webpack-cli@5.1.4_/node_modules/style-loader/dist/runtime/styleDomAPI.js");
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.94.0_webpack-cli@5.1.4_/node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__("./node_modules/.pnpm/style-loader@4.0.0_webpack@5.94.0_webpack-cli@5.1.4_/node_modules/style-loader/dist/runtime/insertBySelector.js");
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.94.0_webpack-cli@5.1.4_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__("./node_modules/.pnpm/style-loader@4.0.0_webpack@5.94.0_webpack-cli@5.1.4_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.94.0_webpack-cli@5.1.4_/node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__("./node_modules/.pnpm/style-loader@4.0.0_webpack@5.94.0_webpack-cli@5.1.4_/node_modules/style-loader/dist/runtime/insertStyleElement.js");
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.94.0_webpack-cli@5.1.4_/node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__("./node_modules/.pnpm/style-loader@4.0.0_webpack@5.94.0_webpack-cli@5.1.4_/node_modules/style-loader/dist/runtime/styleTagTransform.js");
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/.pnpm/css-loader@7.1.2_webpack@5.94.0_webpack-cli@5.1.4_/node_modules/css-loader/dist/cjs.js!./node_modules/.pnpm/less-loader@12.2.0_less@4.2.0_webpack@5.94.0_webpack-cli@5.1.4_/node_modules/less-loader/dist/cjs.js!./src/style/main.less
var main = __webpack_require__("./node_modules/.pnpm/css-loader@7.1.2_webpack@5.94.0_webpack-cli@5.1.4_/node_modules/css-loader/dist/cjs.js!./node_modules/.pnpm/less-loader@12.2.0_less@4.2.0_webpack@5.94.0_webpack-cli@5.1.4_/node_modules/less-loader/dist/cjs.js!./src/style/main.less");
;// CONCATENATED MODULE: ./src/style/main.less

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(main/* default */.A, options);




       /* harmony default export */ const style_main = (main/* default */.A && main/* default */.A.locals ? main/* default */.A.locals : undefined);

;// CONCATENATED MODULE: ./node_modules/.pnpm/tslog@4.9.3/node_modules/tslog/dist/esm/prettyLogStyles.js
const prettyLogStyles = {
    reset: [0, 0],
    bold: [1, 22],
    dim: [2, 22],
    italic: [3, 23],
    underline: [4, 24],
    overline: [53, 55],
    inverse: [7, 27],
    hidden: [8, 28],
    strikethrough: [9, 29],
    black: [30, 39],
    red: [31, 39],
    green: [32, 39],
    yellow: [33, 39],
    blue: [34, 39],
    magenta: [35, 39],
    cyan: [36, 39],
    white: [37, 39],
    blackBright: [90, 39],
    redBright: [91, 39],
    greenBright: [92, 39],
    yellowBright: [93, 39],
    blueBright: [94, 39],
    magentaBright: [95, 39],
    cyanBright: [96, 39],
    whiteBright: [97, 39],
    bgBlack: [40, 49],
    bgRed: [41, 49],
    bgGreen: [42, 49],
    bgYellow: [43, 49],
    bgBlue: [44, 49],
    bgMagenta: [45, 49],
    bgCyan: [46, 49],
    bgWhite: [47, 49],
    bgBlackBright: [100, 49],
    bgRedBright: [101, 49],
    bgGreenBright: [102, 49],
    bgYellowBright: [103, 49],
    bgBlueBright: [104, 49],
    bgMagentaBright: [105, 49],
    bgCyanBright: [106, 49],
    bgWhiteBright: [107, 49],
};

;// CONCATENATED MODULE: ./node_modules/.pnpm/tslog@4.9.3/node_modules/tslog/dist/esm/formatTemplate.js

function formatTemplate(settings, template, values, hideUnsetPlaceholder = false) {
    const templateString = String(template);
    const ansiColorWrap = (placeholderValue, code) => `\u001b[${code[0]}m${placeholderValue}\u001b[${code[1]}m`;
    const styleWrap = (value, style) => {
        if (style != null && typeof style === "string") {
            return ansiColorWrap(value, prettyLogStyles[style]);
        }
        else if (style != null && Array.isArray(style)) {
            return style.reduce((prevValue, thisStyle) => styleWrap(prevValue, thisStyle), value);
        }
        else {
            if (style != null && style[value.trim()] != null) {
                return styleWrap(value, style[value.trim()]);
            }
            else if (style != null && style["*"] != null) {
                return styleWrap(value, style["*"]);
            }
            else {
                return value;
            }
        }
    };
    const defaultStyle = null;
    return templateString.replace(/{{(.+?)}}/g, (_, placeholder) => {
        const value = values[placeholder] != null ? String(values[placeholder]) : hideUnsetPlaceholder ? "" : _;
        return settings.stylePrettyLogs
            ? styleWrap(value, settings?.prettyLogStyles?.[placeholder] ?? defaultStyle) + ansiColorWrap("", prettyLogStyles.reset)
            : value;
    });
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/tslog@4.9.3/node_modules/tslog/dist/esm/formatNumberAddZeros.js
function formatNumberAddZeros(value, digits = 2, addNumber = 0) {
    if (value != null && isNaN(value)) {
        return "";
    }
    value = value != null ? value + addNumber : value;
    return digits === 2
        ? value == null
            ? "--"
            : value < 10
                ? "0" + value
                : value.toString()
        : value == null
            ? "---"
            : value < 10
                ? "00" + value
                : value < 100
                    ? "0" + value
                    : value.toString();
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/tslog@4.9.3/node_modules/tslog/dist/esm/urlToObj.js
function urlToObject(url) {
    return {
        href: url.href,
        protocol: url.protocol,
        username: url.username,
        password: url.password,
        host: url.host,
        hostname: url.hostname,
        port: url.port,
        pathname: url.pathname,
        search: url.search,
        searchParams: [...url.searchParams].map(([key, value]) => ({ key, value })),
        hash: url.hash,
        origin: url.origin,
    };
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/tslog@4.9.3/node_modules/tslog/dist/esm/runtime/browser/helper.jsonStringifyRecursive.js
function jsonStringifyRecursive(obj) {
    const cache = new Set();
    return JSON.stringify(obj, (key, value) => {
        if (typeof value === "object" && value !== null) {
            if (cache.has(value)) {
                return "[Circular]";
            }
            cache.add(value);
        }
        if (typeof value === "bigint") {
            return `${value}`;
        }
        return value;
    });
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/tslog@4.9.3/node_modules/tslog/dist/esm/runtime/browser/util.inspect.polyfil.js


function inspect(obj, opts) {
    const ctx = {
        seen: [],
        stylize: stylizeNoColor,
    };
    if (opts != null) {
        _extend(ctx, opts);
    }
    if (isUndefined(ctx.showHidden))
        ctx.showHidden = false;
    if (isUndefined(ctx.depth))
        ctx.depth = 2;
    if (isUndefined(ctx.colors))
        ctx.colors = true;
    if (isUndefined(ctx.customInspect))
        ctx.customInspect = true;
    if (ctx.colors)
        ctx.stylize = stylizeWithColor;
    return formatValue(ctx, obj, ctx.depth);
}
inspect.colors = prettyLogStyles;
inspect.styles = {
    special: "cyan",
    number: "yellow",
    boolean: "yellow",
    undefined: "grey",
    null: "bold",
    string: "green",
    date: "magenta",
    regexp: "red",
};
function isBoolean(arg) {
    return typeof arg === "boolean";
}
function isUndefined(arg) {
    return arg === undefined;
}
function stylizeNoColor(str) {
    return str;
}
function stylizeWithColor(str, styleType) {
    const style = inspect.styles[styleType];
    if (style != null && inspect?.colors?.[style]?.[0] != null && inspect?.colors?.[style]?.[1] != null) {
        return "\u001b[" + inspect.colors[style][0] + "m" + str + "\u001b[" + inspect.colors[style][1] + "m";
    }
    else {
        return str;
    }
}
function isFunction(arg) {
    return typeof arg === "function";
}
function isString(arg) {
    return typeof arg === "string";
}
function isNumber(arg) {
    return typeof arg === "number";
}
function isNull(arg) {
    return arg === null;
}
function hasOwn(obj, prop) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
}
function isRegExp(re) {
    return isObject(re) && objectToString(re) === "[object RegExp]";
}
function isObject(arg) {
    return typeof arg === "object" && arg !== null;
}
function isError(e) {
    return isObject(e) && (objectToString(e) === "[object Error]" || e instanceof Error);
}
function isDate(d) {
    return isObject(d) && objectToString(d) === "[object Date]";
}
function objectToString(o) {
    return Object.prototype.toString.call(o);
}
function arrayToHash(array) {
    const hash = {};
    array.forEach((val) => {
        hash[val] = true;
    });
    return hash;
}
function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
    const output = [];
    for (let i = 0, l = value.length; i < l; ++i) {
        if (hasOwn(value, String(i))) {
            output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, String(i), true));
        }
        else {
            output.push("");
        }
    }
    keys.forEach((key) => {
        if (!key.match(/^\d+$/)) {
            output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, key, true));
        }
    });
    return output;
}
function formatError(value) {
    return "[" + Error.prototype.toString.call(value) + "]";
}
function formatValue(ctx, value, recurseTimes = 0) {
    if (ctx.customInspect &&
        value != null &&
        isFunction(value) &&
        value?.inspect !== inspect &&
        !(value?.constructor && value?.constructor.prototype === value)) {
        if (typeof value.inspect !== "function" && value.toString != null) {
            return value.toString();
        }
        let ret = value?.inspect(recurseTimes, ctx);
        if (!isString(ret)) {
            ret = formatValue(ctx, ret, recurseTimes);
        }
        return ret;
    }
    const primitive = formatPrimitive(ctx, value);
    if (primitive) {
        return primitive;
    }
    let keys = Object.keys(value);
    const visibleKeys = arrayToHash(keys);
    try {
        if (ctx.showHidden && Object.getOwnPropertyNames) {
            keys = Object.getOwnPropertyNames(value);
        }
    }
    catch (e) {
    }
    if (isError(value) && (keys.indexOf("message") >= 0 || keys.indexOf("description") >= 0)) {
        return formatError(value);
    }
    if (keys.length === 0) {
        if (isFunction(ctx.stylize)) {
            if (isFunction(value)) {
                const name = value.name ? ": " + value.name : "";
                return ctx.stylize("[Function" + name + "]", "special");
            }
            if (isRegExp(value)) {
                return ctx.stylize(RegExp.prototype.toString.call(value), "regexp");
            }
            if (isDate(value)) {
                return ctx.stylize(Date.prototype.toISOString.call(value), "date");
            }
            if (isError(value)) {
                return formatError(value);
            }
        }
        else {
            return value;
        }
    }
    let base = "";
    let array = false;
    let braces = ["{\n", "\n}"];
    if (Array.isArray(value)) {
        array = true;
        braces = ["[\n", "\n]"];
    }
    if (isFunction(value)) {
        const n = value.name ? ": " + value.name : "";
        base = " [Function" + n + "]";
    }
    if (isRegExp(value)) {
        base = " " + RegExp.prototype.toString.call(value);
    }
    if (isDate(value)) {
        base = " " + Date.prototype.toUTCString.call(value);
    }
    if (isError(value)) {
        base = " " + formatError(value);
    }
    if (keys.length === 0 && (!array || value.length == 0)) {
        return braces[0] + base + braces[1];
    }
    if (recurseTimes < 0) {
        if (isRegExp(value)) {
            return ctx.stylize(RegExp.prototype.toString.call(value), "regexp");
        }
        else {
            return ctx.stylize("[Object]", "special");
        }
    }
    ctx.seen.push(value);
    let output;
    if (array) {
        output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
    }
    else {
        output = keys.map((key) => {
            return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
        });
    }
    ctx.seen.pop();
    return reduceToSingleString(output, base, braces);
}
function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
    let name, str;
    let desc = { value: void 0 };
    try {
        desc.value = value[key];
    }
    catch (e) {
    }
    try {
        if (Object.getOwnPropertyDescriptor) {
            desc = Object.getOwnPropertyDescriptor(value, key) || desc;
        }
    }
    catch (e) {
    }
    if (desc.get) {
        if (desc.set) {
            str = ctx.stylize("[Getter/Setter]", "special");
        }
        else {
            str = ctx.stylize("[Getter]", "special");
        }
    }
    else {
        if (desc.set) {
            str = ctx.stylize("[Setter]", "special");
        }
    }
    if (!hasOwn(visibleKeys, key)) {
        name = "[" + key + "]";
    }
    if (!str) {
        if (ctx.seen.indexOf(desc.value) < 0) {
            if (isNull(recurseTimes)) {
                str = formatValue(ctx, desc.value, undefined);
            }
            else {
                str = formatValue(ctx, desc.value, recurseTimes - 1);
            }
            if (str.indexOf("\n") > -1) {
                if (array) {
                    str = str
                        .split("\n")
                        .map((line) => {
                        return "  " + line;
                    })
                        .join("\n")
                        .substr(2);
                }
                else {
                    str =
                        "\n" +
                            str
                                .split("\n")
                                .map((line) => {
                                return "   " + line;
                            })
                                .join("\n");
                }
            }
        }
        else {
            str = ctx.stylize("[Circular]", "special");
        }
    }
    if (isUndefined(name)) {
        if (array && key.match(/^\d+$/)) {
            return str;
        }
        name = JSON.stringify("" + key);
        if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
            name = name.substr(1, name.length - 2);
            name = ctx.stylize(name, "name");
        }
        else {
            name = name
                .replace(/'/g, "\\'")
                .replace(/\\"/g, "\\'")
                .replace(/(^"|"$)/g, "'");
            name = ctx.stylize(name, "string");
        }
    }
    return name + ": " + str;
}
function formatPrimitive(ctx, value) {
    if (isUndefined(value))
        return ctx.stylize("undefined", "undefined");
    if (isString(value)) {
        const simple = "'" + JSON.stringify(value).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, "\\'") + "'";
        return ctx.stylize(simple, "string");
    }
    if (isNumber(value))
        return ctx.stylize("" + value, "number");
    if (isBoolean(value))
        return ctx.stylize("" + value, "boolean");
    if (isNull(value))
        return ctx.stylize("null", "null");
}
function reduceToSingleString(output, base, braces) {
    return braces[0] + (base === "" ? "" : base + "\n") + "  " + output.join(",\n  ") + " " + braces[1];
}
function _extend(origin, add) {
    const typedOrigin = { ...origin };
    if (!add || !isObject(add))
        return origin;
    const clonedAdd = { ...add };
    const keys = Object.keys(add);
    let i = keys.length;
    while (i--) {
        typedOrigin[keys[i]] = clonedAdd[keys[i]];
    }
    return typedOrigin;
}
function formatWithOptions(inspectOptions, ...args) {
    const ctx = {
        seen: [],
        stylize: stylizeNoColor,
    };
    if (inspectOptions != null) {
        _extend(ctx, inspectOptions);
    }
    const first = args[0];
    let a = 0;
    let str = "";
    let join = "";
    if (typeof first === "string") {
        if (args.length === 1) {
            return first;
        }
        let tempStr;
        let lastPos = 0;
        for (let i = 0; i < first.length - 1; i++) {
            if (first.charCodeAt(i) === 37) {
                const nextChar = first.charCodeAt(++i);
                if (a + 1 !== args.length) {
                    switch (nextChar) {
                        case 115: {
                            const tempArg = args[++a];
                            if (typeof tempArg === "number") {
                                tempStr = formatPrimitive(ctx, tempArg);
                            }
                            else if (typeof tempArg === "bigint") {
                                tempStr = formatPrimitive(ctx, tempArg);
                            }
                            else if (typeof tempArg !== "object" || tempArg === null) {
                                tempStr = String(tempArg);
                            }
                            else {
                                tempStr = inspect(tempArg, {
                                    ...inspectOptions,
                                    compact: 3,
                                    colors: false,
                                    depth: 0,
                                });
                            }
                            break;
                        }
                        case 106:
                            tempStr = jsonStringifyRecursive(args[++a]);
                            break;
                        case 100: {
                            const tempNum = args[++a];
                            if (typeof tempNum === "bigint") {
                                tempStr = formatPrimitive(ctx, tempNum);
                            }
                            else if (typeof tempNum === "symbol") {
                                tempStr = "NaN";
                            }
                            else {
                                tempStr = formatPrimitive(ctx, tempNum);
                            }
                            break;
                        }
                        case 79:
                            tempStr = inspect(args[++a], inspectOptions);
                            break;
                        case 111:
                            tempStr = inspect(args[++a], {
                                ...inspectOptions,
                                showHidden: true,
                                showProxy: true,
                                depth: 4,
                            });
                            break;
                        case 105: {
                            const tempInteger = args[++a];
                            if (typeof tempInteger === "bigint") {
                                tempStr = formatPrimitive(ctx, tempInteger);
                            }
                            else if (typeof tempInteger === "symbol") {
                                tempStr = "NaN";
                            }
                            else {
                                tempStr = formatPrimitive(ctx, parseInt(tempStr));
                            }
                            break;
                        }
                        case 102: {
                            const tempFloat = args[++a];
                            if (typeof tempFloat === "symbol") {
                                tempStr = "NaN";
                            }
                            else {
                                tempStr = formatPrimitive(ctx, parseInt(tempFloat));
                            }
                            break;
                        }
                        case 99:
                            a += 1;
                            tempStr = "";
                            break;
                        case 37:
                            str += first.slice(lastPos, i);
                            lastPos = i + 1;
                            continue;
                        default:
                            continue;
                    }
                    if (lastPos !== i - 1) {
                        str += first.slice(lastPos, i - 1);
                    }
                    str += tempStr;
                    lastPos = i + 1;
                }
                else if (nextChar === 37) {
                    str += first.slice(lastPos, i);
                    lastPos = i + 1;
                }
            }
        }
        if (lastPos !== 0) {
            a++;
            join = " ";
            if (lastPos < first.length) {
                str += first.slice(lastPos);
            }
        }
    }
    while (a < args.length) {
        const value = args[a];
        str += join;
        str += typeof value !== "string" ? inspect(value, inspectOptions) : value;
        join = " ";
        a++;
    }
    return str;
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/tslog@4.9.3/node_modules/tslog/dist/esm/runtime/browser/index.js



/* harmony default export */ const browser = ({
    getCallerStackFrame,
    getErrorTrace,
    getMeta,
    transportJSON,
    transportFormatted,
    isBuffer,
    isError: browser_isError,
    prettyFormatLogObj,
    prettyFormatErrorObj,
});
const meta = {
    runtime: ![typeof window, typeof document].includes("undefined") ? "Browser" : "Generic",
    browser: globalThis?.["navigator"]?.userAgent,
};
const pathRegex = /(?:(?:file|https?|global code|[^@]+)@)?(?:file:)?((?:\/[^:/]+){2,})(?::(\d+))?(?::(\d+))?/;
function getMeta(logLevelId, logLevelName, stackDepthLevel, hideLogPositionForPerformance, name, parentNames) {
    return Object.assign({}, meta, {
        name,
        parentNames,
        date: new Date(),
        logLevelId,
        logLevelName,
        path: !hideLogPositionForPerformance ? getCallerStackFrame(stackDepthLevel) : undefined,
    });
}
function getCallerStackFrame(stackDepthLevel, error = Error()) {
    return stackLineToStackFrame(error?.stack?.split("\n")?.filter((line) => !line.includes("Error: "))?.[stackDepthLevel]);
}
function getErrorTrace(error) {
    return (error?.stack?.split("\n") ?? [])
        ?.filter((line) => !line.includes("Error: "))
        ?.reduce((result, line) => {
        result.push(stackLineToStackFrame(line));
        return result;
    }, []);
}
function stackLineToStackFrame(line) {
    const href = globalThis?.location?.origin;
    const pathResult = {
        fullFilePath: undefined,
        fileName: undefined,
        fileNameWithLine: undefined,
        fileColumn: undefined,
        fileLine: undefined,
        filePath: undefined,
        filePathWithLine: undefined,
        method: undefined,
    };
    if (line != null) {
        const match = line.match(pathRegex);
        if (match) {
            pathResult.filePath = match[1].replace(/\?.*$/, "");
            pathResult.fullFilePath = `${href}${pathResult.filePath}`;
            const pathParts = pathResult.filePath.split("/");
            pathResult.fileName = pathParts[pathParts.length - 1];
            pathResult.fileLine = match[2];
            pathResult.fileColumn = match[3];
            pathResult.filePathWithLine = `${pathResult.filePath}:${pathResult.fileLine}`;
            pathResult.fileNameWithLine = `${pathResult.fileName}:${pathResult.fileLine}`;
        }
    }
    return pathResult;
}
function browser_isError(e) {
    return e instanceof Error;
}
function prettyFormatLogObj(maskedArgs, settings) {
    return maskedArgs.reduce((result, arg) => {
        browser_isError(arg) ? result.errors.push(prettyFormatErrorObj(arg, settings)) : result.args.push(arg);
        return result;
    }, { args: [], errors: [] });
}
function prettyFormatErrorObj(error, settings) {
    const errorStackStr = getErrorTrace(error).map((stackFrame) => {
        return formatTemplate(settings, settings.prettyErrorStackTemplate, { ...stackFrame }, true);
    });
    const placeholderValuesError = {
        errorName: ` ${error.name} `,
        errorMessage: Object.getOwnPropertyNames(error)
            .reduce((result, key) => {
            if (key !== "stack") {
                result.push(error[key]);
            }
            return result;
        }, [])
            .join(", "),
        errorStack: errorStackStr.join("\n"),
    };
    return formatTemplate(settings, settings.prettyErrorTemplate, placeholderValuesError);
}
function transportFormatted(logMetaMarkup, logArgs, logErrors, settings) {
    const logErrorsStr = (logErrors.length > 0 && logArgs.length > 0 ? "\n" : "") + logErrors.join("\n");
    settings.prettyInspectOptions.colors = settings.stylePrettyLogs;
    console.log(logMetaMarkup + formatWithOptions(settings.prettyInspectOptions, ...logArgs) + logErrorsStr);
}
function transportJSON(json) {
    console.log(jsonStringifyRecursive(json));
}
function isBuffer(arg) {
    return arg ? false : false;
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/tslog@4.9.3/node_modules/tslog/dist/esm/BaseLogger.js






class BaseLogger {
    constructor(settings, logObj, stackDepthLevel = 4) {
        this.logObj = logObj;
        this.stackDepthLevel = stackDepthLevel;
        this.runtime = browser;
        this.settings = {
            type: settings?.type ?? "pretty",
            name: settings?.name,
            parentNames: settings?.parentNames,
            minLevel: settings?.minLevel ?? 0,
            argumentsArrayName: settings?.argumentsArrayName,
            hideLogPositionForProduction: settings?.hideLogPositionForProduction ?? false,
            prettyLogTemplate: settings?.prettyLogTemplate ??
                "{{yyyy}}.{{mm}}.{{dd}} {{hh}}:{{MM}}:{{ss}}:{{ms}}\t{{logLevelName}}\t{{filePathWithLine}}{{nameWithDelimiterPrefix}}\t",
            prettyErrorTemplate: settings?.prettyErrorTemplate ?? "\n{{errorName}} {{errorMessage}}\nerror stack:\n{{errorStack}}",
            prettyErrorStackTemplate: settings?.prettyErrorStackTemplate ?? "  • {{fileName}}\t{{method}}\n\t{{filePathWithLine}}",
            prettyErrorParentNamesSeparator: settings?.prettyErrorParentNamesSeparator ?? ":",
            prettyErrorLoggerNameDelimiter: settings?.prettyErrorLoggerNameDelimiter ?? "\t",
            stylePrettyLogs: settings?.stylePrettyLogs ?? true,
            prettyLogTimeZone: settings?.prettyLogTimeZone ?? "UTC",
            prettyLogStyles: settings?.prettyLogStyles ?? {
                logLevelName: {
                    "*": ["bold", "black", "bgWhiteBright", "dim"],
                    SILLY: ["bold", "white"],
                    TRACE: ["bold", "whiteBright"],
                    DEBUG: ["bold", "green"],
                    INFO: ["bold", "blue"],
                    WARN: ["bold", "yellow"],
                    ERROR: ["bold", "red"],
                    FATAL: ["bold", "redBright"],
                },
                dateIsoStr: "white",
                filePathWithLine: "white",
                name: ["white", "bold"],
                nameWithDelimiterPrefix: ["white", "bold"],
                nameWithDelimiterSuffix: ["white", "bold"],
                errorName: ["bold", "bgRedBright", "whiteBright"],
                fileName: ["yellow"],
                fileNameWithLine: "white",
            },
            prettyInspectOptions: settings?.prettyInspectOptions ?? {
                colors: true,
                compact: false,
                depth: Infinity,
            },
            metaProperty: settings?.metaProperty ?? "_meta",
            maskPlaceholder: settings?.maskPlaceholder ?? "[***]",
            maskValuesOfKeys: settings?.maskValuesOfKeys ?? ["password"],
            maskValuesOfKeysCaseInsensitive: settings?.maskValuesOfKeysCaseInsensitive ?? false,
            maskValuesRegEx: settings?.maskValuesRegEx,
            prefix: [...(settings?.prefix ?? [])],
            attachedTransports: [...(settings?.attachedTransports ?? [])],
            overwrite: {
                mask: settings?.overwrite?.mask,
                toLogObj: settings?.overwrite?.toLogObj,
                addMeta: settings?.overwrite?.addMeta,
                addPlaceholders: settings?.overwrite?.addPlaceholders,
                formatMeta: settings?.overwrite?.formatMeta,
                formatLogObj: settings?.overwrite?.formatLogObj,
                transportFormatted: settings?.overwrite?.transportFormatted,
                transportJSON: settings?.overwrite?.transportJSON,
            },
        };
    }
    log(logLevelId, logLevelName, ...args) {
        if (logLevelId < this.settings.minLevel) {
            return;
        }
        const logArgs = [...this.settings.prefix, ...args];
        const maskedArgs = this.settings.overwrite?.mask != null
            ? this.settings.overwrite?.mask(logArgs)
            : this.settings.maskValuesOfKeys != null && this.settings.maskValuesOfKeys.length > 0
                ? this._mask(logArgs)
                : logArgs;
        const thisLogObj = this.logObj != null ? this._recursiveCloneAndExecuteFunctions(this.logObj) : undefined;
        const logObj = this.settings.overwrite?.toLogObj != null ? this.settings.overwrite?.toLogObj(maskedArgs, thisLogObj) : this._toLogObj(maskedArgs, thisLogObj);
        const logObjWithMeta = this.settings.overwrite?.addMeta != null
            ? this.settings.overwrite?.addMeta(logObj, logLevelId, logLevelName)
            : this._addMetaToLogObj(logObj, logLevelId, logLevelName);
        let logMetaMarkup;
        let logArgsAndErrorsMarkup = undefined;
        if (this.settings.overwrite?.formatMeta != null) {
            logMetaMarkup = this.settings.overwrite?.formatMeta(logObjWithMeta?.[this.settings.metaProperty]);
        }
        if (this.settings.overwrite?.formatLogObj != null) {
            logArgsAndErrorsMarkup = this.settings.overwrite?.formatLogObj(maskedArgs, this.settings);
        }
        if (this.settings.type === "pretty") {
            logMetaMarkup = logMetaMarkup ?? this._prettyFormatLogObjMeta(logObjWithMeta?.[this.settings.metaProperty]);
            logArgsAndErrorsMarkup = logArgsAndErrorsMarkup ?? this.runtime.prettyFormatLogObj(maskedArgs, this.settings);
        }
        if (logMetaMarkup != null && logArgsAndErrorsMarkup != null) {
            this.settings.overwrite?.transportFormatted != null
                ? this.settings.overwrite?.transportFormatted(logMetaMarkup, logArgsAndErrorsMarkup.args, logArgsAndErrorsMarkup.errors, this.settings)
                : this.runtime.transportFormatted(logMetaMarkup, logArgsAndErrorsMarkup.args, logArgsAndErrorsMarkup.errors, this.settings);
        }
        else {
            this.settings.overwrite?.transportJSON != null
                ? this.settings.overwrite?.transportJSON(logObjWithMeta)
                : this.settings.type !== "hidden"
                    ? this.runtime.transportJSON(logObjWithMeta)
                    : undefined;
        }
        if (this.settings.attachedTransports != null && this.settings.attachedTransports.length > 0) {
            this.settings.attachedTransports.forEach((transportLogger) => {
                transportLogger(logObjWithMeta);
            });
        }
        return logObjWithMeta;
    }
    attachTransport(transportLogger) {
        this.settings.attachedTransports.push(transportLogger);
    }
    getSubLogger(settings, logObj) {
        const subLoggerSettings = {
            ...this.settings,
            ...settings,
            parentNames: this.settings?.parentNames != null && this.settings?.name != null
                ? [...this.settings.parentNames, this.settings.name]
                : this.settings?.name != null
                    ? [this.settings.name]
                    : undefined,
            prefix: [...this.settings.prefix, ...(settings?.prefix ?? [])],
        };
        const subLogger = new this.constructor(subLoggerSettings, logObj ?? this.logObj, this.stackDepthLevel);
        return subLogger;
    }
    _mask(args) {
        const maskValuesOfKeys = this.settings.maskValuesOfKeysCaseInsensitive !== true ? this.settings.maskValuesOfKeys : this.settings.maskValuesOfKeys.map((key) => key.toLowerCase());
        return args?.map((arg) => {
            return this._recursiveCloneAndMaskValuesOfKeys(arg, maskValuesOfKeys);
        });
    }
    _recursiveCloneAndMaskValuesOfKeys(source, keys, seen = []) {
        if (seen.includes(source)) {
            return { ...source };
        }
        if (typeof source === "object" && source !== null) {
            seen.push(source);
        }
        if (this.runtime.isError(source) || this.runtime.isBuffer(source)) {
            return source;
        }
        else if (source instanceof Map) {
            return new Map(source);
        }
        else if (source instanceof Set) {
            return new Set(source);
        }
        else if (Array.isArray(source)) {
            return source.map((item) => this._recursiveCloneAndMaskValuesOfKeys(item, keys, seen));
        }
        else if (source instanceof Date) {
            return new Date(source.getTime());
        }
        else if (source instanceof URL) {
            return urlToObject(source);
        }
        else if (source !== null && typeof source === "object") {
            const baseObject = this.runtime.isError(source) ? this._cloneError(source) : Object.create(Object.getPrototypeOf(source));
            return Object.getOwnPropertyNames(source).reduce((o, prop) => {
                o[prop] = keys.includes(this.settings?.maskValuesOfKeysCaseInsensitive !== true ? prop : prop.toLowerCase())
                    ? this.settings.maskPlaceholder
                    : (() => {
                        try {
                            return this._recursiveCloneAndMaskValuesOfKeys(source[prop], keys, seen);
                        }
                        catch (e) {
                            return null;
                        }
                    })();
                return o;
            }, baseObject);
        }
        else {
            if (typeof source === "string") {
                let modifiedSource = source;
                for (const regEx of this.settings?.maskValuesRegEx || []) {
                    modifiedSource = modifiedSource.replace(regEx, this.settings?.maskPlaceholder || "");
                }
                return modifiedSource;
            }
            return source;
        }
    }
    _recursiveCloneAndExecuteFunctions(source, seen = []) {
        if (this.isObjectOrArray(source) && seen.includes(source)) {
            return this.shallowCopy(source);
        }
        if (this.isObjectOrArray(source)) {
            seen.push(source);
        }
        if (Array.isArray(source)) {
            return source.map((item) => this._recursiveCloneAndExecuteFunctions(item, seen));
        }
        else if (source instanceof Date) {
            return new Date(source.getTime());
        }
        else if (this.isObject(source)) {
            return Object.getOwnPropertyNames(source).reduce((o, prop) => {
                const descriptor = Object.getOwnPropertyDescriptor(source, prop);
                if (descriptor) {
                    Object.defineProperty(o, prop, descriptor);
                    const value = source[prop];
                    o[prop] = typeof value === "function" ? value() : this._recursiveCloneAndExecuteFunctions(value, seen);
                }
                return o;
            }, Object.create(Object.getPrototypeOf(source)));
        }
        else {
            return source;
        }
    }
    isObjectOrArray(value) {
        return typeof value === "object" && value !== null;
    }
    isObject(value) {
        return typeof value === "object" && !Array.isArray(value) && value !== null;
    }
    shallowCopy(source) {
        if (Array.isArray(source)) {
            return [...source];
        }
        else {
            return { ...source };
        }
    }
    _toLogObj(args, clonedLogObj = {}) {
        args = args?.map((arg) => (this.runtime.isError(arg) ? this._toErrorObject(arg) : arg));
        if (this.settings.argumentsArrayName == null) {
            if (args.length === 1 && !Array.isArray(args[0]) && this.runtime.isBuffer(args[0]) !== true && !(args[0] instanceof Date)) {
                clonedLogObj = typeof args[0] === "object" && args[0] != null ? { ...args[0], ...clonedLogObj } : { 0: args[0], ...clonedLogObj };
            }
            else {
                clonedLogObj = { ...clonedLogObj, ...args };
            }
        }
        else {
            clonedLogObj = {
                ...clonedLogObj,
                [this.settings.argumentsArrayName]: args,
            };
        }
        return clonedLogObj;
    }
    _cloneError(error) {
        const cloned = new error.constructor();
        Object.getOwnPropertyNames(error).forEach((key) => {
            cloned[key] = error[key];
        });
        return cloned;
    }
    _toErrorObject(error) {
        return {
            nativeError: error,
            name: error.name ?? "Error",
            message: error.message,
            stack: this.runtime.getErrorTrace(error),
        };
    }
    _addMetaToLogObj(logObj, logLevelId, logLevelName) {
        return {
            ...logObj,
            [this.settings.metaProperty]: this.runtime.getMeta(logLevelId, logLevelName, this.stackDepthLevel, this.settings.hideLogPositionForProduction, this.settings.name, this.settings.parentNames),
        };
    }
    _prettyFormatLogObjMeta(logObjMeta) {
        if (logObjMeta == null) {
            return "";
        }
        let template = this.settings.prettyLogTemplate;
        const placeholderValues = {};
        if (template.includes("{{yyyy}}.{{mm}}.{{dd}} {{hh}}:{{MM}}:{{ss}}:{{ms}}")) {
            template = template.replace("{{yyyy}}.{{mm}}.{{dd}} {{hh}}:{{MM}}:{{ss}}:{{ms}}", "{{dateIsoStr}}");
        }
        else {
            if (this.settings.prettyLogTimeZone === "UTC") {
                placeholderValues["yyyy"] = logObjMeta?.date?.getUTCFullYear() ?? "----";
                placeholderValues["mm"] = formatNumberAddZeros(logObjMeta?.date?.getUTCMonth(), 2, 1);
                placeholderValues["dd"] = formatNumberAddZeros(logObjMeta?.date?.getUTCDate(), 2);
                placeholderValues["hh"] = formatNumberAddZeros(logObjMeta?.date?.getUTCHours(), 2);
                placeholderValues["MM"] = formatNumberAddZeros(logObjMeta?.date?.getUTCMinutes(), 2);
                placeholderValues["ss"] = formatNumberAddZeros(logObjMeta?.date?.getUTCSeconds(), 2);
                placeholderValues["ms"] = formatNumberAddZeros(logObjMeta?.date?.getUTCMilliseconds(), 3);
            }
            else {
                placeholderValues["yyyy"] = logObjMeta?.date?.getFullYear() ?? "----";
                placeholderValues["mm"] = formatNumberAddZeros(logObjMeta?.date?.getMonth(), 2, 1);
                placeholderValues["dd"] = formatNumberAddZeros(logObjMeta?.date?.getDate(), 2);
                placeholderValues["hh"] = formatNumberAddZeros(logObjMeta?.date?.getHours(), 2);
                placeholderValues["MM"] = formatNumberAddZeros(logObjMeta?.date?.getMinutes(), 2);
                placeholderValues["ss"] = formatNumberAddZeros(logObjMeta?.date?.getSeconds(), 2);
                placeholderValues["ms"] = formatNumberAddZeros(logObjMeta?.date?.getMilliseconds(), 3);
            }
        }
        const dateInSettingsTimeZone = this.settings.prettyLogTimeZone === "UTC" ? logObjMeta?.date : new Date(logObjMeta?.date?.getTime() - logObjMeta?.date?.getTimezoneOffset() * 60000);
        placeholderValues["rawIsoStr"] = dateInSettingsTimeZone?.toISOString();
        placeholderValues["dateIsoStr"] = dateInSettingsTimeZone?.toISOString().replace("T", " ").replace("Z", "");
        placeholderValues["logLevelName"] = logObjMeta?.logLevelName;
        placeholderValues["fileNameWithLine"] = logObjMeta?.path?.fileNameWithLine ?? "";
        placeholderValues["filePathWithLine"] = logObjMeta?.path?.filePathWithLine ?? "";
        placeholderValues["fullFilePath"] = logObjMeta?.path?.fullFilePath ?? "";
        let parentNamesString = this.settings.parentNames?.join(this.settings.prettyErrorParentNamesSeparator);
        parentNamesString = parentNamesString != null && logObjMeta?.name != null ? parentNamesString + this.settings.prettyErrorParentNamesSeparator : undefined;
        placeholderValues["name"] = logObjMeta?.name != null || parentNamesString != null ? (parentNamesString ?? "") + logObjMeta?.name ?? "" : "";
        placeholderValues["nameWithDelimiterPrefix"] =
            placeholderValues["name"].length > 0 ? this.settings.prettyErrorLoggerNameDelimiter + placeholderValues["name"] : "";
        placeholderValues["nameWithDelimiterSuffix"] =
            placeholderValues["name"].length > 0 ? placeholderValues["name"] + this.settings.prettyErrorLoggerNameDelimiter : "";
        if (this.settings.overwrite?.addPlaceholders != null) {
            this.settings.overwrite?.addPlaceholders(logObjMeta, placeholderValues);
        }
        return formatTemplate(this.settings, template, placeholderValues);
    }
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/tslog@4.9.3/node_modules/tslog/dist/esm/index.js



class Logger extends BaseLogger {
    constructor(settings, logObj) {
        const isBrowser = typeof window !== "undefined" && typeof document !== "undefined";
        const isBrowserBlinkEngine = isBrowser ? window.chrome !== undefined && window.CSS !== undefined && window.CSS.supports("color", "green") : false;
        const isSafari = isBrowser ? /^((?!chrome|android).)*safari/i.test(navigator.userAgent) : false;
        settings = settings || {};
        settings.stylePrettyLogs = settings.stylePrettyLogs && isBrowser && !isBrowserBlinkEngine ? false : settings.stylePrettyLogs;
        super(settings, logObj, isSafari ? 4 : 5);
    }
    log(logLevelId, logLevelName, ...args) {
        return super.log(logLevelId, logLevelName, ...args);
    }
    silly(...args) {
        return super.log(0, "SILLY", ...args);
    }
    trace(...args) {
        return super.log(1, "TRACE", ...args);
    }
    debug(...args) {
        return super.log(2, "DEBUG", ...args);
    }
    info(...args) {
        return super.log(3, "INFO", ...args);
    }
    warn(...args) {
        return super.log(4, "WARN", ...args);
    }
    error(...args) {
        return super.log(5, "ERROR", ...args);
    }
    fatal(...args) {
        return super.log(6, "FATAL", ...args);
    }
    getSubLogger(settings, logObj) {
        return super.getSubLogger(settings, logObj);
    }
}

;// CONCATENATED MODULE: ./src/index.ts


const logger = new Logger();
async function src_main() {
    logger.info("Neptun PowerUp! Next loaded");
}
src_main().catch((e) => {
    logger.error(e);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxtQkFBbUIsQ0FBQztBQUMzQixPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sT0FBTyxDQUFDO0FBRS9CLE1BQU0sTUFBTSxHQUFHLElBQUksTUFBTSxFQUFFLENBQUM7QUFDNUIsS0FBSyxVQUFVLElBQUk7SUFDakIsTUFBTSxDQUFDLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO0FBQzdDLENBQUM7QUFFRCxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtJQUNqQixNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2xCLENBQUMsQ0FBQyxDQUFDIn0=
/******/ })()
;
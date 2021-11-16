define("4df9bb86-ab0a-4aab-ab5f-48bf167048fb_1.12.1", ["tslib","@ms/sp-telemetry","@ms/sp-suite-nav","@microsoft/sp-component-base","@microsoft/sp-loader","@ms/odsp-core-bundle","@microsoft/sp-lodash-subset","@microsoft/sp-core-library","@microsoft/sp-page-context","@microsoft/sp-extension-base","@ms/uifabric-styling-bundle","@microsoft/load-themed-styles","@microsoft/sp-diagnostics","@microsoft/sp-http"], function(__WEBPACK_EXTERNAL_MODULE__17wl__, __WEBPACK_EXTERNAL_MODULE__2q6Q__, __WEBPACK_EXTERNAL_MODULE__6iXJ__, __WEBPACK_EXTERNAL_MODULE__7Awa__, __WEBPACK_EXTERNAL_MODULE_I6O9__, __WEBPACK_EXTERNAL_MODULE_K9kD__, __WEBPACK_EXTERNAL_MODULE_Pk8u__, __WEBPACK_EXTERNAL_MODULE_UWqr__, __WEBPACK_EXTERNAL_MODULE_X_PM__, __WEBPACK_EXTERNAL_MODULE_ZFc5__, __WEBPACK_EXTERNAL_MODULE_fglE__, __WEBPACK_EXTERNAL_MODULE_jOlS__, __WEBPACK_EXTERNAL_MODULE_ut3N__, __WEBPACK_EXTERNAL_MODULE_vlQI__) { return /******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"sp-application-base": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "chunk." + ({"sp-navigation-datastore":"sp-navigation-datastore"}[chunkId]||chunkId) + "_" + "none" + ".js"
/******/ 	}
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp_4df9bb86_ab0a_4aab_ab5f_48bf167048fb_1_12_1"] = window["webpackJsonp_4df9bb86_ab0a_4aab_ab5f_48bf167048fb_1_12_1"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Set the webpack public path
/******/ 	(function () {
/******/ 	  var scripts = document.getElementsByTagName('script');
/******/ 	  var regex = (typeof spScriptNamePattern !== 'undefined') ? spScriptNamePattern : /sp-application-base_en-us\.js/i;
/******/ 	  var publicPath;
/******/
/******/ 	  if (scripts && scripts.length) {
/******/ 	    for (var i = 0; i < scripts.length; i++) {
/******/ 	      if (!scripts[i]) continue;
/******/ 	      var path = scripts[i].getAttribute('src');
/******/ 	      if (path && path.match(regex)) {
/******/ 	        publicPath = path.substring(0, path.lastIndexOf('/') + 1);
/******/ 	        break;
/******/ 	      }
/******/ 	    }
/******/ 	  }
/******/
/******/ 	  if (!publicPath) {
/******/ 	    for (var global in window.__setWebpackPublicPathLoaderSrcRegistry__) {
/******/ 	      if (global && global.match(regex)) {
/******/ 	        publicPath = global.substring(0, global.lastIndexOf('/') + 1);
/******/ 	        break;
/******/ 	      }
/******/ 	    }
/******/ 	  }
/******/ 	  __webpack_require__.p = publicPath;
/******/ 	})();
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "mwqp");
/******/ })
/************************************************************************/
/******/ ({

/***/ "+35T":
/*!******************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/encoding/UriEncoding.js ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// OneDrive:IgnoreCodeCoverage
var UriEncoding = /** @class */ (function () {
    function UriEncoding() {
    }
    /////////////////////////////
    // This file is more clean of all unneeded pollutants. It only contains the minimum amount of code required for someone to use the URI class.
    // You should think twice before adding anything else into this file because you will be causing unneeded bloat from someone else.
    /////////////////////////////
    /**
     * This function performs an aggressive unicode URL-encoding.
     * Convert non alphanum character into UTF-8 code string in format %XX%XX%XX.
     *
     * Escape unsafe characters
     *   CTL | SP | <"> | "#" | "%" | "<" | ">" | "'" | "&"
     * in the URL path (before "?", "#")
     * No encoding on query string.
     *
     * @param {string} str - String to encode
     * @param {boolean} bAsUrl - Encode in the same way as the code in unmanaged (Url::UrlEncode) code and
     *                           SP OM (SPHttpUtility.UrlKeyValueEncode and SPHttpUtility.UrlPathEncode).
     * @param {boolean} bForFilterQuery
     * @param {boolean} bForCallback - Only escape the characters after 0x7F to workaround bug O12: 452191
     */
    UriEncoding.encodeURIComponent = function (str, bAsUrl, bForFilterQuery, bForCallback) {
        var strOut = '';
        var strByte;
        var ix = 0;
        var strEscaped = ' "%<>\'&';
        if (!str) {
            // making this more robust
            return '';
        }
        var len = str.length;
        for (ix = 0; ix < len; ix++) {
            var charCode = str.charCodeAt(ix);
            var curChar = str.charAt(ix);
            if (bAsUrl && (curChar === '#' || curChar === '?')) {
                strOut += str.substr(ix);
                break;
            }
            if (bForFilterQuery && curChar === '&') {
                strOut += curChar;
                continue;
            }
            if (charCode <= 0x7f) {
                if (bForCallback) {
                    strOut += curChar;
                }
                else {
                    if ((charCode >= 97 && charCode <= 122) ||
                        (charCode >= 65 && charCode <= 90) ||
                        (charCode >= 48 && charCode <= 57) ||
                        (bAsUrl && charCode >= 32 && charCode <= 95 && strEscaped.indexOf(curChar) < 0)) {
                        strOut += curChar;
                    }
                    else if (charCode <= 0x0f) {
                        strOut += '%0' + charCode.toString(16).toUpperCase();
                    }
                    else if (charCode <= 0x7f) {
                        strOut += '%' + charCode.toString(16).toUpperCase();
                    }
                }
            }
            else if (charCode <= 0x07ff) {
                strByte = 0xc0 | (charCode >> 6);
                strOut += '%' + strByte.toString(16).toUpperCase();
                strByte = 0x80 | (charCode & 0x003f);
                strOut += '%' + strByte.toString(16).toUpperCase();
            }
            else if ((charCode & 0xfc00) !== 0xd800) {
                strByte = 0xe0 | (charCode >> 12);
                strOut += '%' + strByte.toString(16).toUpperCase();
                strByte = 0x80 | ((charCode & 0x0fc0) >> 6); // middle 6 bits
                strOut += '%' + strByte.toString(16).toUpperCase();
                strByte = 0x80 | (charCode & 0x003f); // lower 6 bits
                strOut += '%' + strByte.toString(16).toUpperCase();
            }
            else if (ix < str.length - 1) {
                charCode = (charCode & 0x03ff) << 10; // lower 10 bits of first char
                ix++;
                var nextCharCode = str.charCodeAt(ix);
                charCode |= nextCharCode & 0x03ff; // lower 10 bits of second char
                charCode += 0x10000;
                strByte = 0xf0 | (charCode >> 18);
                strOut += '%' + strByte.toString(16).toUpperCase();
                strByte = 0x80 | ((charCode & 0x3f000) >> 12); // upper 6 bits
                strOut += '%' + strByte.toString(16).toUpperCase();
                strByte = 0x80 | ((charCode & 0x0fc0) >> 6); // middle 6 bits
                strOut += '%' + strByte.toString(16).toUpperCase();
                strByte = 0x80 | (charCode & 0x003f); // lower 6 bits
                strOut += '%' + strByte.toString(16).toUpperCase();
            }
        }
        return strOut;
    };
    /**
     * Callbacks do not work if a #bookmark is in the URL. If there is a bookmark then we need to remove it. We also need to
     * deal with the scenario where there is not a bookmark but there is an unencoded # as a part of a name/value after the '?'.
     * This is how things should work here:
     * .../foo.aspx -> .../foo.aspx (unchanged)
     * .../foo.aspx#bookmark -> .../foo.aspx (bookmark is removed)
     * .../foo.aspx#bookmark?name=value -> .../foo.aspx?name=value (bookmark is removed)
     * .../foo.aspx#bookmark?name1=value#extra1&name2=value2 -> .../foo.aspx?name1=value#extra1&name2=value2 (only the bookmark # is removed)
     * .../foo.aspx?name1=value#extra1&name2=value2 -> .../foo.aspx?name1=value#extra1&name2=value2 (unchanged)
     */
    UriEncoding.escapeUrlForCallback = function (str) {
        var iPound = str.indexOf('#');
        var iQues = str.indexOf('?');
        if (iPound > 0 && (iQues === -1 || iPound < iQues)) {
            var strNew = str.substr(0, iPound);
            if (iQues > 0) {
                strNew += str.substr(iQues); // Need to include the '?' along with the "name=value" pairs.
            }
            str = strNew;
        }
        return UriEncoding.encodeURIComponent(str, true, false, true);
    };
    /**
     * SharePoint REST processor expect single quote ' to be escaped to '' in tokens (this applies to %27 too).
     * See example for usage.
     * @example
     * "getFolderByServerRelativeUrl('"+encodeRestUriStringToken("don't know.txt")+"')" should became "getFolderByServerRelativeUrl('don''t know.txt')""
     */
    UriEncoding.encodeRestUriStringToken = function (stringToken) {
        if (stringToken) {
            stringToken = stringToken.replace(/'/g, "''");
            stringToken = stringToken.replace(/%27/g, '%27%27');
            stringToken = UriEncoding.encodeURIComponent(stringToken);
        }
        return stringToken;
    };
    return UriEncoding;
}());
/* harmony default export */ __webpack_exports__["default"] = (UriEncoding);
//# sourceMappingURL=UriEncoding.js.map

/***/ }),

/***/ "/HB6":
/*!*************************************************************!*\
  !*** ./lib/extensibility/placeholder/PlaceholderManager.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Placeholder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Placeholder */ "jZLx");
/* harmony import */ var _PlaceholderName__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PlaceholderName */ "Cs6k");




/**
 * PlaceholderManager is a service registered with the application's root ServiceScope.
 * The host application uses this object to define the placeholders which will
 * be consumed by third-party extensions.  The PlaceholderCollection then obtains its
 * data from the PlaceholderManager.
 *
 * @internal
 */
var PlaceholderManager = /** @class */ (function () {
    function PlaceholderManager(serviceScope) {
        this._isEnabled = false;
        this._changedEvent = new _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["SPEvent"](PlaceholderManager.placeholdersChangedEventName);
        this._placeholders = new Map();
        // Create the placeholders for all the names
        this._placeholders.set(_PlaceholderName__WEBPACK_IMPORTED_MODULE_2__["default"].Top, this._createPlaceholder(_PlaceholderName__WEBPACK_IMPORTED_MODULE_2__["default"].Top));
        this._placeholders.set(_PlaceholderName__WEBPACK_IMPORTED_MODULE_2__["default"].Bottom, this._createPlaceholder(_PlaceholderName__WEBPACK_IMPORTED_MODULE_2__["default"].Bottom));
    }
    Object.defineProperty(PlaceholderManager.prototype, "changedEvent", {
        /**
         * The event raised when the application changes placeholder definitions
         * @eventproperty
         */
        get: function () {
            return this._changedEvent;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Initializes the collection of placeholders for use by application customizers.
     */
    PlaceholderManager.prototype.initializePlaceholders = function (definitions) {
        var _this = this;
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNotNullOrUndefined(definitions, 'definitions');
        definitions.forEach(function (def) { return _this.addPlaceholder(def.name, def.domElement); });
    };
    /**
     * Adds a placeholder.
     * If a placeholder already existed for the same name, it replaces it.
     */
    PlaceholderManager.prototype.addPlaceholder = function (name, domElement) {
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isTrue(this.placeholders.has(name), 'placeholder exists');
        this._placeholders.get(name).attachToApplication(domElement);
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPEventManager"].instance.raiseStickyEvent(PlaceholderManager.placeholdersChangedEventName, new _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["SPEventArgs"]());
    };
    /**
     * Removes a placeholder.
     */
    PlaceholderManager.prototype.removePlaceholder = function (name) {
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isTrue(this.placeholders.has(name), 'placeholder exists');
        this._placeholders.get(name).detachFromApplication();
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPEventManager"].instance.raiseStickyEvent(PlaceholderManager.placeholdersChangedEventName, new _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["SPEventArgs"]());
    };
    /**
     * Register the list of valid placeholders for Workbench
     */
    PlaceholderManager.prototype.registerPlaceholders = function () {
        // Select all Nodes with specified attribute name
        var placeholderAttributeName = 'data-sp-placeholder';
        var placeholderDivs = document.querySelectorAll("[" + placeholderAttributeName + "]");
        var regionDef = [];
        // Check div exist and placeholder name is part of PlaceholderName enum
        for (var i = 0; i < placeholderDivs.length; i++) {
            var div = placeholderDivs[i];
            var name_1 = div.getAttribute(placeholderAttributeName);
            if (div && name_1) {
                var placeholderName = _PlaceholderName__WEBPACK_IMPORTED_MODULE_2__["default"][name_1];
                if (typeof placeholderName !== 'number') {
                    throw new Error('Invalid placeholder definition: ' + name_1);
                }
                regionDef.push({
                    name: placeholderName,
                    domElement: div
                });
            }
        }
        this.initializePlaceholders(regionDef);
    };
    Object.defineProperty(PlaceholderManager.prototype, "isEnabled", {
        /**
         * Returns true if the placeholders are enabled for the current application
         */
        get: function () {
            return this._isEnabled;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Allows the application to set if placeholders are enabled for the current application
     * @internal
     */
    PlaceholderManager.prototype._enable = function () {
        this._isEnabled = true;
    };
    Object.defineProperty(PlaceholderManager.prototype, "placeholders", {
        /**
         * Returns a map from PlaceholderName to Placeholder for all active placeholders.
         */
        get: function () {
            return this._placeholders;
        },
        enumerable: false,
        configurable: true
    });
    PlaceholderManager.prototype._createPlaceholder = function (name) {
        return new _Placeholder__WEBPACK_IMPORTED_MODULE_1__["default"]({ name: name, domElement: document.createElement('div') }, this);
    };
    /**
     * The service key for PlaceholderManager.
     */
    PlaceholderManager.serviceKey = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["ServiceKey"].create('sp-application-base:PlaceholderManager', PlaceholderManager);
    /**
     * SPEvent name for placeholders change
     */
    PlaceholderManager.placeholdersChangedEventName = 'placeholders.changedEvent';
    return PlaceholderManager;
}());
/* harmony default export */ __webpack_exports__["default"] = (PlaceholderManager);


/***/ }),

/***/ "/Kpt":
/*!**************************************************************!*\
  !*** ./lib/extensibility/placeholder/PlaceholderProvider.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_sp_component_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-component-base */ "7Awa");
/* harmony import */ var _microsoft_sp_component_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_component_base__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _PlaceholderManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PlaceholderManager */ "/HB6");
/* harmony import */ var _PlaceholderName__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PlaceholderName */ "Cs6k");




/**
 * Allows third-party components to discover and use SharePoint placeholders.  Placeholders
 * enable third-party components to render custom content into designated regions on the page.
 *
 * @remarks
 * Placeholders are designated regions on the page, identified by one of the predefined
 * {@link PlaceholderName} constants.  Different applications and pages might support different
 * placeholder names.  Placeholders can appear and disappear as the user interacts with the page,
 * for example via in-place navigation.  Third-party components should not assume that a given placeholder
 * will always be available.
 *
 * Use {@link PlaceholderProvider.tryCreateContent} to test whether a placeholder is
 * available and add content to it.   Use the {@link PlaceholderProvider.changedEvent} event
 * to discover when new placeholders appear.
 *
 * @public
 */
var PlaceholderProvider = /** @class */ (function () {
    /**
     * @internal
     */
    function PlaceholderProvider(serviceScope, applicationCustomizerContextParameters, componentTag) {
        this._placeholderContents = [];
        this._isDisposed = false;
        this._sequence = applicationCustomizerContextParameters.sequence;
        var qosMonitor = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_QosMonitor"]('PlaceholderProvider');
        var preAllocatedApplicationCustomizerTopHeight = applicationCustomizerContextParameters.preAllocatedApplicationCustomizerTopHeight, preAllocatedApplicationCustomizerBottomHeight = applicationCustomizerContextParameters.preAllocatedApplicationCustomizerBottomHeight;
        this._componentTag = componentTag ? componentTag : '';
        /*
         * We're not using the whenFinished callback, as we know that at this point, the servicescope
         * in use is already finished in the ApplicationCustomizerContext.
         */
        this._placeholderManager = serviceScope.consume(_PlaceholderManager__WEBPACK_IMPORTED_MODULE_2__["default"].serviceKey);
        if (preAllocatedApplicationCustomizerTopHeight > 0) {
            this._preAllocatedTopPlaceholderContent = this._preAllocateContent(_PlaceholderName__WEBPACK_IMPORTED_MODULE_3__["default"].Top, preAllocatedApplicationCustomizerTopHeight, qosMonitor);
        }
        if (preAllocatedApplicationCustomizerBottomHeight > 0) {
            this._preAllocatedBottomPlaceholderContent = this._preAllocateContent(_PlaceholderName__WEBPACK_IMPORTED_MODULE_3__["default"].Bottom, preAllocatedApplicationCustomizerBottomHeight, qosMonitor);
        }
        qosMonitor.writeSuccess({ name: name });
    }
    PlaceholderProvider.prototype.dispose = function () {
        if (!this._isDisposed) {
            this._placeholderContents.forEach(function (content) { return content.dispose(); });
            delete this._placeholderContents;
            delete this._placeholderManager;
        }
        this._isDisposed = true;
    };
    Object.defineProperty(PlaceholderProvider.prototype, "isDisposed", {
        get: function () {
            return this._isDisposed;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Tests whether the page contains the specified placeholder.  If so, a new PlaceholderContent
     * object is created, which allows the caller to render custom content inside the placeholder.
     *
     * @param name - The requested placeholder
     * @param options - Additional options, for example to detect when the placeholder is disposed.
     * @returns A new PlaceholderContent object, or undefined if the requested placeholder does not exist.
     *
     * @remarks
     *
     * The host application makes no guarantees about the availability of a given placeholder.
     * In situations where an expected placeholder is not available, the third-party extension
     * must handle it gracefully, e.g. by not rendering anything, or by choosing an alternative
     * placeholder.
     */
    PlaceholderProvider.prototype.tryCreateContent = function (name, options) {
        _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_TraceLogger"].logVerbose(PlaceholderProvider._logSource, "Creating placeholder content in placeholder \"" + name + "\"");
        var qosMonitor = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_QosMonitor"]('Placeholder.tryCreateContent');
        var content;
        if (name === _PlaceholderName__WEBPACK_IMPORTED_MODULE_3__["default"].Top && this._preAllocatedTopPlaceholderContent) {
            content = this._preAllocatedTopPlaceholderContent;
            this._preAllocatedTopPlaceholderContent = undefined;
        }
        else if (name === _PlaceholderName__WEBPACK_IMPORTED_MODULE_3__["default"].Bottom && this._preAllocatedBottomPlaceholderContent) {
            content = this._preAllocatedBottomPlaceholderContent;
            this._preAllocatedBottomPlaceholderContent = undefined;
        }
        if (content) {
            content._setOptions(options);
            this._postContentCreation(content, qosMonitor);
            content.domElement.innerHTML = '';
            return content;
        }
        return this._tryCreateContent(qosMonitor, name, options);
    };
    PlaceholderProvider.prototype._preAllocateContent = function (placeholderName, height, qosMonitor) {
        // There is a chance that someone is looking for placeholders before the PlaceholderProvider.changedEvent has fired.
        // This is a bug, and we should warn the user of this anti-pattern. The easiest thing to do is make sure that
        // the .changedEvent callback isn't empty.
        if (this._placeholderManager.changedEvent._listenerCount() === 0) {
            // This is a bad state to be in.  We should log this out:
            console.log('tryCreateContent was called, but PlaceholderProvider.changedEvent has no handlers. ' +
                'This is likely to cause an error in the future.  You should probably be calling ' +
                'tryCreateContent in the PlaceholderProvider.changedEvent callback.');
        }
        // Check if placeholders are enabled first.
        if (!this._placeholderManager.isEnabled || !this._placeholderManager.placeholders.has(placeholderName)) {
            var error = new Error("No placeholder found with the name '" + name + "'");
            qosMonitor.writeExpectedFailure('PlaceholderNotFound', error, { name: name });
            return undefined;
        }
        var placeholder = this._placeholderManager.placeholders.get(placeholderName);
        var preAllocatedContent = placeholder.createPlaceholderContent(this._sequence);
        // This should never really happen. But this gives an explicit failure to help debug issues quickly.
        if (!placeholder) {
            var error = new Error('Placeholder dictionary has only the key but not the value for the placeholder');
            qosMonitor.writeUnexpectedFailure('NoValueInPlaceholdersMap', error, { name: name });
            return undefined;
        }
        try {
            preAllocatedContent.domElement.style.height = height + 'px';
            var shimmer = _microsoft_sp_component_base__WEBPACK_IMPORTED_MODULE_0__["_ShimmerFactory"].createShimmer(preAllocatedContent.domElement.clientWidth, height, _PlaceholderName__WEBPACK_IMPORTED_MODULE_3__["default"] + this._componentTag, '', 0);
            preAllocatedContent.domElement.appendChild(shimmer);
            qosMonitor.writeSuccess({ name: name });
        }
        catch (error) {
            qosMonitor.writeUnexpectedFailure('CreateContentFailed', error, { name: name });
        }
        return preAllocatedContent;
    };
    Object.defineProperty(PlaceholderProvider.prototype, "placeholderNames", {
        /**
         * Returns the names of the currently available placeholders.
         */
        get: function () {
            if (!this._placeholderManager.isEnabled) {
                return [];
            }
            var array = [];
            this._placeholderManager.placeholders.forEach(function (value, key) { return array.push(key); });
            return array;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PlaceholderProvider.prototype, "changedEvent", {
        /**
         * This event is raised when the list of currently available placeholders is changed.
         *
         * @remarks
         * The application can change its list of available placeholders at any time. This means that the existing
         * placeholders may get disposed or new placeholders may be added. Use this event to discover new
         * placeholders when they appear.
         *
         * @eventproperty
         */
        get: function () {
            return this._placeholderManager.changedEvent;
        },
        enumerable: false,
        configurable: true
    });
    PlaceholderProvider.prototype._tryCreateContent = function (qosMonitor, name, options) {
        var placeholder = this._placeholderManager.placeholders.get(name);
        var content;
        try {
            content = placeholder.createPlaceholderContent(this._sequence, options);
        }
        catch (error) {
            qosMonitor.writeUnexpectedFailure('CreateContentFailed', error, { name: name });
            return undefined;
        }
        this._postContentCreation(content, qosMonitor);
        return content;
    };
    PlaceholderProvider.prototype._postContentCreation = function (content, qosMonitor) {
        if (content) {
            this._placeholderContents.push(content);
            qosMonitor.writeSuccess({ name: name });
        }
        else {
            var error = new Error('Placeholder could not create new content');
            qosMonitor.writeUnexpectedFailure('CreateContentUndefined', error, { name: name });
        }
    };
    PlaceholderProvider._logSource = _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_LogSource"].create('PlaceholderProvider');
    return PlaceholderProvider;
}());
/* harmony default export */ __webpack_exports__["default"] = (PlaceholderProvider);


/***/ }),

/***/ "0XrT":
/*!*******************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/theming/FabricTheming.js ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RgbaColor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RgbaColor */ "M2il");
/* harmony import */ var _Shades__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Shades */ "MUnB");


/**
 * Utility class with static methods to work with Fabric-style themes.
 */
var FabricTheming = /** @class */ (function () {
    function FabricTheming() {
    }
    /**
     * Generates a palette of Fabric colors from a primary RGB color value.
     * @param {RgbaColor} primaryRgb Primary RGB color used to generate a palette.
     * @param {boolean} inverted Whether the theme is inverted, with a dark background and light foreground.
     */
    FabricTheming.generateFabricColors = function (primaryRgb, inverted) {
        if (inverted === void 0) { inverted = false; }
        var generatedShades = {
            themeDarker: _Shades__WEBPACK_IMPORTED_MODULE_1__["Shade"].Shade8,
            themeDark: _Shades__WEBPACK_IMPORTED_MODULE_1__["Shade"].Shade7,
            themeDarkAlt: _Shades__WEBPACK_IMPORTED_MODULE_1__["Shade"].Shade6,
            themeLight: _Shades__WEBPACK_IMPORTED_MODULE_1__["Shade"].Shade3,
            themeLighter: _Shades__WEBPACK_IMPORTED_MODULE_1__["Shade"].Shade2,
            themeLighterAlt: _Shades__WEBPACK_IMPORTED_MODULE_1__["Shade"].Shade1,
            themePrimary: _Shades__WEBPACK_IMPORTED_MODULE_1__["Shade"].Unshaded,
            themeAccent: _Shades__WEBPACK_IMPORTED_MODULE_1__["Shade"].Unshaded,
            themeSecondary: _Shades__WEBPACK_IMPORTED_MODULE_1__["Shade"].Shade5,
            themeTertiary: _Shades__WEBPACK_IMPORTED_MODULE_1__["Shade"].Shade4
        };
        // Expected color slots. Start each defaulting to null to avoid warnings about missing slots.
        var colors = FabricTheming._getDefaultThemeTokenMap();
        // Starting points for the generated palette.
        var primaryColor = _RgbaColor__WEBPACK_IMPORTED_MODULE_0__["default"].fromRgba(primaryRgb.R, primaryRgb.G, primaryRgb.B);
        for (var shadeName in generatedShades) {
            var shade = generatedShades[shadeName];
            colors[shadeName] = Object(_Shades__WEBPACK_IMPORTED_MODULE_1__["getShade"])(primaryColor, shade, inverted);
        }
        var accent = colors['themeAccent'];
        colors['themeAccentTranslucent10'] = accent
            ? _RgbaColor__WEBPACK_IMPORTED_MODULE_0__["default"].fromRgba(accent.R, accent.G, accent.B, 0.1 * _RgbaColor__WEBPACK_IMPORTED_MODULE_0__["default"].maxComponent)
            : null;
        // Handle neutral slots for inverted themes
        if (inverted) {
            var invertedText = '#fff';
            var invertedNeutralQuaternary = '#4f4f4f';
            var invertedNeutralQuaternaryAlt = '#484848';
            var invertedNeutralColors = {
                black: '#fff',
                blackTranslucent40: '#66ffffff',
                neutralDark: '#f4f4f4',
                neutralPrimary: invertedText,
                neutralPrimaryTranslucent50: '#7fffffff',
                neutralPrimaryAlt: '#dadada',
                neutralSecondary: '#d0d0d0',
                neutralTertiary: '#c8c8c8',
                neutralTertiaryAlt: '#6d6d6d',
                neutralQuaternary: invertedNeutralQuaternary,
                neutralQuaternaryAlt: invertedNeutralQuaternaryAlt,
                cmdbarSelected: invertedNeutralQuaternary,
                cmdbarSelectedHover: invertedNeutralQuaternaryAlt,
                neutralLight: '#3f3f3f',
                neutralLighter: '#313131',
                neutralLighterAlt: '#282828',
                white: '#1f1f1f',
                whiteTranslucent40: '#661f1f1f',
                error: '#f00',
                errorBackground: '#7e3333'
            };
            for (var neutralSlot in invertedNeutralColors) {
                if (invertedNeutralColors.hasOwnProperty(neutralSlot)) {
                    colors[neutralSlot] = _RgbaColor__WEBPACK_IMPORTED_MODULE_0__["default"].fromHtmlColor(invertedNeutralColors[neutralSlot]);
                }
            }
        }
        return colors;
    };
    FabricTheming._getDefaultThemeTokenMap = function () {
        return {
            backgroundOverlay: null,
            themeDarker: null,
            themeDark: null,
            themeDarkAlt: null,
            themePrimary: null,
            themeSecondary: null,
            themeTertiary: null,
            themeLight: null,
            themeLighter: null,
            themeLighterAlt: null,
            black: null,
            cmdbarSelected: null,
            cmdbarSelectedHover: null,
            neutralDark: null,
            neutralPrimary: null,
            neutralPrimaryAlt: null,
            neutralPrimaryTranslucent50: null,
            neutralSecondary: null,
            neutralSecondaryAlt: null,
            neutralTertiary: null,
            neutralTertiaryAlt: null,
            neutralQuaternary: null,
            neutralQuaternaryAlt: null,
            neutralLight: null,
            neutralLighter: null,
            neutralLighterAlt: null,
            white: null,
            blackTranslucent40: null,
            whiteTranslucent40: null,
            yellow: null,
            yellowLight: null,
            orange: null,
            orangeLight: null,
            redDark: null,
            red: null,
            magentaDark: null,
            magenta: null,
            magentaLight: null,
            purpleDark: null,
            purple: null,
            purpleLight: null,
            blueDark: null,
            blueMid: null,
            blue: null,
            blueLight: null,
            tealDark: null,
            teal: null,
            tealLight: null,
            greenDark: null,
            green: null,
            greenLight: null,
            error: null,
            errorBackground: null,
            success: null,
            successBackground: null,
            alert: null,
            alertBackground: null,
            infoBackground: null,
            info: null,
            orangeLighter: null
        };
    };
    return FabricTheming;
}());
/* harmony default export */ __webpack_exports__["default"] = (FabricTheming);
//# sourceMappingURL=FabricTheming.js.map

/***/ }),

/***/ "1/3/":
/*!*******************************************!*\
  !*** ./lib/error/SPGlobalErrorHandler.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__);
// Copyright (c) Microsoft. All rights reserved.

/**
 * Global error handler.
 *
 * The purpose of this class is to help measure uncaught/async errors from within the app infra.
 *
 * @internal
 */
var SPGlobalErrorHandler = /** @class */ (function () {
    function SPGlobalErrorHandler() {
    }
    /**
     * Traces errors to _TraceLogger to measure the occurrence
     *
     * The signature matches window.onerror
     */
    SPGlobalErrorHandler.basicTracingHandler = function (message, filename, lineno, colno, error) {
        var eventName = 'window.onerror';
        var genericError = error || new Error("Error:" + message + ", file:" + filename + ", line:" + lineno + ", column:" + colno);
        _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__["_TraceLogger"].logError(SPGlobalErrorHandler._genericLogSource, genericError, eventName);
    };
    SPGlobalErrorHandler._genericLogSource = _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__["_LogSource"].create('OtherGlobalError');
    return SPGlobalErrorHandler;
}());
/* harmony default export */ __webpack_exports__["default"] = (SPGlobalErrorHandler);


/***/ }),

/***/ "17wl":
/*!************************!*\
  !*** external "tslib" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__17wl__;

/***/ }),

/***/ "18dJ":
/*!************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/models/store/BaseDataStore.js ***!
  \************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-core-bundle */ "K9kD");
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__["DataStore"]; });

// Loading @ms/odsp-utilities/./lib/models/store/BaseDataStore.js



/***/ }),

/***/ "2fZ3":
/*!************************************!*\
  !*** ./lib/navigator/Navigator.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _BaseApplication__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../BaseApplication */ "n9Iz");
/* harmony import */ var _NavigationDataError__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NavigationDataError */ "SClb");
/* harmony import */ var _NavigationDataProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./NavigationDataProvider */ "o+Qb");
/* harmony import */ var _NavigationOrchestrator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./NavigationOrchestrator */ "6JwG");
/* harmony import */ var _PrefetchedDataEventArgs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PrefetchedDataEventArgs */ "n9H6");








var navigateQosScenarioName = 'Navigator.navigate';
var navigateToPreloadedDataQosScenarioName = 'Navigator.navigateToPreloadedData';
var navigateToApplicationQosScenarioName = 'Navigator.navigateToApplication';
var prefetchNavigationDataQosScenarioName = 'Navigator.prefetch';
/**
 * Navigator for SPFx applications.
 * It allows to navigate to a different URL that is backed by an SPFx application.
 *
 * Updates all SPFx-internal data structures with the information from the new URL.
 * This includes the page context, the manifest store, the session, telemetry and the themes.
 *
 * @internal
 */
var Navigator = /** @class */ (function () {
    function Navigator(serviceScope, applicationManager) {
        var _this = this;
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNotNullOrUndefined(serviceScope, 'serviceScope');
        this._navigationDataProvider = new _NavigationDataProvider__WEBPACK_IMPORTED_MODULE_5__["default"](serviceScope, function (data) {
            _this._validatePreloadedData(data);
        });
        this._navigationOrchestrator = new _NavigationOrchestrator__WEBPACK_IMPORTED_MODULE_6__["default"](serviceScope, applicationManager, this);
    }
    /**
     * Raises an event for a page navigation.
     */
    Navigator.raiseNavigatedEvent = function () {
        requestAnimationFrame(function () {
            setTimeout(function () {
                _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPEventManager"].instance.raiseStickyEvent(_BaseApplication__WEBPACK_IMPORTED_MODULE_3__["default"]._navigatedEventName, {});
            }, 0);
        });
    };
    Object.defineProperty(Navigator.prototype, "preloadedData", {
        /**
         * Returns the preloaded data used by the current page.
         * Throws if it hasn't navigated to a page yet.
         */
        get: function () {
            _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNotNullOrUndefined(this._preloadedData, 'preloadedData');
            return this._preloadedData;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Navigates to a new page.
     * Requests a JSON to SharePoint server and updates all SPFx related data with the new information.
     * This includes new manifests, page context, theme, telemetry settings.
     *
     * @param url - Destination URL
     * @param props - Optional Navigation properties
     */
    Navigator.prototype.navigate = function (url, props) {
        var _this = this;
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNonemptyString(url, 'url');
        var qosMonitor = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_QosMonitor"](navigateQosScenarioName);
        return this._navigationDataProvider
            .getData(url, props)
            .then(function (response) {
            return response.preloadedData
                .then(function (preloadedData) {
                if (response.prefetchedData) {
                    _this._raisePrefetchDataEvent(url, preloadedData, response.prefetchedData);
                }
                return _this.navigateToPreloadedData(preloadedData);
            })
                .then(function (navigationResult) {
                if (navigationResult && navigationResult.operation === 'Unsupported') {
                    qosMonitor.writeExpectedFailure('Unsupported');
                }
                else {
                    qosMonitor.writeSuccess();
                }
                return navigationResult;
            });
        })
            .catch(function (error) {
            var isExpected = false;
            if (error instanceof _NavigationDataError__WEBPACK_IMPORTED_MODULE_4__["default"]) {
                isExpected = error.isExpected;
            }
            isExpected
                ? qosMonitor.writeExpectedFailure(undefined, error)
                : qosMonitor.writeUnexpectedFailure(undefined, error);
            throw error;
        });
    };
    /**
     * Prefetches page navigation data
     *
     * @remarks
     * This is a required optimization that allows applications to pre-emptively fetch navigation data
     * so as to allow faster transitions between spfx-based applications.
     *
     * @param url - Destination URL
     * @param props - Optional Navigation properties
     *
     * @returns A promise
     */
    Navigator.prototype.prefetch = function (url, props) {
        var prefetchProps = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, props), { isPrefetchRequest: true });
        var qosMonitor = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_QosMonitor"](prefetchNavigationDataQosScenarioName);
        return this._navigationDataProvider
            .getData(url, prefetchProps)
            .then(function (response) {
            qosMonitor.writeSuccess();
        })
            .catch(function (error) {
            qosMonitor.writeUnexpectedFailure(undefined, error);
        });
    };
    /**
     * Given a preloaded data object, it sets up all SPFx related data with the new information from the preloaded data.
     *
     * @remarks
     * This is necessary because ListView has its own router and will give us only the object itself.
     *
     * @param preloadedData - Preloaded data object
     */
    Navigator.prototype.navigateToPreloadedData = function (preloadedData) {
        var _this = this;
        var qosMonitor = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_QosMonitor"](navigateToPreloadedDataQosScenarioName);
        try {
            this._validatePreloadedData(preloadedData);
            this._preloadedData = preloadedData;
            return this._navigationOrchestrator
                .navigate(preloadedData)
                .then(function (navigationResult) {
                _this._preloadedData = navigationResult.preloadedData;
                qosMonitor.writeSuccess();
                return navigationResult;
            })
                .catch(function (error) {
                qosMonitor.writeUnexpectedFailure('AsyncError', error);
                throw error;
            });
        }
        catch (error) {
            qosMonitor.writeUnexpectedFailure('SyncError', error);
            return Promise.reject(error);
        }
    };
    /**
     * Given a preloaded data object, it sets up all SPFx related data with the new information from the preloaded data.
     * It returns a promise with the loaded application.
     *
     * @remarks
     * This is used by the PlatformLoader to bootstrap an application.
     *
     * @param preloadedData - Preloaded data object
     */
    Navigator.prototype.navigateToApplication = function (preloadedData) {
        var _this = this;
        var qosMonitor = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_QosMonitor"](navigateToApplicationQosScenarioName);
        try {
            this._navigationDataProvider.buildId = this._getBuildId(preloadedData);
            this._validatePreloadedData(preloadedData);
            // Starting the application requires a preloaded data object to already be set up.
            this._preloadedData = preloadedData;
            return this._navigationOrchestrator.navigate(preloadedData).then(function (navigationResult) {
                _this._preloadedData = navigationResult.preloadedData;
                qosMonitor.writeSuccess();
                return Promise.resolve(navigationResult.application);
            });
            // TODO fix this
        }
        catch (error) {
            qosMonitor.writeUnexpectedFailure(error);
            throw error;
        }
    };
    /**
     * This is an API used to boot sequence to load application customizers after application has rendered.
     * @internal
     */
    Navigator.prototype._loadApplicationCustomizers = function (preloadedData) {
        return this._navigationOrchestrator._loadApplicationCustomizers(preloadedData);
    };
    /**
     * Invalidates a cached resource by its URL, or a collection of cached resources that match a RegExp.
     * Any subsequent request for the resource(s) will be fetched from its origin and recached.
     *
     * @param url - URL or URL RegExp to invalidate
     */
    Navigator.prototype.invalidate = function (url) {
        return this._navigationDataProvider.invalidate(url);
    };
    Navigator.prototype._validatePreloadedData = function (preloadedData) {
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNotNullOrUndefined(preloadedData, 'preloadedData');
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNotNullOrUndefined(preloadedData.spPageContextInfo, 'preloadedData.spPageContextInfo');
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNonemptyString(preloadedData.clientSideApplicationId, 'preloadedData.clientSideApplicationId');
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isTrue( true || false, 'NavigationDataProvider.buildId');
    };
    Navigator.prototype._raisePrefetchDataEvent = function (url, preloadedData, prefetchData // tslint:disable-line:no-any
    ) {
        // tslint:disable-next-line:no-any
        prefetchData.then(function (data) {
            if (data) {
                _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["_SPEventManager"].instance.raiseStickyEvent(_BaseApplication__WEBPACK_IMPORTED_MODULE_3__["default"]._prefetchedDataEventName, new _PrefetchedDataEventArgs__WEBPACK_IMPORTED_MODULE_7__["default"](preloadedData.clientSideApplicationId, url, data));
            }
        });
    };
    /**
     * Extracts the current build id from a string in the first manifest.
     * This is a temporary solution until a better solution is arrived at
     * such as including the build id at the root of the preload data.
     *
     * @param preloadedData - preload data for a given application
     */
    Navigator.prototype._getBuildId = function (preloadedData) {
        try {
            if (preloadedData.buildNumber) {
                return preloadedData.buildNumber;
            }
            var baseUrl = preloadedData.manifests[0].loaderConfig.internalModuleBaseUrls[0];
            return baseUrl.slice(baseUrl.indexOf('sp-client-'), -1);
        }
        catch (error) {
            return '';
        }
    };
    /**
     * DO NOT call this from outside the framework code. SPFx calls this internally during startup.
     *
     * @internal
     */
    // @ts-ignore This gets called by the framework, hiding from the public interface see IPrivateNavigator
    Navigator.prototype._setPreloadedData = function (data) {
        this._preloadedData = data;
    };
    return Navigator;
}());
/* harmony default export */ __webpack_exports__["default"] = (Navigator);


/***/ }),

/***/ "2q6Q":
/*!***********************************!*\
  !*** external "@ms/sp-telemetry" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__2q6Q__;

/***/ }),

/***/ "4QmI":
/*!*****************************************************************!*\
  !*** ./lib/extensibility/customAction/CustomActionLocations.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
* Constants for the custom action locations that are used with client-side extensions.
*
* For more info about custom actions, see this reference:
* https://msdn.microsoft.com/en-us/library/office/ms460194.aspx
*
* @alpha
*/
var CustomActionLocations = /** @class */ (function () {
    function CustomActionLocations() {
    }
    /**
     * Used to register application customizers, which run when the browser page loads.
     *
     * Manifest extension type: "ApplicationCustomizer"
     * Base class:              BaseApplicationCustomizer
     */
    CustomActionLocations.APPLICATION_CUSTOMIZER = 'ClientSideExtension.ApplicationCustomizer';
    /**
     * Used to add menu items to the right-click context menu for the SharePoint list view.
     *
     * Manifest extension type: "ListViewCommandSet"
     * Base class:              BaseListViewCommandSet
     */
    CustomActionLocations.LISTVIEW_COMMANDSET_CONTEXTMENU = 'ClientSideExtension.ListViewCommandSet.ContextMenu';
    /**
     * Used to add menu items to the top menu for a SharePoint list view.
     *
     * Manifest extension type: "ListViewCommandSet"
     * Base class:              BaseListViewCommandSet
     */
    CustomActionLocations.LISTVIEW_COMMANDSET_COMMANDBAR = 'ClientSideExtension.ListViewCommandSet.CommandBar';
    /**
     * Used to add menu items to the SharePoint list view; the location is up to the application's
     * discretion.
     *
     * Manifest extension type: "ListViewCommandSet"
     * Base class:              BaseListViewCommandSet
     */
    CustomActionLocations.LISTVIEW_COMMANDSET_DEFAULT = 'ClientSideExtension.ListViewCommandSet';
    /**
     * Used to register search query modifier, to be used in search results pages and search suggestions.
     *
     * Manifest extension type: "SearchQueryModifier"
     * Base class:              BaseSearchQueryModifier
     */
    CustomActionLocations.SEARCH_QUERY_MODIFIER = 'ClientSideExtension.SearchQueryModifier';
    return CustomActionLocations;
}());
/* harmony default export */ __webpack_exports__["default"] = (CustomActionLocations);


/***/ }),

/***/ "4fYr":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_d89e40c38ccaa8bd6af6488f37cb196d/node_modules/@ms/odsp-shared-react/lib/components/SkipToContentButton/SkipToContentButton.js ***!
  \********************************************************************************************************************************************************************************************************************/
/*! exports provided: setupSkipToContentButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setupSkipToContentButton", function() { return setupSkipToContentButton; });
/* harmony import */ var _SkipToContentButton_resx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SkipToContentButton.resx */ "E53Z");
/* harmony import */ var _SkipToContentButton_resx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_SkipToContentButton_resx__WEBPACK_IMPORTED_MODULE_0__);
// OneDrive:IgnoreCodeCoverage

var skipButtonId = 'sp-skipToContent';
var skipButtonStylesId = 'sp-skipToContent-styles';
/**
 * @beta
 * Creates and attaches a button to the top of the page that moves focus to the main content area when clicked.
 * The consumer MUST insure that the element containing the main content on the page has role="main" on it or is a <main> element,
 * and tabindex="-1" (or 0 if it should be part of the normal tab order), or no tabindex if that element is
 * naturally focusable.
 * The consumer also MUST provide styles to theme and localize the button!
 * The styles are:
 * ```
 * #sp-skipToContent {
 *   @include ms-text-align(left);
 *   @include mediumFontBasic;
 *   color: $ms-color-themeDark;
 *   background-color: $ms-color-neutralLighter;
 * }
 * ```
 */
function setupSkipToContentButton() {
    // first create and append styles to the <head> so the button doesn't suddenly appear
    if (!document.getElementById(skipButtonStylesId)) {
        var skipButtonStyles = document.createElement('style');
        skipButtonStyles.id = skipButtonStylesId;
        try {
            document.head.insertAdjacentElement('afterbegin', skipButtonStyles);
        }
        catch (_a) {
            // ignore jest error
        }
        skipButtonStyles.innerHTML = "\n      ." + skipButtonId + " {\n        display: block;\n        box-sizing: border-box;\n        padding: 0 16px;\n        font-size: 14px;\n        font-weight: 400;\n\n        z-index: 999999;\n        height: 50px;\n        line-height: 50px;\n        position: fixed;\n        width: 100%;\n        top: -999px;\n        color: #025c5f;\n        background-color: #f3f2f1;\n      }\n      ." + skipButtonId + ":focus,\n      ." + skipButtonId + ":hover {\n        top: 0;\n        text-decoration: none;\n      }\n    ";
    }
    // create and append the button to the top of the body
    if (!document.getElementById(skipButtonId)) {
        var skipButton = document.createElement('a');
        skipButton.href = 'javascript:;';
        skipButton.className = skipButtonId;
        skipButton.id = skipButtonId;
        skipButton.onclick = function () {
            (document.querySelector("[role='main']") ||
                document.querySelector('main')).focus();
        };
        skipButton.innerHTML = _SkipToContentButton_resx__WEBPACK_IMPORTED_MODULE_0___default.a.label;
        try {
            document.body.insertAdjacentElement('afterbegin', skipButton);
        }
        catch (_b) {
            // ignore jest error
        }
    }
}
//# sourceMappingURL=SkipToContentButton.js.map

/***/ }),

/***/ "5ORI":
/*!************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/providers/theming/ThemeUtilities.js ***!
  \************************************************************************************************************************************************************************************************/
/*! exports provided: spLoadTheme, applySpThemeDefaults */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spLoadTheme", function() { return spLoadTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applySpThemeDefaults", function() { return applySpThemeDefaults; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _uifabric_utilities_lib_customizations_Customizations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @uifabric/utilities/lib/customizations/Customizations */ "sl8a");
/* harmony import */ var _uifabric_utilities_lib_customizations_Customizations__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_uifabric_utilities_lib_customizations_Customizations__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _uifabric_styling_lib_styles_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @uifabric/styling/lib/styles/theme */ "Oqak");
/* harmony import */ var _ms_odsp_utilities_lib_features_Features__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ms/odsp-utilities/lib/features/Features */ "8G1T");
/* harmony import */ var _ms_odsp_utilities_lib_features_FeatureOverrides__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ms/odsp-utilities/lib/features/FeatureOverrides */ "iVgB");
/* harmony import */ var _MDL2Theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MDL2Theme */ "n5/O");
/* harmony import */ var _FluentFeatures__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FluentFeatures */ "KosM");







/**
 * A SharePoint wrapper for Fabric's loadTheme()
 * First merges the given theme with SharePoint's default theme before calling Fabric's loadTheme().
 * @param skipBatchUpdates - Deprecated. Skip batch updates triggered by multiple settings changed event. Note this property is
 * temporary, and need to be removed after SPRenderReduction experiment is done
 */
function spLoadTheme(theme, pageContext, skipBatchUpdates) {
    var _theme;
    // prevent raising settings change events until the end
    _uifabric_utilities_lib_customizations_Customizations__WEBPACK_IMPORTED_MODULE_1__["Customizations"].applyBatchedUpdates(function () {
        _theme = Object(_uifabric_styling_lib_styles_theme__WEBPACK_IMPORTED_MODULE_2__["loadTheme"])(applySpThemeDefaults(theme, pageContext));
    });
    return _theme;
}
/**
 * Merges the given theme on top of the default SharePoint theme.
 */
function applySpThemeDefaults(theme, pageContext) {
    // todo: this logic should move to sp-client masterpage
    pageContext && _ms_odsp_utilities_lib_features_Features__WEBPACK_IMPORTED_MODULE_3__["default"].initSPExpFeatures(pageContext.ExpFeatures);
    _ms_odsp_utilities_lib_features_FeatureOverrides__WEBPACK_IMPORTED_MODULE_4__["default"].evaluateCanOverride();
    // apply SP's default teal theme
    if (!_FluentFeatures__WEBPACK_IMPORTED_MODULE_6__["isOneDrive"]) {
        var tealTheme = {
            palette: {
                themePrimary: '#03787c',
                themeLighterAlt: '#f0f9fa',
                themeLighter: '#c5e9ea',
                themeLight: '#98d6d8',
                themeTertiary: '#49aeb1',
                themeSecondary: '#13898d',
                themeDarkAlt: '#026d70',
                themeDark: '#025c5f',
                themeDarker: '#014446'
            }
        };
        theme = mergeThemes(tealTheme, theme);
    }
    // Fluent effects: applies shadows and rounded corner changes
    if (_FluentFeatures__WEBPACK_IMPORTED_MODULE_6__["isOdc"] && !_ms_odsp_utilities_lib_features_FeatureOverrides__WEBPACK_IMPORTED_MODULE_4__["default"].isFeatureEnabled(_FluentFeatures__WEBPACK_IMPORTED_MODULE_6__["EnableFluentStylingODC"])) {
        theme = mergeThemes({ effects: _MDL2Theme__WEBPACK_IMPORTED_MODULE_5__["MDL2Effects"] }, theme);
    }
    // Fluent font styles
    if (_FluentFeatures__WEBPACK_IMPORTED_MODULE_6__["isOdc"] && !_ms_odsp_utilities_lib_features_FeatureOverrides__WEBPACK_IMPORTED_MODULE_4__["default"].isFeatureEnabled(_FluentFeatures__WEBPACK_IMPORTED_MODULE_6__["EnableFluentStylingODC"])) {
        theme = mergeThemes({ fonts: _MDL2Theme__WEBPACK_IMPORTED_MODULE_5__["MDL2FontStyles"] }, theme);
    }
    // Fluent neutral palette
    // (This overrides more then just the neutral palette, but also some invariant colors.)
    var p = theme.palette;
    // if there is no palette defined, or if the palette matches the default one...
    if (!p ||
        (!p.black && !p.neutralPrimary && !p.white && !p.neutralQuaternary) ||
        (p.black &&
            p.white &&
            p.neutralPrimary &&
            p.neutralQuaternary &&
            p.black.indexOf('#000') === 0 &&
            p.white.toLowerCase().indexOf('#fff') === 0 &&
            p.neutralPrimary.indexOf('#333') === 0 &&
            p.neutralQuaternary.toLowerCase().indexOf('#d0d0d0') === 0)) {
        theme.palette = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, theme.palette), _MDL2Theme__WEBPACK_IMPORTED_MODULE_5__["FluentNeutrals"]);
    }
    return theme;
}
/**
 * Does the minimum (for SharePoint) to merge two partial Fabric themes
 */
function mergeThemes(originalTheme, themeOverrides) {
    originalTheme = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, originalTheme), themeOverrides), { effects: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, originalTheme.effects), themeOverrides.effects), 
        // not technically correct because there are many sub-objects, but SP doesn't care
        fonts: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, originalTheme.fonts), themeOverrides.fonts), palette: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, originalTheme.palette), themeOverrides.palette) });
    return originalTheme;
}
//# sourceMappingURL=ThemeUtilities.js.map

/***/ }),

/***/ "5aZ1":
/*!********************************************************!*\
  !*** ./lib/extensibility/BaseApplicationCustomizer.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_extension_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-extension-base */ "ZFc5");
/* harmony import */ var _microsoft_sp_extension_base__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_extension_base__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__);



/**
 * This is the base class that third parties should extend when implementing
 * a client-side extension that runs when an application is first starting.
 *
 * @remarks
 * In the component manifest, the "extensionType" should be set to "ApplicationCustomizer".
 *
 * Example usage scenarios for an application customizer might include: rendering custom
 * UI elements inside a SharePoint content placeholder, tracking page load statistics,
 * or automatically logging the user out after a certain time period.
 *
 * @public
 */
var BaseApplicationCustomizer = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(BaseApplicationCustomizer, _super);
    function BaseApplicationCustomizer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Initialization code for all the application customizers.
     * Sets up the placeholder setup virtual function with the placeholder changed event.
     *
     * @internal
     */
    BaseApplicationCustomizer.prototype._initializeExtensionType = function () {
        _super.prototype._initializeExtensionType.call(this);
        // Set up if the extension doesn't override the function with a different signature.
        // As this function was added later there is a chance they already used the name.
        var qosMonitor = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_2__["_QosMonitor"]('BaseApplicationCustomizer.onPlaceholdersChanged.setUp');
        if (this.onPlaceholdersChanged.length === 1) {
            this._placeholdersChangedCallback = this.onPlaceholdersChanged.bind(this, this.context.placeholderProvider);
            this.context.placeholderProvider.changedEvent.add(this, this._placeholdersChangedCallback);
            qosMonitor.writeSuccess();
        }
        else {
            qosMonitor.writeExpectedFailure('DifferentSignature');
        }
    };
    /**
     * {@inheritDoc @microsoft/sp-component-base#BaseComponent.dispose}
     */
    BaseApplicationCustomizer.prototype.dispose = function () {
        if (this._placeholdersChangedCallback) {
            this.context.placeholderProvider.changedEvent.remove(this, this._placeholdersChangedCallback);
        }
        _super.prototype.dispose.call(this);
    };
    /**
     * This event method is called when the placeholders of the host application change, come into
     * existence, or disappear.
     * virtual
     */
    BaseApplicationCustomizer.prototype.onPlaceholdersChanged = function (placeholderProvider) {
        return;
    };
    return BaseApplicationCustomizer;
}(_microsoft_sp_extension_base__WEBPACK_IMPORTED_MODULE_1__["BaseExtension"]));
/* harmony default export */ __webpack_exports__["default"] = (BaseApplicationCustomizer);


/***/ }),

/***/ "5kzB":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_d89e40c38ccaa8bd6af6488f37cb196d/node_modules/@ms/odsp-shared-react/lib/components/SkipToContentButton/index.js ***!
  \******************************************************************************************************************************************************************************************************/
/*! exports provided: setupSkipToContentButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SkipToContentButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SkipToContentButton */ "4fYr");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setupSkipToContentButton", function() { return _SkipToContentButton__WEBPACK_IMPORTED_MODULE_0__["setupSkipToContentButton"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "6GSH":
/*!*******************************************!*\
  !*** ./lib/pageChrome/SPThemeProvider.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-page-context */ "X+PM");
/* harmony import */ var _microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ms_odsp_datasources_lib_providers_theming_WebThemeProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/odsp-datasources/lib/providers/theming/WebThemeProvider */ "N+FS");
/* harmony import */ var _ms_odsp_datasources_lib_providers_theming_ThemeInitializer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ms/odsp-datasources/lib/providers/theming/ThemeInitializer */ "o3jq");
/* harmony import */ var _ms_odsp_datasources_lib_dataSources_theming_spList_WebThemeDataSource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ms/odsp-datasources/lib/dataSources/theming/spList/WebThemeDataSource */ "Be1r");
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ms/odsp-core-bundle */ "K9kD");
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_4__);





/**
 * The class controls applying a theme to the current Page.
 * The theme is a web level setting, if a theme is applied this class with call loadThemedStyles
 * which will update the styles that are registered with load-themed-styles.
 *
 * @internal
 */
var SPThemeProvider = /** @class */ (function () {
    function SPThemeProvider(serviceScope) {
        var _this = this;
        serviceScope.whenFinished(function () {
            _this._pageContext = serviceScope.consume(_microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_0__["PageContext"].serviceKey);
            _this._themeFactoryProvider = {
                webThemeProvider: function (pageContext) { return _this._getThemeProvider(pageContext); }
            };
        });
    }
    SPThemeProvider.prototype.loadThemedStyles = function (forceUpdate) {
        return _ms_odsp_datasources_lib_providers_theming_ThemeInitializer__WEBPACK_IMPORTED_MODULE_2__["ThemeInitializer"].initializeTheme(this._themeFactoryProvider, this._pageContext.legacyPageContext, forceUpdate);
    };
    SPThemeProvider.prototype._getThemeProvider = function (pageContext) {
        var _this = this;
        return new _ms_odsp_datasources_lib_providers_theming_WebThemeProvider__WEBPACK_IMPORTED_MODULE_1__["WebThemeProvider"]({
            pageContext: pageContext,
            getThemeDataSource: function () { return _this._getThemeDataSource(); }
        });
    };
    SPThemeProvider.prototype._getThemeDataSource = function () {
        var themeDataSource = new _ms_odsp_datasources_lib_dataSources_theming_spList_WebThemeDataSource__WEBPACK_IMPORTED_MODULE_3__["default"](this._pageContext.legacyPageContext);
        return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_4__["Promise"].resolve(themeDataSource);
    };
    return SPThemeProvider;
}());
/* harmony default export */ __webpack_exports__["default"] = (SPThemeProvider);


/***/ }),

/***/ "6JwG":
/*!*************************************************!*\
  !*** ./lib/navigator/NavigationOrchestrator.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_sp_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-loader */ "I6O9");
/* harmony import */ var _microsoft_sp_loader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_loader__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/sp-page-context */ "X+PM");
/* harmony import */ var _microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _extensibility_SearchQueryManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../extensibility/SearchQueryManager */ "efvT");
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ms/sp-telemetry */ "2q6Q");
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ApplicationManager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ApplicationManager */ "Q81X");
/* harmony import */ var _common_Killswitches__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/Killswitches */ "dQCu");
/* harmony import */ var _extensibility_ApplicationCustomizerLoader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../extensibility/ApplicationCustomizerLoader */ "Rr6l");
/* harmony import */ var _pageChrome_SPMasterChrome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../pageChrome/SPMasterChrome */ "vt24");
/* harmony import */ var _pageChrome_SPPageChrome__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../pageChrome/SPPageChrome */ "KdXK");
/* harmony import */ var _Navigator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Navigator */ "2fZ3");












/**
 * It orchestrates all different steps to navigate to an SPFx application.
 *
 * This includes updating the Page Context, loading the application customizers, initializing the application, etc.
 */
var NavigationOrchestrator = /** @class */ (function () {
    /**
     * Creates a NavigationOrchestrator.
     *
     * @param serviceScope - Root service scope
     * @param applicationManager - Depending on the bootstrapping sequence, application manager is
     *                             injected or created inside.
     */
    function NavigationOrchestrator(serviceScope, applicationManager, navigator) {
        this._numAppsInitializedInSession = 0;
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNotNullOrUndefined(serviceScope, 'serviceScope');
        this._serviceScope = serviceScope;
        this._applicationManager = applicationManager || new _ApplicationManager__WEBPACK_IMPORTED_MODULE_6__["default"](serviceScope, navigator);
        this._pageContext = serviceScope.consume(_microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_3__["PageContext"].serviceKey);
        this._searchQueryManager = serviceScope.consume(_extensibility_SearchQueryManager__WEBPACK_IMPORTED_MODULE_4__["default"].serviceKey);
        this._applicationCustomizerLoader = new _extensibility_ApplicationCustomizerLoader__WEBPACK_IMPORTED_MODULE_8__["default"](serviceScope);
    }
    /**
     * Does all the operation to navigate to a new preloaded data.
     *
     * @remarks
     * It assumes the preloaded data has already been validated. Not null, with a spPageContextInfo and an application id.
     */
    NavigationOrchestrator.prototype.navigate = function (preloadedData) {
        var _this = this;
        var currentAppId = this._applicationManager.currentApplicationId;
        var appLoaded = !currentAppId.equals(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Guid"].empty);
        var isSameApp = currentAppId.equals(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Guid"].tryParse(preloadedData.clientSideApplicationId) || _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Guid"].empty);
        /**
         * Safe net for navigations to doclib/list:
         * If the former and current app are sp-list-host, then it means that we
         * are probably entering into an infinite loop of ListHost.aspx.
         * In such a case, throw an error, and do a full-page load.
         */
        if (!_common_Killswitches__WEBPACK_IMPORTED_MODULE_7__["Killswitches"].PreventBlankPageInListHostKillSwitchActivated() &&
            isSameApp &&
            appLoaded &&
            currentAppId.equals(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Guid"].tryParse(NavigationOrchestrator.spListHostComponentId))) {
            var qosMonitor = new _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_5__["_QosMonitor"]('ListHostBlankPage');
            qosMonitor.writeSuccess();
            throw new Error('SP-List-Host App: Navigation within the listhost app is not supported.');
        }
        var isAppIdSameOrEmpty = isSameApp || !appLoaded;
        var unsupportedReason = this._isNavigationSupportedWithReason(preloadedData, this._pageContext, isAppIdSameOrEmpty);
        if (unsupportedReason !== undefined) {
            return Promise.resolve({
                preloadedData: preloadedData,
                application: undefined,
                operation: 'Unsupported',
                unsupportedReason: unsupportedReason
            });
        }
        this._fixPreloadedDataItem(preloadedData);
        var isCrossSite = this._isCrossSite(preloadedData, this._pageContext);
        // TODO: demyren: VSO:428542 - clean up when moving to new PageContext
        this._pageContext.initialize(_microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_3__["SharePointPageContextDataProvider"]._createPageContextData(preloadedData.spPageContextInfo), preloadedData.spPageContextInfo);
        if (!_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('153edef1-9c5b-4ad1-aa5f-a9c53071e0fa' /* '08/28/2020', 'Skip server manifests on sw-powered pages' */) &&
            window['__spfxMark'] // tslint:disable-line:no-string-literal
        ) {
            _microsoft_sp_loader__WEBPACK_IMPORTED_MODULE_2__["_ManifestStore"].instance.registerManifests(preloadedData.manifests, false);
        }
        else {
            _microsoft_sp_loader__WEBPACK_IMPORTED_MODULE_2__["_ManifestStore"].instance.replaceManifests(preloadedData.manifests);
        }
        // Before initializing application customizers we should make sure that the page chrome is initialized.
        // Page chrome initializes the dialog manager.
        if (!_ApplicationManager__WEBPACK_IMPORTED_MODULE_6__["default"]._isChromelessApplication(preloadedData.clientSideApplicationId)) {
            if (!this._masterChrome) {
                this._masterChrome = new _pageChrome_SPMasterChrome__WEBPACK_IMPORTED_MODULE_9__["default"]();
            }
            if (!this._pageChrome) {
                this._pageChrome = new _pageChrome_SPPageChrome__WEBPACK_IMPORTED_MODULE_10__["default"](this._serviceScope, this._masterChrome, preloadedData.clientSideApplicationId);
            }
        }
        if (isCrossSite &&
            !_ApplicationManager__WEBPACK_IMPORTED_MODULE_6__["default"]._isChromelessApplication(preloadedData.clientSideApplicationId) &&
            appLoaded &&
            isSameApp) {
            this._applicationManager.currentApplication._loadTheme();
        }
        this._updateTelemetry(preloadedData);
        // Discouraging application developers to use spPageContextInfo and instead to use the Page Context API.
        preloadedData.spPageContextInfo = undefined;
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Session"]._changePage();
        if (_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPFlight"].isEnabled(436 /* SppplatUseDeploymentPools */) && preloadedData.clientSideApplicationId) {
            _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Session"]._setClientSideApplicationId(preloadedData.clientSideApplicationId);
        }
        if (_common_Killswitches__WEBPACK_IMPORTED_MODULE_7__["Killswitches"].UpdateListHostPageContextKillSwitchActivated() ||
            NavigationOrchestrator.spListHostComponentId !== preloadedData.clientSideApplicationId) {
            _Navigator__WEBPACK_IMPORTED_MODULE_11__["default"].raiseNavigatedEvent();
        }
        // If it's the same application, just return with the result.
        if (isSameApp) {
            this._initializeSearchQuery(preloadedData);
            // The application doesn't change, but the preloaded data has. We need to re-load the app customizers.
            this._loadApplicationCustomizers(preloadedData);
            return Promise.resolve({
                preloadedData: preloadedData,
                application: this._applicationManager.currentApplication,
                operation: 'UpdateContext',
                isXSite: isCrossSite
            });
        }
        else {
            _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_5__["_PerformanceLogger"].markCrossAppNavigationStart();
            return this._applicationManager
                .startApplication(preloadedData, this._pageChrome)
                .then(function (application) {
                _this._numAppsInitializedInSession++;
                _this._initializeSearchQuery(preloadedData);
                // Load app customizers after the application has rendered to )ensure placeholders have been set up.
                _this._loadApplicationCustomizers(preloadedData);
                return Promise.resolve({
                    preloadedData: preloadedData,
                    application: application,
                    operation: 'LoadApplication',
                    isXSite: isCrossSite
                });
            });
        }
        return Promise.resolve({
            preloadedData: preloadedData,
            application: undefined,
            operation: 'UpdateContext'
        });
    };
    /**
     * Loads the application customizers for the current page.
     * @param preloadedData - Preloaded data for the current page.
     *
     * @internal
     */
    NavigationOrchestrator.prototype._loadApplicationCustomizers = function (preloadedData) {
        if (this._appSupportsExtensions(preloadedData)) {
            _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_TraceLogger"].logVerbose(NavigationOrchestrator._logSource, 'Loading application customizers');
            return this._applicationCustomizerLoader.loadExtensions(preloadedData.customActions);
        }
        else {
            _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_TraceLogger"].logVerbose(NavigationOrchestrator._logSource, 'Application Customizer is not supported for classic pages and workbench.');
            return Promise.resolve();
        }
    };
    /**
     * Every time the URL gets updated (and there is a navigation) the search query needs to be updated
     * in the page context.
     * It's done in an async way to include loading SearchQueryModifier extensions when necessary.
     *
     * Setting up the search query is disabled for applications that don't have this scenario.
     * If that situation changes (like SPHome supporting search scenario) the check will need to be revisited.
     */
    NavigationOrchestrator.prototype._initializeSearchQuery = function (preloadedData) {
        var _this = this;
        if (_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPFlight"].isEnabled(1626 /* CSISearchQueryExtension */) &&
            preloadedData.clientSideApplicationId !== NavigationOrchestrator.classicPagesComponentId &&
            preloadedData.clientSideApplicationId !== NavigationOrchestrator.workbenchComponentId &&
            preloadedData.clientSideApplicationId !== NavigationOrchestrator.spHomeComponentId) {
            return this._searchQueryManager
                .initialize(preloadedData)
                .then(function () { return _this._searchQueryManager.getSearchQuery(); })
                .then(function (query) { return _this._pageContext._setSearchQuery(query); });
        }
        return Promise.resolve();
    };
    NavigationOrchestrator.prototype._appSupportsExtensions = function (preloadedData) {
        if (preloadedData.clientSideApplicationId !== NavigationOrchestrator.classicPagesComponentId) {
            return true;
        }
        return false;
    };
    NavigationOrchestrator.prototype._updateTelemetry = function (preloadedData) {
        var _a, _b, _c, _d;
        // This will eventually be removed when the migration to Diagnostics is complete
        var manifestAlias = preloadedData && preloadedData.manifests && preloadedData.manifests.length > 0
            ? preloadedData.manifests[0].alias
            : '';
        var contextInfo;
        var _e = this._pageContext.legacyPageContext, isHubSite = _e.isHubSite, webTemplate = _e.webTemplate, hubSiteId = _e.hubSiteId;
        var pageType;
        var promotedState;
        var pageId;
        if (preloadedData && preloadedData.item) {
            // tslint:disable-next-line:no-string-literal
            pageType = preloadedData.item['PageLayoutType'];
            // tslint:disable-next-line:no-string-literal
            promotedState = preloadedData.item['PromotedState'];
            // tslint:disable-next-line:no-string-literal
            pageId = preloadedData.item['UniqueId'];
        }
        contextInfo = {
            pageId: pageId,
            isHubSite: isHubSite,
            webTemplate: webTemplate,
            pageType: pageType,
            promotedState: promotedState,
            hubSiteId: isHubSite ? hubSiteId : undefined
        };
        _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_5__["_Telemetry"].updateSettings({
            siteId: this._pageContext.site.id.toString(),
            webId: this._pageContext.web.id.toString(),
            listId: ((_a = this._pageContext.list) === null || _a === void 0 ? void 0 : _a.id.toString()) || '',
            listItemUniqueId: ((_b = this._pageContext.listItem) === null || _b === void 0 ? void 0 : _b.id.toString()) || '',
            correlationId: this._pageContext.site.correlationId.toString()
        }, manifestAlias /** used for workload name */);
        _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_Diagnostics"].updateSettings({
            siteId: this._pageContext.site.id.toString(),
            webId: this._pageContext.web.id.toString(),
            listId: ((_c = this._pageContext.list) === null || _c === void 0 ? void 0 : _c.id.toString()) || '',
            listItemUniqueId: ((_d = this._pageContext.listItem) === null || _d === void 0 ? void 0 : _d.id.toString()) || '',
            correlationId: this._pageContext.site.correlationId.toString(),
            contextInfo: contextInfo
        });
    };
    /**
     * Returns true if a navigator from the page context to the new preloaded data is a cross-site navigation.
     * This operation needs to happen before updating the page context with the new preloaded data.
     */
    NavigationOrchestrator.prototype._isCrossSite = function (preloadedData, pageContext) {
        if (!pageContext.isInitialized) {
            // This happens in the first load.
            return false;
        }
        return (!_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Guid"].parse(preloadedData.spPageContextInfo.webId).equals(pageContext.web.id) ||
            !_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Guid"].parse(preloadedData.spPageContextInfo.siteId).equals(pageContext.site.id));
    };
    NavigationOrchestrator.prototype._fixPreloadedDataItem = function (preloadedData) {
        var INVALID_PAGE_ITEM_ID = -1;
        // Use the preloadedData's item id if the spPageContextInfo item id is unavailable
        // The workbench can provide a list item via query string which will not be reflected in the
        // spPageContextInfo variable.
        if (preloadedData.spPageContextInfo.pageItemId === INVALID_PAGE_ITEM_ID &&
            preloadedData.item &&
            preloadedData.item.ID !== INVALID_PAGE_ITEM_ID) {
            preloadedData.spPageContextInfo.pageItemId = preloadedData.item.ID;
        }
        return preloadedData;
    };
    /**
     * Determines whether inplace navigation is supported.
     *
     * @param preloadedData - Application preloaded data
     * @param pageContext - Application context
     * @param isSameAppId - Whether the navigation is happening within the same app
     *
     * @returns True if navigation is supported else false
     */
    NavigationOrchestrator.prototype._isNavigationSupportedWithReason = function (preloadedData, pageContext, isSameAppId) {
        var isDifferentLocale = pageContext.isInitialized &&
            pageContext.cultureInfo.currentUICultureName !== preloadedData.spPageContextInfo.currentUICultureName;
        // Navigation is supported if the target locale is the same and the target application id is same as current
        // application Id or the number of in-place navigations are within the threshold.
        if (isDifferentLocale) {
            return 'LocaleChange';
        }
        if (!isSameAppId &&
            this._numAppsInitializedInSession > NavigationOrchestrator.maxSupportedAppsInSession) {
            return 'TransitionsExceeded';
        }
        return undefined;
    };
    NavigationOrchestrator.classicPagesComponentId = 'eb4b666b-5c29-4dad-9a99-23613f21a2b7';
    NavigationOrchestrator.workbenchComponentId = '8be81a5c-af38-4bb2-af97-afa3b64dfbed';
    NavigationOrchestrator.spHomeComponentId = '1f019ae1-2de1-4f44-b723-00a6ec1d7445';
    NavigationOrchestrator.spListHostComponentId = '9f012051-e030-4487-9eb7-3365d03be182';
    NavigationOrchestrator._logSource = _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_LogSource"].create('NavigationOrchestrator');
    NavigationOrchestrator.maxSupportedAppsInSession = 15;
    return NavigationOrchestrator;
}());
/* harmony default export */ __webpack_exports__["default"] = (NavigationOrchestrator);


/***/ }),

/***/ "6iXJ":
/*!***********************************!*\
  !*** external "@ms/sp-suite-nav" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__6iXJ__;

/***/ }),

/***/ "75qc":
/*!**************************************************!*\
  !*** ./lib/extensibility/ApplicationAccessor.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _BaseApplication__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../BaseApplication */ "n9Iz");


/**
 * Provides access to the client-side application that is currently running.
 *
 * @remarks
 * The client-side application determines the user experience for an entire web page.
 * (It is a client-side component with a manifest; however, the SharePoint Framework
 * does not enable third parties to create their own client-side applications at this time.)
 * Within a web page, at most one client-side application will be running at a time.
 * Certain in-place navigation transitions can cause the application to be unloaded
 * and replaced by a different application.
 *
 * The ApplicationAccessor class enables extensibility components such as extensions
 * and web parts to interact with the currently running application.  It acts as
 * a proxy for the real application object (the BaseApplication subclass), to ensure
 * that extensibility components only rely on interactions that would be portable
 * across all applications.
 *
 * @public
 */
var ApplicationAccessor = /** @class */ (function () {
    /**
     * Constructs a new instance of the {@link ApplicationAccessor} class.
     * @remarks
     * Third parties should not call this constructor.  Instead, use the ApplicationAccessor
     * instance from the component context, for example {@link BaseApplicationCustomizer.context}.
     */
    function ApplicationAccessor(serviceScope) {
        this._navigatedEvent = new _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["SPEvent"](_BaseApplication__WEBPACK_IMPORTED_MODULE_1__["default"]._navigatedEventName);
        this._privateLayoutChangedEvent = new _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["SPEvent"](_BaseApplication__WEBPACK_IMPORTED_MODULE_1__["default"]._layoutChangedEventName);
    }
    Object.defineProperty(ApplicationAccessor.prototype, "navigatedEvent", {
        /**
         * An event that is fired when the application's top-level page context navigates
         * to a new page.
         * @remarks
         * This event fires after the top-level {@link @microsoft/sp-page-context#PageContext} has navigated
         * to a new page.
         * @eventproperty
         */
        get: function () {
            return this._navigatedEvent;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApplicationAccessor.prototype, "_layoutChangedEvent", {
        /**
         * Event that gets raised every time the layout changes in a page
         * @eventproperty
         * @internal
         */
        get: function () {
            return this._privateLayoutChangedEvent;
        },
        enumerable: false,
        configurable: true
    });
    return ApplicationAccessor;
}());
/* harmony default export */ __webpack_exports__["default"] = (ApplicationAccessor);


/***/ }),

/***/ "7Awa":
/*!***********************************************!*\
  !*** external "@microsoft/sp-component-base" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__7Awa__;

/***/ }),

/***/ "7Cl3":
/*!*********************************************************!*\
  !*** ./lib/extensibility/DialogManagerConfiguration.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);

/**
 * A singleton class that allows the application to configure the behavior of dialog manager. If `@microsoft/sp-dialog`
 * package is loaded on the page and a dialog manager is instantiated on the page, it will look for this singleton
 * as its configuration.
 *
 * @internal
 */
var DialogManagerConfiguration = /** @class */ (function () {
    function DialogManagerConfiguration() {
    }
    Object.defineProperty(DialogManagerConfiguration, "instance", {
        get: function () {
            if (!this._instance) {
                this._instance = new DialogManagerConfiguration();
            }
            return this._instance;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DialogManagerConfiguration.prototype, "allowDialogs", {
        /**
         * If the application allows showing dialogs. Application can change this configuration in runtime. For example,
         * the application can decide to set this to false to block all dialogs based on its current state. If this property
         * is false, the dialog manager will deny all requests to show dialogs.
         *
         * Throws an error if allowDialogs is undefined.
         */
        get: function () {
            _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNotNullOrUndefined(this._allowDialogs, 'allowDialogs');
            return this._allowDialogs;
        },
        /**
         * Sets the allowDialogs.
         * Throws an error in the parameter value is undefined.
         */
        set: function (value) {
            _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNotNullOrUndefined(value, 'value');
            this._allowDialogs = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DialogManagerConfiguration.prototype, "domElement", {
        /**
         * The container div that the dialog manager will use to render the dialogs in.
         *
         * Throws an error if domElement is undefined.
         */
        get: function () {
            _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNotNullOrUndefined(this._domElement, 'domElement');
            return this._domElement;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * initialize dialog manager configuration.
     *
     * @param domElement - The container element for dialogs
     * @param allowDialogs - Whether the dialogs should be allowed. This defaults to true and can be updated later using
     * allowDialogs property.
     */
    DialogManagerConfiguration.prototype.initialize = function (domElement, allowDialogs) {
        if (allowDialogs === void 0) { allowDialogs = true; }
        this._allowDialogs = allowDialogs;
        this._domElement = domElement;
    };
    /**
     * Disposes the current configuration. Use this when the application is being disposed. This will make sure that
     * this config is not re-used in case another application is loaded on the same page.
     * IMPORTANT NOTE: SPFx assumption is that there is only one active application on the page at a given time.
     */
    DialogManagerConfiguration.prototype.dispose = function () {
        this._allowDialogs = undefined;
        this._domElement = undefined;
    };
    return DialogManagerConfiguration;
}());
/* harmony default export */ __webpack_exports__["default"] = (DialogManagerConfiguration);


/***/ }),

/***/ "7Ihg":
/*!***********************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/async/Promise.js ***!
  \***********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-core-bundle */ "K9kD");
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__["Promise"]; });

// Loading @ms/odsp-utilities/./lib/async/Promise.js



/***/ }),

/***/ "8G1T":
/*!***************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/features/Features.js ***!
  \***************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-core-bundle */ "K9kD");
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__["Features"]; });

// Loading @ms/odsp-utilities/./lib/features/Features.js



/***/ }),

/***/ "8Idf":
/*!************************************************************!*\
  !*** ./lib/frameworkPlaceholders/AadPlaceholderManager.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-http */ "vlQI");
/* harmony import */ var _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_http__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_Killswitches__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/Killswitches */ "dQCu");
/* harmony import */ var _SPApplicationBase_resx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../SPApplicationBase.resx */ "GuP6");
var _SPApplicationBase_resx__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../SPApplicationBase.resx */ "GuP6", 1);
/* harmony import */ var _extensibility_placeholder_PlaceholderProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../extensibility/placeholder/PlaceholderProvider */ "/Kpt");
/* harmony import */ var _extensibility_placeholder_PlaceholderName__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../extensibility/placeholder/PlaceholderName */ "Cs6k");
/* harmony import */ var _extensibility_placeholder_PlaceholderManager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../extensibility/placeholder/PlaceholderManager */ "/HB6");






/**
 * This class sets up an a placeholder for scenarios that token acquisition fails and will require
 * end user interaction.
 * @internal
 */
var AadPlaceholderManager = /** @class */ (function () {
    function AadPlaceholderManager() {
        this._didRenderError = false;
    }
    /**
     * Sets up a placeholder (or alert if unavailable) for the token acquisition failure event.
     */
    AadPlaceholderManager.prototype.setUpTokenAcquistionFailurePlaceholder = function (application, serviceScope) {
        var _this = this;
        var tokenProvider = _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_0__["_AadTokenProviders"].configurable;
        var placeHolderProvider = new _extensibility_placeholder_PlaceholderProvider__WEBPACK_IMPORTED_MODULE_3__["default"](serviceScope, {
            sequence: 0,
            preAllocatedApplicationCustomizerBottomHeight: 0,
            preAllocatedApplicationCustomizerTopHeight: 0
        }, 'AAD Failure Placeholder'
        /* This placeholder should render over any other placeholder */
        );
        var placeholderManager = serviceScope.consume(_extensibility_placeholder_PlaceholderManager__WEBPACK_IMPORTED_MODULE_5__["default"].serviceKey);
        placeHolderProvider.changedEvent.add(application, function () {
            if (!_this._aadPlaceHolderContent) {
                _this._aadPlaceHolderContent = placeHolderProvider.tryCreateContent(_extensibility_placeholder_PlaceholderName__WEBPACK_IMPORTED_MODULE_4__["default"].Top);
            }
        });
        tokenProvider.tokenAcquisitionEvent.add(application, function (eventArgs) {
            if (!_this._didRenderError) {
                _this.renderTokenAcquistionEvent(placeholderManager.isEnabled, eventArgs);
            }
        });
    };
    AadPlaceholderManager.prototype.renderTokenAcquistionEvent = function (isPlaceholderManagerEnabled, eventArgs) {
        if (_common_Killswitches__WEBPACK_IMPORTED_MODULE_1__["Killswitches"].isDuplicateErrorMessageV2KillSwitchActivated() || !this._didRenderError) {
            if (!isPlaceholderManagerEnabled) {
                this._renderTokenAcquistionAlert(eventArgs);
            }
            else {
                if (this._aadPlaceHolderContent) {
                    this._renderTokenAcquistionPlaceholder(this._aadPlaceHolderContent, eventArgs);
                }
                else {
                    this._renderTokenAcquistionAlert(eventArgs);
                }
            }
        }
        this._didRenderError = true;
    };
    AadPlaceholderManager.prototype._renderTokenAcquistionPlaceholder = function (placeholderContent, eventArgs) {
        placeholderContent.domElement.setAttribute('style', 'text-align: center; padding: 10px; background-color:#fff4ce;');
        var errorMessageElement = document.createElement('span');
        errorMessageElement.innerText = eventArgs.message;
        placeholderContent.domElement.appendChild(errorMessageElement);
        if (eventArgs.redirectUrl) {
            var resolveLinkElement = document.createElement('a');
            resolveLinkElement.href = eventArgs.redirectUrl;
            resolveLinkElement.innerText = _SPApplicationBase_resx__WEBPACK_IMPORTED_MODULE_2__["clickToResolveIssueLinkText"];
            placeholderContent.domElement.appendChild(resolveLinkElement);
        }
    };
    AadPlaceholderManager.prototype._renderTokenAcquistionAlert = function (eventArgs) {
        if (confirm(eventArgs.message) && eventArgs.redirectUrl) {
            window.location.href = eventArgs.redirectUrl;
        }
    };
    return AadPlaceholderManager;
}());
/* harmony default export */ __webpack_exports__["default"] = (AadPlaceholderManager);


/***/ }),

/***/ "93Rs":
/*!***************************************!*\
  !*** ./lib/BaseApplicationContext.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_component_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-component-base */ "7Awa");
/* harmony import */ var _microsoft_sp_component_base__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_component_base__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _BaseApplication__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BaseApplication */ "n9Iz");




/**
 * Context object for a client-side applications.
 *
 * @alpha
 */
var BaseApplicationContext = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(BaseApplicationContext, _super);
    /** @internal */
    function BaseApplicationContext(parameters) {
        var _this = _super.call(this, parameters) || this;
        _this._disposed = false;
        _this._preloadedData = parameters.navigator.preloadedData;
        _this._navigator = parameters.navigator;
        _this._chrome = parameters.chrome;
        _this._loadType = parameters.loadType;
        _this._prefetchedDataEvent = new _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["SPEvent"](_BaseApplication__WEBPACK_IMPORTED_MODULE_3__["default"]._prefetchedDataEventName);
        return _this;
    }
    /**
     * Diposes the application context
     */
    BaseApplicationContext.prototype.dispose = function () {
        if (this._disposed) {
            return;
        }
        if (this._navigator) {
            this._navigator = undefined;
        }
        _super.prototype.dispose.call(this);
        this._disposed = true;
    };
    /**
     * Sets the SuiteNav manager in the application context.
     */
    BaseApplicationContext.prototype.initializeSuiteNavManager = function (suiteNavManager) {
        this._suiteNavManager = suiteNavManager;
    };
    Object.defineProperty(BaseApplicationContext.prototype, "preloadedData", {
        /**
         * The preloaded data used by SPFx
         */
        get: function () {
            return this._preloadedData;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BaseApplicationContext.prototype, "navigator", {
        /**
         * The application navigator
         */
        get: function () {
            return this._navigator;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BaseApplicationContext.prototype, "chrome", {
        /**
         * The application page chrome
         */
        get: function () {
            return this._chrome;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BaseApplicationContext.prototype, "loadType", {
        /**
         * The application load type
         */
        get: function () {
            return this._loadType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BaseApplicationContext.prototype, "prefetchedDataEvent", {
        /**
         * An event that gets fired when the application prefetched data is available.
         */
        get: function () {
            return this._prefetchedDataEvent;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BaseApplicationContext.prototype, "suiteNavManager", {
        /**
         * The SuiteNav manager
         *
         * @remarks
         * The SuiteNav manager is defined only after the application starts rendering.
         * Chromeless application do not have a SuiteNav manager.
         * Applications that disable the suiteNav do not have a SuiteNav manager.
         */
        get: function () {
            return this._suiteNavManager;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * DO NOT call this from outside the framework. SPFx calls this during second flush
     * to update contextual state.
     *
     * @internal
     */
    // @ts-ignore This gets called by the framework, hiding from the public interface see IPrivateBaseApplicationContext
    BaseApplicationContext.prototype._updateSecondFlushData = function (data) {
        var _a;
        this._preloadedData = data;
        (_a = this._navigator) === null || _a === void 0 ? void 0 : _a._setPreloadedData(data);
    };
    return BaseApplicationContext;
}(_microsoft_sp_component_base__WEBPACK_IMPORTED_MODULE_1__["BaseComponentContext"]));
/* harmony default export */ __webpack_exports__["default"] = (BaseApplicationContext);


/***/ }),

/***/ "Be1r":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/dataSources/theming/spList/WebThemeDataSource.js ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _interfaces_ISpPageContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../interfaces/ISpPageContext */ "GlwB");
/* harmony import */ var _web_WebTemplateType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../web/WebTemplateType */ "xYco");
/* harmony import */ var _base_DataRequestor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../base/DataRequestor */ "PayJ");
/* harmony import */ var _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ms/odsp-utilities/lib/async/Promise */ "7Ihg");
/* harmony import */ var _ms_odsp_utilities_lib_theming_FabricTheming__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ms/odsp-utilities/lib/theming/FabricTheming */ "0XrT");
/* harmony import */ var _ms_odsp_utilities_lib_theming_RgbaColor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ms/odsp-utilities/lib/theming/RgbaColor */ "M2il");
/* harmony import */ var _ms_odsp_utilities_lib_theming_WebTheme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ms/odsp-utilities/lib/theming/WebTheme */ "W+j4");
/* harmony import */ var _ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ms/odsp-utilities/lib/killswitch/Killswitch */ "QUgr");
/* harmony import */ var _providers_theming_FluentFeatures__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../providers/theming/FluentFeatures */ "KosM");
// OneDrive:IgnoreCodeCoverage









var DEFAULT_THEME_COLOR = !_providers_theming_FluentFeatures__WEBPACK_IMPORTED_MODULE_8__["isOneDrive"] ? '#03787c' : '#0078d4';
/**
 * Data source to load the theme data of the context web.
 */
var WebThemeDataSource = /** @class */ (function () {
    function WebThemeDataSource(pageContext) {
        this._pageContext = pageContext;
        this._dataRequestor = new _base_DataRequestor__WEBPACK_IMPORTED_MODULE_2__["DataRequestor"]({ qosName: 'WebThemeDataSource' }, { pageContext: pageContext });
    }
    /**
     * Gets a token which can be used to determine whether cached theme data is still valid.
     */
    WebThemeDataSource.prototype.getCacheToken = function () {
        // Token to let us know whether the cached theme data is relevant to the site.
        // If there is no explicit theme set, we will use the default themeColor of the site.
        var cacheToken = '';
        var pageContext = this._pageContext;
        // Return the themedCssFolderUrl instead of the themeCacheToken, since
        // we do not depend on the web or its version. Those would be needed if
        // we required foreground-image theming rules, as in classic theming.
        if (pageContext) {
            // If themedCssFolderUrl is null or empty, there is no web theme.
            // But if groupColor is set, we can extend that to a theme for the page.
            var webTemplate = Number(pageContext.webTemplate);
            var webColor = webTemplate !== _web_WebTemplateType__WEBPACK_IMPORTED_MODULE_1__["default"].mySite && webTemplate !== _web_WebTemplateType__WEBPACK_IMPORTED_MODULE_1__["default"].mySiteHost
                ? pageContext.groupColor
                : DEFAULT_THEME_COLOR;
            cacheToken = pageContext.themedCssFolderUrl || webColor;
        }
        return cacheToken;
    };
    /**
     * Returns a promise which provides the theme data for the web.
     * @param {boolean} forceUpdate If true, will return a new Promise with fresh data.
     */
    WebThemeDataSource.prototype.loadTheme = function (forceUpdate) {
        if (!forceUpdate && this._dataPromise) {
            return this._dataPromise;
        }
        if (!this.getCacheToken()) {
            // Return an undefined IThemeData to indicate no theme.
            return (this._dataPromise = _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_3__["default"].resolve());
        }
        // If a theme was set on the web, load the theme from the server.
        // Otherwise, generate a Fabric theme from the default color of the web.
        this._dataPromise = this._pageContext.themedCssFolderUrl
            ? this.loadServerTheme()
            : this.loadGeneratedTheme();
        return this._dataPromise;
    };
    WebThemeDataSource.prototype.needsRequestDigest = function (url) {
        return false;
    };
    WebThemeDataSource.prototype.loadGeneratedTheme = function () {
        var htmlThemeColor = this._pageContext.groupColor || DEFAULT_THEME_COLOR;
        var rgbaThemeColor = _ms_odsp_utilities_lib_theming_RgbaColor__WEBPACK_IMPORTED_MODULE_5__["default"].fromHtmlColor(htmlThemeColor);
        if (rgbaThemeColor) {
            var fabTheme = {
                backgroundImageUri: null,
                cacheToken: htmlThemeColor,
                isDefault: false,
                isInverted: false,
                palette: _ms_odsp_utilities_lib_theming_FabricTheming__WEBPACK_IMPORTED_MODULE_4__["default"].generateFabricColors(rgbaThemeColor),
                version: '1'
            };
            return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_3__["default"].resolve(fabTheme);
        }
        else {
            // Return no theme to indicate default theme values should be used.
            return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_3__["default"].resolve();
        }
    };
    WebThemeDataSource.prototype.loadServerTheme = function () {
        var _this = this;
        var webUrl = Object(_interfaces_ISpPageContext__WEBPACK_IMPORTED_MODULE_0__["getSafeWebServerRelativeUrl"])(this._pageContext);
        var cultureName = this._pageContext.currentUICultureName;
        var themedCssFolderUrl = this._pageContext.themedCssFolderUrl;
        // The themed CSS folder URL might be a preview theme, not the current theme, so we will specify it here.
        var useThemeOverride = !_ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_7__["Killswitch"].isActivated('D18277F9-2D5C-488B-98F2-90403DE467E7', '02/26/2020', 'Specify theme folder override') && this.getCacheToken() === themedCssFolderUrl;
        var themeOverride = (useThemeOverride && themedCssFolderUrl) || undefined;
        var endpointUrl = _ms_odsp_utilities_lib_theming_WebTheme__WEBPACK_IMPORTED_MODULE_6__["default"].makeWebThemeRestUrl(webUrl, cultureName, themeOverride);
        var parseResponse = function (responseText) {
            // This could throw if the handler returns an HTML error page or invalid JSON.
            // DataRequestor will count that as an error and call the error callback.
            _this._data = _ms_odsp_utilities_lib_theming_WebTheme__WEBPACK_IMPORTED_MODULE_6__["default"].processWebThemeRestResponse(responseText);
            return _this._data;
        };
        var dataPromise = this._dataRequestor.getData({
            url: endpointUrl,
            parseResponse: parseResponse,
            qosName: 'WebThemeDataSource.LoadData',
            method: 'GET'
        });
        dataPromise.done(null, function () {
            // Remove reference to promise on error.
            _this._dataPromise = null;
        });
        return dataPromise;
    };
    return WebThemeDataSource;
}());
/* harmony default export */ __webpack_exports__["default"] = (WebThemeDataSource);
//# sourceMappingURL=WebThemeDataSource.js.map

/***/ }),

/***/ "Cs6k":
/*!**********************************************************!*\
  !*** ./lib/extensibility/placeholder/PlaceholderName.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * The identifier for a content placeholder, which is a region on the
 * page where third-party extensibility components can render custom content.
 *
 * @remarks
 * For more information about placeholders, see {@link PlaceholderProvider}.
 *
 * @public
 */
var PlaceholderName;
(function (PlaceholderName) {
    /**
     * A region at the top of the page.
     * @privateRemarks
     * Used by Modern pages and Lists and libraries
     */
    PlaceholderName[PlaceholderName["Top"] = 1] = "Top";
    /**
     * A region at the bottom of the page.
     * @privateRemarks
     * Used by Modern pages and Lists and libraries
     */
    PlaceholderName[PlaceholderName["Bottom"] = 2] = "Bottom";
})(PlaceholderName || (PlaceholderName = {}));
/* harmony default export */ __webpack_exports__["default"] = (PlaceholderName);


/***/ }),

/***/ "DRdk":
/*!******************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/interfaces/WebTemplateType.js ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: WebTemplateType, isTeamSiteLike, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebTemplateType", function() { return WebTemplateType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTeamSiteLike", function() { return isTeamSiteLike; });
// OneDrive:IgnoreCodeCoverage
/**
 * SharePoint SPWeb (subsite) template values, from WebTemplate in sts\stsom\Core\spwebtemplate.cs
 */
var WebTemplateType;
(function (WebTemplateType) {
    WebTemplateType[WebTemplateType["invalid"] = -1] = "invalid";
    /** Team collaboration site */
    WebTemplateType[WebTemplateType["teamSite"] = 1] = "teamSite";
    /** Meeting workspace site */
    WebTemplateType[WebTemplateType["meetings"] = 2] = "meetings";
    WebTemplateType[WebTemplateType["centralAdmin"] = 3] = "centralAdmin";
    WebTemplateType[WebTemplateType["wiki"] = 4] = "wiki";
    WebTemplateType[WebTemplateType["documentCenter"] = 7] = "documentCenter";
    WebTemplateType[WebTemplateType["blog"] = 9] = "blog";
    WebTemplateType[WebTemplateType["tenantAdmin"] = 16] = "tenantAdmin";
    WebTemplateType[WebTemplateType["app"] = 17] = "app";
    WebTemplateType[WebTemplateType["appCatalog"] = 18] = "appCatalog";
    /** Mysite personal web */
    WebTemplateType[WebTemplateType["mySite"] = 21] = "mySite";
    WebTemplateType[WebTemplateType["subgroup"] = 39] = "subgroup";
    WebTemplateType[WebTemplateType["publishingPortal"] = 52] = "publishingPortal";
    WebTemplateType[WebTemplateType["mySiteHost"] = 54] = "mySiteHost";
    WebTemplateType[WebTemplateType["enterpriseWiki"] = 56] = "enterpriseWiki";
    WebTemplateType[WebTemplateType["group"] = 64] = "group";
    /** POINTPUBLISHINGPERSONAL#1 aka Blog site */
    WebTemplateType[WebTemplateType["pointPublishingPersonal"] = 66] = "pointPublishingPersonal";
    /** SITEPAGEPUBLISHING#0 aka Communications site */
    WebTemplateType[WebTemplateType["sitePagePublishing"] = 68] = "sitePagePublishing";
    WebTemplateType[WebTemplateType["teamChannel"] = 69] = "teamChannel";
    WebTemplateType[WebTemplateType["projectWebAppSite"] = 6221] = "projectWebAppSite";
    WebTemplateType[WebTemplateType["contentCenter"] = 6001] = "contentCenter";
})(WebTemplateType || (WebTemplateType = {}));
/**
 * Returns true if the SPWeb Site is not ODB or Group site.
 */
function isTeamSiteLike(template) {
    'use strict';
    var templateEnum = Number(template);
    return templateEnum !== WebTemplateType.mySite && templateEnum !== WebTemplateType.group;
}
/* harmony default export */ __webpack_exports__["default"] = (WebTemplateType);
//# sourceMappingURL=WebTemplateType.js.map

/***/ }),

/***/ "DXcd":
/*!*************************************************************!*\
  !*** ./lib/extensibility/placeholder/PlaceholderContent.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Represents custom content that is rendered inside a placeholder on a SharePoint page.
 *
 * @remarks
 * This object is returned by {@link PlaceholderProvider.tryCreateContent}.
 * It provides access to a Document Object Model (DOM) element where the owner can render
 * its custom content.
 *
 * @public
 */
var PlaceholderContent = /** @class */ (function () {
    /**
     * @internal
     */
    function PlaceholderContent(parameters) {
        this._disposeHandler = undefined;
        this._isDisposed = false;
        this._placeholder = parameters.placeholder;
        this._disposeHandler = parameters.options ? parameters.options.onDispose : undefined;
        this._domElement = parameters.domElement;
    }
    Object.defineProperty(PlaceholderContent.prototype, "name", {
        /**
         * Identifies the placeholder that this content was added to.
         *
         * @remarks
         * Example: PlaceholderName.Top
         */
        get: function () {
            return this._placeholder.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PlaceholderContent.prototype, "domElement", {
        /**
         * The Document Object Model (DOM) element where the owner should render its custom content.
         *
         * @remarks
         * If the caller needs to be notified when the DOM element is disposed, use
         * the {@link IPlaceholderCreateContentOptions.onDispose} callback.
         */
        get: function () {
            return this._domElement;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Sets the placeholder of the content. This is used when the placeholders are modifying and the content may
     * hang from a new placeholder object.
     * @param placeholder - Placeholder that own this placeholder content.
     *
     * @internal
     */
    PlaceholderContent.prototype._setPlaceholder = function (placeholder) {
        this._placeholder = placeholder;
    };
    /**
     * Sets the options of the content. This is used when a bottom or top preAllocatedContent is created.
     * @param options - Options that own this placeholder content.
     *
     * @internal
     */
    PlaceholderContent.prototype._setOptions = function (options) {
        this._disposeHandler = options && options.onDispose;
    };
    /**
     * Disposes the PlaceholderContent object and removes its attached DOM element from the page.
     *
     * @remarks
     * This method can be called to immediately dispose the attached DOM element. Otherwise, it
     * will be disposed by the application when the containing placeholder is disposed. Calling dispose()
     * invokes the {@link IPlaceholderCreateContentOptions.onDispose} callback, removes the associated
     * DOM element from the page, and disposes the PlaceholderContent object.
     */
    PlaceholderContent.prototype.dispose = function () {
        if (!this._isDisposed) {
            if (this._disposeHandler) {
                try {
                    this._disposeHandler(this);
                }
                catch (error) {
                    _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__["_TraceLogger"].logError(PlaceholderContent._logSource, new Error("The onDispose API threw an exception for placeholder '" + this._placeholder.name + "'. Error information is '" + error.message + "'")); // tslint:disable-line:max-line-length
                }
            }
            this._placeholder.removePlaceholderContent(this);
            delete this._domElement;
            delete this._placeholder;
            delete this._disposeHandler;
        }
        this._isDisposed = true;
    };
    Object.defineProperty(PlaceholderContent.prototype, "isDisposed", {
        get: function () {
            return this._isDisposed;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PlaceholderContent.prototype, "isVisible", {
        /**
         * Return true if this PlacholderContent object is visible.  If you create a placeholder
         * and the host page isn't displaying it, this will return false.
         */
        get: function () {
            return document.body.contains(this._domElement);
        },
        enumerable: false,
        configurable: true
    });
    PlaceholderContent._logSource = _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_0__["_LogSource"].create('Placeholder');
    return PlaceholderContent;
}());
/* harmony default export */ __webpack_exports__["default"] = (PlaceholderContent);


/***/ }),

/***/ "E53Z":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_d89e40c38ccaa8bd6af6488f37cb196d/node_modules/@ms/odsp-shared-react/lib/components/SkipToContentButton/SkipToContentButton.resx.js ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var strings = {"label":"Skip to main content"};
strings.default = strings;
module.exports = strings;

/***/ }),

/***/ "EjJ3":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/models/store/DataStoreCachingType.js ***!
  \*******************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-core-bundle */ "K9kD");
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__["DataStoreCachingType"]; });

// Loading @ms/odsp-utilities/./lib/models/store/DataStoreCachingType.js



/***/ }),

/***/ "GlwB":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/interfaces/ISpPageContext.js ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: SiteResourceQuotaState, SearchBoxInNavBarType, TeamsChannelType, SearchScopeType, SPWebPropertyFlags2, DEFAULT_LOGO_URL, getServerUrl, getSafeWebServerRelativeUrl, isGroupWebContext, isRootWebContext, isTeamsRootWebContext, isModernTemplate, isHomePlusHubWithExtendedHeader, isHomePlusHub, isHomeSite, isAnonymousOrGuest, shouldLoadAppBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteResourceQuotaState", function() { return SiteResourceQuotaState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBoxInNavBarType", function() { return SearchBoxInNavBarType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamsChannelType", function() { return TeamsChannelType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchScopeType", function() { return SearchScopeType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPWebPropertyFlags2", function() { return SPWebPropertyFlags2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_LOGO_URL", function() { return DEFAULT_LOGO_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerUrl", function() { return getServerUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSafeWebServerRelativeUrl", function() { return getSafeWebServerRelativeUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isGroupWebContext", function() { return isGroupWebContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRootWebContext", function() { return isRootWebContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTeamsRootWebContext", function() { return isTeamsRootWebContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isModernTemplate", function() { return isModernTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isHomePlusHubWithExtendedHeader", function() { return isHomePlusHubWithExtendedHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isHomePlusHub", function() { return isHomePlusHub; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isHomeSite", function() { return isHomeSite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAnonymousOrGuest", function() { return isAnonymousOrGuest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shouldLoadAppBar", function() { return shouldLoadAppBar; });
/* harmony import */ var _models_chrome_ChromeOptions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/chrome/ChromeOptions */ "Vb17");

/**
 *   A value indicating the state of the reqource quota for a site.
 */
var SiteResourceQuotaState;
(function (SiteResourceQuotaState) {
    /** No quota issues */
    SiteResourceQuotaState[SiteResourceQuotaState["NoWarning"] = 0] = "NoWarning";
    /** Close to reaching disk quota warning */
    SiteResourceQuotaState[SiteResourceQuotaState["Warning"] = 1] = "Warning";
    /** Over quota */
    SiteResourceQuotaState[SiteResourceQuotaState["OverQuota"] = 2] = "OverQuota";
})(SiteResourceQuotaState || (SiteResourceQuotaState = {}));
/**
 * Search box in nav bar
 */
var SearchBoxInNavBarType;
(function (SearchBoxInNavBarType) {
    /** Default behavior will be AllPages */
    SearchBoxInNavBarType[SearchBoxInNavBarType["Default"] = 0] = "Default";
    /** Display search box in nav bar for all pages */
    SearchBoxInNavBarType[SearchBoxInNavBarType["AllPages"] = 1] = "AllPages";
    /** Display search box in nav bar for modern pages only */
    SearchBoxInNavBarType[SearchBoxInNavBarType["ModernOnly"] = 2] = "ModernOnly";
    /** Do not display search box in nav bar */
    SearchBoxInNavBarType[SearchBoxInNavBarType["Hidden"] = 3] = "Hidden";
})(SearchBoxInNavBarType || (SearchBoxInNavBarType = {}));
/** The possible types of a Teams Channel. */
var TeamsChannelType;
(function (TeamsChannelType) {
    /** This is not a site backing a teams channel */
    TeamsChannelType[TeamsChannelType["None"] = 0] = "None";
    /** Site is backing a Private Channel */
    TeamsChannelType[TeamsChannelType["PrivateChannel"] = 1] = "PrivateChannel";
    /** Site is backing a Shared Channel */
    TeamsChannelType[TeamsChannelType["SharedChannel"] = 2] = "SharedChannel";
    /** Site is backing a Standard Channel */
    TeamsChannelType[TeamsChannelType["StandardChannel"] = 3] = "StandardChannel";
})(TeamsChannelType || (TeamsChannelType = {}));
/**
 * Search box search scope
 * When the value is Default, it follows the existing search scope rule.
 * For example, hub site has hub scope, non-hub site has site scope.
 */
var SearchScopeType;
(function (SearchScopeType) {
    SearchScopeType[SearchScopeType["Default"] = 0] = "Default";
    SearchScopeType[SearchScopeType["Tenant"] = 1] = "Tenant";
    SearchScopeType[SearchScopeType["Hub"] = 2] = "Hub";
    SearchScopeType[SearchScopeType["Site"] = 3] = "Site";
})(SearchScopeType || (SearchScopeType = {}));
/**
 * Web property flags enum
 * property name matchs SPWebPropertyFlags2 definition in sts/stsom/SPWeb.cs
 */
var SPWebPropertyFlags2;
(function (SPWebPropertyFlags2) {
    /** Indicates whether site footer is enabled in this web */
    SPWebPropertyFlags2[SPWebPropertyFlags2["FooterEnabled"] = 2] = "FooterEnabled";
    /** Indicates whether mega menu is enabled on this web */
    SPWebPropertyFlags2[SPWebPropertyFlags2["MegaMenuEnabled"] = 128] = "MegaMenuEnabled";
    /** Indicates which emphasis is assigned to the footer when combined */
    SPWebPropertyFlags2[SPWebPropertyFlags2["FooterEmphasis0"] = 256] = "FooterEmphasis0";
    SPWebPropertyFlags2[SPWebPropertyFlags2["FooterEmphasis1"] = 512] = "FooterEmphasis1";
    /** Indicates which footer layout type is selected when combined */
    SPWebPropertyFlags2[SPWebPropertyFlags2["FooterLayout0"] = 1024] = "FooterLayout0";
    SPWebPropertyFlags2[SPWebPropertyFlags2["FooterLayout1"] = 2048] = "FooterLayout1";
    SPWebPropertyFlags2[SPWebPropertyFlags2["HideTitleInHeader"] = 33554432] = "HideTitleInHeader";
})(SPWebPropertyFlags2 || (SPWebPropertyFlags2 = {}));
/** Default site logo URL */
var DEFAULT_LOGO_URL = '_layouts/15/images/siteicon.png';
/**
 * Gets the absolute URL of the server (like https://microsoft.sharepoint.com).
 * Input can be an ISpPageContext or other object containing absolute and server-relative web URLs.
 *
 * @example
 *  Returns "https://microsoft.sharepoint.com"
 *      getServerUrl({
 *          webAbsoluteUrl: "https://microsoft.sharepoint.com/sites/odsp",
 *          webServerRelativeUrl: "/sites/odsp"
 *      })
 *
 * Returns "http://server"
 *     getServerUrl({
 *          webAbsoluteUrl: "http://server",
 *          webServerRelativeUrl: "/"
 *     })
 */
function getServerUrl(pageContext) {
    'use strict';
    var webAbsoluteUrl = pageContext.webAbsoluteUrl, webServerRelativeUrl = pageContext.webServerRelativeUrl;
    // Handle cases like http://server site collection, where webServerRelativeUrl will be '/'
    return webServerRelativeUrl === '/' || webServerRelativeUrl === ''
        ? webAbsoluteUrl
        : webAbsoluteUrl.substring(0, webAbsoluteUrl.lastIndexOf(webServerRelativeUrl));
}
/**
 * In most cases, returns the webServerRelativeUrl as-is.
 * For the root web (http://server), returns ''.
 *
 * This function is needed because the root web's webServerRelativeUrl will be '/',
 * which is usually not desirable when combining with other paths. For example:
 *    Good:  '/myweb' + '/_api/contextinfo' => '/myweb/_api/contextinfo'
 *    Bad:   '/'      + '/_api/contextinfo' => '//_api/contextinfo'
 *    Fixed: ''       + '/_api/contextinfo' => '/_api/contextinfo'
 *
 * @param pageContext - An ISpPageContext or other object containing the server-relative URL of a web
 */
function getSafeWebServerRelativeUrl(pageContext) {
    'use strict';
    return pageContext.webServerRelativeUrl === '/' ? '' : pageContext.webServerRelativeUrl;
}
/**
 * Returns true if the current web is the root of a site collection associated with a group.
 * Otherwise it returns false.
 */
function isGroupWebContext(pageContext) {
    'use strict';
    return pageContext && !!pageContext.groupId && pageContext.webAbsoluteUrl === pageContext.siteAbsoluteUrl;
}
/**
 * Returns true if the current web is the root web.
 * Otherwise it returns false.
 */
function isRootWebContext(pageContext) {
    'use strict';
    return pageContext && pageContext.webAbsoluteUrl === pageContext.siteAbsoluteUrl;
}
/**
 * Returns true if the current Web is the Root Web of a Teams-connected SPSite.
 * Otherwise it returns false.
 */
function isTeamsRootWebContext(pageContext) {
    'use strict';
    return (pageContext &&
        isRootWebContext(pageContext) &&
        pageContext.groupId &&
        pageContext.isTeamsConnectedSite &&
        !pageContext.isTeamsChannelSite);
}
/**
 * Returns true if the current web templates is one of the modern templates:
 * STS#3, GROUP#0, SITEPAGEPUBLISHING#0, TEAMSCHANNEL#0/1.
 */
function isModernTemplate(pageContext) {
    var modernTemplates = [
        'STS#3',
        'GROUP#0',
        'SITEPAGEPUBLISHING#0',
        'TEAMSCHANNEL#0',
        'TEAMSCHANNEL#1'
    ];
    return modernTemplates.indexOf(pageContext.webTemplateConfiguration) !== -1;
}
/**
 * Helper function to check if current site meet these conditions:
 *     1. home site
 *     2. hub site
 *     3. with extended header layout
 * @param spPageContext page context instance
 */
function isHomePlusHubWithExtendedHeader(spPageContext) {
    return !!(spPageContext.headerLayout === _models_chrome_ChromeOptions__WEBPACK_IMPORTED_MODULE_0__["UnifiedHeaderLayout"].extended && isHomePlusHub(spPageContext));
}
/**
 * Helper function to check if current site meet these conditions:
 *     1. home site
 *     2. hub site
 */
function isHomePlusHub(spPageContext) {
    return !!(isHomeSite(spPageContext) && spPageContext.isHubSite);
}
/**
 * Helper function to check if current site is configured as a home site
 * @param spPageContext page context instance
 */
function isHomeSite(spPageContext) {
    return !!(spPageContext.companyPortalReference &&
        spPageContext.companyPortalReference.SiteId &&
        spPageContext.siteId &&
        spPageContext.siteId.indexOf(spPageContext.companyPortalReference.SiteId) >= 0);
}
/**
 * Helper function to check if the current user is anonymous or a guest of any kind.
 */
function isAnonymousOrGuest(spPageContext) {
    return !!(spPageContext.isAnonymousGuestUser ||
        spPageContext.isExternalGuestUser ||
        spPageContext.isEmailAuthenticationGuestUser ||
        spPageContext.isNativeFederatedUser);
}
/**
 * Helper function to check if the app bar should load or not in the current context.
 */
function shouldLoadAppBar(spPageContext) {
    return (!isAnonymousOrGuest(spPageContext) && spPageContext.appBarParams && !spPageContext.appBarParams.isDisabled);
}
//# sourceMappingURL=ISpPageContext.js.map

/***/ }),

/***/ "GuP6":
/*!************************************!*\
  !*** ./lib/SPApplicationBase.resx ***!
  \************************************/
/*! exports provided: applicationFailedToLoadWithMessageError, applicationFailedToInitializeError, clickToResolveIssueLinkText, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"applicationFailedToLoadWithMessageError\":\"Application failed to load. Id: \\u0022{0}\\u0022.\\nError: {1}\",\"applicationFailedToInitializeError\":\"Error initializing application. Error: {0}\",\"clickToResolveIssueLinkText\":\"Click to provide additional credentials.\"}");

/***/ }),

/***/ "HZ0z":
/*!****************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/theming/ThemeCache.js ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models_store_BaseDataStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/store/BaseDataStore */ "18dJ");
/* harmony import */ var _models_store_DataStoreCachingType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/store/DataStoreCachingType */ "EjJ3");
// OneDrive:IgnoreCodeCoverage


var THEME_CACHE_VERSION = '1.7';
var THEME_CACHE_PREFIX = 'odTheme';
var DATA_KEY = 'Data';
var TOKEN_KEY = 'CacheToken';
var VERSION_KEY = 'CacheVersion';
/**
 * Utility methods for caching theme data.
 */
var ThemeCache = /** @class */ (function () {
    function ThemeCache() {
    }
    /**
     * Clears the theme cache.
     */
    ThemeCache.clearThemeCache = function () {
        'use strict';
        var ds = ThemeCache.getThemeDataStore();
        ds.remove(DATA_KEY);
        ds.remove(TOKEN_KEY);
        ds.remove(VERSION_KEY);
    };
    /**
     * Reads the cached theme, if the cacheToken is compatible.
     * @param {string} cacheToken The cached value will only be returned if it has the same cache token.
     */
    ThemeCache.getCachedTheme = function (cacheToken) {
        'use strict';
        var cachedTheme;
        var ds = ThemeCache.getThemeDataStore();
        try {
            // Make sure the data was cached with the expected version and
            // the current theme cache token. Otherwise, return undefined.
            if (cacheToken === ds.getValue(TOKEN_KEY) &&
                THEME_CACHE_VERSION === ds.getValue(VERSION_KEY)) {
                cachedTheme = ds.getValue(DATA_KEY);
            }
        }
        catch (exReadCache) {
            // Ignore.
        }
        return cachedTheme;
    };
    /**
     * Updates the theme data in the cache.
     * @param {IThemeData} themeData The new theme data to cache.
     */
    ThemeCache.updateThemeCache = function (themeData, cacheToken) {
        'use strict';
        var ds = ThemeCache.getThemeDataStore();
        ds.setValue(DATA_KEY, themeData);
        ds.setValue(TOKEN_KEY, cacheToken || themeData.cacheToken);
        ds.setValue(VERSION_KEY, THEME_CACHE_VERSION);
    };
    /**
     * Returns an instance of the supporting data store for this cache.
     */
    ThemeCache.getThemeDataStore = function () {
        'use strict';
        return new _models_store_BaseDataStore__WEBPACK_IMPORTED_MODULE_0__["default"](THEME_CACHE_PREFIX, _models_store_DataStoreCachingType__WEBPACK_IMPORTED_MODULE_1__["default"].local);
    };
    return ThemeCache;
}());
/* harmony default export */ __webpack_exports__["default"] = (ThemeCache);
//# sourceMappingURL=ThemeCache.js.map

/***/ }),

/***/ "HyBu":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/dataSources/listCollection/ListTemplateType.js ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: ListTemplateType, ListBaseType, isDocumentLibrary, isDocLib, isGenericList, isPromotedLinksList, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListTemplateType", function() { return ListTemplateType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListBaseType", function() { return ListBaseType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDocumentLibrary", function() { return isDocumentLibrary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDocLib", function() { return isDocLib; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isGenericList", function() { return isGenericList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPromotedLinksList", function() { return isPromotedLinksList; });
/**
 * List template types, from SPListTemplateType in sts\Core\splist.cs.
 */
var ListTemplateType;
(function (ListTemplateType) {
    // Note: some of these are commented because they're unused, and commenting them out
    // decreases the output file size.
    ListTemplateType[ListTemplateType["invalidType"] = -1] = "invalidType";
    ListTemplateType[ListTemplateType["noListTemplate"] = 0] = "noListTemplate";
    // begin usable types
    /** Custom list */
    ListTemplateType[ListTemplateType["genericList"] = 100] = "genericList";
    ListTemplateType[ListTemplateType["documentLibrary"] = 101] = "documentLibrary";
    ListTemplateType[ListTemplateType["survey"] = 102] = "survey";
    ListTemplateType[ListTemplateType["links"] = 103] = "links";
    ListTemplateType[ListTemplateType["announcements"] = 104] = "announcements";
    ListTemplateType[ListTemplateType["contacts"] = 105] = "contacts";
    /** Calendar */
    ListTemplateType[ListTemplateType["events"] = 106] = "events";
    ListTemplateType[ListTemplateType["tasks"] = 107] = "tasks";
    // discussionBoard = 108,
    ListTemplateType[ListTemplateType["pictureLibrary"] = 109] = "pictureLibrary";
    // /** Data sources for a site */
    // dataSources = 110,
    /** Site template gallery */
    ListTemplateType[ListTemplateType["webTemplateCatalog"] = 111] = "webTemplateCatalog";
    // userInformation = 112,
    ListTemplateType[ListTemplateType["webPartCatalog"] = 113] = "webPartCatalog";
    ListTemplateType[ListTemplateType["listTemplateCatalog"] = 114] = "listTemplateCatalog";
    ListTemplateType[ListTemplateType["xmlFormLibrary"] = 115] = "xmlFormLibrary";
    ListTemplateType[ListTemplateType["masterPageCatalog"] = 116] = "masterPageCatalog";
    // noCodeWorkflows = 117,
    // /** Custom Workflow Process */
    // workflowProcess = 118,
    /** Wiki Page Library */
    ListTemplateType[ListTemplateType["webPageLibrary"] = 119] = "webPageLibrary";
    // /** Custom grid for a list */
    ListTemplateType[ListTemplateType["customGrid"] = 120] = "customGrid";
    ListTemplateType[ListTemplateType["solutionCatalog"] = 121] = "solutionCatalog";
    // noCodePublic = 122,
    ListTemplateType[ListTemplateType["themeCatalog"] = 123] = "themeCatalog";
    ListTemplateType[ListTemplateType["designCatalog"] = 124] = "designCatalog";
    ListTemplateType[ListTemplateType["appDataCatalog"] = 125] = "appDataCatalog";
    // /** Data connection library for sharing information about external data connections */
    // dataConnectionLibrary = 130,
    // workflowHistory = 140,
    /** Project Tasks */
    ListTemplateType[ListTemplateType["ganttTasks"] = 150] = "ganttTasks";
    // helpLibrary = 151,
    // accessRequest = 160,
    ListTemplateType[ListTemplateType["promotedLinks"] = 170] = "promotedLinks";
    ListTemplateType[ListTemplateType["tasksWithTimelineAndHierarchy"] = 171] = "tasksWithTimelineAndHierarchy";
    // maintenanceLogs = 175
    // Range 200-299 is used for Meetings List Template Id
    /** Meeting Series (Meeting) */
    ListTemplateType[ListTemplateType["meetings"] = 200] = "meetings";
    // /** Agenda (Meeting) */
    // agenda = 201,
    // /** Attendees (Meeting) */
    // meetingUser = 202,
    // /** Decisions (Meeting) */
    // decision = 204,
    // /** Objectives (Meeting) */
    // meetingObjective = 207,
    // /** Text Box (Meeting) */
    // textBox = 210,
    // /** Things To Bring (Meeting) */
    // thingsToBring = 211,
    // /** Workspace Pages (Meeting) */
    // homePageLibrary = 212,
    // /** Posts (Blog) */
    // posts = 301,
    // /** Comments (Blog) */
    // comments = 302,
    // /** Categories (Blog) */
    // categories = 303,
    // // Range 400-499 is used for lists that are specific to GroupBoard (Group Work Site).
    // facility = 402,
    // whereabouts = 403,
    // callTrack = 404,
    // circulation = 405,
    // timecard = 420,
    // holidays = 421,
    // IMEDic = 499,
    ListTemplateType[ListTemplateType["externalList"] = 600] = "externalList";
    ListTemplateType[ListTemplateType["mySiteDocumentLibrary"] = 700] = "mySiteDocumentLibrary";
    ListTemplateType[ListTemplateType["publishingPageLibrary"] = 850] = "publishingPageLibrary";
    ListTemplateType[ListTemplateType["publishingAsset"] = 851] = "publishingAsset";
    ListTemplateType[ListTemplateType["issueTracking"] = 1100] = "issueTracking";
    // adminTasks = 1200,
    // healthRules = 1220,
    // healthReports = 1221,
    // developerSiteDraftApps = 1230,
    ListTemplateType[ListTemplateType["contentCenterModelLibrary"] = 1328] = "contentCenterModelLibrary";
    ListTemplateType[ListTemplateType["contentCenterPrimeLibrary"] = 1329] = "contentCenterPrimeLibrary";
    ListTemplateType[ListTemplateType["contentCenterSampleLibrary"] = 1330] = "contentCenterSampleLibrary";
    ListTemplateType[ListTemplateType["contentCenterModelUsageList"] = 1331] = "contentCenterModelUsageList";
    // accessApp = 3100, // Access app entry point
    // alchemyMobileForm = 3101, // Mobile form app entry point
    // alchemyApprovalWorkflow = 3102, // Approval workflow app entry point
    // sharingLinks = 3300
})(ListTemplateType || (ListTemplateType = {}));
/**
 *  Specifies the base type for a list, from SPBaseType in sts\Core\splist.cs.
 */
var ListBaseType;
(function (ListBaseType) {
    ListBaseType[ListBaseType["invalidType"] = -1] = "invalidType";
    ListBaseType[ListBaseType["GenericList"] = 0] = "GenericList";
    ListBaseType[ListBaseType["DocumentLibrary"] = 1] = "DocumentLibrary";
})(ListBaseType || (ListBaseType = {}));
var DOCLIB_TEMPLATES = [
    // NOTE: If updating these, also update the isDocumentLibrary check in odsp-next ListViewDataPrefetch!
    ListTemplateType.mySiteDocumentLibrary,
    ListTemplateType.documentLibrary,
    ListTemplateType.pictureLibrary,
    ListTemplateType.xmlFormLibrary,
    ListTemplateType.webPageLibrary,
    ListTemplateType.publishingPageLibrary,
    ListTemplateType.publishingAsset
];
/**
 * Returns true if the list template is any type of document library:
 * standard, mysite, picture, XML form, or web page.
 */
function isDocumentLibrary(template) {
    'use strict';
    var templateEnum = Number(template);
    return DOCLIB_TEMPLATES.indexOf(templateEnum) !== -1;
}
/**
 * returns true if the list basetype is document library
 * This is the correct way to identify document library. isDocumentLibrary should be deprecated.
 */
function isDocLib(template) {
    var baseType = Number(template);
    return baseType === ListBaseType.DocumentLibrary;
}
function isGenericList(template) {
    'use strict';
    return (template === ListTemplateType.genericList ||
        template === ListTemplateType.announcements ||
        template === ListTemplateType.issueTracking ||
        template === ListTemplateType.contacts ||
        template === ListTemplateType.customGrid);
}
function isPromotedLinksList(template) {
    'use strict';
    var templateEnum = Number(template);
    return templateEnum === ListTemplateType.promotedLinks;
}
/* harmony default export */ __webpack_exports__["default"] = (ListTemplateType);
//# sourceMappingURL=ListTemplateType.js.map

/***/ }),

/***/ "I6O9":
/*!***************************************!*\
  !*** external "@microsoft/sp-loader" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_I6O9__;

/***/ }),

/***/ "IPei":
/*!******************************************************************!*\
  !*** ./lib/extensibility/ApplicationCustomizerContextFactory.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-loader */ "I6O9");
/* harmony import */ var _microsoft_sp_loader__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_loader__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ApplicationCustomizerContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ApplicationCustomizerContext */ "L9BA");



var ApplicationCustomizerContextFactory = /** @class */ (function () {
    function ApplicationCustomizerContextFactory(serviceScope) {
        this.applicationCustomizerTopHeight = 'preAllocatedApplicationCustomizerTopHeight';
        this.applicationCustomizerBottomHeight = 'preAllocatedApplicationCustomizerBottomHeight';
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNotNullOrUndefined(serviceScope, 'serviceScope');
        this._serviceScope = serviceScope;
    }
    ApplicationCustomizerContextFactory.prototype.createApplicationCustomizerContext = function (customAction, extensionContextParameters, includeAllParams) {
        if (extensionContextParameters === void 0) { extensionContextParameters = {}; }
        if (includeAllParams === void 0) { includeAllParams = true; }
        var componentId = customAction.clientSideComponentId.toString();
        var topHeight = 0;
        var bottomHeight = 0;
        if (customAction.hostProperties) {
            topHeight =
                parseInt(JSON.parse(customAction.hostProperties)[this.applicationCustomizerTopHeight], 10) || 0;
            bottomHeight =
                parseInt(JSON.parse(customAction.hostProperties)[this.applicationCustomizerBottomHeight], 10) || 0;
        }
        var applicationCustomizerContextParameters = {
            sequence: customAction.sequence !== undefined ? customAction.sequence : 65535,
            preAllocatedApplicationCustomizerTopHeight: topHeight,
            preAllocatedApplicationCustomizerBottomHeight: bottomHeight
        };
        var applicationCustomizerContext;
        if (includeAllParams) {
            var manifest = _microsoft_sp_loader__WEBPACK_IMPORTED_MODULE_1__["SPComponentLoader"].tryGetManifestById(componentId);
            if (!manifest) {
                var error = new Error("Custom action with component id \"" + componentId + "\" didn't have a manifest.");
                throw error;
            }
            var instanceId = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Guid"].newGuid().toString();
            var loggingTag = "Extension." + manifest.id + "." + instanceId;
            applicationCustomizerContext = new _ApplicationCustomizerContext__WEBPACK_IMPORTED_MODULE_2__["default"]({
                manifest: manifest,
                parentServiceScope: this._serviceScope,
                instanceId: instanceId,
                loggingTag: loggingTag
            }, applicationCustomizerContextParameters);
        }
        else {
            applicationCustomizerContext = new _ApplicationCustomizerContext__WEBPACK_IMPORTED_MODULE_2__["default"](extensionContextParameters, applicationCustomizerContextParameters);
        }
        return applicationCustomizerContext;
    };
    return ApplicationCustomizerContextFactory;
}());
/* harmony default export */ __webpack_exports__["default"] = (ApplicationCustomizerContextFactory);


/***/ }),

/***/ "J5U9":
/*!******************************************************************!*\
  !*** ./lib/extensibility/customAction/ClientSideCustomAction.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_sp_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-loader */ "I6O9");
/* harmony import */ var _microsoft_sp_loader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_loader__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/sp-page-context */ "X+PM");
/* harmony import */ var _microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_3__);




/**
 * Client-side custom action.
 */
var ClientSideCustomAction = /** @class */ (function () {
    function ClientSideCustomAction() {
    }
    /**
     * Try to create a custom action from the preloaded custom action data. If there is a failure
     * to create the action, log an error and return undefined. We do not want to cause application
     * loading failures in case of custom action creation failures.
     *
     * @internal
     */
    ClientSideCustomAction._tryCreateFromPreloadedCustomAction = function (customAction) {
        var typedCustomAction = undefined;
        var qosMonitor = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_QosMonitor"]('ClientSideCustomActions.CreateFromPreloadedCustomAction');
        try {
            typedCustomAction = new ClientSideCustomAction();
            var componentId = customAction.clientSideComponentId;
            _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNonemptyString(componentId, 'customAction.clientSideComponentId');
            _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNonemptyString(customAction.location, 'customAction.location');
            _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNotNullOrUndefined(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Guid"].tryParse(componentId), 'customAction.clientSideComponentId as Guid');
            if (!_microsoft_sp_loader__WEBPACK_IMPORTED_MODULE_2__["SPComponentLoader"].tryGetManifestById(componentId)) {
                var error = new Error("Custom action with component id \"" + componentId + "\" didn't have a manifest.");
                qosMonitor.writeUnexpectedFailure('ManifestNotFound', error, { customAction: componentId });
                throw error;
            }
            typedCustomAction.title = customAction.title;
            typedCustomAction.location = customAction.location;
            typedCustomAction.clientSideComponentId = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Guid"].parse(componentId);
            typedCustomAction.clientSideComponentProperties = customAction.clientSideComponentProperties;
            typedCustomAction.registrationType = customAction.registrationType;
            typedCustomAction.registrationId = customAction.registrationId;
            typedCustomAction.sequence = customAction.sequence;
            typedCustomAction.hostProperties = customAction.hostProperties;
            typedCustomAction.requireSiteAdministrator = customAction.requireSiteAdministrator;
            typedCustomAction.id = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Guid"].tryParse(customAction.id);
            var rights = customAction.rights;
            if (rights && rights.High !== undefined && rights.Low !== undefined) {
                typedCustomAction.rights = new _microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_3__["SPPermission"](rights);
            }
            else {
                _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_TraceLogger"].logVerbose(ClientSideCustomAction._logSource, "The rights object has invalid format. One of High or Low fields cannot be undefined. Object value is '" + JSON.stringify(rights)); // tslint:disable-line:max-line-length
            }
            qosMonitor.writeSuccess({
                customAction: typedCustomAction.tag
            });
            return typedCustomAction;
        }
        catch (error) {
            _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_TraceLogger"].logError(ClientSideCustomAction._logSource, new Error("Failed to create client-side custom action. Error: " + error.message));
            qosMonitor.writeUnexpectedFailure('UnhandledCreateError', error, {
                customAction: customAction.clientSideComponentId
            });
            return undefined;
        }
    };
    /**
     * Try create custom action from query string debug data
     */
    ClientSideCustomAction._tryCreateFromDebugData = function (location, clientSideComponentId, clientSideComponentProperties, sequence, hostProperties) {
        try {
            _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNotNullOrUndefined(clientSideComponentId, 'clientSideComponentId');
            _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNonemptyString(location, 'location');
            var customAction = new ClientSideCustomAction();
            customAction.location = location;
            customAction.clientSideComponentId = clientSideComponentId;
            customAction.clientSideComponentProperties = clientSideComponentProperties;
            customAction.sequence = sequence;
            customAction.hostProperties = hostProperties;
            return customAction;
        }
        catch (error) {
            _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_TraceLogger"].logError(ClientSideCustomAction._logSource, new Error("Failed to create client-side custom action. Error: " + error.message));
            return undefined;
        }
    };
    Object.defineProperty(ClientSideCustomAction.prototype, "tag", {
        /**
         * Returns a tag that should be used for logging and telemetry purposes.
         */
        get: function () {
            return this.location + "." + this.clientSideComponentId.toString();
        },
        enumerable: false,
        configurable: true
    });
    ClientSideCustomAction._logSource = _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_LogSource"].create('ClientSideCustomAction');
    return ClientSideCustomAction;
}());
/* harmony default export */ __webpack_exports__["default"] = (ClientSideCustomAction);


/***/ }),

/***/ "JwFY":
/*!******************************************************!*\
  !*** ./lib/navigator/OnBeforeNavigationEventName.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__);
// Copyright (c) Microsoft. All rights reserved.


/**
 * Arguments for a pre in-place navigation event.
 *
 * @internal
 */
var OnBeforeNavigationEventName = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(OnBeforeNavigationEventName, _super);
    /**
     * Initializes a new instance of the OnBeforeNavigationEventName class
     * @param fromAppId - Component id of the application we're navigating from
     * @param toAppId - Component id of the application we're navigating to
     */
    function OnBeforeNavigationEventName(fromAppId, toAppId) {
        var _this = this;
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNonemptyString(fromAppId, 'fromAppId');
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNonemptyString(toAppId, 'toAppId');
        _this = _super.call(this) || this;
        _this.fromAppId = fromAppId;
        _this.toAppId = toAppId;
        return _this;
    }
    return OnBeforeNavigationEventName;
}(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["SPEventArgs"]));
/* harmony default export */ __webpack_exports__["default"] = (OnBeforeNavigationEventName);


/***/ }),

/***/ "K9kD":
/*!***************************************!*\
  !*** external "@ms/odsp-core-bundle" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_K9kD__;

/***/ }),

/***/ "KdXK":
/*!****************************************!*\
  !*** ./lib/pageChrome/SPPageChrome.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_Flights__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/Flights */ "w4+A");
/* harmony import */ var _SPThemeProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SPThemeProvider */ "6GSH");
/* harmony import */ var _extensibility_DialogManagerConfiguration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../extensibility/DialogManagerConfiguration */ "7Cl3");
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ms/sp-telemetry */ "2q6Q");
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ms_odsp_shared_react_lib_components_SkipToContentButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ms/odsp-shared-react/lib/components/SkipToContentButton */ "5kzB");
/* harmony import */ var _microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @microsoft/sp-page-context */ "X+PM");
/* harmony import */ var _microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ms_odsp_datasources_lib_interfaces_ISpPageContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ms/odsp-datasources/lib/interfaces/ISpPageContext */ "GlwB");
/* harmony import */ var _SPPageChrome_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./SPPageChrome.module.scss */ "NWvd");
/* harmony import */ var _common_Killswitches__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common/Killswitches */ "dQCu");










var SPPageChrome = /** @class */ (function () {
    function SPPageChrome(serviceScope, parentChrome, currentAppId) {
        this._isDisposed = false;
        this.spAppBarDisabledApps = new Set([
            /* tenant-admin */ '6e1c1298-7b8e-4a08-a24f-769aafae45c5',
            /* content center app */ 'fca88529-7990-4631-aa5c-748ffe04799b'
        ]);
        this._masterChrome = parentChrome;
        var pageContext = !_common_Killswitches__WEBPACK_IMPORTED_MODULE_9__["Killswitches"].ShouldLoadAppBarKillSwitchActivated() && serviceScope.consume(_microsoft_sp_page_context__WEBPACK_IMPORTED_MODULE_6__["PageContext"].serviceKey);
        this._createPageChrome(currentAppId, pageContext && pageContext.legacyPageContext);
        // The default configuration for dialog manager. This may be changed by the application later.
        // Note: This will not run if the application does not own the page chrome and hence must be called
        // by the application if they choose to use the dialog manager.
        _extensibility_DialogManagerConfiguration__WEBPACK_IMPORTED_MODULE_3__["default"].instance.initialize(this.dialogContainerDiv);
        this._spThemeProvider = new _SPThemeProvider__WEBPACK_IMPORTED_MODULE_2__["default"](serviceScope);
    }
    SPPageChrome.prototype.changeSuiteNavHeight = function (pixels) {
        var top = parseInt(pixels, 10) + 'px';
        this.suiteNavDiv.style.height = top;
    };
    Object.defineProperty(SPPageChrome.prototype, "themeProvider", {
        get: function () {
            return this._spThemeProvider;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Shows the page chrome in the current document.
     */
    SPPageChrome.prototype.show = function () {
        if (!this._isDisposed) {
            if (_common_Flights__WEBPACK_IMPORTED_MODULE_1__["Flights"].isHydrationEnabled) {
                var chromeDiv = document.getElementById('chromeDiv');
                if (chromeDiv && chromeDiv.firstChild) {
                    // move snapshot into proper div
                    this.appDiv.append(chromeDiv.firstChild);
                    chromeDiv.remove();
                }
            }
            this._masterChrome.show();
        }
    };
    /**
     * Disposes the Chrome
     */
    SPPageChrome.prototype.dispose = function () {
        if (!this._isDisposed) {
            // tslint:disable:no-any
            delete this.appDiv;
            delete this.propertyPaneContainerDiv;
            if (this.appAndPropertyPaneDiv) {
                delete this.appAndPropertyPaneDiv;
            }
            delete this.dialogContainerDiv;
        }
        // tslint:enable:no-any
        this._isDisposed = true;
    };
    Object.defineProperty(SPPageChrome.prototype, "isDisposed", {
        /**
         * Returns true if the object has already been disposed, otherwise false.
         */
        get: function () {
            return this._isDisposed;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Returns true if there is an app id and the app bar is NOT supposed to be shown on the app
     */
    SPPageChrome.prototype.isAppBarDisabledForApp = function (currentAppId) {
        return this.spAppBarDisabledApps.has(currentAppId);
    };
    /**
     * Creates div elements that are used to render the Standard Page Chrome for
     * client-side applications. The structure of the Page Chrome is:
     *
     * SPPageChrome - Parent div for client-side applications
     * -SuiteNav - O365 SuiteNav
     * --App - Div Element where the application will be rendered.
     */
    SPPageChrome.prototype._createPageChrome = function (currentAppId, pageContext) {
        _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_4__["_PerformanceLogger"].devMark('SPPageChrome.createPageChrome');
        Object(_ms_odsp_shared_react_lib_components_SkipToContentButton__WEBPACK_IMPORTED_MODULE_5__["setupSkipToContentButton"])();
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNotNullOrUndefined(this._masterChrome, 'masterChrome');
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNotDisposed(this._masterChrome, 'masterChrome');
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNotNullOrUndefined(this._masterChrome.chromeDiv, 'chromeDiv');
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNotNullOrUndefined(this._masterChrome.suiteNavDiv, 'suiteNavDiv');
        this.suiteNavDiv = this._masterChrome.suiteNavDiv;
        var isMobileBrowser = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_BrowserDetection"].getBrowserInformation().isMobile;
        var enableMobileAppBar = isMobileBrowser && !_common_Killswitches__WEBPACK_IMPORTED_MODULE_9__["Killswitches"].AddSPAppBarMobileKillSwitchActivated();
        var isAppBarPlatformEnabled = !isMobileBrowser || enableMobileAppBar;
        var useMobileBreakpointKSActivated = _common_Killswitches__WEBPACK_IMPORTED_MODULE_9__["Killswitches"].UseMobileBreakpointAppBarKillSwitchActivated();
        if (_common_Flights__WEBPACK_IMPORTED_MODULE_1__["Flights"].serviceWorker || _common_Flights__WEBPACK_IMPORTED_MODULE_1__["Flights"].isHydrationEnabled) {
            this.appDiv = document.getElementById('spPageChromeAppDiv');
        }
        if (this.appDiv) {
            this.appAndPropertyPaneDiv = this.appDiv.parentElement;
        }
        else {
            // Application div
            this.appDiv = document.createElement('div');
            this.appDiv.setAttribute('class', "SPPageChrome-app");
            this.appDiv.setAttribute('id', 'spPageChromeAppDiv');
            this.appDiv.setAttribute('data-sp-feature-tag', 'Page Chrome');
            this.appDiv.setAttribute('data-sp-feature-instance-id', '_Page Chrome');
            this.appDiv.setAttribute('data-sp-a11y-navigatebyhierarchy', 'true');
            // Application and PropertyPane container div
            this.appAndPropertyPaneDiv = document.createElement('div');
            var appBarParentMobileClass = 'sp-appBar-parent-mobile';
            this.appAndPropertyPaneDiv.setAttribute('class', 'spAppAndPropertyPanelContainer');
            if (useMobileBreakpointKSActivated && enableMobileAppBar) {
                this.appAndPropertyPaneDiv.classList.add(appBarParentMobileClass, _SPPageChrome_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].spAppBarParentMobile);
            }
            this.appAndPropertyPaneDiv.appendChild(this.appDiv);
        }
        // PropertyPaneContainer div
        this.propertyPaneContainerDiv = document.createElement('div');
        this.propertyPaneContainerDiv.setAttribute('class', "spPropertyPaneContainer " + _SPPageChrome_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].spPageContentTransition);
        this.propertyPaneContainerDiv.setAttribute('id', 'spPropertyPaneContainer');
        this.appAndPropertyPaneDiv.appendChild(this.propertyPaneContainerDiv);
        // Placeholder div to reserve space for rendering the SPAppBar
        if (!_common_Killswitches__WEBPACK_IMPORTED_MODULE_9__["Killswitches"].isAddSPAppBarToPageChromKillSwitchActivated() &&
            _common_Flights__WEBPACK_IMPORTED_MODULE_1__["Flights"].isSPAppBarEnabled &&
            !this.isAppBarDisabledForApp(currentAppId) &&
            (_common_Killswitches__WEBPACK_IMPORTED_MODULE_9__["Killswitches"].ShouldLoadAppBarKillSwitchActivated() ||
                (pageContext && Object(_ms_odsp_datasources_lib_interfaces_ISpPageContext__WEBPACK_IMPORTED_MODULE_7__["shouldLoadAppBar"])(pageContext))) &&
            (_common_Killswitches__WEBPACK_IMPORTED_MODULE_9__["Killswitches"].isDisableSPAppBarEmbeddedKillSwitchActivated() || !_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_BrowserUtilities"].isEmbedded()) &&
            isAppBarPlatformEnabled) {
            var appBarDiv = document.getElementById('sp-appBar');
            if (!appBarDiv) {
                appBarDiv = document.createElement('div');
                appBarDiv.setAttribute('id', 'sp-appBar');
                appBarDiv.setAttribute('class', "sp-appBar" + (useMobileBreakpointKSActivated && enableMobileAppBar ? ' sp-appBar-mobile' : ''));
            }
            this.appAndPropertyPaneDiv.insertBefore(appBarDiv, this.appAndPropertyPaneDiv.firstChild);
        }
        // Dialog Container Div
        this.dialogContainerDiv = document.createElement('div');
        this.dialogContainerDiv.setAttribute('id', 'spDialogContainerDiv');
        // Compose the page chrome
        this._masterChrome.chromeDiv.appendChild(this.appAndPropertyPaneDiv);
        this._masterChrome.chromeDiv.appendChild(this.dialogContainerDiv);
    };
    return SPPageChrome;
}());
/* harmony default export */ __webpack_exports__["default"] = (SPPageChrome);


/***/ }),

/***/ "KosM":
/*!************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/providers/theming/FluentFeatures.js ***!
  \************************************************************************************************************************************************************************************************/
/*! exports provided: isOdb, isOdc, isOneDrive, EnableFluentStylingODC, EnableFluentStyling, isFluentActiveOD */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isOdb", function() { return isOdb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isOdc", function() { return isOdc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isOneDrive", function() { return isOneDrive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnableFluentStylingODC", function() { return EnableFluentStylingODC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnableFluentStyling", function() { return EnableFluentStyling; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFluentActiveOD", function() { return isFluentActiveOD; });
/* harmony import */ var _ms_odsp_utilities_lib_features_Features__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-utilities/lib/features/Features */ "8G1T");
/* harmony import */ var _dataSources_listCollection_ListTemplateType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../dataSources/listCollection/ListTemplateType */ "HyBu");


var isOdb = window['_spPageContextInfo'] &&
    window['_spPageContextInfo'].listBaseTemplate ===
        _dataSources_listCollection_ListTemplateType__WEBPACK_IMPORTED_MODULE_1__["default"].mySiteDocumentLibrary;
var isOdc = !!window['FilesConfig'];
var isOneDrive = isOdb || isOdc;
// ODC Features
var EnableFluentStylingODC = { ODC: 'EnableFluentStylingODC' }; // For ODC
// ODB Features
var EnableFluentStyling = { ODB: isOneDrive ? true : -1118 }; // For ODB
var isFluentActiveOD = _ms_odsp_utilities_lib_features_Features__WEBPACK_IMPORTED_MODULE_0__["default"].isFeatureEnabled(EnableFluentStyling) || _ms_odsp_utilities_lib_features_Features__WEBPACK_IMPORTED_MODULE_0__["default"].isFeatureEnabled(EnableFluentStylingODC);
//# sourceMappingURL=FluentFeatures.js.map

/***/ }),

/***/ "L9BA":
/*!***********************************************************!*\
  !*** ./lib/extensibility/ApplicationCustomizerContext.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_extension_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-extension-base */ "ZFc5");
/* harmony import */ var _microsoft_sp_extension_base__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_extension_base__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _placeholder_PlaceholderProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./placeholder/PlaceholderProvider */ "/Kpt");
/* harmony import */ var _ApplicationAccessor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ApplicationAccessor */ "75qc");




/**
 * The component context for {@link BaseApplicationCustomizer}.
 *
 * @public
 */
var ApplicationCustomizerContext = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ApplicationCustomizerContext, _super);
    /**
     * @internal
     */
    function ApplicationCustomizerContext(extensionContextParameters, applicationCustomizerContextParameters) {
        var _this = _super.call(this, extensionContextParameters) || this;
        _this.serviceScope.finish();
        _this._componentTag =
            "Extension." +
                (extensionContextParameters.manifest.alias + ".") +
                (extensionContextParameters.manifest.id + ".") +
                ((extensionContextParameters.manifest.isInternal ? 'internal' : 'external') + ".") +
                ("" + extensionContextParameters.instanceId);
        _this._placeholderProvider = new _placeholder_PlaceholderProvider__WEBPACK_IMPORTED_MODULE_2__["default"](_this.serviceScope, applicationCustomizerContextParameters, _this._componentTag);
        _this._applicationAccessor = new _ApplicationAccessor__WEBPACK_IMPORTED_MODULE_3__["default"](_this.serviceScope);
        return _this;
    }
    Object.defineProperty(ApplicationCustomizerContext.prototype, "placeholderProvider", {
        /**
         * Exposes a collection of content placeholders for use by third parties.
         */
        get: function () {
            return this._placeholderProvider;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApplicationCustomizerContext.prototype, "application", {
        /**
         * Provides access to the client-side application that is currently running.
         */
        get: function () {
            return this._applicationAccessor;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * @override
     */
    ApplicationCustomizerContext.prototype.dispose = function () {
        if (!this.isDisposed) {
            this._placeholderProvider.dispose();
            delete this._placeholderProvider;
            delete this._applicationAccessor;
        }
        _super.prototype.dispose.call(this);
    };
    return ApplicationCustomizerContext;
}(_microsoft_sp_extension_base__WEBPACK_IMPORTED_MODULE_1__["ExtensionContext"]));
/* harmony default export */ __webpack_exports__["default"] = (ApplicationCustomizerContext);


/***/ }),

/***/ "M2il":
/*!***************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/theming/RgbaColor.js ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * A color represented by red, green, blue, and alpha (opacity) components.
 */
var RgbaColor = /** @class */ (function () {
    /** Constructs a default RgbaColor. Use RgbaColor.fromRgba to specify components. */
    function RgbaColor() {
        this.R = 0;
        this.G = 0;
        this.B = 0;
        this.A = RgbaColor.maxComponent; // Default to fully opaque.
    }
    /**
     * Creates a copy of the given color.
     * @param {RgbaColor} c The color to clone.
     */
    RgbaColor.clone = function (c) {
        return RgbaColor.fromRgba(c.R, c.G, c.B, c.A);
    };
    /**
     * Returns true if the colors have identical component values of R, G, B, and A.
     * @param {RgbaColor} c1 The first color to compare.
     * @param {RgbaColor} c2 The second color to compare.
     */
    RgbaColor.equals = function (c1, c2) {
        var c1IsNull = !c1;
        var c2IsNull = !c2;
        if (c1IsNull || c2IsNull) {
            return c1IsNull && c2IsNull;
        }
        else {
            return c1.R === c2.R && c1.G === c2.G && c1.B === c2.B && c1.A === c2.A;
        }
    };
    /**
     * Creates an RgbaColor from red, green, blue, and alpha component values.
     * @param {number} r The red component value (between 0 and 255).
     * @param {number} g The green component value (between 0 and 255).
     * @param {number} b The blue component value (between 0 and 255).
     * @param {number} a The alpha component value (between 0 and 255).
     */
    RgbaColor.fromRgba = function (r, g, b, a) {
        var colorObj = new RgbaColor();
        colorObj.R = Math.round(r);
        colorObj.G = Math.round(g);
        colorObj.B = Math.round(b);
        colorObj.A = a != null ? Math.round(a) : RgbaColor.maxComponent; // tslint:disable-line:triple-equals
        return colorObj;
    };
    /**
     * Converts an rgba string of type "rgba(number(0-255), number(0-255), number(0-255), number?(0-1))"
     * to an RgbaColor
     * @param rbga the string to be converted
     */
    RgbaColor.fromRgbaString = function (rbga) {
        var rgbaColor = new RgbaColor();
        if (/^rgb.+/.test(rbga)) {
            // Match all of the numbers that are contained within the string.
            var colorNumbers = rbga.match(/[\d.]+/g);
            rgbaColor = RgbaColor.fromRgba(Number(colorNumbers[0]), Number(colorNumbers[1]), Number(colorNumbers[2]), colorNumbers.length === 4 ? Number(colorNumbers[3]) * RgbaColor.maxComponent : null);
        }
        return rgbaColor;
    };
    /**
     * Parses an HTML color string in the formats #AARRGGBB, #RRGGBB, or #RGB.
     * @param {string} htmlColor The HTML color string to parse.
     */
    RgbaColor.fromHtmlColor = function (htmlColor) {
        function TwoHexCharsToNumber(str, index1, index2) {
            return parseInt(str.charAt(index1) + str.charAt(index2), 16);
        }
        var resultColor = new RgbaColor();
        if (typeof htmlColor === 'string' && htmlColor.charAt(0) === '#') {
            switch (htmlColor.length) {
                case 9: // #AARRGGBB
                    resultColor.A = TwoHexCharsToNumber(htmlColor, 1, 2);
                    resultColor.R = TwoHexCharsToNumber(htmlColor, 3, 4);
                    resultColor.G = TwoHexCharsToNumber(htmlColor, 5, 6);
                    resultColor.B = TwoHexCharsToNumber(htmlColor, 7, 8);
                    break;
                case 7: // #RRGGBB
                    resultColor.R = TwoHexCharsToNumber(htmlColor, 1, 2);
                    resultColor.G = TwoHexCharsToNumber(htmlColor, 3, 4);
                    resultColor.B = TwoHexCharsToNumber(htmlColor, 5, 6);
                    break;
                case 4: // #RGB
                    resultColor.R = TwoHexCharsToNumber(htmlColor, 1, 1);
                    resultColor.G = TwoHexCharsToNumber(htmlColor, 2, 2);
                    resultColor.B = TwoHexCharsToNumber(htmlColor, 3, 3);
                    break;
            }
        }
        else if (/^rgb.+/.test(htmlColor)) {
            resultColor = RgbaColor.fromRgbaString(htmlColor);
        }
        return resultColor;
    };
    /**
     * Converts an RgbaColor into an HTML string suitable for use as a CSS color value.
     * @param {RgbaColor} c The color to convert.
     * @param {boolean} bFilterValue If true, this produces a string to in the #AARRGGBB format.
     */
    RgbaColor.toHtmlString = function (c, bFilterValue) {
        function ByteToHexString(b) {
            var byte = Number(b);
            if (!(byte >= 0 && byte <= RgbaColor.maxComponent)) {
                throw new Error('Argument must be a Number in [0, 255]');
            }
            var hex = byte.toString(16);
            if (byte < 16) {
                hex = '0' + hex;
            }
            return hex;
        }
        if (c.A < RgbaColor.maxComponent && !bFilterValue) {
            return ('rgba(' +
                c.R.toString(10) +
                ', ' +
                c.G.toString(10) +
                ', ' +
                c.B.toString(10) +
                ', ' +
                (c.A / RgbaColor.maxComponent).toFixed(2) +
                ')');
        }
        else {
            return ('#' +
                (bFilterValue ? ByteToHexString(c.A) : '') +
                ByteToHexString(c.R) +
                ByteToHexString(c.G) +
                ByteToHexString(c.B));
        }
    };
    /**
     * The maximum value of an R, G, B, or A component in an RgbaColor.
     */
    RgbaColor.maxComponent = 255;
    return RgbaColor;
}());
/* harmony default export */ __webpack_exports__["default"] = (RgbaColor);
//# sourceMappingURL=RgbaColor.js.map

/***/ }),

/***/ "MUnB":
/*!************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/theming/Shades.js ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: Shade, isValidShade, getShade */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Shade", function() { return Shade; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidShade", function() { return isValidShade; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getShade", function() { return getShade; });
/* harmony import */ var _RgbaColor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RgbaColor */ "M2il");

var WhiteShadeTable = [0.537, 0.349, 0.216, 0.184, 0.145, 0.082, 0.043, 0.027]; // white fg
var BlackTintTable = [0.537, 0.45, 0.349, 0.216, 0.184, 0.145, 0.082, 0.043]; // black fg
var LumTintTable = [0.88, 0.77, 0.66, 0.55, 0.44, 0.33, 0.22, 0.11]; // light (strongen all)
var LumShadeTable = [0.11, 0.22, 0.33, 0.44, 0.55, 0.66, 0.77, 0.88]; // dark (soften all)
var ColorTintTable = [0.96, 0.84, 0.7, 0.4, 0.12]; // default soften
var ColorShadeTable = [0.1, 0.24, 0.44]; // default strongen
// If the given shade's luminance is below/above these values, we'll swap to using the White/Black tables above
var LowLuminanceThreshold = 0.2;
var HighLuminanceThreshold = 0.8;
/** Shades of a given color, from softest to strongest. */
var Shade;
(function (Shade) {
    Shade[Shade["Unshaded"] = 0] = "Unshaded";
    Shade[Shade["Shade1"] = 1] = "Shade1";
    Shade[Shade["Shade2"] = 2] = "Shade2";
    Shade[Shade["Shade3"] = 3] = "Shade3";
    Shade[Shade["Shade4"] = 4] = "Shade4";
    Shade[Shade["Shade5"] = 5] = "Shade5";
    Shade[Shade["Shade6"] = 6] = "Shade6";
    Shade[Shade["Shade7"] = 7] = "Shade7";
    Shade[Shade["Shade8"] = 8] = "Shade8";
    // remember to update isValidShade()!
})(Shade || (Shade = {}));
/**
 * Returns true if the argument is a valid Shade value
 * @param {Shade} shade The Shade value to validate.
 */
function isValidShade(shade) {
    return typeof shade === 'number' && shade >= Shade.Unshaded && shade <= Shade.Shade8;
}
function _isBlack(color) {
    return color.R === 0 && color.G === 0 && color.B === 0;
}
function _isWhite(color) {
    return color.R === 255 && color.G === 255 && color.B === 255;
}
function _darken(hsv, factor) {
    return {
        h: hsv.h,
        s: hsv.s,
        v: hsv.v - hsv.v * factor
    };
}
function _lighten(hsv, factor) {
    return {
        h: hsv.h,
        s: hsv.s - hsv.s * factor,
        v: hsv.v + (100 - hsv.v) * factor
    };
}
/**
 * Given a color and a shade specification, generates the requested shade of the color.
 * Logic:
 * if white
 *  darken via tables defined above
 * if black
 *  lighten
 * if light
 *  strongen
 * if dark
 *  soften
 * else default
 *  soften or strongen depending on shade#
 * @param {IColor} color The base color whose shade is to be computed
 * @param {Shade} shade The shade of the base color to compute
 * @param {Boolean} isInverted Default false. Whether the given theme is inverted (reverse strongen/soften logic)
 */
function getShade(color, shade, isInverted) {
    if (!color || shade === Shade.Unshaded || !isValidShade(shade)) {
        return color;
    }
    var _soften = _lighten;
    var _strongen = _darken;
    if (isInverted) {
        _soften = _darken;
        _strongen = _lighten;
    }
    var hsv = rgb2hsv(color);
    var hsl = hsv2hsl(hsv);
    var tableIndex = shade - 1;
    if (_isWhite(color)) {
        // white
        hsv = _darken(hsv, WhiteShadeTable[tableIndex]);
    }
    else if (_isBlack(color)) {
        // black
        hsv = _lighten(hsv, BlackTintTable[tableIndex]);
    }
    else if (hsl.l / 100 > HighLuminanceThreshold) {
        // light
        hsv = _strongen(hsv, LumShadeTable[tableIndex]);
    }
    else if (hsl.l / 100 < LowLuminanceThreshold) {
        // dark
        hsv = _soften(hsv, LumTintTable[tableIndex]);
    }
    else {
        // default
        if (tableIndex < ColorTintTable.length) {
            hsv = _soften(hsv, ColorTintTable[tableIndex]);
        }
        else {
            hsv = _strongen(hsv, ColorShadeTable[tableIndex - ColorTintTable.length]);
        }
    }
    return hsv2rgb(hsv);
}
function rgb2hsv(rgb) {
    var h = NaN;
    var s;
    var v;
    var R = rgb.R, G = rgb.G, B = rgb.B;
    var max = Math.max(R, G, B);
    var min = Math.min(R, G, B);
    var delta = max - min;
    // hue
    if (delta === 0) {
        h = 0;
    }
    else if (R === max) {
        h = ((G - B) / delta) % 6;
    }
    else if (G === max) {
        h = (B - R) / delta + 2;
    }
    else if (B === max) {
        h = (R - G) / delta + 4;
    }
    h = Math.round(h * 60);
    if (h < 0) {
        h += 360;
    }
    s = Math.round((max === 0 ? 0 : delta / max) * 100);
    v = Math.round((max / 255) * 100);
    return { h: h, s: s, v: v };
}
function hsv2hsl(hsv) {
    var h = hsv.h, s = hsv.s, v = hsv.v;
    s /= 100;
    v /= 100;
    var l = (2 - s) * v;
    var sl = s * v;
    sl /= l <= 1 ? l : 2 - l;
    sl = sl || 0;
    l /= 2;
    return { h: h, s: sl * 100, l: l * 100 };
}
function hsv2rgb(hsv) {
    var h = hsv.h, s = hsv.s, v = hsv.v;
    s = s / 100;
    v = v / 100;
    var rgb = [];
    var c = v * s;
    var hh = h / 60;
    var x = c * (1 - Math.abs((hh % 2) - 1));
    var m = v - c;
    switch (Math.floor(hh)) {
        case 0:
            rgb = [c, x, 0];
            break;
        case 1:
            rgb = [x, c, 0];
            break;
        case 2:
            rgb = [0, c, x];
            break;
        case 3:
            rgb = [0, x, c];
            break;
        case 4:
            rgb = [x, 0, c];
            break;
        case 5:
            rgb = [c, 0, x];
            break;
    }
    return _RgbaColor__WEBPACK_IMPORTED_MODULE_0__["default"].fromRgba(Math.round(255 * (rgb[0] + m)), Math.round(255 * (rgb[1] + m)), Math.round(255 * (rgb[2] + m)));
}
//# sourceMappingURL=Shades.js.map

/***/ }),

/***/ "N+FS":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/providers/theming/WebThemeProvider.js ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: WebThemeProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebThemeProvider", function() { return WebThemeProvider; });
/* harmony import */ var _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-utilities/lib/async/Promise */ "7Ihg");
/* harmony import */ var _ms_odsp_utilities_lib_theming_ThemeProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/odsp-utilities/lib/theming/ThemeProvider */ "vIt2");
/* harmony import */ var _interfaces_WebTemplateType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../interfaces/WebTemplateType */ "DRdk");
/* harmony import */ var _ms_odsp_utilities_lib_theming_RgbaColor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ms/odsp-utilities/lib/theming/RgbaColor */ "M2il");
/* harmony import */ var _ThemeUtilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ThemeUtilities */ "5ORI");
// OneDrive:IgnoreCodeCoverage





/**
 * Provides theme data for the context web, either from a cache or from the server.
 */
var WebThemeProvider = /** @class */ (function () {
    function WebThemeProvider(params) {
        // Accessing _spPageContextInfo via window since this code needs to run before app boot.
        this._pageContext = params.pageContext ? params.pageContext : window['_spPageContextInfo'];
        this._getThemeDataSource = params.getThemeDataSource;
        this._themeProvider = new _ms_odsp_utilities_lib_theming_ThemeProvider__WEBPACK_IMPORTED_MODULE_1__["default"](this._loadTheme.bind(this));
    }
    /**
     * Loads a map from theme tokens (slots) to values (usually colors).
     * @param {boolean} forceUpdate If true, load fresh server data, ignoring the cache.
     */
    WebThemeProvider.prototype.loadThemeSlotsMap = function (forceUpdate) {
        var cacheToken = this._getThemeCacheToken();
        if (cacheToken) {
            return this._themeProvider.loadThemeTokenMap(cacheToken, forceUpdate);
        }
        else {
            // No theme.
            return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_0__["default"].resolve();
        }
    };
    WebThemeProvider.prototype.loadFullFormattedThemeData = function (forceUpdate) {
        var _this = this;
        return this.loadFullThemeData(forceUpdate).then(function (result) {
            if (!result) {
                return undefined;
            }
            var palette = {};
            var themeDataPalette = result.palette;
            for (var key in themeDataPalette) {
                var color = themeDataPalette[key];
                if (color) {
                    palette[key] = _ms_odsp_utilities_lib_theming_RgbaColor__WEBPACK_IMPORTED_MODULE_3__["default"].toHtmlString(color);
                }
            }
            if (result.backgroundImageUri) {
                palette['backgroundImageUri'] = _ms_odsp_utilities_lib_theming_ThemeProvider__WEBPACK_IMPORTED_MODULE_1__["default"].getBackgroundUrl(result);
            }
            var theme = {
                palette: palette,
                isInverted: result.isInverted
            };
            theme = Object(_ThemeUtilities__WEBPACK_IMPORTED_MODULE_4__["applySpThemeDefaults"])(theme, _this._pageContext);
            return theme;
        });
    };
    /**
     * @deprecated use loadFullFormattedThemeData instead
     * Loads relevant information about the site theme. For just the colors, use loadThemeTokenMap.
     * @param {boolean} forceUpdate If true, load fresh server data, ignoring the cache.
     */
    WebThemeProvider.prototype.loadFullThemeData = function (forceUpdate) {
        var cacheToken = this._getThemeCacheToken();
        if (cacheToken) {
            return this._themeProvider.loadThemeData(cacheToken, forceUpdate);
        }
        else {
            // No theme.
            var noThemeData = void 0;
            return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_0__["default"].resolve(noThemeData);
        }
    };
    /**
     * Gets the theme cache token for the current page load.
     */
    WebThemeProvider.prototype._getThemeCacheToken = function () {
        var cacheToken;
        var pageContext = this._pageContext;
        // Return the themedCssFolderUrl instead of the themeCacheToken, since
        // we do not depend on the web or its version. Those would be needed if
        // we required foreground-image theming rules, as in classic theming.
        if (pageContext) {
            var webTemplate = Number(pageContext.webTemplate);
            var groupColor = webTemplate === _interfaces_WebTemplateType__WEBPACK_IMPORTED_MODULE_2__["WebTemplateType"].teamSite || webTemplate === _interfaces_WebTemplateType__WEBPACK_IMPORTED_MODULE_2__["WebTemplateType"].group
                ? pageContext.groupColor
                : undefined;
            // If themedCssFolderUrl is null or empty, there is no web theme.
            // But if groupColor is set, we can extend that to a theme for the page.
            // Add the web template ID into a groupColor-based token since some templates
            // will behave differently (e.g. ODB will not apply the groupColor).
            var groupColorToken = groupColor ? groupColor + ';web#' + pageContext.webTemplate : null;
            cacheToken = pageContext.themedCssFolderUrl || groupColorToken || null;
        }
        return cacheToken;
    };
    /**
     * Loads the theme data from an appopriate data source.
     * @param {boolean} forceUpdate If true, load fresh server data, ignoring the cache.
     */
    WebThemeProvider.prototype._loadTheme = function (forceUpdate) {
        // Only load this module if it has been bundled with the app.
        // It is possible that this will load additional modules on demand.
        // This way, only SPO apps need a WebThemeDataSource.
        var shouldTheme = !!this._getThemeCacheToken();
        if (shouldTheme) {
            if (!this._themeDataSource) {
                this._themeDataSource = this._getThemeDataSource();
            }
            return this._themeDataSource.then(function (dataSource) {
                if (dataSource) {
                    return dataSource.loadTheme(forceUpdate);
                }
                return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_0__["default"].resolve();
            });
        }
        return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_0__["default"].resolve();
    };
    return WebThemeProvider;
}());

//# sourceMappingURL=WebThemeProvider.js.map

/***/ }),

/***/ "NWvd":
/*!*************************************************!*\
  !*** ./lib/pageChrome/SPPageChrome.module.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/load-themed-styles */ "jOlS");
/* harmony import */ var _microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__);
// Imports


_microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__["loadStyles"]("body{height:100vh;margin:0;padding:0}.SPPageChrome{display:flex;flex-direction:column;height:100%}#SuiteNavWrapper{background-color:#333;width:100%;z-index:12}#SuiteNavWrapper:empty{display:none}.SPPageChrome-app,.SPPageChrome-app>div{flex-grow:1;display:flex;max-width:100%}.SPPageChromeNoFlexbox-app{position:absolute;right:0;bottom:0;left:0;overflow:visible}.spAppAndPropertyPanelContainer{display:flex;flex-grow:1;height:100%;transition:padding-bottom .3s}.spAppAndPropertyPanelContainer .SPPageChrome-app{min-width:0}.spAppAndPropertyPanelContainer .spPropertyPaneContainer{flex-shrink:0}.spAppAndPropertyPanelContainer .sp-appBar{min-width:47px;background:#f3f2f1;display:block;max-width:47px}.spAppAndPropertyPanelContainer .sp-appBar-mobile{min-width:0;max-width:none}.spAppAndPropertyPanelContainer .sp-appBar-callout{background:#fff;opacity:1;transition:opacity .3s;box-shadow:10px 5.4px 14.4px -10px rgba(0,0,0,.132),10px .2px 3.6px -10px rgba(0,0,0,.108);left:0;top:0;width:320px;height:100vh;position:fixed;z-index:10}.spAppAndPropertyPanelContainer .sp-appBar-callout.fade{opacity:0}.spAppAndPropertyPanelContainer .callout-close{text-align:end;margin-top:8px}.spAppAndPropertyPanelContainer .callout-close-button{cursor:pointer;border:none;background:inherit;color:#666;margin-right:5px;font-size:larger}.spAppAndPropertyPanelContainer .callout-iframe{width:100%;height:calc(100vh - 84px);border:none}.spAppAndPropertyPanelContainer .w90{width:90%}.spAppAndPropertyPanelContainer .w80{width:80%}.spAppAndPropertyPanelContainer .callout-close-button:hover{background:#e9e8e8}.a_a_3e5b0b16{padding-bottom:48px;overflow:hidden}.spPropertyPaneContainer{width:0;position:relative;z-index:999}.spPropertyPaneContainerNoFlexbox{top:50px;position:fixed;right:-340px;bottom:0;z-index:999}.b_a_3e5b0b16{transition:width .367s cubic-bezier(.1,.9,.2,1);-webkit-transition:width .367s cubic-bezier(.1,.9,.2,1)}#sp-skipToContent{font-size:\"[theme:mediumFontSize, default: 14px]\";font-weight:\"[theme:mediumFontWeight, default: 400]\";color:\"[theme:themeDark, default: #005a9e]\";background-color:\"[theme:neutralLighter, default: #f4f4f4]\"}@media print{#RecommendedItems,#sp-skipToContent,.commandBarWrapper,.headerViewClass,div[data-automationid=SimpleFooter],div[data-sp-feature-tag=\"Site header host\"],div[data-sp-feature-tag=Comments],div[data-sp-placeholder=Bottom],div[data-sp-placeholder=Top]{display:none}#SuiteNavWrapper,.ms-HubNav{display:none!important}}", true);

// Exports
/* harmony default export */ __webpack_exports__["default"] = ({
  spAppBarParentMobile: "a_a_3e5b0b16",
  spPageContentTransition: "b_a_3e5b0b16"
});


/***/ }),

/***/ "Oqak":
/*!*********************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/styling@7.16.19_baa7aab8a1d5d20fe3858de8537800ba/node_modules/@uifabric/styling/lib/styles/theme.js ***!
  \*********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_uifabric_styling_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/uifabric-styling-bundle */ "fglE");
/* harmony import */ var _ms_uifabric_styling_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_uifabric_styling_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ms_uifabric_styling_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ms_uifabric_styling_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
// Loading @uifabric/styling/./lib/styles/theme.js


/***/ }),

/***/ "PayJ":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/dataSources/base/DataRequestor.js ***!
  \**********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-core-bundle */ "K9kD");
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__["DataRequestor"]; });

// Loading @ms/odsp-datasources/./lib/dataSources/base/DataRequestor.js



/***/ }),

/***/ "Pk8u":
/*!**********************************************!*\
  !*** external "@microsoft/sp-lodash-subset" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_Pk8u__;

/***/ }),

/***/ "Q81X":
/*!***********************************!*\
  !*** ./lib/ApplicationManager.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_sp_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-loader */ "I6O9");
/* harmony import */ var _microsoft_sp_loader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_loader__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ms/sp-telemetry */ "2q6Q");
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ApplicationLoadType__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ApplicationLoadType */ "fBGb");
/* harmony import */ var _BaseApplication__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./BaseApplication */ "n9Iz");
/* harmony import */ var _navigator_OnBeforeNavigationEventName__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navigator/OnBeforeNavigationEventName */ "JwFY");
/* harmony import */ var _navigator_Navigator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./navigator/Navigator */ "2fZ3");
/* harmony import */ var _pageChrome_SPPageChrome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pageChrome/SPPageChrome */ "KdXK");
/* harmony import */ var _SPApplicationBase_resx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./SPApplicationBase.resx */ "GuP6");
var _SPApplicationBase_resx__WEBPACK_IMPORTED_MODULE_9___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./SPApplicationBase.resx */ "GuP6", 1);
// Copyright (c) Microsoft. All rights reserved.










// Qos constants
var startQosScenarioName = 'ApplicationManager.start';
var initializeQosScenarioName = 'ApplicationManager.initialize';
var applicationFailedToLoadFailure = 'ApplicationFailedToLoad';
var shellStartFailure = 'SPShell.Start';
/**
 * Application manager. Includes logic to load SPFX client-side applications.
 * @internal
 */
var ApplicationManager = /** @class */ (function () {
    /**
     * Creates an application manager.
     * @param serviceScope - Root service scope.
     */
    function ApplicationManager(serviceScope, navigator) {
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNotNullOrUndefined(serviceScope, 'serviceScope');
        this._serviceScope = serviceScope;
        this._navigator = navigator || new _navigator_Navigator__WEBPACK_IMPORTED_MODULE_7__["default"](this._serviceScope, this);
    }
    /**
     * Returns true if the current application is a chromeless application.
     *
     * @privateRemarks
     * PageChrome, SuiteNav and application render do not apply to chromeless applications, like
     * Classic pages and ListView application, and should not be called.
     * This is a temporary fix to prevent page chrome DOM and styles from getting inserted into
     * the list view host application.
     *
     * @internal
     */
    ApplicationManager._isChromelessApplication = function (componentId) {
        return (_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Environment"].type === _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["EnvironmentType"].ClassicSharePoint ||
            componentId === 'b1ab4aaa-f779-405c-8683-d3a750b5d18d');
    };
    Object.defineProperty(ApplicationManager.prototype, "currentApplicationId", {
        /**
         * Returns the currently loaded application.
         * Returns Guid.empty if no application is currently loaded.
         */
        get: function () {
            var appComponentId = this._currentApplication && this._currentApplication.componentId;
            return appComponentId ? _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Guid"].parse(appComponentId) : _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Guid"].empty;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApplicationManager.prototype, "currentApplication", {
        /**
         * Returns the currently loaded application.
         * Returns Guid.empty if no application is currently loaded.
         */
        get: function () {
            _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNotNullOrUndefined(this._currentApplication, 'currentApplication');
            return this._currentApplication;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Loads an application and starts its execution.
     *
     * @param preloadedData - Application preloaded data. Must include the application id.
     * @param pageChrome - Page Chrome in which the application will be rendered.
     */
    ApplicationManager.prototype.startApplication = function (preloadedData, pageChrome) {
        var _this = this;
        try {
            _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNonemptyString(preloadedData.clientSideApplicationId, 'preloadedData.clientSideApplicationId');
        }
        catch (error) {
            return Promise.reject(error);
        }
        var qosMonitor = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_QosMonitor"](startQosScenarioName);
        function error(message, failureId) {
            var err = new Error(message);
            _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_TraceLogger"].logError(ApplicationManager._logSource, err);
            qosMonitor.writeUnexpectedFailure(failureId, err);
            throw err;
        }
        var applicationId = preloadedData.clientSideApplicationId;
        // This must run before calling Navigator.navigateToPreloadedData to ensure DialogManager is set up.
        if (!this._isChromelessApplication(applicationId) && !pageChrome) {
            pageChrome = new _pageChrome_SPPageChrome__WEBPACK_IMPORTED_MODULE_8__["default"](this._serviceScope, undefined, applicationId);
        }
        var appManifest = _microsoft_sp_loader__WEBPACK_IMPORTED_MODULE_2__["SPComponentLoader"].tryGetManifestById(applicationId);
        var appComponent = !!appManifest
            ? _microsoft_sp_loader__WEBPACK_IMPORTED_MODULE_2__["SPComponentLoader"].tryGetLoadedComponent(appManifest)
            : undefined;
        if (appComponent) {
            return this._initializeApplicationWithTelemetry(appComponent, applicationId, pageChrome, qosMonitor, error);
        }
        else {
            // Application was not loaded synchronously. Request loading the application.
            var appComponentPromise = this._loadApplicationComponent(applicationId, error);
            return appComponentPromise.then(function (application) {
                return _this._initializeApplicationWithTelemetry(application, applicationId, pageChrome, qosMonitor, error);
            });
        }
    };
    ApplicationManager.prototype._raiseOnBeforeNavigationEventName = function (fromAppId, toAppId) {
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPEventManager"].instance.raiseEvent(_BaseApplication__WEBPACK_IMPORTED_MODULE_5__["default"]._onBeforeNavigationEventName, new _navigator_OnBeforeNavigationEventName__WEBPACK_IMPORTED_MODULE_6__["default"](fromAppId, toAppId));
    };
    Object.defineProperty(ApplicationManager.prototype, "_applicationLoadType", {
        get: function () {
            return this._previousApplication
                ? _ApplicationLoadType__WEBPACK_IMPORTED_MODULE_4__["ApplicationLoadType"].InPlaceNavigation
                : _ApplicationLoadType__WEBPACK_IMPORTED_MODULE_4__["ApplicationLoadType"].FullPageLoad;
        },
        enumerable: false,
        configurable: true
    });
    ApplicationManager.prototype._initializeApplicationWithTelemetry = function (application, applicationId, pageChrome, qosMonitor, error) {
        _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_3__["_PerformanceLogger"].markApplicationStart();
        return this._initializeApplication(new application.default(), applicationId, pageChrome)
            .then(function (result) {
            qosMonitor.writeSuccess();
            return result;
        })
            .catch(function (e) {
            return error(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Text"].format(_SPApplicationBase_resx__WEBPACK_IMPORTED_MODULE_9__["applicationFailedToInitializeError"], e), shellStartFailure);
        });
    };
    /**
     * Loads the application, defined by the application id passed as input.
     * Rejects the promise if the application can't be loaded.
     */
    ApplicationManager.prototype._loadApplicationComponent = function (applicationId, error) {
        return _microsoft_sp_loader__WEBPACK_IMPORTED_MODULE_2__["SPComponentLoader"].loadComponentById(applicationId).catch(function (e) {
            return error(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Text"].format(_SPApplicationBase_resx__WEBPACK_IMPORTED_MODULE_9__["applicationFailedToLoadWithMessageError"], applicationId, e.message), applicationFailedToLoadFailure);
        });
    };
    ApplicationManager.prototype._isChromelessApplication = function (applicationId) {
        return ApplicationManager._isChromelessApplication(applicationId);
    };
    /**
     * Initializes the application.
     * It sets up the PageChrome and SuiteNav if necessary, initializes the application context
     * and renders the application if necessary.
     *
     * @param application - Application to initialize.
     * @param applicationId - Application component Id.
     * @param pageChrome - Application Page Chrome
     *
     * @returns A promise
     */
    ApplicationManager.prototype._initializeApplication = function (application, applicationId, pageChrome) {
        var _this = this;
        // tslint:disable-next-line:no-string-literal
        if (application['__type'] !== 'BaseApplication') {
            return Promise.reject(new Error('The application is not a subclass of BaseApplication'));
        }
        var qosMonitor = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_QosMonitor"](initializeQosScenarioName);
        var applicationManifest = _microsoft_sp_loader__WEBPACK_IMPORTED_MODULE_2__["SPComponentLoader"].tryGetManifestById(applicationId);
        var qosApplicationData = {
            alias: application.alias || applicationManifest.alias,
            isInternal: applicationManifest.isInternal,
            manifestId: applicationManifest.id
        };
        if (this._currentApplication) {
            this._previousApplication = this._currentApplication;
        }
        this._currentApplication = application;
        if (this._previousApplication) {
            this._raiseOnBeforeNavigationEventName(this._previousApplication.componentId, applicationId);
            this._previousApplication._unload();
        }
        try {
            return this._currentApplication
                ._load({
                manifest: applicationManifest,
                parentServiceScope: this._serviceScope,
                navigator: this._navigator,
                instanceId: applicationManifest.id,
                loggingTag: "Application." + applicationManifest.id,
                chrome: pageChrome,
                loadType: this._applicationLoadType
            })
                .then(function () {
                if (_this._previousApplication) {
                    _this._previousApplication.dispose();
                    _this._previousApplication = undefined;
                }
                if (!_this._isChromelessApplication(applicationId)) {
                    _this._currentApplication._loadTheme();
                    _this._currentApplication._render();
                }
                qosMonitor.writeSuccess(qosApplicationData);
                return application;
            })
                .catch(function (e) {
                qosMonitor.writeUnexpectedFailure('AsyncError', e, qosApplicationData);
                return Promise.reject(e);
            });
        }
        catch (e) {
            qosMonitor.writeUnexpectedFailure('GeneralError', e, qosApplicationData);
            return Promise.reject(e);
        }
    };
    ApplicationManager._logSource = _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_LogSource"].create('ApplicationManager');
    return ApplicationManager;
}());
/* harmony default export */ __webpack_exports__["default"] = (ApplicationManager);


/***/ }),

/***/ "QUgr":
/*!*******************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/killswitch/Killswitch.js ***!
  \*******************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-core-bundle */ "K9kD");
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
// Loading @ms/odsp-utilities/./lib/killswitch/Killswitch.js


/***/ }),

/***/ "Rr6l":
/*!**********************************************************!*\
  !*** ./lib/extensibility/ApplicationCustomizerLoader.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_sp_extension_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-extension-base */ "ZFc5");
/* harmony import */ var _microsoft_sp_extension_base__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_extension_base__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _microsoft_sp_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/sp-loader */ "I6O9");
/* harmony import */ var _microsoft_sp_loader__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_loader__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @microsoft/sp-lodash-subset */ "Pk8u");
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ApplicationCustomizerContextFactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ApplicationCustomizerContextFactory */ "IPei");
/* harmony import */ var _BaseApplicationCustomizer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./BaseApplicationCustomizer */ "5aZ1");
/* harmony import */ var _customAction_ClientSideCustomAction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./customAction/ClientSideCustomAction */ "J5U9");
/* harmony import */ var _customAction_CustomActionLocations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./customAction/CustomActionLocations */ "4QmI");
/* harmony import */ var _placeholder_PlaceholderManager__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./placeholder/PlaceholderManager */ "/HB6");










/**
 * A helper class for loading ApplicationCustomizer extensions.
 */
var ApplicationCustomizerLoader = /** @class */ (function () {
    function ApplicationCustomizerLoader(serviceScope) {
        var _this = this;
        this._customActionFromPreloadedData = [];
        this._debugCustomActions = [];
        this._debugCustomizerLoaded = false;
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNotNullOrUndefined(serviceScope, 'serviceScope');
        this._serviceScope = serviceScope;
        this._extensionManager = new _microsoft_sp_extension_base__WEBPACK_IMPORTED_MODULE_2__["_ExtensionManager"](this._serviceScope, _BaseApplicationCustomizer__WEBPACK_IMPORTED_MODULE_6__["default"]);
        this._applicationCustomizerContextFactory = new _ApplicationCustomizerContextFactory__WEBPACK_IMPORTED_MODULE_5__["default"](this._serviceScope);
        // Initialize the placeholder manager.
        serviceScope.whenFinished(function () {
            _this._placeholderManager = serviceScope.consume(_placeholder_PlaceholderManager__WEBPACK_IMPORTED_MODULE_9__["default"].serviceKey);
            _this._placeholderManager._enable();
        });
        this._currentCustomActions = new Set();
    }
    /**
     * This method is called when the client-side application is initializing and before it has
     * rendered. It loads the associated client-side extensions. It may perform asynchronous
     * operations.
     */
    ApplicationCustomizerLoader.prototype.loadExtensions = function (preloadedCustomActions) {
        var _this = this;
        var futureCustomActions = new Set(preloadedCustomActions);
        var hadCustomActions = this._currentCustomActions.size > 0;
        var hasDebugCustomActions = this._hasDebugCustomActions();
        // Will have custom actions include the debug ones to ensure those are always loaded
        var willHaveCustomActions = futureCustomActions.size > 0 || hasDebugCustomActions;
        var areCustomActionsEqual = (!hadCustomActions && !willHaveCustomActions) ||
            (hadCustomActions && willHaveCustomActions && Object(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_4__["isEqual"])(this._currentCustomActions, futureCustomActions));
        var extensionsDisposed = false;
        // If there were custom actions, dispose them before loading the new ones
        if (hadCustomActions && !areCustomActionsEqual) {
            _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_TraceLogger"].logVerbose(ApplicationCustomizerLoader._logSource, 'Disposing existing extensions');
            this.disposeExtensions();
            extensionsDisposed = true;
        }
        this._currentCustomActions = futureCustomActions;
        if ((willHaveCustomActions && !areCustomActionsEqual) || // If new custom actions are needed, load them
            (hasDebugCustomActions && extensionsDisposed) // If we disposed debug extensions, make sure they are reloaded
        ) {
            _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_TraceLogger"].logVerbose(ApplicationCustomizerLoader._logSource, 'Loading new extensions');
            return this._loadExtensions(preloadedCustomActions).then(function () { return _this._loadDebugCustomizerIfEnabled(); });
        }
        return this._loadDebugCustomizerIfEnabled();
    };
    /**
     * Disposes all existing application customizers and their associated placeholder contents.
     */
    ApplicationCustomizerLoader.prototype.disposeExtensions = function () {
        this._extensionManager.disposeExtensions();
        this._debugCustomizerLoaded = false;
        this._currentCustomActions.clear();
    };
    Object.defineProperty(ApplicationCustomizerLoader.prototype, "_customActions", {
        get: function () {
            return this._debugCustomActions.concat(this._customActionFromPreloadedData);
        },
        enumerable: false,
        configurable: true
    });
    /**
     * If the debugging flight is enabled, automatically add the debug application customizer.
     */
    ApplicationCustomizerLoader.prototype._loadDebugCustomizerIfEnabled = function () {
        var _this = this;
        var debugApplicationCustomizerId = 'd29758ba-0fc0-4eac-bcfd-7fe5a7d0bc32';
        if (_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPFlight"].isDebugFlightEnabled &&
            _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPFlight"].isEnabled(1178 /* SppplatDebugExtension */) &&
            !this._debugCustomizerLoaded &&
            this._isDebugModeOn(/* params */ undefined)) {
            var customAction_1 = _customAction_ClientSideCustomAction__WEBPACK_IMPORTED_MODULE_7__["default"]._tryCreateFromDebugData('ClientSideExtension.ApplicationCustomizer', _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Guid"].parse(debugApplicationCustomizerId), // component id
            undefined, // properties,
            0 // Sequence
            );
            if (customAction_1) {
                this._debugCustomizerLoaded = true;
                return _microsoft_sp_loader__WEBPACK_IMPORTED_MODULE_3__["_ManifestStore"].instance
                    .requestManifest(debugApplicationCustomizerId)
                    .then(function () {
                    _this._createApplicationCustomizer(customAction_1);
                })
                    .catch(function (error) {
                    _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_TraceLogger"].logError(ApplicationCustomizerLoader._logSource, error);
                });
            }
        }
        return Promise.resolve();
    };
    ApplicationCustomizerLoader.prototype._loadExtensions = function (preloadedCustomActions) {
        this._loadCustomActions(preloadedCustomActions);
        var extensionPromises = [];
        var customActions = this._customActions;
        for (var _i = 0, customActions_1 = customActions; _i < customActions_1.length; _i++) {
            var customAction = customActions_1[_i];
            if (customAction.location === _customAction_CustomActionLocations__WEBPACK_IMPORTED_MODULE_8__["default"].APPLICATION_CUSTOMIZER) {
                extensionPromises.push(this._createApplicationCustomizer(customAction));
            }
        }
        return Promise.all(extensionPromises).then(function (extensions) {
            return;
        });
    };
    ApplicationCustomizerLoader.prototype._createApplicationCustomizer = function (customAction) {
        var _this = this;
        var qosMonitor = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_QosMonitor"]('ApplicationCustomizer.Create');
        return this._extensionManager
            .createExtension(customAction.clientSideComponentId.toString(), customAction.clientSideComponentProperties, function (extensionContextParameters) {
            return _this._applicationCustomizerContextFactory.createApplicationCustomizerContext(customAction, extensionContextParameters, false);
        })
            .then(function (extension) {
            qosMonitor.writeSuccess(_this._createQosExtraData(customAction));
            return extension;
        })
            .catch(function (error) {
            var err = new Error("Failed to create application customizer '" + customAction.tag + "'. Error information is '" + error.message + "'."); // tslint:disable-line:max-line-length
            qosMonitor.writeExpectedFailure('FailedCreateExtension', error, _this._createQosExtraData(customAction));
            _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_TraceLogger"].logError(ApplicationCustomizerLoader._logSource, err);
            throw err;
        });
    };
    ApplicationCustomizerLoader.prototype._createQosExtraData = function (customAction) {
        return {
            customAction: customAction.tag
        };
    };
    /**
     * Loads custom actions from both the preloaded data and the query parameter.
     */
    ApplicationCustomizerLoader.prototype._loadCustomActions = function (customActions) {
        this._customActionFromPreloadedData = this._loadCustomActionsFromPreloadedData(customActions);
        this._debugCustomActions = this._loadCustomActionsFromQueryParameter();
    };
    /**
     * Reads the custom actions from the preloaded data and creates ClientSideCustomAction objects for them.
     * @param customActions - Custom actions from the preloaded data.
     * @returns Array with the processed custom actions.
     */
    ApplicationCustomizerLoader.prototype._loadCustomActionsFromPreloadedData = function (customActions) {
        var clientSideCustomActions = [];
        // There are scenarios when server side customActions object may not be present.
        // e.g., the client code gets shipped before the server code.
        // In this case we want to be tolerant and treat that as a condition with no
        // custom actions.
        if (!!customActions) {
            // Initialize all the custom actions.
            for (var _i = 0, customActions_2 = customActions; _i < customActions_2.length; _i++) {
                var customAction = customActions_2[_i];
                if (customAction.location === _customAction_CustomActionLocations__WEBPACK_IMPORTED_MODULE_8__["default"].APPLICATION_CUSTOMIZER) {
                    var clientSideCustomAction = _customAction_ClientSideCustomAction__WEBPACK_IMPORTED_MODULE_7__["default"]._tryCreateFromPreloadedCustomAction(customAction);
                    // A failure to create the custom action will log an error and keep going.
                    if (clientSideCustomAction) {
                        clientSideCustomActions.push(clientSideCustomAction);
                    }
                }
            }
        }
        return clientSideCustomActions;
    };
    ApplicationCustomizerLoader.prototype._hasDebugCustomActions = function () {
        var queryParameters = new URL(window.location.href).searchParams;
        return (!!queryParameters.get('customActions') ||
            (_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPFlight"].isDebugFlightEnabled &&
                _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPFlight"].isEnabled(1178 /* SppplatDebugExtension */) && // for debug extension
                this._isDebugModeOn(queryParameters)));
    };
    ApplicationCustomizerLoader.prototype._isDebugModeOn = function (queryParameters) {
        if (!queryParameters) {
            queryParameters = new URL(window.location.href).searchParams;
        }
        if (sessionStorage.getItem('spfx-debug')) {
            // Don't load in TAB which monitor for unexpected files
            return !queryParameters.get('istabtest');
        }
        // Enable showing once ?debug is added as engineers typically do
        return !!queryParameters.get('debug');
    };
    ApplicationCustomizerLoader.prototype._loadCustomActionsFromQueryParameter = function () {
        // Example query parameter:
        // ?customActions={"e2d1da94-b7e9-4c57-9551-1e80a11a035b":{"location":"ClientSideExtension.
        //   ListViewCommandSet.ContextMenu","properties":{"message":"Hello"}}}
        //
        // Example deserialized JSON:
        // {
        //   "e2d1da94-b7e9-4c57-9551-1e80a11a035b": {                            // clientSideComponentId
        //     "location": "ClientSideExtension.ListViewCommandSet.ContextMenu",  // location
        //     "properties": { "message": "Hello" }                               // clientSideComponentProperties
        //    }
        // }
        var parameters = new URL(window.location.href).searchParams;
        var parameterValue = parameters.get('customActions');
        var clientSideCustomActions = [];
        if (parameterValue) {
            var qosMonitor = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_QosMonitor"]('ApplicationCustomizerLoader.parseQueryParam');
            try {
                var decodedParameterValue = decodeURIComponent(parameterValue);
                var queryValue = JSON.parse(decodedParameterValue);
                var missingManifestIds = [];
                if (queryValue) {
                    for (var _i = 0, _a = Object.keys(queryValue); _i < _a.length; _i++) {
                        var key = _a[_i];
                        var clientSideComponentId = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Guid"].tryParse(key);
                        var location_1 = queryValue[key].location;
                        var properties = queryValue[key].properties;
                        var hostProperties = queryValue[key].hostProperties;
                        var sequence = queryValue[key].sequence;
                        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNotNullOrUndefined(clientSideComponentId, 'clientSideComponentId');
                        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNotNullOrUndefined(location_1, 'location');
                        if (!_microsoft_sp_loader__WEBPACK_IMPORTED_MODULE_3__["SPComponentLoader"].tryGetManifestById(clientSideComponentId.toString())) {
                            missingManifestIds.push(clientSideComponentId);
                            continue; // Try to parse additional custom actions
                        }
                        if (clientSideComponentId && location_1) {
                            var customActions = _customAction_ClientSideCustomAction__WEBPACK_IMPORTED_MODULE_7__["default"]._tryCreateFromDebugData(location_1, clientSideComponentId, properties ? JSON.stringify(properties) : '', sequence, hostProperties ? JSON.stringify(hostProperties) : '');
                            if (customActions) {
                                clientSideCustomActions.push(customActions);
                            }
                        }
                    }
                }
                if (missingManifestIds.length > 0) {
                    this._processMissingManifestsErrors(missingManifestIds, qosMonitor);
                }
                else {
                    qosMonitor.writeSuccess();
                }
            }
            catch (e) {
                this._processQueryParamParseErrors(e, parameterValue, qosMonitor);
            }
        }
        return clientSideCustomActions;
    };
    ApplicationCustomizerLoader.prototype._processMissingManifestsErrors = function (missingManifestIds, qosMonitor) {
        var errorMessage = 'Custom action component ids are specified by query parameters but ' +
            'matching manifests cannot be found.';
        var error = new Error(errorMessage + ' Ids: ' + missingManifestIds.join(', '));
        _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_TraceLogger"].logError(ApplicationCustomizerLoader._logSource, error, 'parseCustomActionsQueryParameter');
        // NOTE: Normally SPFx code does not use console.error(), but in this scenario we are
        // talking directly to a developer.  They really need to see this string without the
        // truncating/scrubbing that is normally performed by the Dev Dashboard "Trace" tab.
        console.error(error.message);
        qosMonitor.writeExpectedFailure('ManifestNotFound', error);
    };
    ApplicationCustomizerLoader.prototype._processQueryParamParseErrors = function (error, parameterValue, qosMonitor) {
        _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_TraceLogger"].logError(ApplicationCustomizerLoader._logSource, new Error('Failed to parse the "customActions" URL query parameter:' + error.message));
        // NOTE: Normally SPFx code does not use console.error(), but in this scenario we are
        // talking directly to a developer.  They really need to see this string without the
        // truncating/scrubbing that is normally performed by the Dev Dashboard "Trace" tab.
        console.error('The "customActions" URL query parameter is improperly formatted: ' + decodeURIComponent(parameterValue));
        qosMonitor.writeExpectedFailure('ParseFailure', error);
    };
    ApplicationCustomizerLoader._logSource = _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_LogSource"].create('ApplicationCustomizerLoader');
    return ApplicationCustomizerLoader;
}());
/* harmony default export */ __webpack_exports__["default"] = (ApplicationCustomizerLoader);


/***/ }),

/***/ "SClb":
/*!**********************************************!*\
  !*** ./lib/navigator/NavigationDataError.js ***!
  \**********************************************/
/*! exports provided: NavigationErrorCode, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationErrorCode", function() { return NavigationErrorCode; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__);
// Copyright (c) Microsoft. All rights reserved.


/**
 * Web part error codes.
 *
 * @internal
 */
var NavigationErrorCode;
(function (NavigationErrorCode) {
    /**
     * Failure to fetch navigation data.
     */
    NavigationErrorCode[NavigationErrorCode["fetchData"] = 0] = "fetchData";
    /**
     * Failure to parse navigation data.
     */
    NavigationErrorCode[NavigationErrorCode["parseData"] = 1] = "parseData";
    /**
     * Unknown failure
     */
    NavigationErrorCode[NavigationErrorCode["unknown"] = 2] = "unknown";
})(NavigationErrorCode || (NavigationErrorCode = {}));
/**
 * Represents the contract of a Navigation Data Error.
 * sealed
 * @internal
 */
var NavigationDataError = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(NavigationDataError, _super);
    function NavigationDataError(errorCode, errorMessage, innerError, isExpected, errorPayload) {
        if (isExpected === void 0) { isExpected = false; }
        var _this = _super.call(this, NavigationErrorCode[errorCode], errorMessage, errorPayload) || this;
        // Manually set the prototype, as we can no longer extend built-in classes like Error, Array, Map, etc
        // tslint:disable-next-line:max-line-length
        // [https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work](https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work)
        //
        // Note: the prototype must also be set on any classes which extend this one
        _this.__proto__ = NavigationDataError.prototype; // tslint:disable-line:no-any
        _this._errorId = errorCode;
        _this.innerError = innerError;
        _this._isExpected = isExpected;
        return _this;
    }
    /**
     * Utility function to create an error response.
     * @param errorCode - Represents the navigation error code.
     * @param innerError - Represents the inner error.
     *
     * @returns An error object.
     */
    NavigationDataError.createNavigationError = function (errorCode, innerError) {
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNotNullOrUndefined(innerError, 'innerError');
        var isExpected = NavigationDataError._isExpectedError(errorCode);
        var errorTemplate = NavigationDataError._errorTemplate(errorCode);
        var errorMessage = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Text"].format(errorTemplate, innerError.message);
        return new NavigationDataError(errorCode, errorMessage, innerError, isExpected);
    };
    /**
     * Utility function to create session ended reason
     * @param errorCode - Represents the navigation error code.
     * @param workload - Represents in which scenario/app the error originated
     *
     * @returns A string describing why the session is ending.
     */
    NavigationDataError.sessionEndedReason = function (errorCode, workload) {
        if (workload === void 0) { workload = 'XApp'; }
        var reason = 'RouteNav.';
        if (errorCode === NavigationErrorCode[NavigationErrorCode.parseData]) {
            reason += "Known." + workload + ".MalformedJSON";
        }
        else if (errorCode === NavigationErrorCode[NavigationErrorCode.fetchData]) {
            reason += "Known." + workload + ".NetworkError";
        }
        else {
            reason += "Unknown." + workload + ".NavigationDataError";
        }
        return reason;
    };
    NavigationDataError._isExpectedError = function (errorCode) {
        return errorCode === NavigationErrorCode.parseData;
    };
    NavigationDataError._errorTemplate = function (errorCode) {
        return NavigationDataError._errorCodeToTemplateMap[errorCode] || 'Failed to navigate. Error: {0}';
    };
    Object.defineProperty(NavigationDataError.prototype, "id", {
        /**
         * Gets the error Id.
         */
        get: function () {
            return this._errorId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NavigationDataError.prototype, "category", {
        /**
         * Gets the error category.
         */
        get: function () {
            return 'NavigationDataError';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NavigationDataError.prototype, "isExpected", {
        /**
         * Gets a value indicating whether the error is expected.
         */
        get: function () {
            return this._isExpected;
        },
        enumerable: false,
        configurable: true
    });
    NavigationDataError._errorCodeToTemplateMap = new Map([
        [NavigationErrorCode.fetchData, 'Failed to retrieve navigation data. Error: {0}'],
        [NavigationErrorCode.parseData, 'Failed to parse navigation data. Error: {0}']
    ]);
    return NavigationDataError;
}(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["SPError"]));
/* harmony default export */ __webpack_exports__["default"] = (NavigationDataError);


/***/ }),

/***/ "UWqr":
/*!*********************************************!*\
  !*** external "@microsoft/sp-core-library" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_UWqr__;

/***/ }),

/***/ "Vb17":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/models/chrome/ChromeOptions.js ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: ChromeControlType, NavPlacementType, HeaderLayoutType, UnifiedHeaderLayout, LogoAlignment, FooterLayout, FooterEmphasis */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChromeControlType", function() { return ChromeControlType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavPlacementType", function() { return NavPlacementType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderLayoutType", function() { return HeaderLayoutType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnifiedHeaderLayout", function() { return UnifiedHeaderLayout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoAlignment", function() { return LogoAlignment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterLayout", function() { return FooterLayout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterEmphasis", function() { return FooterEmphasis; });
/**
 * Types of supported chrome controls
 */
var ChromeControlType;
(function (ChromeControlType) {
    ChromeControlType[ChromeControlType["HEADER"] = 0] = "HEADER";
    ChromeControlType[ChromeControlType["NAV"] = 1] = "NAV";
    ChromeControlType[ChromeControlType["FOOTER"] = 2] = "FOOTER";
    ChromeControlType[ChromeControlType["SEARCHBOX"] = 3] = "SEARCHBOX";
})(ChromeControlType || (ChromeControlType = {}));
var NavPlacementType;
(function (NavPlacementType) {
    NavPlacementType[NavPlacementType["LEFT"] = 0] = "LEFT";
    NavPlacementType[NavPlacementType["HORIZONTAL"] = 1] = "HORIZONTAL";
})(NavPlacementType || (NavPlacementType = {}));
/**
 * @deprecated see UnifiedHeaderLayout
 * Defines supported layout type for composite header control.
 * Currently the layout type is indicated from nav placement.
 */
var HeaderLayoutType;
(function (HeaderLayoutType) {
    /** Composite header control takes full width of the page */
    HeaderLayoutType[HeaderLayoutType["FULLBLEED"] = 0] = "FULLBLEED";
    /** Composite header control is placed on a page with left nav */
    HeaderLayoutType[HeaderLayoutType["WITHLEFTNAV"] = 1] = "WITHLEFTNAV";
})(HeaderLayoutType || (HeaderLayoutType = {}));
/** The layout to use for the new UnifiedHeader, which replaces the old headers. */
var UnifiedHeaderLayout;
(function (UnifiedHeaderLayout) {
    /** @deprecated none, don't use the UnifiedHeader and fall back to the old headers */
    UnifiedHeaderLayout[UnifiedHeaderLayout["none"] = 0] = "none";
    /** Large */
    UnifiedHeaderLayout[UnifiedHeaderLayout["standard"] = 1] = "standard";
    /** Medium */
    UnifiedHeaderLayout[UnifiedHeaderLayout["compact"] = 2] = "compact";
    /** @deprecated not currently supported */
    UnifiedHeaderLayout[UnifiedHeaderLayout["minimal"] = 3] = "minimal";
    /** Extended */
    UnifiedHeaderLayout[UnifiedHeaderLayout["extended"] = 4] = "extended";
})(UnifiedHeaderLayout || (UnifiedHeaderLayout = {}));
/** Logo alignment of extended header layout */
var LogoAlignment;
(function (LogoAlignment) {
    LogoAlignment[LogoAlignment["left"] = 0] = "left";
    LogoAlignment[LogoAlignment["middle"] = 1] = "middle";
    LogoAlignment[LogoAlignment["right"] = 2] = "right";
})(LogoAlignment || (LogoAlignment = {}));
/**
 * The layout to use for the footer
 */
var FooterLayout;
(function (FooterLayout) {
    FooterLayout[FooterLayout["SIMPLE"] = 0] = "SIMPLE";
    FooterLayout[FooterLayout["EXTENDED"] = 1] = "EXTENDED";
    FooterLayout[FooterLayout["STACKED"] = 2] = "STACKED";
})(FooterLayout || (FooterLayout = {}));
/**
 * The emphasis to use in the footer.
 * Note that this is different than the enum ordering that fabric uses, in order
 * to have strong be the default for unset variants in the property flags
 */
var FooterEmphasis;
(function (FooterEmphasis) {
    FooterEmphasis[FooterEmphasis["Strong"] = 0] = "Strong";
    FooterEmphasis[FooterEmphasis["Neutral"] = 1] = "Neutral";
    FooterEmphasis[FooterEmphasis["Soft"] = 2] = "Soft";
    FooterEmphasis[FooterEmphasis["None"] = 3] = "None";
})(FooterEmphasis || (FooterEmphasis = {}));
//# sourceMappingURL=ChromeOptions.js.map

/***/ }),

/***/ "W+j4":
/*!**************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/theming/WebTheme.js ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FabricTheming__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FabricTheming */ "0XrT");
/* harmony import */ var _RgbaColor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RgbaColor */ "M2il");
/* harmony import */ var _encoding_UriEncoding__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../encoding/UriEncoding */ "+35T");
// OneDrive:IgnoreCodeCoverage



/**
 * Utility methods which can be used to load the theme of a SharePoint site.
 */
var WebTheme = /** @class */ (function () {
    function WebTheme() {
    }
    /**
     * Constructs the URL of a REST endpoint which will return the web theme.
     * @param {IWebContextInfo} webContextInfo Context information about the web.
     * @param {string} cultureName Current UI culture.
     * @param {string} themeOverride URL to a temporary override theme (e.g. preview).
     */
    WebTheme.makeWebThemeRestUrl = function (webServerRelativeUrl, cultureName, themeOverride) {
        'use strict';
        var webUrl = webServerRelativeUrl;
        if (webUrl && webUrl[webUrl.length - 1] === '/') {
            // Trim trailing slash.
            webUrl = webUrl.substring(0, webUrl.length - 1);
        }
        webUrl = _encoding_UriEncoding__WEBPACK_IMPORTED_MODULE_2__["default"].escapeUrlForCallback(webUrl);
        var webThemeRestEndpoint = _encoding_UriEncoding__WEBPACK_IMPORTED_MODULE_2__["default"].escapeUrlForCallback(webUrl) +
            '/_api/SP.Web.GetContextWebThemeData?noImages=true&lcid=' +
            _encoding_UriEncoding__WEBPACK_IMPORTED_MODULE_2__["default"].encodeURIComponent(cultureName);
        if (themeOverride) {
            webThemeRestEndpoint += '&ThemeOverride=' + _encoding_UriEncoding__WEBPACK_IMPORTED_MODULE_2__["default"].encodeURIComponent(themeOverride);
        }
        return webThemeRestEndpoint;
    };
    /**
     * Constructs the URL of a REST endpoint which will return the web theme.
     * @param {IWebContextInfo} webContextInfo Context information about the web.
     */
    WebTheme.processWebThemeRestResponse = function (responseText) {
        // This could throw if the handler returns an HTML error page or invalis JSON.
        // DataSource will count that as an error and call the error callback.
        'use strict';
        var response = JSON.parse(responseText);
        var rawThemeData;
        if (response && response.d && response.d.GetContextWebThemeData) {
            rawThemeData = JSON.parse(response.d.GetContextWebThemeData);
        }
        var themeData = WebTheme.processRawThemeData(rawThemeData);
        return themeData;
    };
    /**
     * Converts an IThemeDataRaw into an IThemeData.
     * @param {IThemeDataRaw} themeData Raw theme data to process.
     */
    WebTheme.processRawThemeData = function (themeData) {
        'use strict';
        if (themeData) {
            var coerceToColor = WebTheme.coerceToColor;
            var setColorIfMissing = WebTheme.SetColorIfMissing;
            var colors = {};
            var inputColors = themeData.Palette ? themeData.Palette.Colors : {};
            colors = WebTheme.convertColorsToRgba(inputColors);
            var fabricColors = _FabricTheming__WEBPACK_IMPORTED_MODULE_0__["default"].generateFabricColors(colors['ContentAccent1'], themeData.IsInverted);
            var pageBG = coerceToColor(colors['PageBackground']) ||
                coerceToColor(themeData.IsInverted ? '#1b1a19' : '#ffffff');
            var bgOverlay = coerceToColor(colors['BackgroundOverlay']) || null;
            var alpha40 = Math.round(0.4 * _RgbaColor__WEBPACK_IMPORTED_MODULE_1__["default"].maxComponent);
            for (var colorKey in fabricColors) {
                setColorIfMissing(colors, colorKey, fabricColors[colorKey]);
            }
            setColorIfMissing(colors, 'white', pageBG);
            // RgbaColor.fromRgba and RgbaColor.clone both return new objects.
            // This is important for avoiding duplicate filtering logic in the caching layer.
            setColorIfMissing(colors, 'primaryBackground', _RgbaColor__WEBPACK_IMPORTED_MODULE_1__["default"].clone(pageBG));
            setColorIfMissing(colors, 'primaryText', fabricColors['primaryText'] || coerceToColor('#333'));
            setColorIfMissing(colors, 'whiteTranslucent40', pageBG && _RgbaColor__WEBPACK_IMPORTED_MODULE_1__["default"].fromRgba(pageBG.R, pageBG.G, pageBG.B, alpha40));
            setColorIfMissing(colors, 'backgroundOverlay', bgOverlay);
            setColorIfMissing(colors, 'suiteBarBackground', coerceToColor(colors['SuiteBarBackground']) || null);
            setColorIfMissing(colors, 'suiteBarText', coerceToColor(colors['SuiteBarText']) || null);
            setColorIfMissing(colors, 'suiteBarDisabledText', coerceToColor(colors['SuiteBarDisabledText']) || null);
            setColorIfMissing(colors, 'topBarBackground', coerceToColor(colors['TopBarBackground']) || null);
            setColorIfMissing(colors, 'topBarText', coerceToColor(colors['TopBarText']) || null);
            setColorIfMissing(colors, 'topBarHoverText', coerceToColor(colors['TopBarHoverText']) || null);
            setColorIfMissing(colors, 'dialogBorder', coerceToColor(colors['DialogBorder']) || null);
            return {
                backgroundImageUri: themeData.BackgroundImageUri,
                cacheToken: themeData.ThemeCacheToken,
                isDefault: themeData.IsDefault,
                isInverted: themeData.IsInverted,
                palette: colors,
                version: themeData.Version
            };
        }
        return {
            backgroundImageUri: '',
            cacheToken: '',
            isDefault: true,
            isInverted: false,
            palette: {},
            version: ''
        };
    };
    WebTheme.convertColorsToRgba = function (colors) {
        var convertedColors = {};
        for (var colorKey in colors) {
            if (colors.hasOwnProperty(colorKey)) {
                var colorValue = WebTheme.coerceToColor(colors[colorKey]);
                // TODO: console.warn if colorValue is undefined?
                if (colorValue) {
                    convertedColors[colorKey] = colorValue;
                }
            }
        }
        return convertedColors;
    };
    /**
     * Coerces an HTML color string or a color object in raw web theme data into an RgbaColor.
     * @param {any} toColor Object to be converted into an RgbaColor.
     */
    WebTheme.coerceToColor = function (toColor) {
        'use strict';
        var resultColor;
        // Use duck typing to extract a color
        if (!toColor) {
            resultColor = null;
        }
        else if (typeof toColor === 'string' || toColor instanceof String) {
            resultColor = _RgbaColor__WEBPACK_IMPORTED_MODULE_1__["default"].fromHtmlColor(String(toColor));
        }
        else if ('DefaultColor' in toColor) {
            resultColor = WebTheme.coerceToColor(toColor['DefaultColor']);
        }
        else if ('R' in toColor && 'G' in toColor && 'B' in toColor) {
            resultColor = _RgbaColor__WEBPACK_IMPORTED_MODULE_1__["default"].fromRgba(toColor.R, toColor.G, toColor.B, toColor.A);
        }
        return resultColor;
    };
    WebTheme.SetColorIfMissing = function (palette, slot, color) {
        if (!palette[slot]) {
            palette[slot] = color;
        }
    };
    return WebTheme;
}());
/* harmony default export */ __webpack_exports__["default"] = (WebTheme);
//# sourceMappingURL=WebTheme.js.map

/***/ }),

/***/ "X+PM":
/*!*********************************************!*\
  !*** external "@microsoft/sp-page-context" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_X_PM__;

/***/ }),

/***/ "ZFc5":
/*!***********************************************!*\
  !*** external "@microsoft/sp-extension-base" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_ZFc5__;

/***/ }),

/***/ "c09w":
/*!**********************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/logging/events/Qos.event.js ***!
  \**********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-core-bundle */ "K9kD");
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__["Qos"]; });

// Loading @ms/odsp-utilities/./lib/logging/events/Qos.event.js



/***/ }),

/***/ "dQCu":
/*!************************************!*\
  !*** ./lib/common/Killswitches.js ***!
  \************************************/
/*! exports provided: Killswitches */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Killswitches", function() { return Killswitches; });
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);

var Killswitches = /** @class */ (function () {
    function Killswitches() {
    }
    Killswitches.isDuplicateErrorMessageV2KillSwitchActivated = function () {
        return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Guid"].parse('efa9490b-c037-465e-ae95-6eccef6061e8'), '5/11/20', 'Prevent duplicate error messages from appearing');
    };
    Killswitches.isAddSPAppBarToPageChromKillSwitchActivated = function () {
        return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('52ab8371-001c-418b-a66b-30228495dacf'
        /* 08/07/2020,
        Adding loading the SPAppBar to the SP Page Chrome */
        );
    };
    Killswitches.isDisableSPAppBarEmbeddedKillSwitchActivated = function () {
        return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('fb9550c9-1df5-415a-ac3d-eb0457856b47'
        /* 08/31/2020,
        Disable loading the SPAppBar in embedded scenarios */
        );
    };
    Killswitches.AddSPAppBarPanelKillSwitchActivated = function () {
        return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('eb1860f3-43ad-408e-93b1-de032d3a54f6'
        /* 09/1/2020,
        Load SPAppBarPanel in embedded scenarios */
        );
    };
    Killswitches.AddSPAppBarMobileKillSwitchActivated = function () {
        return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('96d757fe-50c4-40fa-8ca9-39b6fb572665'
        /* 10/26/2020,
        Should render app bar on mobile */
        );
    };
    Killswitches.UseMobileBreakpointAppBarKillSwitchActivated = function () {
        return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('f26a26a6-314a-4de1-94c5-846a65340b42'
        /* 11/17/2020,
        Use breakpoints instead of user agent for app bar mobile experience */
        );
    };
    Killswitches.UpdateListHostPageContextKillSwitchActivated = function () {
        return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('03b77457-9550-46d3-8921-3262f4121884'
        /* 09/21/2020,
        Update the page context of sp-list-host app. */
        );
    };
    Killswitches.PreventBlankPageInListHostKillSwitchActivated = function () {
        return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('af34f028-599a-4d87-bf02-0c885c4292dc'
        /* 10/30/2020,
        Prevent blank page (listhost) from showing up in list/doclib navigations. */
        );
    };
    Killswitches.ShouldLoadAppBarKillSwitchActivated = function () {
        return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPKillSwitch"].isActivated('c6e33bff-1573-4cf3-ad2b-7d0652648756'
        /* 01/10/2021,
        Prevent AppBar in some scenarios */
        );
    };
    return Killswitches;
}());



/***/ }),

/***/ "efvT":
/*!*************************************************!*\
  !*** ./lib/extensibility/SearchQueryManager.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_sp_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-loader */ "I6O9");
/* harmony import */ var _microsoft_sp_loader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_loader__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _customAction_CustomActionLocations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customAction/CustomActionLocations */ "4QmI");
/* harmony import */ var _ms_sp_suite_nav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ms/sp-suite-nav */ "6iXJ");
/* harmony import */ var _ms_sp_suite_nav__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_suite_nav__WEBPACK_IMPORTED_MODULE_4__);





/**
 * Search query manager is used to get the search query in SPFx.
 * It supports Search query modifier extensions that can enrich the search query, and supports cases where the user
 * comes from classic pages to modern.
 *
 * @internal
 */
var SearchQueryManager = /** @class */ (function () {
    function SearchQueryManager(serviceScope) {
        this._isInitialized = false;
        this._areExtensionsLoaded = false;
        this._serviceScope = serviceScope;
    }
    SearchQueryManager.prototype.initialize = function (preloadedData) {
        var qosMonitor = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_QosMonitor"]('SearchQueryManager.initialize');
        this._preloadedData = preloadedData;
        var queryParameters = new URL(window.location.href).searchParams;
        this._isInitialized = false;
        this._areExtensionsLoaded = false;
        var searchQuery = this._getUrlSearchQuery(queryParameters);
        if (searchQuery) {
            if (!_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPFlight"].isEnabled(1136 /* O365ShellModuleJSClient */)) {
                // The faster suiteNav sets the searchBox text from the server-side, so this is unnecessary.
                this._updateSearchBoxText(searchQuery);
            }
        }
        if (searchQuery && this._hasExtensions(queryParameters)) {
            return this._initializeExtensions(qosMonitor);
        }
        else {
            this._isInitialized = true;
            this._areExtensionsLoaded = false;
            qosMonitor.writeSuccess({ numberOfExtensions: 0 });
            return Promise.resolve();
        }
    };
    /**
     * Update SearchQueryManager from location
     * @param location - next location Data
     */
    SearchQueryManager.prototype.updateFromLocation = function (location) {
        var qosMonitor = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_QosMonitor"]('SearchQueryManager.update');
        var queryParameters = new URLSearchParams(location.search.substring(1));
        var searchQuery = this._getUrlSearchQuery(queryParameters);
        if (searchQuery) {
            this._updateSearchBoxText(searchQuery);
        }
        if (searchQuery && this._hasExtensions(queryParameters) && !this._areExtensionsLoaded) {
            return this._initializeExtensions(qosMonitor);
        }
        else {
            qosMonitor.writeSuccess({ numberOfExtensions: 0 });
            return Promise.resolve();
        }
    };
    SearchQueryManager.prototype.isInitialized = function () {
        return this._isInitialized;
    };
    /**
     * Get the search query from the current URL.
     */
    SearchQueryManager.prototype.getSearchQuery = function () {
        if (!this._isInitialized) {
            return Promise.reject(new Error('SearchQueryManager is not initialized'));
        }
        var qosMonitor = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_1__["_QosMonitor"]('SearchQueryManager.getSearchQuery');
        var queryParameters = new URL(window.location.href).searchParams;
        var searchQuery = this._getUrlSearchQuery(queryParameters);
        if (searchQuery && this._hasExtensions(queryParameters)) {
            return this._getExtensionManager()
                .then(function (extensionManager) { return extensionManager.getSearchQuery(searchQuery); })
                .then(function (q) {
                qosMonitor.writeSuccess();
                return q;
            })
                .catch(function (e) {
                qosMonitor.writeUnexpectedFailure(undefined, e);
                throw e;
            });
        }
        else {
            qosMonitor.writeSuccess();
            return Promise.resolve(searchQuery);
        }
    };
    SearchQueryManager.prototype._getUrlSearchQuery = function (searchParams) {
        // If ?q is not present, ?k can be used (support cases coming from classic pages)
        return searchParams.get('q') || searchParams.get('k') || undefined;
    };
    /**
     * Returns true if there is any SearchQueryModifier extension.
     * When using query params, it just checks if there is any custom action regardless of type.
     * This is exclusively a debug scenario and it's faster and smaller code, considering this runs in a core scenario.
     */
    SearchQueryManager.prototype._hasExtensions = function (searchParams) {
        return (searchParams.has('customActions') ||
            (!!this._preloadedData.customActions &&
                this._preloadedData.customActions.some(function (customAction) { return customAction.location === _customAction_CustomActionLocations__WEBPACK_IMPORTED_MODULE_3__["default"].SEARCH_QUERY_MODIFIER; })));
    };
    SearchQueryManager.prototype._getExtensionManager = function () {
        var _this = this;
        if (!this._extensionManagerPromise) {
            this._extensionManagerPromise = _microsoft_sp_loader__WEBPACK_IMPORTED_MODULE_2__["SPComponentLoader"].loadComponentById('4958ea79-6ff3-4480-8291-0932dd010869').then(function (spSearchExtensibility) {
                return new spSearchExtensibility._SearchQueryExtensionManager(_this._serviceScope);
            });
        }
        return this._extensionManagerPromise;
    };
    SearchQueryManager.prototype._initializeExtensions = function (qosMonitor) {
        var _this = this;
        return this._getExtensionManager()
            .then(function (extensionManager) {
            return extensionManager
                .initializeExtensions(_this._preloadedData.customActions)
                .then(function (numberOfExtensions) {
                _this._areExtensionsLoaded = true;
                _this._isInitialized = true;
                qosMonitor.writeSuccess({ numberOfExtensions: numberOfExtensions });
            });
        })
            .catch(function (e) {
            qosMonitor.writeUnexpectedFailure(undefined, e, { numberOfExtensions: 0 });
            throw e;
        });
    };
    /**
     * Updates the search box text.
     * If there is no search query it doesn't do anything to preserve what the user originally typed.
     */
    SearchQueryManager.prototype._updateSearchBoxText = function (searchQuery) {
        // VSO:887348 - Check that current searchBox text is the same as the previous page query param before updating.
        if (!!searchQuery && this._serviceScope) {
            Object(_ms_sp_suite_nav__WEBPACK_IMPORTED_MODULE_4__["shellSearch"])(this._serviceScope).then(function (search) {
                search.SetSearchText(searchQuery);
            });
        }
    };
    SearchQueryManager.serviceKey = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["ServiceKey"].create('sp-application-base:SearchQueryManager', SearchQueryManager);
    return SearchQueryManager;
}());
/* harmony default export */ __webpack_exports__["default"] = (SearchQueryManager);


/***/ }),

/***/ "fBGb":
/*!************************************!*\
  !*** ./lib/ApplicationLoadType.js ***!
  \************************************/
/*! exports provided: ApplicationLoadType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationLoadType", function() { return ApplicationLoadType; });
// Copyright (c) Microsoft. All rights reserved.
/**
 * Determines the type of the application load.
 * This is used by SPFx applications to understand whether they were initiated as part of a
 * full page load or an in-place navigation.
 *
 * @internal
 */
var ApplicationLoadType;
(function (ApplicationLoadType) {
    /**
     * This informs the application that it was loaded as part of a full-page load.
     */
    ApplicationLoadType[ApplicationLoadType["FullPageLoad"] = 0] = "FullPageLoad";
    /**
     * This informs the application that it was loaded as part of an in-place navigation from
     * a different application.
     */
    ApplicationLoadType[ApplicationLoadType["InPlaceNavigation"] = 1] = "InPlaceNavigation";
})(ApplicationLoadType || (ApplicationLoadType = {}));


/***/ }),

/***/ "fglE":
/*!**********************************************!*\
  !*** external "@ms/uifabric-styling-bundle" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_fglE__;

/***/ }),

/***/ "iVgB":
/*!***********************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/features/FeatureOverrides.js ***!
  \***********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-core-bundle */ "K9kD");
/* harmony import */ var _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ms_odsp_core_bundle__WEBPACK_IMPORTED_MODULE_0__["FeatureOverrides"]; });

// Loading @ms/odsp-utilities/./lib/features/FeatureOverrides.js



/***/ }),

/***/ "jOlS":
/*!************************************************!*\
  !*** external "@microsoft/load-themed-styles" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_jOlS__;

/***/ }),

/***/ "jZLx":
/*!******************************************************!*\
  !*** ./lib/extensibility/placeholder/Placeholder.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PlaceholderContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PlaceholderContent */ "DXcd");
/* harmony import */ var _PlaceholderName__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PlaceholderName */ "Cs6k");



/**
 * Represents the placeholder div provided by the application
 *
 * @internal
 */
var Placeholder = /** @class */ (function () {
    function Placeholder(definition, manager) {
        // This array is kept ordered by sequence number
        this._entries = [];
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNotNullOrUndefined(definition, 'definition');
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNotNullOrUndefined(definition.domElement, 'definition.domElement');
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNotNullOrUndefined(manager, 'manager');
        this._name = definition.name;
        this._domElement = definition.domElement;
        this._applicationDomElement = undefined;
    }
    Object.defineProperty(Placeholder.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Create a new placeholder content for this placeholder
     */
    Placeholder.prototype.createPlaceholderContent = function (sequence, options) {
        // Create a separate browser DOM node to host the third-party placeholder.
        // We found that, if we use a node from the ReactJS virtual DOM tree,
        // and in the child DOM tree the placeholder tries to load a different
        // version of ReactJS, that can break due to compatibility issues between
        // the two different verions of ReactJS.
        var contentDiv = document.createElement('div');
        // We will add legacy css style for all 3rd extensions.
        contentDiv.classList.add('ms-SPLegacyFabricBlock');
        var position = this._addContentDiv(contentDiv, sequence);
        var placeholderContent = new _PlaceholderContent__WEBPACK_IMPORTED_MODULE_1__["default"]({
            placeholder: this,
            sequence: sequence,
            domElement: contentDiv,
            options: options
        });
        this._entries.splice(position, 0, { placeholderContent: placeholderContent, sequence: sequence });
        return placeholderContent;
    };
    Placeholder.prototype.removePlaceholderContent = function (placeholderContent) {
        for (var i = 0; i < this._entries.length; i++) {
            if (this._entries[i].placeholderContent === placeholderContent) {
                this._domElement.removeChild(this._entries[i].placeholderContent.domElement);
                this._entries.splice(i, 1);
                i--; // Because the current element was removed we should keep looking at the same index
            }
        }
    };
    Placeholder.prototype.attachToApplication = function (applicationDomElement) {
        this._applicationDomElement = applicationDomElement;
        this._applicationDomElement.appendChild(this._domElement);
    };
    Placeholder.prototype.detachFromApplication = function () {
        if (this._applicationDomElement) {
            this._applicationDomElement.appendChild(this._domElement);
            this._applicationDomElement = undefined;
        }
    };
    /**
     * Adds the DOM element of a placeholder content in the placeholder DIV element.
     * Returns the position inside of the placeholder where the content was placed.
     *
     * @param domElement - DOM element of the placeholder content
     * @param sequence - Sequence number of the placeholder content
     */
    Placeholder.prototype._addContentDiv = function (domElement, sequence) {
        // Keep the entries ordered by sequence number.
        // Bottom Placeholder is sorted by sequence number
        // in reverse order.
        var i;
        if (this.name === _PlaceholderName__WEBPACK_IMPORTED_MODULE_2__["default"].Bottom) {
            i = this._entries.length;
            while (i > 0 && sequence > this._entries[i - 1].sequence) {
                i--;
            }
        }
        else {
            i = 0;
            while (i < this._entries.length && sequence >= this._entries[i].sequence) {
                i++;
            }
        }
        if (i < this._entries.length) {
            var nextDiv = this._entries[i].placeholderContent.domElement;
            this._domElement.insertBefore(domElement, nextDiv);
        }
        else {
            this._domElement.appendChild(domElement);
        }
        return i;
    };
    return Placeholder;
}());
/* harmony default export */ __webpack_exports__["default"] = (Placeholder);


/***/ }),

/***/ "mwqp":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/*! exports provided: ApplicationCustomizerContext, BaseApplicationCustomizer, ApplicationAccessor, _DialogManagerConfiguration, _SearchQueryManager, PlaceholderContent, PlaceholderName, _Placeholder, PlaceholderProvider, _PlaceholderManager, BaseApplication, _OnBeforeNavigationEventName, BaseApplicationContext, _ApplicationManager, _Navigator, _NavigationDataError, _NavigationErrorCode, _PrefetchedDataEventArgs, _ApplicationLoadType, _SPThemeProvider, WebThemeProvider, spLoadTheme, applySpThemeDefaults, WebThemeDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _extensibility_ApplicationCustomizerContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./extensibility/ApplicationCustomizerContext */ "L9BA");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApplicationCustomizerContext", function() { return _extensibility_ApplicationCustomizerContext__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _extensibility_BaseApplicationCustomizer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extensibility/BaseApplicationCustomizer */ "5aZ1");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseApplicationCustomizer", function() { return _extensibility_BaseApplicationCustomizer__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _extensibility_ApplicationAccessor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extensibility/ApplicationAccessor */ "75qc");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApplicationAccessor", function() { return _extensibility_ApplicationAccessor__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _extensibility_DialogManagerConfiguration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./extensibility/DialogManagerConfiguration */ "7Cl3");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_DialogManagerConfiguration", function() { return _extensibility_DialogManagerConfiguration__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _extensibility_SearchQueryManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./extensibility/SearchQueryManager */ "efvT");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_SearchQueryManager", function() { return _extensibility_SearchQueryManager__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _extensibility_placeholder_PlaceholderContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./extensibility/placeholder/PlaceholderContent */ "DXcd");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PlaceholderContent", function() { return _extensibility_placeholder_PlaceholderContent__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _extensibility_placeholder_PlaceholderName__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./extensibility/placeholder/PlaceholderName */ "Cs6k");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PlaceholderName", function() { return _extensibility_placeholder_PlaceholderName__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _extensibility_placeholder_Placeholder__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./extensibility/placeholder/Placeholder */ "jZLx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_Placeholder", function() { return _extensibility_placeholder_Placeholder__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _extensibility_placeholder_PlaceholderProvider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./extensibility/placeholder/PlaceholderProvider */ "/Kpt");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PlaceholderProvider", function() { return _extensibility_placeholder_PlaceholderProvider__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _extensibility_placeholder_PlaceholderManager__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./extensibility/placeholder/PlaceholderManager */ "/HB6");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_PlaceholderManager", function() { return _extensibility_placeholder_PlaceholderManager__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _BaseApplication__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./BaseApplication */ "n9Iz");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseApplication", function() { return _BaseApplication__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _navigator_OnBeforeNavigationEventName__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./navigator/OnBeforeNavigationEventName */ "JwFY");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_OnBeforeNavigationEventName", function() { return _navigator_OnBeforeNavigationEventName__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _BaseApplicationContext__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./BaseApplicationContext */ "93Rs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseApplicationContext", function() { return _BaseApplicationContext__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _ApplicationManager__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ApplicationManager */ "Q81X");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_ApplicationManager", function() { return _ApplicationManager__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _navigator_Navigator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./navigator/Navigator */ "2fZ3");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_Navigator", function() { return _navigator_Navigator__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _navigator_NavigationDataError__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./navigator/NavigationDataError */ "SClb");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_NavigationDataError", function() { return _navigator_NavigationDataError__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_NavigationErrorCode", function() { return _navigator_NavigationDataError__WEBPACK_IMPORTED_MODULE_15__["NavigationErrorCode"]; });

/* harmony import */ var _navigator_PrefetchedDataEventArgs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./navigator/PrefetchedDataEventArgs */ "n9H6");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_PrefetchedDataEventArgs", function() { return _navigator_PrefetchedDataEventArgs__WEBPACK_IMPORTED_MODULE_16__["default"]; });

/* harmony import */ var _ApplicationLoadType__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./ApplicationLoadType */ "fBGb");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_ApplicationLoadType", function() { return _ApplicationLoadType__WEBPACK_IMPORTED_MODULE_17__["ApplicationLoadType"]; });

/* harmony import */ var _pageChrome_SPThemeProvider__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pageChrome/SPThemeProvider */ "6GSH");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_SPThemeProvider", function() { return _pageChrome_SPThemeProvider__WEBPACK_IMPORTED_MODULE_18__["default"]; });

/* harmony import */ var _ms_odsp_datasources_lib_providers_theming_WebThemeProvider__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ms/odsp-datasources/lib/providers/theming/WebThemeProvider */ "N+FS");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WebThemeProvider", function() { return _ms_odsp_datasources_lib_providers_theming_WebThemeProvider__WEBPACK_IMPORTED_MODULE_19__["WebThemeProvider"]; });

/* harmony import */ var _ms_odsp_datasources_lib_providers_theming_ThemeUtilities__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ms/odsp-datasources/lib/providers/theming/ThemeUtilities */ "5ORI");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "spLoadTheme", function() { return _ms_odsp_datasources_lib_providers_theming_ThemeUtilities__WEBPACK_IMPORTED_MODULE_20__["spLoadTheme"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "applySpThemeDefaults", function() { return _ms_odsp_datasources_lib_providers_theming_ThemeUtilities__WEBPACK_IMPORTED_MODULE_20__["applySpThemeDefaults"]; });

/* harmony import */ var _ms_odsp_datasources_lib_dataSources_theming_spList_WebThemeDataSource__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ms/odsp-datasources/lib/dataSources/theming/spList/WebThemeDataSource */ "Be1r");
/* empty/unused harmony star reexport *//* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WebThemeDataSource", function() { return _ms_odsp_datasources_lib_dataSources_theming_spList_WebThemeDataSource__WEBPACK_IMPORTED_MODULE_21__["default"]; });

/**
 * SharePoint Framework support for building and extending client-side applications.
 *
 * @packagedocumentation
 */
// Application Customizer





// Placeholders





// Base application








// Page Chrome

/*
@internal
*/

/*
@internal
*/

// export * from '@ms/odsp-datasources/lib/providers/theming/ThemeInitializer';
// Unfortunately, themeInitializer causes errors if it is exported.
/*
@internal
*/

/*
@internal
*/



/***/ }),

/***/ "n5/O":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/providers/theming/MDL2Theme.js ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: MDL2Palette, FluentNeutrals, MDL2Effects, MDL2FontStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDL2Palette", function() { return MDL2Palette; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FluentNeutrals", function() { return FluentNeutrals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDL2Effects", function() { return MDL2Effects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDL2FontStyles", function() { return MDL2FontStyles; });
var MDL2Palette = {
    neutralDark: '#212121',
    neutralPrimary: '#333333',
    neutralPrimaryAlt: '#3c3c3c',
    neutralSecondary: '#666666',
    neutralSecondaryAlt: '#767676',
    neutralTertiary: '#a6a6a6',
    neutralTertiaryAlt: '#c8c8c8',
    neutralQuaternary: '#d0d0d0',
    neutralQuaternaryAlt: '#dadada',
    neutralLight: '#eaeaea',
    neutralLighter: '#f4f4f4',
    neutralLighterAlt: '#f8f8f8',
    // Shared Colors
    red: '#e81123',
    redDark: '#a80000'
};
var FluentNeutrals = {
    neutralDark: '#201f1e',
    neutralPrimary: '#323130',
    neutralPrimaryAlt: '#3b3a39',
    neutralSecondary: '#605e5c',
    neutralSecondaryAlt: '#8a8886',
    neutralTertiary: '#a19f9d',
    neutralTertiaryAlt: '#c8c6c4',
    neutralQuaternary: '#d2d0ce',
    neutralQuaternaryAlt: '#e1dfdd',
    neutralLight: '#edebe9',
    neutralLighter: '#f3f2f1',
    neutralLighterAlt: '#faf9f8'
};
var MDL2Effects = {
    elevation4: '0 0 5px 0 rgba(0,0,0,.4)',
    elevation8: '0 0 5px 0 rgba(0,0,0,.4)',
    elevation16: '0 0 5px 0 rgba(0,0,0,.4)',
    elevation64: '0 0 5px 0 rgba(0,0,0,.4)',
    roundedCorner2: '0px',
    roundedCorner4: '0px',
    roundedCorner6: '0px'
};
var MDL2FontStyles = {
    tiny: {
        fontSize: 10,
        fontWeight: 600
    },
    xSmall: {
        fontSize: 11,
        fontWeight: 400
    },
    small: {
        fontSize: 12,
        fontWeight: 400
    },
    smallPlus: {
        fontSize: 13,
        fontWeight: 400
    },
    medium: {
        fontSize: 14,
        fontWeight: 400
    },
    mediumPlus: {
        fontSize: 15,
        fontWeight: 400
    },
    large: {
        fontSize: 17,
        fontWeight: 300
    },
    xLarge: {
        fontSize: 21,
        fontWeight: 100
    },
    xLargePlus: {
        fontSize: 21,
        fontWeight: 100
    },
    xxLarge: {
        fontSize: 28,
        fontWeight: 100
    },
    xxLargePlus: {
        fontSize: 28,
        fontWeight: 100
    },
    superLarge: {
        fontSize: 42,
        fontWeight: 100
    },
    mega: {
        fontSize: 72,
        fontWeight: 100
    }
};
//# sourceMappingURL=MDL2Theme.js.map

/***/ }),

/***/ "n9H6":
/*!**************************************************!*\
  !*** ./lib/navigator/PrefetchedDataEventArgs.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__);
// Copyright (c) Microsoft. All rights reserved.


/**
 * Arguments for a prefetched data event.
 *
 * @internal
 */
var PrefetchedDataEventArgs = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(PrefetchedDataEventArgs, _super);
    /**
     * Initializes a new instance of the PrefetchedDataEventArgs class
     * @param appId - Represents the application Id
     * @param url - Represents the page url
     * @param data - Represents the payload
     */
    // tslint:disable-next-line:no-any
    function PrefetchedDataEventArgs(appId, url, data) {
        var _this = this;
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNonemptyString(appId, 'id');
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["Validate"].isNonemptyString(url, 'url');
        _this = _super.call(this) || this;
        _this.applicationId = appId;
        _this.url = url;
        _this.data = data;
        return _this;
    }
    return PrefetchedDataEventArgs;
}(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_1__["SPEventArgs"]));
/* harmony default export */ __webpack_exports__["default"] = (PrefetchedDataEventArgs);


/***/ }),

/***/ "n9Iz":
/*!********************************!*\
  !*** ./lib/BaseApplication.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_component_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-component-base */ "7Awa");
/* harmony import */ var _microsoft_sp_component_base__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_component_base__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/sp-diagnostics */ "ut3N");
/* harmony import */ var _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _microsoft_sp_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @microsoft/sp-loader */ "I6O9");
/* harmony import */ var _microsoft_sp_loader__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_loader__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @microsoft/sp-lodash-subset */ "Pk8u");
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ms/sp-telemetry */ "2q6Q");
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ms_sp_suite_nav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ms/sp-suite-nav */ "6iXJ");
/* harmony import */ var _ms_sp_suite_nav__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_suite_nav__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ms_uifabric_styling_bundle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ms/uifabric-styling-bundle */ "fglE");
/* harmony import */ var _ms_uifabric_styling_bundle__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_ms_uifabric_styling_bundle__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ms_odsp_datasources_lib_providers_theming_ThemeUtilities__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ms/odsp-datasources/lib/providers/theming/ThemeUtilities */ "5ORI");
/* harmony import */ var _microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @microsoft/load-themed-styles */ "jOlS");
/* harmony import */ var _microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _BaseApplicationContext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./BaseApplicationContext */ "93Rs");
/* harmony import */ var _frameworkPlaceholders_AadPlaceholderManager__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./frameworkPlaceholders/AadPlaceholderManager */ "8Idf");
/* harmony import */ var _pageChrome_SPThemeProvider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pageChrome/SPThemeProvider */ "6GSH");
/* harmony import */ var _ApplicationLoadType__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ApplicationLoadType */ "fBGb");
/* harmony import */ var _ApplicationManager__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./ApplicationManager */ "Q81X");
















var SUITE_NAV_USE_SPO_BEHAVIOR_KILL_SWITCH = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["Guid"].parse('22F8084E-9DEB-4642-B63E-E70A7F87C998');
// Qos constants
var loadQosScenarioName = 'BaseApplication.load';
var renderQosScenarioName = 'BaseApplication.render';
var unloadQosScenarioName = 'BaseApplication.unload';
// tslint:disable-next-line: no-any
function addChangeCallback(object, propertyName, onChange) {
    var hiddenPropertyName = "_sp_workaround" + propertyName;
    object[hiddenPropertyName] = object[propertyName];
    Object.defineProperty(object, propertyName, {
        set: function (value) {
            object[hiddenPropertyName] = value;
            if (onChange) {
                onChange(object[hiddenPropertyName]);
            }
        },
        get: function () { return object[hiddenPropertyName]; }
    });
}
/**
 * This is the system base class for client-side applications.  It manages the overall
 * life cycle of your application, and is the first entry point for your code to start
 * executing when the page loads.  The two main events are onLoad() which occurs first,
 * and onRender() which occurs after the application manager has initialized the environment
 * and completed rendering the page chrome.
 *
 * @alpha
 */
var BaseApplication = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(BaseApplication, _super);
    function BaseApplication() {
        var _this = _super.call(this) || this;
        _this._handleSecondFlush = function (data) {
            _this.context._updateSecondFlushData(data);
            _this.onLoad()
                .then(function () {
                _this._onRender();
            })
                .catch(function (e) {
                throw e;
            });
        };
        _this._handleThemeChange = function (changedTheme) {
            // if the incoming theme isn't the latest version of the theme, someone is calling an outdated loadTheme(),
            // so pass it to the latest version of loadTheme()
            if (!Object(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_5__["isEqual"])(Object(_ms_uifabric_styling_bundle__WEBPACK_IMPORTED_MODULE_8__["createTheme"])(changedTheme), changedTheme)) {
                Object(_ms_odsp_datasources_lib_providers_theming_ThemeUtilities__WEBPACK_IMPORTED_MODULE_9__["spLoadTheme"])(changedTheme);
            }
        };
        // tslint:disable-next-line:no-string-literal
        _this['__type'] = 'BaseApplication';
        // Merge Fabric global settings to avoid run-time exception in Fabric component code.
        addChangeCallback(Object(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_5__["get"])(window, '__globalSettings__'), 'customizations', function (value) {
            return _this._handleThemeChange(value.settings.theme);
        });
        addChangeCallback(Object(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_5__["get"])(window, '__globalSettings__.customizations'), 'settings', function (value) {
            return _this._handleThemeChange(value.theme);
        });
        addChangeCallback(Object(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_5__["get"])(window, '__globalSettings__.customizations.settings'), 'theme', function (value) {
            return _this._handleThemeChange(value);
        });
        if (_microsoft_sp_loader__WEBPACK_IMPORTED_MODULE_4__["_SPLoaderFlights"]._isMinimalStartFlightEnabled()) {
            _this._onSecondFlushEvent = new _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["SPEvent"]('onSecondFlush');
            _this._onSecondFlushEvent.add(_this, function (data) {
                _this._secondFlushEventRaised = true;
                _this._secondFlushPreloadedData = data;
            });
        }
        return _this;
    }
    Object.defineProperty(BaseApplication.prototype, "domElement", {
        /**
         * Returns the DOM element where the application is expected to render its content.
         * The domElement will be undefined until the onRender() event occurs.
         *
         * @remarks
         * IMPORTANT: The application should not access DOM elements outside of this subtree,
         * as they are system-defined and may change over time.
         *
         * Throws an error if the domElement is undefined.
         */
        get: function () {
            _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["Validate"].isNotNullOrUndefined(this.context, 'context');
            _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["Validate"].isNotDisposed(this.context, 'context');
            _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["Validate"].isNotNullOrUndefined(this.context.chrome, 'chrome');
            _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["Validate"].isNotDisposed(this.context.chrome, 'chrome');
            return this.context.chrome.appDiv;
        },
        set: function (value) {
            throw new Error('The property cannot be assigned because it is read-only');
        },
        enumerable: false,
        configurable: true
    });
    /**
     * RESERVED FOR INTERNAL USAGE. This method is invoked automatically by the application manager.
     * The application code should not call it directly.
     *
     * @internal
     */
    BaseApplication.prototype._load = function (contextParameters) {
        var _this = this;
        var qosMonitor = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3__["_QosMonitor"](loadQosScenarioName);
        try {
            var applicationContext = this._getApplicationContext(contextParameters);
            this._initializeContext(applicationContext);
            var aadPlaceholderManager = new _frameworkPlaceholders_AadPlaceholderManager__WEBPACK_IMPORTED_MODULE_12__["default"]();
            aadPlaceholderManager.setUpTokenAcquistionFailurePlaceholder(this, this.context.serviceScope);
            var loadPromise = void 0;
            if (_microsoft_sp_loader__WEBPACK_IMPORTED_MODULE_4__["_SPLoaderFlights"]._isMinimalStartFlightEnabled()) {
                loadPromise = this.onBeforeLoad().then(function () {
                    // Either the second flush was fast or this is an app-to-app transition
                    if (_this._secondFlushEventRaised) {
                        // If this is an app-to-app transition then the preloaded data is already up to date
                        if (_this.context.preloadedData.isFirstFlush) {
                            _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3__["_EngagementLogger"].logEvent('_load.SecondFlushBeforeFirstFlushFinished');
                            _this.context._updateSecondFlushData(_this._secondFlushPreloadedData);
                        }
                        _this._loadedDuringFirstFlush = true;
                        return _this.onLoad();
                    }
                });
            }
            else {
                loadPromise = this.onLoad();
            }
            return loadPromise
                .then(function () { return qosMonitor.writeSuccess(); })
                .catch(function (e) {
                qosMonitor.writeExpectedFailure('onLoadFailure', e);
                throw e;
            });
        }
        catch (error) {
            qosMonitor.writeUnexpectedFailure('SyncError', error);
            return Promise.reject(error);
        }
    };
    /**
     * RESERVED FOR INTERNAL USAGE. This method is invoked automatically by the application manager
     * to render the application.
     * The application code should not call it directly.
     *
     * @internal
     */
    BaseApplication.prototype._render = function () {
        var qosMonitor = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3__["_QosMonitor"](renderQosScenarioName);
        try {
            // We load styles async by default, which is good for performance.
            // At this point in time we want to ensure that all styles in buffer are mounted before
            // rendering the app.
            _microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_10__["flush"]();
            this.context.chrome.show();
            var isFullPageLoad = this.context.loadType === _ApplicationLoadType__WEBPACK_IMPORTED_MODULE_14__["ApplicationLoadType"].FullPageLoad;
            var suiteNavManager = this.context.serviceScope.consume(_ms_sp_suite_nav__WEBPACK_IMPORTED_MODULE_7__["SuiteNavManager"].serviceKey);
            suiteNavManager.initialize(this.context.chrome.suiteNavDiv, isFullPageLoad);
            this.context.initializeSuiteNavManager(suiteNavManager);
            var config = this.suiteNavConfiguration();
            if (!config.isSuiteNavDisabled()) {
                var useNewFlow = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["_SPFlight"].isEnabled(1309 /* SPClientSuiteNavCommon */) && config.isSuiteNavLoadingDeferred();
                if (useNewFlow) {
                    if (this.componentId === '1f019ae1-2de1-4f44-b723-00a6ec1d7445' /* SPHome app id */) {
                        _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_6__["_PerformanceLogger"].trackFlight(_ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_6__["_PerformanceFlight"].CSISPHomeLazyLoadSearchPackage);
                    }
                    else {
                        // Every other sp-client app uses the SPPages flight
                        _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_6__["_PerformanceLogger"].trackFlight(_ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_6__["_PerformanceFlight"].CSISPPagesLazyLoadSearchPackage);
                    }
                    suiteNavManager.loadSuiteNavNewFlow(config); // uses new suite nav flow
                }
                else {
                    suiteNavManager.loadSuiteNav(config);
                }
            }
            // We would have only loaded during the first flush if the second flush happened before a call to `_load`
            if (_microsoft_sp_loader__WEBPACK_IMPORTED_MODULE_4__["_SPLoaderFlights"]._isMinimalStartFlightEnabled() && !this._loadedDuringFirstFlush) {
                this._onSecondFlushEvent.add(this, this._handleSecondFlush);
            }
            else {
                this._onRender();
            }
            qosMonitor.writeSuccess();
        }
        catch (error) {
            qosMonitor.writeExpectedFailure('onRenderError', error);
        }
    };
    /**
     * RESERVED FOR INTERNAL USAGE. This method is invoked by the application manager
     * to unload the application. The page chrome is still available at this point
     * The application code should not call it directly.
     *
     * @internal
     */
    BaseApplication.prototype._unload = function () {
        var qosMonitor = new _microsoft_sp_diagnostics__WEBPACK_IMPORTED_MODULE_3__["_QosMonitor"](unloadQosScenarioName);
        try {
            this.onUnload();
            qosMonitor.writeSuccess();
        }
        catch (error) {
            qosMonitor.writeExpectedFailure('onUnloadError', error);
        }
    };
    /**
     * RESERVED FOR INTERNAL USAGE. This method is invoked automatically by the application manager
     * to load the application specific theme.
     * The application code should not call it directly.
     *
     * @internal
     */
    BaseApplication.prototype._loadTheme = function () {
        // When cleaning up the killswitch, keep the check for isChromelessApplication here and remove the check from
        // other code calling this function
        if (!_ApplicationManager__WEBPACK_IMPORTED_MODULE_15__["default"]._isChromelessApplication(this.componentId)) {
            Object(_ms_uifabric_styling_bundle__WEBPACK_IMPORTED_MODULE_8__["registerOnThemeChangeCallback"])(this._handleThemeChange);
            var themeProvider = this._getThemeProvider();
            themeProvider.loadThemedStyles();
        }
    };
    /**
     * RESERVED FOR INTERNAL USAGE.
     * Internal API to dispose the application.
     * See onDispose for more details
     * override
     */
    BaseApplication.prototype.dispose = function () {
        Object(_ms_uifabric_styling_bundle__WEBPACK_IMPORTED_MODULE_8__["removeOnThemeChangeCallback"])(this._handleThemeChange);
        this.onDispose();
        _super.prototype.dispose.call(this);
    };
    /**
     * This virtual function returns the default configuration and can be configured by applications
     * when required.
     * virtual
     */
    BaseApplication.prototype.suiteNavConfiguration = function () {
        var config = new _ms_sp_suite_nav__WEBPACK_IMPORTED_MODULE_7__["SuiteNavManagerConfiguration"](this._getSuiteNavManagerConfigurationData());
        config.updateSuiteNavHeight = this._suiteNavHeightHandler.bind(this);
        return config;
    };
    /**
     * This virtual function returns the default application context and can be configured by applications
     * when required.
     *
     * virtual
     * @internal
     */
    BaseApplication.prototype._getApplicationContext = function (contextParameters) {
        return new _BaseApplicationContext__WEBPACK_IMPORTED_MODULE_11__["default"](contextParameters);
    };
    /**
     * This virtual function returns the default application theme provider and can be overridden by applications
     * when required.
     * virtual
     *
     * @internal
     */
    BaseApplication.prototype._getThemeProvider = function () {
        return new _pageChrome_SPThemeProvider__WEBPACK_IMPORTED_MODULE_13__["default"](this.context.serviceScope);
    };
    /**
     * Perform operations dependent only on `_IMinimalPreloadedData` while waiting for the second flush to provide
     * `_IPreloadedData`. Any operations dependent on `_IPreloadedData` should happen in `onLoad`.
     *
     * @internal
     * @virtual
     */
    BaseApplication.prototype.onBeforeLoad = function () {
        return Promise.resolve();
    };
    /**
     * This life cycle event occurs immediately after the application manager has loaded the application,
     * before the DOM is constructed.  Applications can use this event to load scripts
     * or start asynchronous operations that need to occur early in the lifecycle.
     * Inside the onLoad() event, applications may also modify the rendering of various
     * page chrome elements, for example by calling this.context.suiteNav.setComponentVisibility(false).
     * virtual
     */
    BaseApplication.prototype.onLoad = function () {
        // (implemented by subclass)
        return Promise.resolve();
    };
    /**
     * This lifecycle event occurs before hiding the application chrome. At this point the application still has
     * the DOM element available and can perform specific operations before the chrome is hidden from the view-port
     * virtual
     */
    BaseApplication.prototype.onUnload = function () {
        // (implemented by subclass)
    };
    /**
     * This lifecycle event occurs after the application manager has constructed the DOM for the page chrome.
     * At this time, the domElement property will be initialized, and the application can begin
     * rendering its own DOM elements.
     * virtual
     */
    BaseApplication.prototype.onRender = function () {
        // (implemented by subclass)
    };
    /**
     * This API is called at the end of the application lifecycle. It should be used to dispose any local
     * resources (i.e. DOM elements) that the application is holding onto.
     *
     * This API is expected to be called in scenarios like cross-application navigation
     * i.e. the host is transitioning from one application to another and disposes the application that is being
     * transitioned out.
     * virtual
     */
    BaseApplication.prototype.onDispose = function () {
        // (implemented by subclass)
    };
    /**
     * Provides the data necessary to construct an instance of SuiteNavManagerConfiguration
     * @internal
     */
    BaseApplication.prototype._getSuiteNavManagerConfigurationData = function () {
        var pageContext = this.context.pageContext;
        var webTemplateId;
        if (!_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["_SPKillSwitch"].isActivated(SUITE_NAV_USE_SPO_BEHAVIOR_KILL_SWITCH, '9/08/2017', 'SuiteNavUseSPOBehaviors')) {
            webTemplateId = pageContext.legacyPageContext.webTemplateId;
        }
        var disableSuiteNavSearchBox = pageContext.legacyPageContext.searchBoxInNavBar === 3 /* Hidden */;
        return {
            currentUICultureName: pageContext.cultureInfo.currentUICultureName,
            disableSuiteNav: this._shouldDisableSuiteNav(),
            preloadedData: this.context.preloadedData,
            settingsData: pageContext.legacyPageContext.MenuData
                ? pageContext.legacyPageContext.MenuData.SettingsData
                : undefined,
            signoutUrl: pageContext.legacyPageContext.MenuData
                ? pageContext.legacyPageContext.MenuData.SignOutUrl
                : undefined,
            siteClientTag: pageContext.legacyPageContext.siteClientTag,
            systemUserKey: pageContext.legacyPageContext.systemUserKey,
            userDisplayName: pageContext.user.displayName,
            webServerRelativeUrl: pageContext.web.serverRelativeUrl,
            webTemplateId: webTemplateId,
            disableSuiteNavSearchBox: disableSuiteNavSearchBox
        };
    };
    /**
     * Causes the navigator to navigate to a new page
     *
     * @remarks
     * This will be removed soon. Please use navigator from application context
     * to invoke public APIs
     */
    BaseApplication.prototype._navigate = function (url, props) {
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["Validate"].isNonemptyString(url, 'url');
        return this.context.navigator.navigate(url, props);
    };
    /**
     * Allows the navigator to reinitialize SPFx components with `_IPreloadedData`.
     *
     * @remarks
     * This will be removed soon. Please use navigator from application context
     * to invoke public APIs
     *
     * Navigation is an async operation but calling this API ignores the promise.
     * This is used by List application to change the context, so the framework will send the appropriate events
     * for the context change, but it doesn't impact the application.
     */
    BaseApplication.prototype._navigateToPreloadedData = function (preloadedData) {
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["Validate"].isNotNullOrUndefined(preloadedData, 'preloadedData');
        this.context.navigator.navigateToPreloadedData(preloadedData);
    };
    /**
     * Invalidates a cached resource by its URL. Any subsequent request for the resource
     * will be fetched from its origin and recached.
     *
     * @param url - URL to invalidate
     *
     * @remarks
     * This will be removed soon. Please use navigator from application context
     * to invoke public APIs
     */
    BaseApplication.prototype._invalidate = function (url) {
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["Validate"].isNotNullOrUndefined(url, 'url');
        return this.context.navigator.invalidate(url);
    };
    /**
     * Raises an event for a layout change.
     */
    BaseApplication.prototype.raiseLayoutChangedEvent = function () {
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["_SPEventManager"].instance.raiseEvent(BaseApplication._layoutChangedEventName, {});
    };
    BaseApplication.prototype._onRender = function () {
        this.onRender();
        // After we render we can stop listening for a secondFlush
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["_SPEventManager"].instance.removeEvent('onSecondFlush');
    };
    BaseApplication.prototype._shouldDisableSuiteNav = function () {
        var urlQueryParams = new _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["UrlQueryParameterCollection"](window.location.href);
        return (window.location.hostname === 'localhost' ||
            urlQueryParams.getValue('disableSuiteNav') === 'true' ||
            _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["_BrowserUtilities"].isEmbedded() ||
            !this.manifest.hasSuiteNav);
    };
    /**
     * This is a handler to update Suite Nav container height, when sp-suite-nav wants to update it.
     *
     * @param height - Height of the suite nav bar container to be set.
     */
    BaseApplication.prototype._suiteNavHeightHandler = function (height) {
        if (this.context.chrome) {
            this.context.chrome.changeSuiteNavHeight(height);
        }
    };
    /**
     * SPEvent name for page navigation.
     * @internal
     */
    BaseApplication._navigatedEventName = 'application.navigatedEvent';
    /**
     * SPEvent name for layout changes.
     * @internal
     */
    BaseApplication._layoutChangedEventName = 'application.layoutChangedEvent';
    /**
     * SPEvent name for prefetched data availability.
     * @internal
     */
    BaseApplication._prefetchedDataEventName = 'application.prefetchedDataEvent';
    /**
     * SPEvent name for application pre in-place navigation.
     * @internal
     */
    BaseApplication._onBeforeNavigationEventName = 'application.onBeforeNavigationEventName';
    return BaseApplication;
}(_microsoft_sp_component_base__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]));
/* harmony default export */ __webpack_exports__["default"] = (BaseApplication);


/***/ }),

/***/ "nYRH":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/providers/theming/ThemeProviderFactory.js ***!
  \******************************************************************************************************************************************************************************************************/
/*! exports provided: getThemeProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getThemeProvider", function() { return getThemeProvider; });
// OneDrive:IgnoreCodeCoverage

var _themeProvider;
var _themeProviderFactory;
/**
 * Uses context information to choose the appropriate theme provider, if any.
 * May return an undefined value if not theme provider is deemed appropriate.
 */
function getThemeProvider(themeProviders, spPageContext) {
    'use strict';
    if (!_themeProvider || _themeProviderFactory !== themeProviders) {
        _themeProvider = _instantiateThemeProvider(themeProviders, spPageContext);
        _themeProviderFactory = themeProviders;
    }
    return _themeProvider;
}
/**
 * Uses context information to choose the appropriate theme provider, if any.
 * May return an undefined value if no theme provider is deemed appropriate.
 */
function _instantiateThemeProvider(themeProviders, spPageContext) {
    'use strict';
    // Only load the theme on a SharePoint page which declares a theme.
    // This logic should be updated as more apps are able to provide a theme.
    var themeProvider;
    // Use window to get the pageContext since it might not be declared (e.g. ODC).
    var pageContext = spPageContext ? spPageContext : window['_spPageContextInfo'];
    if (pageContext) {
        themeProvider = themeProviders.webThemeProvider(pageContext);
    }
    return themeProvider;
}
//# sourceMappingURL=ThemeProviderFactory.js.map

/***/ }),

/***/ "o+Qb":
/*!*************************************************!*\
  !*** ./lib/navigator/NavigationDataProvider.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-http */ "vlQI");
/* harmony import */ var _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_http__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _NavigationDataError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NavigationDataError */ "SClb");
// Copyright (c) Microsoft. All rights reserved.



/**
 * Navigation Data Provider for SPFx applications.
 * It fetches data required to initiate an SPFx Navigation operation. It also caches the navigation
 * data when appropriate
 *
 * @internal
 */
var NavigationDataProvider = /** @class */ (function () {
    function NavigationDataProvider(serviceScope, validator) {
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNotNullOrUndefined(serviceScope, 'serviceScope');
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNotNullOrUndefined(validator, 'validator');
        this._spHttpClient = serviceScope.consume(_microsoft_sp_http__WEBPACK_IMPORTED_MODULE_1__["SPHttpClient"].serviceKey);
        this._dataValidator = validator;
    }
    Object.defineProperty(NavigationDataProvider.prototype, "buildId", {
        get: function () {
            return this._buildId;
        },
        /**
         * Keeps track of the build id the application is bootstrapped with.
         * Used to detect when the build id change while the app is
         * running, and to invalidate manifest caches containing the old build id.
         *
         * @param buildId - Build id the application was bootstrapped with.
         */
        set: function (buildId) {
            this._buildId = buildId;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Issues a request to get data association with a given url
     *
     * @param url - URL of the page to fetch data for
     * @param requestType - The request type
     * @param props - Optional Navigation property bag
     *
     * @returns - A navigation data response promise
     */
    NavigationDataProvider.prototype.getData = function (url, props) {
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Validate"].isNonemptyString(url, 'url');
        return this._getStore().then(function (store) { return store.getData(url, props); });
    };
    /**
     * Invalidates a cached resource by its URL. Any subsequent request for the resource
     * will be fetched from its origin and recached.
     *
     * @param url - URL to invalidate
     */
    NavigationDataProvider.prototype.invalidate = function (url) {
        return this._getStore().then(function (store) {
            store.remove(url);
        });
    };
    NavigationDataProvider.prototype._getStore = function () {
        var _this = this;
        if (this._navigationStore) {
            return Promise.resolve(this._navigationStore);
        }
        return (this._navigationStorePromise ||
            (this._navigationStorePromise = __webpack_require__.e(/*! import() | sp-navigation-datastore */ "sp-navigation-datastore").then(__webpack_require__.bind(null, /*! ./NavigationDataStore */ "oPyX")).then(function (dataStore) {
                _this._navigationStore = new dataStore.default(NavigationDataProvider.storeKey, NavigationDataProvider.storeBuildIdKey, _this._buildId, function (url, headers) {
                    return _this._fetchData(url, headers);
                }, _this._dataValidator);
                return _this._navigationStore;
            })));
    };
    /**
     * Loads a page from SharePoint.
     *
     * @param url - URL of the page to load.
     * @param requestHeaders - Optional request headers
     * @return Promise with the pertinent data for the request.
     */
    NavigationDataProvider.prototype._fetchData = function (url, requestHeaders) {
        // Using ?as=json to ensure that the browser doesn't return a cached request for the HTML
        return this._spHttpClient
            .get(url + (url.indexOf('?') === -1 ? '?' : '&') + 'as=json', _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_1__["SPHttpClient"].configurations.v1, requestHeaders ? { headers: requestHeaders } : undefined)
            .then(function (response) {
            if (!response.ok) {
                throw _NavigationDataError__WEBPACK_IMPORTED_MODULE_2__["default"].createNavigationError(_NavigationDataError__WEBPACK_IMPORTED_MODULE_2__["NavigationErrorCode"].fetchData, new Error(response.statusMessage));
            }
            else {
                return response.json().catch(function (error) {
                    throw _NavigationDataError__WEBPACK_IMPORTED_MODULE_2__["default"].createNavigationError(_NavigationDataError__WEBPACK_IMPORTED_MODULE_2__["NavigationErrorCode"].parseData, error);
                });
            }
        });
    };
    NavigationDataProvider.storeKey = 'sp-application-base:NavigationDataStore';
    NavigationDataProvider.storeBuildIdKey = 'sp-application-base:NavigationDataStore:buildId';
    return NavigationDataProvider;
}());
/* harmony default export */ __webpack_exports__["default"] = (NavigationDataProvider);


/***/ }),

/***/ "o3jq":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/providers/theming/ThemeInitializer.js ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: flushStyles, ThemeInitializer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeInitializer", function() { return ThemeInitializer; });
/* harmony import */ var _ms_odsp_utilities_lib_features_Features__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-utilities/lib/features/Features */ "8G1T");
/* harmony import */ var _microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/load-themed-styles */ "jOlS");
/* harmony import */ var _microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flushStyles", function() { return _microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_1__["flush"]; });

/* harmony import */ var _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ms/odsp-utilities/lib/async/Promise */ "7Ihg");
/* harmony import */ var _ThemeProviderFactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ThemeProviderFactory */ "nYRH");
/* harmony import */ var _uifabric_styling_lib_styles_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @uifabric/styling/lib/styles/theme */ "Oqak");
/* harmony import */ var _ThemeUtilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ThemeUtilities */ "5ORI");
// OneDrive:IgnoreCodeCoverage







var AsyncLoadStyles = { ODB: 141, ODC: null, Fallback: false };
function setFabricConfig() {
    var fabricConfig = (window['FabricConfig'] = window['FabricConfig'] || {});
    fabricConfig.fontBaseUrl = '';
}
/**
 * Chooses the appropriate method of loading theme data for the current page.
 * As soon as the theme data is available, it will be set via the loadTheme
 * method of load-themed-styles.
 */
var ThemeInitializer = /** @class */ (function () {
    function ThemeInitializer() {
    }
    /**
     * Uses context information to load the appropriate theme.
     */
    ThemeInitializer.initializeTheme = function (injectedProviders, pageContext, forceUpdate, skipBatchUpdates) {
        window['__loadTheme'] = _uifabric_styling_lib_styles_theme__WEBPACK_IMPORTED_MODULE_4__["loadTheme"]; // so we can access it in console for testing purposes
        setFabricConfig();
        var _spModuleLink = window['_spModuleLink'];
        if (_ms_odsp_utilities_lib_features_Features__WEBPACK_IMPORTED_MODULE_0__["default"].isFeatureEnabled(AsyncLoadStyles) &&
            _spModuleLink &&
            _spModuleLink.libraries &&
            _spModuleLink.libraries.length > 0) {
            // since we have css concatenation now, we only need async loadStyles() for libmode, which is not covered by css concatenations
            Object(_microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_1__["configureRunMode"])(1 /* async */);
        }
        // short-circuit, if necessary
        if (ThemeInitializer._useOverrideTheme) {
            return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_2__["default"].resolve(Object(_uifabric_styling_lib_styles_theme__WEBPACK_IMPORTED_MODULE_4__["getTheme"])());
        }
        // If there is a themeProvider, request and load the theme.
        var themeProvider = Object(_ThemeProviderFactory__WEBPACK_IMPORTED_MODULE_3__["getThemeProvider"])(injectedProviders, pageContext);
        if (themeProvider) {
            ThemeInitializer._themePromise = themeProvider.loadFullFormattedThemeData(forceUpdate).then(function (value) {
                var theme = value || {};
                Object(_ThemeUtilities__WEBPACK_IMPORTED_MODULE_5__["spLoadTheme"])(theme, pageContext, skipBatchUpdates);
                return value;
            });
            return ThemeInitializer._themePromise;
        }
        else {
            var theme = {};
            return _ms_odsp_utilities_lib_async_Promise__WEBPACK_IMPORTED_MODULE_2__["default"].resolve(Object(_ThemeUtilities__WEBPACK_IMPORTED_MODULE_5__["spLoadTheme"])(theme, pageContext, skipBatchUpdates));
        }
    };
    /** Use this to short-circuit the usual theming logic. Calling this will hardcode a theme to the page, instead of fetching the theme
     * from the server. Scenarios that utilize this should insure that users cannot access the Change The Look panel from the gear menu.
     */
    ThemeInitializer.overrideTheming = function (theme, pageContext) {
        /** Note: ThemeProvider doesn't know about this short-circuiting, so it will always provide the server's theme,
         * but it doesn't matter because ThemeProvider is only for managing the server theme (via CTL), so any scenario that cares
         * about that won't be using this
         */
        Object(_ThemeUtilities__WEBPACK_IMPORTED_MODULE_5__["spLoadTheme"])(theme, pageContext, true);
        ThemeInitializer._useOverrideTheme = true;
        if (ThemeInitializer._themePromise) {
            ThemeInitializer._themePromise.cancel();
        }
    };
    ThemeInitializer._useOverrideTheme = false;
    return ThemeInitializer;
}());

//# sourceMappingURL=ThemeInitializer.js.map

/***/ }),

/***/ "sl8a":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@uifabric/utilities@7.33.2_baa7aab8a1d5d20fe3858de8537800ba/node_modules/@uifabric/utilities/lib/customizations/Customizations.js ***!
  \*****************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Loading @uifabric/utilities/./lib/customizations/Customizations.js
var pkg = __webpack_require__(/*! @ms/uifabric-styling-bundle */ "fglE");
module.exports = pkg._Utilities;

/***/ }),

/***/ "ut3N":
/*!********************************************!*\
  !*** external "@microsoft/sp-diagnostics" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_ut3N__;

/***/ }),

/***/ "vIt2":
/*!*******************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-utilities@29.7.9_5d977624104b06c7bcaa2de974ff51f1/node_modules/@ms/odsp-utilities/lib/theming/ThemeProvider.js ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RgbaColor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RgbaColor */ "M2il");
/* harmony import */ var _ThemeCache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ThemeCache */ "HZ0z");
/* harmony import */ var _async_Promise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../async/Promise */ "7Ihg");
/* harmony import */ var _logging_events_Qos_event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../logging/events/Qos.event */ "c09w");
/* harmony import */ var _killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../killswitch/Killswitch */ "QUgr");
// OneDrive:IgnoreCodeCoverage





/**
 * Provides theme data, either from the local cache or from the server.
 */
var ThemeProvider = /** @class */ (function () {
    /**
     * Constructs a ThemeProvider which acts like the provided loadData function but with caching.
     * @param {() => Promise<IThemeData>} loadData Used to load data on a cache miss.
     */
    function ThemeProvider(loadData) {
        this._loadData = loadData;
    }
    ThemeProvider.getBackgroundUrl = function (data) {
        if (data) {
            return ThemeProvider._makeCssUrl(data.backgroundImageUri);
        }
        else {
            return 'none';
        }
    };
    /**
     * Given a URL, returns a string value which can be safely used as a
     * background-image value in a CSS rule. If the url is falsey, this
     * returns "none" to specify no background-image.
     * @param {string} url The URL of a background image.
     */
    ThemeProvider._makeCssUrl = function (url) {
        var cssUrlValue = 'none';
        if (url) {
            cssUrlValue = 'url("' + ThemeProvider._escapeQuotesAndParentheses(url) + '")';
        }
        return cssUrlValue;
    };
    /**
     * Escapes single- and double-quotes along with parentheses so that the
     * resulting string is safe to use in a CSS background-image: url()
     * @param {string} str The string to escape.
     */
    ThemeProvider._escapeQuotesAndParentheses = function (str) {
        var replacements = { "'": '%27', '"': '%22', '(': '%28', ')': '%29' };
        var result = null;
        // tslint:disable-next-line:triple-equals
        if (str != null) {
            result = str.replace(/(['"\(\)])/gm, function (match, capture) {
                return replacements[capture];
            });
        }
        return result;
    };
    /**
     * Loads the theme data and returns a map from theme tokens to replacement values.
     * Suitable for use with loadTheme in load-themed-styles.
     * @param {string} cacheToken Cache token used to validate cached data.
     * @param {boolean} forceUpdate Whether to force fresh data to be loaded and cached.
     */
    ThemeProvider.prototype.loadThemeTokenMap = function (cacheToken, forceUpdate) {
        return this.loadThemeData(cacheToken, forceUpdate).then(function (themeData) {
            var themeValues;
            if (themeData && themeData.palette) {
                themeValues = {};
                var palette = themeData.palette;
                for (var colorSlot in palette) {
                    var rgbaValue = palette[colorSlot];
                    themeValues[colorSlot] = rgbaValue ? _RgbaColor__WEBPACK_IMPORTED_MODULE_0__["default"].toHtmlString(rgbaValue) : null;
                }
                themeValues['backgroundImageUri'] = ThemeProvider._makeCssUrl(themeData.backgroundImageUri);
            }
            return themeValues;
        }, function (error) {
            return null;
        }); // on error, return null
    };
    /**
     * Loads the theme data from the cache or via the a loadData method.
     * @param {string} cacheToken Cache token used to validate cached data.
     * @param {boolean} forceUpdate Whether to force fresh data to be loaded and cached.
     */
    ThemeProvider.prototype.loadThemeData = function (cacheToken, forceUpdate) {
        if (!forceUpdate && this._dataPromise) {
            return this._dataPromise;
        }
        var _this = this;
        var failureResultCode = null;
        var failureResultType = _logging_events_Qos_event__WEBPACK_IMPORTED_MODULE_3__["ResultTypeEnum"].Failure;
        this._dataPromise = _logging_events_Qos_event__WEBPACK_IMPORTED_MODULE_3__["Qos"].instrumentPromise(
        /*startSchema*/ { name: 'ThemeProvider.LoadData' }, 
        /*createPromise*/ function () {
            return new _async_Promise__WEBPACK_IMPORTED_MODULE_2__["default"](function loadDataOnExecute(complete, error) {
                var previousData = null;
                if (!forceUpdate) {
                    // Checks if we have valid cached data before returning it.
                    previousData = _ThemeCache__WEBPACK_IMPORTED_MODULE_1__["default"].getCachedTheme(cacheToken);
                }
                // If we have previous data and an update is not forced, use that data.
                if (previousData) {
                    complete(previousData);
                }
                else {
                    // Get updated data. Might result in a server call.
                    _this._loadData(forceUpdate).done(function onComplete(themeData) {
                        if (themeData) {
                            if (themeData.cacheToken) {
                                _ThemeCache__WEBPACK_IMPORTED_MODULE_1__["default"].updateThemeCache(themeData, cacheToken);
                            }
                            complete(themeData);
                        }
                        else {
                            failureResultCode = 'NoData';
                            if (error) {
                                error('No model returned');
                            }
                        }
                    }, function onError(err) {
                        if (_async_Promise__WEBPACK_IMPORTED_MODULE_2__["default"].isCanceled(err)) {
                            failureResultCode = 'Canceled';
                            failureResultType = _logging_events_Qos_event__WEBPACK_IMPORTED_MODULE_3__["ResultTypeEnum"].ExpectedFailure;
                        }
                        else {
                            failureResultCode = 'ServerLoadFailure';
                        }
                        if (error) {
                            error(err);
                        }
                    });
                }
            });
        }, 
        /*getCompleteSchema*/ null, 
        /*getErrorSchema*/ function getErrorSchema(err) {
            if (_async_Promise__WEBPACK_IMPORTED_MODULE_2__["default"].isCanceled(err)) {
                failureResultType = _logging_events_Qos_event__WEBPACK_IMPORTED_MODULE_3__["ResultTypeEnum"].ExpectedFailure;
                failureResultCode = 'Canceled';
            }
            var errorMessage = err;
            if (err &&
                !_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_4__["Killswitch"].isActivated('1741E0BD-2036-4743-B9FB-AC63532BD693', '01/10/2020', 'ThemeProvider error logging')) {
                var errObj = {
                    name: err.name || undefined,
                    message: (err.message && err.message.value) || err.message || undefined,
                    correlationId: err.correlationId || undefined
                };
                errorMessage = JSON.stringify(errObj);
            }
            return {
                resultType: failureResultType,
                resultCode: failureResultCode || 'Other',
                error: errorMessage
            };
        });
        return this._dataPromise;
    };
    return ThemeProvider;
}());
/* harmony default export */ __webpack_exports__["default"] = (ThemeProvider);
//# sourceMappingURL=ThemeProvider.js.map

/***/ }),

/***/ "vlQI":
/*!*************************************!*\
  !*** external "@microsoft/sp-http" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_vlQI__;

/***/ }),

/***/ "vt24":
/*!******************************************!*\
  !*** ./lib/pageChrome/SPMasterChrome.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/sp-telemetry */ "2q6Q");
/* harmony import */ var _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ms_sp_suite_nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/sp-suite-nav */ "6iXJ");
/* harmony import */ var _ms_sp_suite_nav__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ms_sp_suite_nav__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_Flights__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/Flights */ "w4+A");
/* harmony import */ var _error_SPGlobalErrorHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../error/SPGlobalErrorHandler */ "1/3/");
// Copyright (c) Microsoft. All rights reserved.




var SPMasterChrome = /** @class */ (function () {
    function SPMasterChrome() {
        this._isVisible = false;
        this._isDisposed = false;
        this._createPageChrome();
    }
    /**
     * Shows the chrome.
     */
    SPMasterChrome.prototype.show = function () {
        var _this = this;
        if (!this._isDisposed && !this._isVisible) {
            if (!_common_Flights__WEBPACK_IMPORTED_MODULE_2__["Flights"].serviceWorker || !this._chromeDiv.isConnected) {
                document.body.appendChild(this._chromeDiv);
            }
            if (_common_Flights__WEBPACK_IMPORTED_MODULE_2__["Flights"].preloadSuiteNav) {
                if (_ms_sp_suite_nav__WEBPACK_IMPORTED_MODULE_1__["O365ShellPromises"].GetLoadPromise()) {
                    // tslint:disable-next-line: no-floating-promises
                    _ms_sp_suite_nav__WEBPACK_IMPORTED_MODULE_1__["O365ShellPromises"].GetLoadPromise().then(function () {
                        var searchBoxInput = _this.getSearchBoxInput();
                        var selectionStart = searchBoxInput.selectionStart, selectionEnd = searchBoxInput.selectionEnd;
                        var searchBoxInputActive = document.activeElement === searchBoxInput;
                        var suiteNavPlaceholder = document.getElementById('SuiteNavPlaceholder');
                        _this._suiteNavDiv.appendChild(suiteNavPlaceholder);
                        if (searchBoxInputActive) {
                            searchBoxInput.focus();
                            searchBoxInput.selectionStart = selectionStart;
                            searchBoxInput.selectionEnd = selectionEnd;
                        }
                    });
                }
            }
            this._isVisible = true;
        }
    };
    /**
     * Hides the chrome.
     */
    SPMasterChrome.prototype.hide = function () {
        if (!this._isDisposed && this._isVisible) {
            this._chromeDiv = document.body.removeChild(this._chromeDiv);
            this._isVisible = false;
        }
    };
    /**
     * Disposes the Chrome
     */
    SPMasterChrome.prototype.dispose = function () {
        if (!this._isDisposed) {
            this._chromeDiv = document.body.removeChild(this._chromeDiv);
            // tslint:disable-next-line:no-any
            delete this._suiteNavDiv;
            // tslint:disable-next-line:no-any
            delete this._chromeDiv;
            this._isDisposed = true;
        }
    };
    Object.defineProperty(SPMasterChrome.prototype, "chromeDiv", {
        /**
         * Gets the chrome div
         */
        get: function () {
            return this._chromeDiv;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SPMasterChrome.prototype, "suiteNavDiv", {
        /**
         * Gets the suite nav div
         */
        get: function () {
            return this._suiteNavDiv;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SPMasterChrome.prototype, "isDisposed", {
        /**
         * Returns true if the object has already been disposed, otherwise false.
         */
        get: function () {
            return this._isDisposed;
        },
        enumerable: false,
        configurable: true
    });
    SPMasterChrome.prototype.getSearchBoxInput = function () {
        var searchBoxContainer = document.getElementById('sbcId');
        if (searchBoxContainer) {
            var inputs = searchBoxContainer.getElementsByTagName('input');
            if (inputs.length) {
                return inputs[0];
            }
        }
        return { selectionStart: 0, selectionEnd: 0, focus: function () { return void 0; } };
    };
    SPMasterChrome.prototype._createPageChrome = function () {
        _ms_sp_telemetry__WEBPACK_IMPORTED_MODULE_0__["_PerformanceLogger"].devMark('SPPageChrome.createPageChromeMaster');
        // Page body
        document.body.className = 'ms-font-m';
        //
        // NOTE: Service worker pre-renders SPPageChrome and its containing SuiteNavWrapper when active
        //
        if (_common_Flights__WEBPACK_IMPORTED_MODULE_2__["Flights"].serviceWorker) {
            this._chromeDiv = document.getElementById('SPPageChrome');
            this._suiteNavDiv = document.getElementById('SuiteNavWrapper');
        }
        //
        // TODO:
        // move below branch as an else on above if once odsp-common service worker changes is
        // deployed to guarantee creation of SPPageChrome from service worker
        //
        // Page Chrome div
        if (!this._chromeDiv) {
            this._chromeDiv = document.createElement('div');
            var chromeDivClasses = 'SPPageChrome';
            if (_common_Flights__WEBPACK_IMPORTED_MODULE_2__["Flights"].isFluentEnabled) {
                chromeDivClasses += ' isFluent';
            }
            else {
                chromeDivClasses += ' isNotFluent';
            }
            this._chromeDiv.setAttribute('class', chromeDivClasses);
            this._suiteNavDiv = document.createElement('div');
            this._suiteNavDiv.setAttribute('id', 'SuiteNavWrapper');
            this._chromeDiv.appendChild(this._suiteNavDiv);
        }
        if (!window.onerror) {
            window.onerror = _error_SPGlobalErrorHandler__WEBPACK_IMPORTED_MODULE_3__["default"].basicTracingHandler;
        }
    };
    return SPMasterChrome;
}());
/* harmony default export */ __webpack_exports__["default"] = (SPMasterChrome);


/***/ }),

/***/ "w4+A":
/*!*******************************!*\
  !*** ./lib/common/Flights.js ***!
  \*******************************/
/*! exports provided: Flights */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Flights", function() { return Flights; });
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);


var Flights = /** @class */ (function () {
    function Flights() {
    }
    Object.defineProperty(Flights, "isFluentEnabled", {
        get: function () {
            return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPFlight"].isEnabled(1248 /* EnableFluentTheme */);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Flights, "preloadSuiteNav", {
        get: function () {
            return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPFlight"].isEnabled(1136 /* O365ShellModuleJSClient */);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Flights, "isHydrationEnabled", {
        get: function () {
            return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPFlight"].isEnabled(1569 /* SPPagesHydration */);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Flights, "serviceWorker", {
        get: function () {
            return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPFlight"].isEnabled(1965 /* SPHome */) || _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPFlight"].isEnabled(1966 /* SPPages */);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Flights, "isSPAppBarEnabled", {
        get: function () {
            return ((_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPFlight"].isEnabled(1399 /* SPAppBarClient */) && _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPFlight"].isEnabled(1343 /* SPAppBar */)) ||
                _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["_SPExperiment"].getVariantAndLogExposure(90077) === 1);
        },
        enumerable: false,
        configurable: true
    });
    return Flights;
}());



/***/ }),

/***/ "xYco":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-datasources@45.13.10_e509c819ab980023b76e5746ec0fc9e2/node_modules/@ms/odsp-datasources/lib/dataSources/web/WebTemplateType.js ***!
  \***********************************************************************************************************************************************************************************************/
/*! exports provided: WebTemplateType, isTeamSiteLike, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _interfaces_WebTemplateType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../interfaces/WebTemplateType */ "DRdk");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WebTemplateType", function() { return _interfaces_WebTemplateType__WEBPACK_IMPORTED_MODULE_0__["WebTemplateType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isTeamSiteLike", function() { return _interfaces_WebTemplateType__WEBPACK_IMPORTED_MODULE_0__["isTeamSiteLike"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _interfaces_WebTemplateType__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/**
 * DO NOT USE - moved to interfaces for better import location
 * @deprecated as of version 12.15.0
 */


//# sourceMappingURL=WebTemplateType.js.map

/***/ })

/******/ })});;
//# sourceMappingURL=sp-application-base_[locale].js.map
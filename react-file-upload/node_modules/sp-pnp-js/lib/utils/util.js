"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pnplibconfig_1 = require("../configuration/pnplibconfig");
function extractWebUrl(candidateUrl) {
    if (candidateUrl === null) {
        return "";
    }
    var index = candidateUrl.indexOf("_api/");
    if (index > -1) {
        return candidateUrl.substr(0, index);
    }
    // if all else fails just give them what they gave us back
    return candidateUrl;
}
exports.extractWebUrl = extractWebUrl;
var Util = /** @class */ (function () {
    function Util() {
    }
    /**
     * Gets a callback function which will maintain context across async calls.
     * Allows for the calling pattern getCtxCallback(thisobj, method, methodarg1, methodarg2, ...)
     *
     * @param context The object that will be the 'this' value in the callback
     * @param method The method to which we will apply the context and parameters
     * @param params Optional, additional arguments to supply to the wrapped method when it is invoked
     */
    Util.getCtxCallback = function (context, method) {
        var params = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            params[_i - 2] = arguments[_i];
        }
        return function () {
            method.apply(context, params);
        };
    };
    /**
     * Tests if a url param exists
     *
     * @param name The name of the url paramter to check
     */
    Util.urlParamExists = function (name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
        return regex.test(location.search);
    };
    /**
     * Gets a url param value by name
     *
     * @param name The name of the paramter for which we want the value
     */
    Util.getUrlParamByName = function (name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
        var results = regex.exec(location.search);
        return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    };
    /**
     * Gets a url param by name and attempts to parse a bool value
     *
     * @param name The name of the paramter for which we want the boolean value
     */
    Util.getUrlParamBoolByName = function (name) {
        var p = this.getUrlParamByName(name);
        var isFalse = (p === "" || /false|0/i.test(p));
        return !isFalse;
    };
    /**
     * Inserts the string s into the string target as the index specified by index
     *
     * @param target The string into which we will insert s
     * @param index The location in target to insert s (zero based)
     * @param s The string to insert into target at position index
     */
    Util.stringInsert = function (target, index, s) {
        if (index > 0) {
            return target.substring(0, index) + s + target.substring(index, target.length);
        }
        return s + target;
    };
    /**
     * Adds a value to a date
     *
     * @param date The date to which we will add units, done in local time
     * @param interval The name of the interval to add, one of: ['year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second']
     * @param units The amount to add to date of the given interval
     *
     * http://stackoverflow.com/questions/1197928/how-to-add-30-minutes-to-a-javascript-date-object
     */
    Util.dateAdd = function (date, interval, units) {
        var ret = new Date(date); // don't change original date
        switch (interval.toLowerCase()) {
            case "year":
                ret.setFullYear(ret.getFullYear() + units);
                break;
            case "quarter":
                ret.setMonth(ret.getMonth() + 3 * units);
                break;
            case "month":
                ret.setMonth(ret.getMonth() + units);
                break;
            case "week":
                ret.setDate(ret.getDate() + 7 * units);
                break;
            case "day":
                ret.setDate(ret.getDate() + units);
                break;
            case "hour":
                ret.setTime(ret.getTime() + units * 3600000);
                break;
            case "minute":
                ret.setTime(ret.getTime() + units * 60000);
                break;
            case "second":
                ret.setTime(ret.getTime() + units * 1000);
                break;
            default:
                ret = undefined;
                break;
        }
        return ret;
    };
    /**
     * Loads a stylesheet into the current page
     *
     * @param path The url to the stylesheet
     * @param avoidCache If true a value will be appended as a query string to avoid browser caching issues
     */
    Util.loadStylesheet = function (path, avoidCache) {
        if (avoidCache) {
            path += "?" + encodeURIComponent((new Date()).getTime().toString());
        }
        var head = document.getElementsByTagName("head");
        if (head.length > 0) {
            var e = document.createElement("link");
            head[0].appendChild(e);
            e.setAttribute("type", "text/css");
            e.setAttribute("rel", "stylesheet");
            e.setAttribute("href", path);
        }
    };
    /**
     * Combines an arbitrary set of paths ensuring that the slashes are normalized
     *
     * @param paths 0 to n path parts to combine
     */
    Util.combinePaths = function () {
        var paths = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            paths[_i] = arguments[_i];
        }
        return paths
            .filter(function (path) { return !Util.stringIsNullOrEmpty(path); })
            .map(function (path) { return path.replace(/^[\\|\/]/, "").replace(/[\\|\/]$/, ""); })
            .join("/")
            .replace(/\\/g, "/");
    };
    /**
     * Gets a random string of chars length
     *
     * @param chars The length of the random string to generate
     */
    Util.getRandomString = function (chars) {
        var text = new Array(chars);
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < chars; i++) {
            text[i] = possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text.join("");
    };
    /**
     * Gets a random GUID value
     *
     * http://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
     */
    /* tslint:disable no-bitwise */
    Util.getGUID = function () {
        var d = new Date().getTime();
        var guid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
            var r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c === "x" ? r : (r & 0x3 | 0x8)).toString(16);
        });
        return guid;
    };
    /* tslint:enable */
    /**
     * Determines if a given value is a function
     *
     * @param candidateFunction The thing to test for being a function
     */
    Util.isFunction = function (candidateFunction) {
        return typeof candidateFunction === "function";
    };
    /**
     * @returns whether the provided parameter is a JavaScript Array or not.
    */
    Util.isArray = function (array) {
        if (Array.isArray) {
            return Array.isArray(array);
        }
        return array && typeof array.length === "number" && array.constructor === Array;
    };
    /**
     * Determines if a string is null or empty or undefined
     *
     * @param s The string to test
     */
    Util.stringIsNullOrEmpty = function (s) {
        return typeof s === "undefined" || s === null || s.length < 1;
    };
    /**
     * Provides functionality to extend the given object by doing a shallow copy
     *
     * @param target The object to which properties will be copied
     * @param source The source object from which properties will be copied
     * @param noOverwrite If true existing properties on the target are not overwritten from the source
     *
     */
    Util.extend = function (target, source, noOverwrite) {
        if (noOverwrite === void 0) { noOverwrite = false; }
        if (source === null || typeof source === "undefined") {
            return target;
        }
        // ensure we don't overwrite things we don't want overwritten
        var check = noOverwrite ? function (o, i) { return !(i in o); } : function () { return true; };
        return Object.getOwnPropertyNames(source)
            .filter(function (v) { return check(target, v); })
            .reduce(function (t, v) {
            t[v] = source[v];
            return t;
        }, target);
    };
    /**
     * Determines if a given url is absolute
     *
     * @param url The url to check to see if it is absolute
     */
    Util.isUrlAbsolute = function (url) {
        return /^https?:\/\/|^\/\//i.test(url);
    };
    /**
     * Ensures that a given url is absolute for the current web based on context
     *
     * @param candidateUrl The url to make absolute
     *
     */
    Util.toAbsoluteUrl = function (candidateUrl) {
        return new Promise(function (resolve) {
            if (Util.isUrlAbsolute(candidateUrl)) {
                // if we are already absolute, then just return the url
                return resolve(candidateUrl);
            }
            if (pnplibconfig_1.RuntimeConfig.spBaseUrl !== null) {
                // base url specified either with baseUrl of spfxContext config property
                return resolve(Util.combinePaths(pnplibconfig_1.RuntimeConfig.spBaseUrl, candidateUrl));
            }
            if (typeof global._spPageContextInfo !== "undefined") {
                // operating in classic pages
                if (global._spPageContextInfo.hasOwnProperty("webAbsoluteUrl")) {
                    return resolve(Util.combinePaths(global._spPageContextInfo.webAbsoluteUrl, candidateUrl));
                }
                else if (global._spPageContextInfo.hasOwnProperty("webServerRelativeUrl")) {
                    return resolve(Util.combinePaths(global._spPageContextInfo.webServerRelativeUrl, candidateUrl));
                }
            }
            // does window.location exist and have a certain path part in it?
            if (typeof global.location !== "undefined") {
                var baseUrl_1 = global.location.toString().toLowerCase();
                ["/_layouts/", "/siteassets/"].forEach(function (s) {
                    var index = baseUrl_1.indexOf(s);
                    if (index > 0) {
                        return resolve(Util.combinePaths(baseUrl_1.substr(0, index), candidateUrl));
                    }
                });
            }
            return resolve(candidateUrl);
        });
    };
    return Util;
}());
exports.Util = Util;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Makes requests using the fetch API
 */
var FetchClient = /** @class */ (function () {
    function FetchClient() {
    }
    FetchClient.prototype.fetch = function (url, options) {
        return global.fetch(url, options);
    };
    return FetchClient;
}());
exports.FetchClient = FetchClient;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var collections_1 = require("../collections/collections");
var util_1 = require("../utils/util");
var parsers_1 = require("../odata/parsers");
var pnplibconfig_1 = require("../configuration/pnplibconfig");
var CachedDigest = /** @class */ (function () {
    function CachedDigest() {
    }
    return CachedDigest;
}());
exports.CachedDigest = CachedDigest;
// allows for the caching of digests across all HttpClient's which each have their own DigestCache wrapper.
var digests = new collections_1.Dictionary();
var DigestCache = /** @class */ (function () {
    function DigestCache(_httpClient, _digests) {
        if (_digests === void 0) { _digests = digests; }
        this._httpClient = _httpClient;
        this._digests = _digests;
    }
    DigestCache.prototype.getDigest = function (webUrl) {
        var _this = this;
        var cachedDigest = this._digests.get(webUrl);
        if (cachedDigest !== null) {
            var now = new Date();
            if (now < cachedDigest.expiration) {
                return Promise.resolve(cachedDigest.value);
            }
        }
        var url = util_1.Util.combinePaths(webUrl, "/_api/contextinfo");
        var headers = {
            "Accept": "application/json;odata=verbose",
            "Content-Type": "application/json;odata=verbose;charset=utf-8",
        };
        return this._httpClient.fetchRaw(url, {
            cache: "no-cache",
            credentials: "same-origin",
            headers: util_1.Util.extend(headers, pnplibconfig_1.RuntimeConfig.spHeaders, true),
            method: "POST",
        }).then(function (response) {
            var parser = new parsers_1.ODataDefaultParser();
            return parser.parse(response).then(function (d) { return d.GetContextWebInformation; });
        }).then(function (data) {
            var newCachedDigest = new CachedDigest();
            newCachedDigest.value = data.FormDigestValue;
            var seconds = data.FormDigestTimeoutSeconds;
            var expiration = new Date();
            expiration.setTime(expiration.getTime() + 1000 * seconds);
            newCachedDigest.expiration = expiration;
            _this._digests.add(webUrl, newCachedDigest);
            return newCachedDigest.value;
        });
    };
    DigestCache.prototype.clear = function () {
        this._digests.clear();
    };
    return DigestCache;
}());
exports.DigestCache = DigestCache;

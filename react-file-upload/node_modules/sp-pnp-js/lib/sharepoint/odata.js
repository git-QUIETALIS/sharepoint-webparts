"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("../utils/util");
var logging_1 = require("../utils/logging");
var exceptions_1 = require("../utils/exceptions");
var core_1 = require("../odata/core");
function spExtractODataId(candidate) {
    if (candidate.hasOwnProperty("odata.id")) {
        return candidate["odata.id"];
    }
    else if (candidate.hasOwnProperty("__metadata") && candidate.__metadata.hasOwnProperty("id")) {
        return candidate.__metadata.id;
    }
    else {
        throw new exceptions_1.ODataIdException(candidate);
    }
}
exports.spExtractODataId = spExtractODataId;
var SPODataEntityParserImpl = /** @class */ (function (_super) {
    __extends(SPODataEntityParserImpl, _super);
    function SPODataEntityParserImpl(factory) {
        var _this = _super.call(this) || this;
        _this.factory = factory;
        _this.hydrate = function (d) {
            var o = new _this.factory(spGetEntityUrl(d), null);
            return util_1.Util.extend(o, d);
        };
        return _this;
    }
    SPODataEntityParserImpl.prototype.parse = function (r) {
        var _this = this;
        return _super.prototype.parse.call(this, r).then(function (d) {
            var o = new _this.factory(spGetEntityUrl(d), null);
            return util_1.Util.extend(o, d);
        });
    };
    return SPODataEntityParserImpl;
}(core_1.ODataParserBase));
var SPODataEntityArrayParserImpl = /** @class */ (function (_super) {
    __extends(SPODataEntityArrayParserImpl, _super);
    function SPODataEntityArrayParserImpl(factory) {
        var _this = _super.call(this) || this;
        _this.factory = factory;
        _this.hydrate = function (d) {
            return d.map(function (v) {
                var o = new _this.factory(spGetEntityUrl(v), null);
                return util_1.Util.extend(o, v);
            });
        };
        return _this;
    }
    SPODataEntityArrayParserImpl.prototype.parse = function (r) {
        var _this = this;
        return _super.prototype.parse.call(this, r).then(function (d) {
            return d.map(function (v) {
                var o = new _this.factory(spGetEntityUrl(v), null);
                return util_1.Util.extend(o, v);
            });
        });
    };
    return SPODataEntityArrayParserImpl;
}(core_1.ODataParserBase));
function spGetEntityUrl(entity) {
    if (entity.hasOwnProperty("odata.metadata") && entity.hasOwnProperty("odata.editLink")) {
        // we are dealign with minimal metadata (default)
        return util_1.Util.combinePaths(util_1.extractWebUrl(entity["odata.metadata"]), "_api", entity["odata.editLink"]);
    }
    else if (entity.hasOwnProperty("__metadata")) {
        // we are dealing with verbose, which has an absolute uri
        return entity.__metadata.uri;
    }
    else {
        // we are likely dealing with nometadata, so don't error but we won't be able to
        // chain off these objects
        logging_1.Logger.write("No uri information found in ODataEntity parsing, chaining will fail for this object.", logging_1.LogLevel.Warning);
        return "";
    }
}
exports.spGetEntityUrl = spGetEntityUrl;
function spODataEntity(factory) {
    return new SPODataEntityParserImpl(factory);
}
exports.spODataEntity = spODataEntity;
function spODataEntityArray(factory) {
    return new SPODataEntityArrayParserImpl(factory);
}
exports.spODataEntityArray = spODataEntityArray;

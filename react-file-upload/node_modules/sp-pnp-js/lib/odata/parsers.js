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
var core_1 = require("./core");
var util_1 = require("../utils/util");
var ODataDefaultParser = /** @class */ (function (_super) {
    __extends(ODataDefaultParser, _super);
    function ODataDefaultParser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ODataDefaultParser;
}(core_1.ODataParserBase));
exports.ODataDefaultParser = ODataDefaultParser;
var ODataValueParserImpl = /** @class */ (function (_super) {
    __extends(ODataValueParserImpl, _super);
    function ODataValueParserImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ODataValueParserImpl.prototype.parse = function (r) {
        return _super.prototype.parse.call(this, r).then(function (d) { return d; });
    };
    return ODataValueParserImpl;
}(core_1.ODataParserBase));
function ODataValue() {
    return new ODataValueParserImpl();
}
exports.ODataValue = ODataValue;
var ODataRawParserImpl = /** @class */ (function () {
    function ODataRawParserImpl() {
    }
    ODataRawParserImpl.prototype.parse = function (r) {
        return r.json();
    };
    return ODataRawParserImpl;
}());
exports.ODataRawParserImpl = ODataRawParserImpl;
exports.ODataRaw = new ODataRawParserImpl();
var TextFileParser = /** @class */ (function () {
    function TextFileParser() {
    }
    TextFileParser.prototype.parse = function (r) {
        return r.text();
    };
    return TextFileParser;
}());
exports.TextFileParser = TextFileParser;
var BlobFileParser = /** @class */ (function () {
    function BlobFileParser() {
    }
    BlobFileParser.prototype.parse = function (r) {
        return r.blob();
    };
    return BlobFileParser;
}());
exports.BlobFileParser = BlobFileParser;
var JSONFileParser = /** @class */ (function () {
    function JSONFileParser() {
    }
    JSONFileParser.prototype.parse = function (r) {
        return r.json();
    };
    return JSONFileParser;
}());
exports.JSONFileParser = JSONFileParser;
var BufferFileParser = /** @class */ (function () {
    function BufferFileParser() {
    }
    BufferFileParser.prototype.parse = function (r) {
        if (util_1.Util.isFunction(r.arrayBuffer)) {
            return r.arrayBuffer();
        }
        return r.buffer();
    };
    return BufferFileParser;
}());
exports.BufferFileParser = BufferFileParser;

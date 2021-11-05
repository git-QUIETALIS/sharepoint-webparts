"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var logging_1 = require("./logging");
function deprecated(deprecationVersion, message) {
    return function (target, propertyKey, descriptor) {
        var method = descriptor.value;
        descriptor.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            logging_1.Logger.log({
                data: {
                    descriptor: descriptor,
                    propertyKey: propertyKey,
                    target: target,
                },
                level: logging_1.LogLevel.Warning,
                message: "(" + deprecationVersion + ") " + message,
            });
            return method.apply(this, args);
        };
    };
}
exports.deprecated = deprecated;

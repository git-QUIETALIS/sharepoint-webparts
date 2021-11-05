"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var exceptions_1 = require("../utils/exceptions");
/**
 * This module is substituted for the NodeFetchClient.ts during the packaging process. This helps to reduce the pnp.js file size by
 * not including all of the node dependencies
 */
var NodeFetchClient = /** @class */ (function () {
    function NodeFetchClient() {
    }
    /**
     * Always throws an error that NodeFetchClient is not supported for use in the browser
     */
    NodeFetchClient.prototype.fetch = function () {
        throw new exceptions_1.NodeFetchClientUnsupportedException();
    };
    return NodeFetchClient;
}());
exports.NodeFetchClient = NodeFetchClient;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Defines a http client to request mock data to use the web part with the local workbench
 */
var SPListPickerMockHttpClient = (function () {
    function SPListPickerMockHttpClient() {
    }
    /**
     * Mock search People method
     */
    SPListPickerMockHttpClient.getLists = function (restUrl, options) {
        return new Promise(function (resolve) {
            resolve(SPListPickerMockHttpClient._results);
        });
    };
    /**
     * Mock SharePoint result sample
     */
    SPListPickerMockHttpClient._results = { value: [] };
    return SPListPickerMockHttpClient;
}());
exports.default = SPListPickerMockHttpClient;

//# sourceMappingURL=SPListPickerMockService.js.map

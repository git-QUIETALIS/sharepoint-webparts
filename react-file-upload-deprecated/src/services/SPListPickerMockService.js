"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Defines a http client to request mock data to use the web part with the local workbench
 */
class SPListPickerMockHttpClient {
    /**
     * Mock search People method
     */
    static getLists(restUrl, options) {
        return new Promise((resolve) => {
            resolve(SPListPickerMockHttpClient._results);
        });
    }
}
/**
 * Mock SharePoint result sample
 */
SPListPickerMockHttpClient._results = { value: [] };
exports.default = SPListPickerMockHttpClient;
//# sourceMappingURL=SPListPickerMockService.js.map
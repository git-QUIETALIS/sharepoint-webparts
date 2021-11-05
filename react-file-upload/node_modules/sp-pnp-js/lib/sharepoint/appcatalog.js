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
var sharepointqueryable_1 = require("./sharepointqueryable");
var files_1 = require("./files");
var odata_1 = require("./odata");
var util_1 = require("../utils/util");
/**
 * Represents an app catalog
 */
var AppCatalog = /** @class */ (function (_super) {
    __extends(AppCatalog, _super);
    function AppCatalog(baseUrl, path) {
        if (path === void 0) { path = "_api/web/tenantappcatalog/AvailableApps"; }
        var _this = this;
        // we need to handle the case of getting created from something that already has "_api/..." or does not
        var candidateUrl = "";
        if (typeof baseUrl === "string") {
            candidateUrl = baseUrl;
        }
        else if (typeof baseUrl !== "undefined") {
            candidateUrl = baseUrl.toUrl();
        }
        _this = _super.call(this, util_1.extractWebUrl(candidateUrl), path) || this;
        return _this;
    }
    /**
     * Get details of specific app from the app catalog
     * @param id - Specify the guid of the app
     */
    AppCatalog.prototype.getAppById = function (id) {
        return new App(this, "getById('" + id + "')");
    };
    /**
     * Uploads an app package. Not supported for batching
     *
     * @param filename Filename to create.
     * @param content app package data (eg: the .app or .sppkg file).
     * @param shouldOverWrite Should an app with the same name in the same location be overwritten? (default: true)
     * @returns Promise<AppAddResult>
     */
    AppCatalog.prototype.add = function (filename, content, shouldOverWrite) {
        if (shouldOverWrite === void 0) { shouldOverWrite = true; }
        // you don't add to the availableapps collection
        var adder = new AppCatalog(util_1.extractWebUrl(this.toUrl()), "_api/web/tenantappcatalog/add(overwrite=" + shouldOverWrite + ",url='" + filename + "')");
        return adder.postCore({
            body: content,
        }).then(function (r) {
            return {
                data: r,
                file: new files_1.File(odata_1.spExtractODataId(r)),
            };
        });
    };
    return AppCatalog;
}(sharepointqueryable_1.SharePointQueryableCollection));
exports.AppCatalog = AppCatalog;
/**
 * Represents the actions you can preform on a given app within the catalog
 */
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * This method deploys an app on the app catalog.  It must be called in the context
     * of the tenant app catalog web or it will fail.
     */
    App.prototype.deploy = function () {
        return this.clone(App, "Deploy").postCore();
    };
    /**
     * This method retracts a deployed app on the app catalog.  It must be called in the context
     * of the tenant app catalog web or it will fail.
     */
    App.prototype.retract = function () {
        return this.clone(App, "Retract").postCore();
    };
    /**
     * This method allows an app which is already deployed to be installed on a web
     */
    App.prototype.install = function () {
        return this.clone(App, "Install").postCore();
    };
    /**
     * This method allows an app which is already insatlled to be uninstalled on a web
     */
    App.prototype.uninstall = function () {
        return this.clone(App, "Uninstall").postCore();
    };
    /**
     * This method allows an app which is already insatlled to be upgraded on a web
     */
    App.prototype.upgrade = function () {
        return this.clone(App, "Upgrade").postCore();
    };
    /**
     * This method removes an app from the app catalog.  It must be called in the context
     * of the tenant app catalog web or it will fail.
     */
    App.prototype.remove = function () {
        return this.clone(App, "Remove").postCore();
    };
    return App;
}(sharepointqueryable_1.SharePointQueryableInstance));
exports.App = App;

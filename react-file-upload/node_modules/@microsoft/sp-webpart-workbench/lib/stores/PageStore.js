var PageStore = /** @class */ (function () {
    function PageStore(serviceScope) {
        var _this = this;
        this._PAGE_DATA_KEY = 'sp_webpart_workbench_state';
        this._pageReadyPromise = new Promise(function (resolve) {
            _this._resolvePageReady = resolve;
        });
        this.getSerializeCallback = function () {
            return _this._serializePage;
        };
        this.setSerializeCallback = function (callback) {
            _this._serializePage = callback;
            /* tslint:disable:no-string-literal */
            if (window['SP']) {
                window['SP']['logSerializedPageState'] = callback;
                /* tslint:enable:no-string-literal */
            }
        };
        this.setClearCallback = function (callback) {
            _this._clearPage = callback;
        };
        this.savePageState = function () {
            if (_this._serializePage) {
                sessionStorage.setItem(_this._PAGE_DATA_KEY, _this._serializePage());
            }
        };
        this.clearPageState = function () {
            sessionStorage.removeItem(_this._PAGE_DATA_KEY);
            if (_this._clearPage) {
                _this._clearPage();
            }
        };
        this.getPageState = function () {
            return sessionStorage.getItem(_this._PAGE_DATA_KEY);
        };
        this.getPageReadyPromise = function () {
            return _this._pageReadyPromise;
        };
        this.setPageReady = function () {
            _this._resolvePageReady();
        };
        this._serviceScope = serviceScope;
        window.setInterval(this.savePageState, 3 * 1000);
    }
    Object.defineProperty(PageStore.prototype, "serviceScope", {
        get: function () {
            return this._serviceScope;
        },
        enumerable: true,
        configurable: true
    });
    return PageStore;
}());
export { PageStore };
//# sourceMappingURL=PageStore.js.map
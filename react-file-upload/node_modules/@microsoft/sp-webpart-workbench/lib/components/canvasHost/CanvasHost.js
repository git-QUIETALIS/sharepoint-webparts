import { __extends } from "tslib";
import * as React from 'react';
import { Canvas } from '@ms/sp-canvas';
import { DisplayMode, Text } from '@microsoft/sp-core-library';
import { css } from '@microsoft/office-ui-fabric-react-bundle';
import styles from './CanvasHost.module.scss';
import * as strings from './CanvasHost.resx';
var CanvasHost = /** @class */ (function (_super) {
    __extends(CanvasHost, _super);
    function CanvasHost(props) {
        var _this = _super.call(this, props) || this;
        _this._clearPage = function () {
            _this._canvas
                .render(_this._getDisplayMode())
                .catch(function (error) { return console.error(Text.format(strings.UnknownError, error)); });
        };
        _this._canvasRef = React.createRef();
        return _this;
    }
    CanvasHost.prototype.componentDidMount = function () {
        var _this = this;
        var canvasOptions = {
            serviceScope: this.props.store.serviceScope,
            mode: this._getDisplayMode(),
            pageLayoutType: 'workbench'
        };
        this._canvasPromise = Canvas.instantiateCanvas(this._canvasRef.current, canvasOptions).then(function (canvas) {
            _this._canvas = canvas;
            _this._afterCanvasInitialized();
        });
    };
    CanvasHost.prototype.componentDidUpdate = function (props) {
        var _this = this;
        var mode = this._getDisplayMode();
        if (this._canvas) {
            this._canvasPromise
                .then(function () { return _this._canvas.setDisplayMode(mode); })
                .catch(function (error) { return console.error(Text.format(strings.CanvasInitializationError, error)); });
        }
    };
    CanvasHost.prototype.render = function () {
        var _a;
        var rootClass = css(styles.canvasHost, (_a = {},
            _a[styles.hasHeader] = this.props.hasOfficeHeader,
            _a[styles.hasCommandBar] = this.props.hasCommandBar,
            _a));
        var belowHeaderClass = styles.belowHeader;
        var contentClass = styles.content;
        return (React.createElement("div", { className: rootClass },
            React.createElement("div", { className: belowHeaderClass },
                React.createElement("div", { className: contentClass },
                    React.createElement("div", { ref: this._canvasRef })))));
    };
    CanvasHost.prototype._getDisplayMode = function () {
        return this.props.isEditing ? DisplayMode.Edit : DisplayMode.Read;
    };
    CanvasHost.prototype._afterCanvasInitialized = function () {
        var _this = this;
        // Don't render webparts until the page is ready
        this.props.store
            .getPageReadyPromise()
            .then(function () {
            var render = function () {
                _this.props.store.setClearCallback(_this._clearPage);
                _this.props.store.setSerializeCallback(function () { return JSON.stringify(_this._canvas.serializeAsObject()); });
                return _this._canvas.render(_this._getDisplayMode(), JSON.parse(_this.props.store.getPageState()));
            };
            // Fetch webparts before rendering to avoid a race condition.
            return _this._canvas
                .fetchWebparts(true)
                .then(render)
                .catch(function (error) {
                console.error(Text.format(strings.FetchFailedError, error));
                return render();
            });
        })
            .catch(function (error) { return console.error(Text.format(strings.UnknownError, error)); });
    };
    return CanvasHost;
}(React.Component));
export default CanvasHost;
//# sourceMappingURL=CanvasHost.js.map
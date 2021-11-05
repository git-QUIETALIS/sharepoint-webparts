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
var React = require("react");
var office_ui_fabric_react_1 = require("office-ui-fabric-react");
var IPropertyFieldHeader_1 = require("./IPropertyFieldHeader");
var PropertyFieldHeader_module_scss_1 = require("./PropertyFieldHeader.module.scss");
/**
 * PropertyFieldHeader component.
 * Displays a label and a callout
 */
var PropertyFieldHeader = (function (_super) {
    __extends(PropertyFieldHeader, _super);
    function PropertyFieldHeader(props, state) {
        var _this = _super.call(this, props, state) || this;
        _this._onCalloutDismiss = _this._onCalloutDismiss.bind(_this);
        _this.state = {
            isCalloutVisible: false
        };
        return _this;
    }
    PropertyFieldHeader.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: PropertyFieldHeader_module_scss_1.default.headerBar },
            React.createElement("div", { className: PropertyFieldHeader_module_scss_1.default.header }, this.props.label),
            React.createElement("div", { className: PropertyFieldHeader_module_scss_1.default.info },
                React.createElement("i", { className: 'ms-Icon ms-Icon--Info', ref: function (infoIcon) { _this._infoIcon = infoIcon; }, onMouseOver: this.props.calloutTrigger === IPropertyFieldHeader_1.CalloutTriggers.Hover ? this._onInfoIconMouseOver.bind(this) : null, onMouseOut: this.props.calloutTrigger === IPropertyFieldHeader_1.CalloutTriggers.Hover ? this._onInfoIconMouseOut.bind(this) : null, onClick: this.props.calloutTrigger === IPropertyFieldHeader_1.CalloutTriggers.Click ? this._onInfoIconClick.bind(this) : null })),
            this.state.isCalloutVisible && (React.createElement(office_ui_fabric_react_1.Callout, { className: PropertyFieldHeader_module_scss_1.default.headerCallout, target: this._infoIcon, isBeakVisible: true, directionalHint: 9 /* leftCenter */, directionalHintForRTL: 12 /* rightCenter */, onDismiss: this._onCalloutDismiss, gapSpace: this.props.gapSpace !== undefined ? this.props.gapSpace : 5, calloutWidth: this.props.calloutWidth }, this.props.calloutContent))));
    };
    PropertyFieldHeader.prototype._onCalloutDismiss = function () {
        if (this.state.isCalloutVisible) {
            this.setState({
                isCalloutVisible: false
            });
        }
    };
    PropertyFieldHeader.prototype._onInfoIconMouseOver = function () {
        if (this.props.calloutTrigger !== IPropertyFieldHeader_1.CalloutTriggers.Hover) {
            return;
        }
        if (!this.state.isCalloutVisible) {
            this.setState({
                isCalloutVisible: true
            });
        }
    };
    PropertyFieldHeader.prototype._onInfoIconMouseOut = function (e) {
        if (this.props.calloutTrigger !== IPropertyFieldHeader_1.CalloutTriggers.Hover) {
            return;
        }
        if (e.relatedTarget) {
            var relatedTarget = e.relatedTarget;
            if (relatedTarget && relatedTarget.closest('.ms-Callout-container')) {
                return;
            }
        }
        this.setState({
            isCalloutVisible: false
        });
    };
    PropertyFieldHeader.prototype._onInfoIconClick = function () {
        if (this.props.calloutTrigger !== IPropertyFieldHeader_1.CalloutTriggers.Click) {
            return;
        }
        this.setState({
            isCalloutVisible: !this.state.isCalloutVisible
        });
    };
    return PropertyFieldHeader;
}(React.Component));
exports.default = PropertyFieldHeader;

//# sourceMappingURL=PropertyFieldHeader.js.map

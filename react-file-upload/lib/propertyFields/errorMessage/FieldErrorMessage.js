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
/**
 * Component that shows an error message when something went wront with the property control
 */
var FieldErrorMessage = (function (_super) {
    __extends(FieldErrorMessage, _super);
    function FieldErrorMessage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FieldErrorMessage.prototype.render = function () {
        if (this.props.errorMessage !== 'undefined' && this.props.errorMessage !== null && this.props.errorMessage !== '') {
            return (React.createElement("div", { style: { paddingBottom: '8px' } },
                React.createElement("div", { "aria-live": 'assertive', className: 'ms-u-screenReaderOnly', "data-automation-id": 'error-message' }, this.props.errorMessage),
                React.createElement("span", null,
                    React.createElement("p", { className: 'ms-TextField-errorMessage ms-u-slideDownIn20' }, this.props.errorMessage))));
        }
        else {
            return React.createElement("div", null);
        }
    };
    return FieldErrorMessage;
}(React.Component));
exports.default = FieldErrorMessage;

//# sourceMappingURL=FieldErrorMessage.js.map

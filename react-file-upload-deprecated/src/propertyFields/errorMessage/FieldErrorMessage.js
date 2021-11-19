"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
/**
 * Component that shows an error message when something went wront with the property control
 */
class FieldErrorMessage extends React.Component {
    render() {
        if (this.props.errorMessage !== 'undefined' && this.props.errorMessage !== null && this.props.errorMessage !== '') {
            return (React.createElement("div", { style: { paddingBottom: '8px' } },
                React.createElement("div", { "aria-live": 'assertive', className: 'ms-u-screenReaderOnly', "data-automation-id": 'error-message' }, this.props.errorMessage),
                React.createElement("span", null,
                    React.createElement("p", { className: 'ms-TextField-errorMessage ms-u-slideDownIn20' }, this.props.errorMessage))));
        }
        else {
            return React.createElement("div", null);
        }
    }
}
exports.default = FieldErrorMessage;
//# sourceMappingURL=FieldErrorMessage.js.map
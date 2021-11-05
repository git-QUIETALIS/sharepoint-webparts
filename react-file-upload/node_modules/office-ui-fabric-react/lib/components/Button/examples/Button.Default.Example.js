"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var Button_1 = require("office-ui-fabric-react/lib/Button");
var Label_1 = require("office-ui-fabric-react/lib/Label");
var ButtonDefaultExample = /** @class */ (function (_super) {
    tslib_1.__extends(ButtonDefaultExample, _super);
    function ButtonDefaultExample() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ButtonDefaultExample.prototype.render = function () {
        var _a = this.props, disabled = _a.disabled, checked = _a.checked;
        return (React.createElement("div", { className: 'ms-BasicButtonsTwoUp' },
            React.createElement("div", null,
                React.createElement(Label_1.Label, null, "Standard"),
                React.createElement(Button_1.DefaultButton, { "data-automation-id": 'test', disabled: disabled, checked: checked, text: 'Butjon' })),
            React.createElement("div", null,
                React.createElement(Label_1.Label, null, "Primary"),
                React.createElement(Button_1.DefaultButton, { primary: true, "data-automation-id": 'test', disabled: disabled, checked: checked, text: 'Butjon', onClick: this._alertClicked }))));
    };
    ButtonDefaultExample.prototype._alertClicked = function () {
        alert('Clicked');
    };
    return ButtonDefaultExample;
}(React.Component));
exports.ButtonDefaultExample = ButtonDefaultExample;
//# sourceMappingURL=Button.Default.Example.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var Utilities_1 = require("../../../Utilities");
var DefaultButton_1 = require("../DefaultButton/DefaultButton");
var PrimaryButton = /** @class */ (function (_super) {
    tslib_1.__extends(PrimaryButton, _super);
    function PrimaryButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Set this BaseComponent._resolveComponentRef to false, bypassing resolution of componentRef.
         */
        _this._shouldUpdateComponentRef = false;
        return _this;
    }
    PrimaryButton.prototype.render = function () {
        return (React.createElement(DefaultButton_1.DefaultButton, tslib_1.__assign({}, this.props, { primary: true, onRenderDescription: Utilities_1.nullRender })));
    };
    PrimaryButton = tslib_1.__decorate([
        Utilities_1.customizable('PrimaryButton', ['theme'])
    ], PrimaryButton);
    return PrimaryButton;
}(Utilities_1.BaseComponent));
exports.PrimaryButton = PrimaryButton;
//# sourceMappingURL=PrimaryButton.js.map
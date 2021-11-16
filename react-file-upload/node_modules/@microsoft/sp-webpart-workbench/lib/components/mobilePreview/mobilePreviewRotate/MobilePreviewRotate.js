import { __extends } from "tslib";
import * as React from 'react';
import { css, getIconClassName } from '@microsoft/office-ui-fabric-react-bundle';
import styles from './MobilePreviewRotate.module.scss';
import { DeviceOrientation } from '../mobilePreview/MobilePreview';
var MobilePreviewRotate = /** @class */ (function (_super) {
    __extends(MobilePreviewRotate, _super);
    function MobilePreviewRotate() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._onClickRotate = function () {
            var orientation = _this.props.currentOrientation === DeviceOrientation.Portrait
                ? DeviceOrientation.Landscape
                : DeviceOrientation.Portrait;
            _this.props.onRotate(orientation);
        };
        return _this;
    }
    MobilePreviewRotate.prototype.render = function () {
        var rotateIconClass = css(getIconClassName('Refresh'), styles.mobilePreviewRotateIcon);
        return (React.createElement("div", null,
            React.createElement("a", { role: 'button', onClick: this._onClickRotate },
                React.createElement("span", { className: rotateIconClass }))));
    };
    return MobilePreviewRotate;
}(React.Component));
export default MobilePreviewRotate;
//# sourceMappingURL=MobilePreviewRotate.js.map
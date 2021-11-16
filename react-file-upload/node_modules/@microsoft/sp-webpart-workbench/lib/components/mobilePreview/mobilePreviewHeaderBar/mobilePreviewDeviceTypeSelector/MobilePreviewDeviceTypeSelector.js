import { __extends } from "tslib";
import * as React from 'react';
import { css, getIconClassName } from '@microsoft/office-ui-fabric-react-bundle';
import styles from './MobilePreviewDeviceTypeSelector.module.scss';
import { DeviceType } from '../../mobilePreview/MobilePreview';
var MobilePreviewDeviceTypeSelector = /** @class */ (function (_super) {
    __extends(MobilePreviewDeviceTypeSelector, _super);
    function MobilePreviewDeviceTypeSelector() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._handleDeviceChangePhone = function () {
            _this.props.onChangeDeviceType(DeviceType.Phone);
        };
        _this._handleDeviceChangeTablet = function () {
            _this.props.onChangeDeviceType(DeviceType.Tablet);
        };
        return _this;
    }
    MobilePreviewDeviceTypeSelector.prototype.render = function () {
        var spanClassNameMobile = css(getIconClassName('CellPhone'), styles.mobilePreviewDeviceIcon);
        var spanClassNameTablet = css(getIconClassName('Tablet'), styles.mobilePreviewDeviceIcon);
        return (React.createElement("div", null,
            React.createElement("div", { className: styles.navBarItemRight },
                React.createElement("a", { tabIndex: 0, role: 'button', onClick: this._handleDeviceChangePhone },
                    React.createElement("span", { className: spanClassNameMobile }))),
            React.createElement("div", { className: styles.navBarItemRight },
                React.createElement("a", { tabIndex: 0, role: 'button', onClick: this._handleDeviceChangeTablet },
                    React.createElement("span", { className: spanClassNameTablet })))));
    };
    return MobilePreviewDeviceTypeSelector;
}(React.Component));
export default MobilePreviewDeviceTypeSelector;
//# sourceMappingURL=MobilePreviewDeviceTypeSelector.js.map
import { __extends } from "tslib";
import * as React from 'react';
import * as PropTypes from 'prop-types';
import { css } from '@microsoft/office-ui-fabric-react-bundle';
import { DeviceOrientation, DeviceType } from '../mobilePreview/MobilePreview';
import styles from './MobilePreviewClickStop.module.scss';
import * as strings from '../MobilePreview.resx';
var MobilePreviewClickStop = /** @class */ (function (_super) {
    __extends(MobilePreviewClickStop, _super);
    function MobilePreviewClickStop(props) {
        var _this = _super.call(this, props) || this;
        _this._handleFocus = function () {
            // If the focus is set to the button and the button is not selected, read that Enter key can be used to select
            if (document.activeElement === _this._mainRef.current && !_this.props.selected) {
                _this.context.a11yManager.alert(strings.ScreenReaderDevicePickerSelectionChanged);
            }
        };
        _this._handleClick = function () {
            _this.props.onClick(_this.props.device);
        };
        _this._handleKeyDown = function (evt) {
            // Call click handler on Enter
            if (evt.keyCode === 13) {
                _this._handleClick();
            }
        };
        _this._mainRef = React.createRef();
        return _this;
    }
    MobilePreviewClickStop.prototype.render = function () {
        var _a;
        var effectiveWidth = this.props.device.width;
        if (this.props.deviceType === DeviceType.Phone) {
            if (this.props.orientation === DeviceOrientation.Landscape) {
                effectiveWidth = this.props.device.height;
            }
        }
        else if (this.props.deviceType === DeviceType.Tablet) {
            if (this.props.orientation === DeviceOrientation.Portrait) {
                effectiveWidth = this.props.device.height;
            }
        }
        var leftCalc = "calc(50% - " + effectiveWidth / 2 + "px)";
        var divStyle = {
            width: effectiveWidth,
            left: leftCalc
        };
        var className = css(styles.navBarItem, styles.clickStop, (_a = {},
            _a[styles.clickStopSelected] = this.props.selected,
            _a));
        return (React.createElement("li", { className: className, role: 'button', "aria-label": this.props.device.name, tabIndex: 0, onClick: this._handleClick, onKeyDown: this._handleKeyDown, style: divStyle, onFocus: this._handleFocus, ref: this._mainRef }));
    };
    MobilePreviewClickStop.contextTypes = {
        a11yManager: PropTypes.object
    };
    return MobilePreviewClickStop;
}(React.Component));
export default MobilePreviewClickStop;
//# sourceMappingURL=MobilePreviewClickStop.js.map
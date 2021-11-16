import { __extends } from "tslib";
import * as React from 'react';
import { FocusZone, FocusZoneDirection } from '@microsoft/office-ui-fabric-react-bundle';
import MobilePreviewClickStop from '../mobilePreviewClickStop/MobilePreviewClickStop';
import styles from './MobilePreviewClickStopBar.module.scss';
import * as strings from '../MobilePreview.resx';
var MobilePreviewClickStopBar = /** @class */ (function (_super) {
    __extends(MobilePreviewClickStopBar, _super);
    function MobilePreviewClickStopBar(props) {
        var _this = _super.call(this, props) || this;
        _this._handleClick = function (device) {
            _this.props.onSelectClickStop(device);
        };
        return _this;
    }
    MobilePreviewClickStopBar.prototype.render = function () {
        var _a = this.props, currentDevice = _a.currentDevice, currentOrientation = _a.currentOrientation, devices = _a.devices;
        var deviceDiv = [];
        for (var _i = 0, devices_1 = devices; _i < devices_1.length; _i++) {
            var device = devices_1[_i];
            var selected = false;
            if (device === currentDevice) {
                selected = true;
            }
            deviceDiv.push(React.createElement(MobilePreviewClickStop, { key: device.name, device: device, onClick: this._handleClick, selected: selected, orientation: currentOrientation, deviceType: this.props.deviceType }));
        }
        return (React.createElement("div", { className: styles.clickStopNavBar, "data-sp-a11y-alertonfocusin": strings.ScreenReaderDevicePickerEntered },
            React.createElement(FocusZone, { direction: FocusZoneDirection.horizontal },
                React.createElement("ul", { className: styles.navBarItems },
                    deviceDiv,
                    React.createElement("div", { id: 'clickStopBarLabel', className: styles.mobilePreviewDeviceTitle }, currentDevice.name)))));
    };
    return MobilePreviewClickStopBar;
}(React.Component));
export default MobilePreviewClickStopBar;
//# sourceMappingURL=MobilePreviewClickStopBar.js.map
// @copyright Microsoft Corporation. All rights reserved.
import { __extends } from "tslib";
import { Dialog, DialogFooter, DialogType } from 'office-ui-fabric-react/lib/components/Dialog';
import * as React from 'react';
import { Link, PrimaryButton } from '@microsoft/office-ui-fabric-react-bundle';
import * as strings from './ErrorDialog.resx';
/**
 * Error dialog for the workbench.
 */
var ErrorDialog = /** @class */ (function (_super) {
    __extends(ErrorDialog, _super);
    function ErrorDialog(props) {
        var _this = _super.call(this, props) || this;
        _this.open = function () {
            _this.setState({ showDialog: true });
        };
        _this._close = function () {
            _this.setState({ showDialog: false });
        };
        _this.state = {
            showDialog: false
        };
        return _this;
    }
    ErrorDialog.prototype.render = function () {
        return (React.createElement(Dialog, { hidden: !this.state.showDialog, dialogContentProps: {
                title: strings.Title,
                subText: strings.SubText,
                type: DialogType.largeHeader
            }, modalProps: {
                isBlocking: false
            } },
            React.createElement("span", null, strings.ClickHerePrefix),
            React.createElement(Link, { href: 'https://dev.office.com/sharepoint/docs/spfx/web-parts/get-started/build-a-hello-world-web-part' }, strings.ClickHereLink),
            React.createElement("span", null, strings.ClickHereSuffix),
            React.createElement(DialogFooter, null,
                React.createElement(PrimaryButton, { onClick: this._close, "data-automation-id": 'GulpServeWarningOkButton', text: strings.OkButtonText }))));
    };
    return ErrorDialog;
}(React.Component));
export default ErrorDialog;
//# sourceMappingURL=ErrorDialog.js.map
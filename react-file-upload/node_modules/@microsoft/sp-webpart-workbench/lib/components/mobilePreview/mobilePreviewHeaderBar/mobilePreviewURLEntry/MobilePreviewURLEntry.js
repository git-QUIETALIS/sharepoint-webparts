import { __assign, __extends } from "tslib";
import * as React from 'react';
import { Button, TextField } from '@microsoft/office-ui-fabric-react-bundle';
import styles from './MobilePreviewURLEntry.module.scss';
import * as strings from '../../MobilePreview.resx';
var MobilePreviewURLEntry = /** @class */ (function (_super) {
    __extends(MobilePreviewURLEntry, _super);
    function MobilePreviewURLEntry() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * If the URL is not valid, an error page displays as it would in the browser. As such, no additional validation is
         * conducted here aside from not allowing a blank entry.
         */
        _this._validateAndCompleteURL = function (event, value) {
            if (!value || value === '') {
                return;
            }
            var regex = /https?:\/\//;
            if (!regex.test(value)) {
                value = 'http://' + value;
            }
            _this.props.onChangeURL(value);
        };
        return _this;
    }
    MobilePreviewURLEntry.prototype.render = function () {
        return (React.createElement("div", { className: styles.mobilePreviewURLbar },
            React.createElement(TextField, __assign({ className: styles.mobilePreviewTextfield, onChange: this._validateAndCompleteURL }, { placeholder: strings.UrlTextBoxPlaceholder } /* VSO:391730 Remove this workaround */)),
            React.createElement(Button, { className: styles.mobilePreviewURLbutton, onClick: this.props.onClickURLSubmit }, "View Preview")));
    };
    return MobilePreviewURLEntry;
}(React.Component));
export default MobilePreviewURLEntry;
//# sourceMappingURL=MobilePreviewURLEntry.js.map
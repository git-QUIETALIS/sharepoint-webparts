"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const office_ui_fabric_react_1 = require("office-ui-fabric-react");
const IPropertyFieldHeader_1 = require("./IPropertyFieldHeader");
const PropertyFieldHeader_module_scss_1 = require("./PropertyFieldHeader.module.scss");
/**
 * PropertyFieldHeader component.
 * Displays a label and a callout
 */
class PropertyFieldHeader extends React.Component {
    constructor(props, state) {
        super(props, state);
        this._onCalloutDismiss = this._onCalloutDismiss.bind(this);
        this.state = {
            isCalloutVisible: false
        };
    }
    render() {
        return (React.createElement("div", { className: PropertyFieldHeader_module_scss_1.default.headerBar },
            React.createElement("div", { className: PropertyFieldHeader_module_scss_1.default.header }, this.props.label),
            React.createElement("div", { className: PropertyFieldHeader_module_scss_1.default.info },
                React.createElement("i", { className: 'ms-Icon ms-Icon--Info', ref: (infoIcon) => { this._infoIcon = infoIcon; }, onMouseOver: this.props.calloutTrigger === IPropertyFieldHeader_1.CalloutTriggers.Hover ? this._onInfoIconMouseOver.bind(this) : null, onMouseOut: this.props.calloutTrigger === IPropertyFieldHeader_1.CalloutTriggers.Hover ? this._onInfoIconMouseOut.bind(this) : null, onClick: this.props.calloutTrigger === IPropertyFieldHeader_1.CalloutTriggers.Click ? this._onInfoIconClick.bind(this) : null })),
            this.state.isCalloutVisible && (React.createElement(office_ui_fabric_react_1.Callout, { className: PropertyFieldHeader_module_scss_1.default.headerCallout, target: this._infoIcon, isBeakVisible: true, directionalHint: office_ui_fabric_react_1.DirectionalHint.leftCenter, directionalHintForRTL: office_ui_fabric_react_1.DirectionalHint.rightCenter, onDismiss: this._onCalloutDismiss, gapSpace: this.props.gapSpace !== undefined ? this.props.gapSpace : 5, calloutWidth: this.props.calloutWidth }, this.props.calloutContent))));
    }
    _onCalloutDismiss() {
        if (this.state.isCalloutVisible) {
            this.setState({
                isCalloutVisible: false
            });
        }
    }
    _onInfoIconMouseOver() {
        if (this.props.calloutTrigger !== IPropertyFieldHeader_1.CalloutTriggers.Hover) {
            return;
        }
        if (!this.state.isCalloutVisible) {
            this.setState({
                isCalloutVisible: true
            });
        }
    }
    _onInfoIconMouseOut(e) {
        if (this.props.calloutTrigger !== IPropertyFieldHeader_1.CalloutTriggers.Hover) {
            return;
        }
        if (e.relatedTarget) {
            let relatedTarget = e.relatedTarget;
            if (relatedTarget && relatedTarget.closest('.ms-Callout-container')) {
                return;
            }
        }
        this.setState({
            isCalloutVisible: false
        });
    }
    _onInfoIconClick() {
        if (this.props.calloutTrigger !== IPropertyFieldHeader_1.CalloutTriggers.Click) {
            return;
        }
        this.setState({
            isCalloutVisible: !this.state.isCalloutVisible
        });
    }
}
exports.default = PropertyFieldHeader;
//# sourceMappingURL=PropertyFieldHeader.js.map
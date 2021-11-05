"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Dropdown_1 = require("office-ui-fabric-react/lib/Dropdown");
var Utilities_1 = require("office-ui-fabric-react/lib/Utilities");
var Label_1 = require("office-ui-fabric-react/lib/Label");
var SPListPickerService_1 = require("../../services/SPListPickerService");
var FieldErrorMessage_1 = require("../errorMessage/FieldErrorMessage");
// Empty list value, to be checked for single list selection
var EMPTY_LIST_KEY = 'NO_LIST_SELECTED';
/**
 * Renders the controls for PropertyFieldListPicker component
 */
var PropertyFieldListPickerHost = (function (_super) {
    __extends(PropertyFieldListPickerHost, _super);
    /**
     * Constructor method
     */
    function PropertyFieldListPickerHost(props) {
        var _this = _super.call(this, props) || this;
        _this.options = [];
        _this.state = {
            results: _this.options,
            errorMessage: ''
        };
        _this.async = new Utilities_1.Async(_this);
        _this.validate = _this.validate.bind(_this);
        _this.onChanged = _this.onChanged.bind(_this);
        _this.notifyAfterValidate = _this.notifyAfterValidate.bind(_this);
        _this.delayedValidate = _this.async.debounce(_this.validate, _this.props.deferredValidationTime);
        return _this;
    }
    PropertyFieldListPickerHost.prototype.componentDidMount = function () {
        // Start retrieving the SharePoint lists
        this.loadLists();
    };
    /**
     * Loads the list from SharePoint current web site
     */
    PropertyFieldListPickerHost.prototype.loadLists = function () {
        var _this = this;
        var listService = new SPListPickerService_1.default(this.props, this.props.context);
        listService.getLibs().then(function (response) {
            // Start mapping the list that are selected
            response.value.map(function (list) {
                if (_this.props.selectedList === list.Id) {
                    _this.selectedKey = list.Id;
                }
                _this.options.push({
                    key: list.Id,
                    text: list.Title
                });
            });
            // Option to unselect the list
            _this.options.unshift({
                key: EMPTY_LIST_KEY,
                text: ''
            });
            // Update the current component state
            _this.setState({
                results: _this.options,
                selectedKey: _this.selectedKey
            });
        });
    };
    /**
     * Raises when a list has been selected
     */
    PropertyFieldListPickerHost.prototype.onChanged = function (option, index) {
        var newValue = option.key;
        this.delayedValidate(newValue);
    };
    /**
     * Validates the new custom field value
     */
    PropertyFieldListPickerHost.prototype.validate = function (value) {
        var _this = this;
        if (this.props.onGetErrorMessage === null || this.props.onGetErrorMessage === undefined) {
            this.notifyAfterValidate(this.props.selectedList, value);
            return;
        }
        if (this.latestValidateValue === value) {
            return;
        }
        this.latestValidateValue = value;
        var result = this.props.onGetErrorMessage(value || '');
        if (typeof result !== 'undefined') {
            if (typeof result === 'string') {
                if (result === '') {
                    this.notifyAfterValidate(this.props.selectedList, value);
                }
                this.setState({
                    errorMessage: result
                });
            }
            else {
                result.then(function (errorMessage) {
                    if (typeof errorMessage === 'undefined' || errorMessage === '') {
                        _this.notifyAfterValidate(_this.props.selectedList, value);
                    }
                    _this.setState({
                        errorMessage: errorMessage
                    });
                });
            }
        }
        else {
            this.notifyAfterValidate(this.props.selectedList, value);
        }
    };
    /**
     * Notifies the parent Web Part of a property value change
     */
    PropertyFieldListPickerHost.prototype.notifyAfterValidate = function (oldValue, newValue) {
        // Check if the user wanted to unselect the list
        var propValue = newValue === EMPTY_LIST_KEY ? '' : newValue;
        // Deselect all options
        this.options = this.state.results.map(function (option) {
            if (option.selected) {
                option.selected = false;
            }
            return option;
        });
        // Set the current selected key
        this.selectedKey = newValue;
        // Update the state
        this.setState({
            selectedKey: this.selectedKey,
            results: this.options
        });
        if (this.props.onPropertyChange && propValue !== null) {
            // Store the new property value
            this.props.properties[this.props.targetProperty] = propValue;
            // Trigger the default onPrpertyChange event
            this.props.onPropertyChange(this.props.targetProperty, oldValue, propValue);
            // Trigger the apply button
            if (typeof this.props.onChange !== 'undefined' && this.props.onChange !== null) {
                this.props.onChange(this.props.targetProperty, propValue);
            }
        }
    };
    /**
     * Called when the component will unmount
     */
    PropertyFieldListPickerHost.prototype.componentWillUnmount = function () {
        if (typeof this.async !== 'undefined') {
            this.async.dispose();
        }
    };
    /**
     * Renders the SPListpicker controls with Office UI Fabric
     */
    PropertyFieldListPickerHost.prototype.render = function () {
        // Renders content
        return (React.createElement("div", null,
            React.createElement(Label_1.Label, null, this.props.label),
            React.createElement(Dropdown_1.Dropdown, { disabled: this.props.disabled, label: '', onChanged: this.onChanged, options: this.state.results, selectedKey: this.state.selectedKey }),
            React.createElement(FieldErrorMessage_1.default, { errorMessage: this.state.errorMessage })));
    };
    return PropertyFieldListPickerHost;
}(React.Component));
exports.default = PropertyFieldListPickerHost;

//# sourceMappingURL=PropertyFieldListPickerHost.js.map

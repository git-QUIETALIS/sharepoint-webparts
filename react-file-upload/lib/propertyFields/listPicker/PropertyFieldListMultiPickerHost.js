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
var Label_1 = require("office-ui-fabric-react/lib/Label");
var Spinner_1 = require("office-ui-fabric-react/lib/Spinner");
var Utilities_1 = require("office-ui-fabric-react/lib/Utilities");
var Checkbox_1 = require("office-ui-fabric-react/lib/Checkbox");
var SPListPickerService_1 = require("../../services/SPListPickerService");
var FieldErrorMessage_1 = require("../errorMessage/FieldErrorMessage");
/**
* Renders the controls for PropertyFieldSPListMultiplePicker component
*/
var PropertyFieldListMultiPickerHost = (function (_super) {
    __extends(PropertyFieldListMultiPickerHost, _super);
    /**
    * Constructor
    */
    function PropertyFieldListMultiPickerHost(props) {
        var _this = _super.call(this, props) || this;
        _this.options = [];
        _this.loaded = false;
        _this.onChanged = _this.onChanged.bind(_this);
        _this.state = {
            results: _this.options,
            selectedKeys: [],
            loaded: _this.loaded,
            errorMessage: ''
        };
        _this.async = new Utilities_1.Async(_this);
        _this.validate = _this.validate.bind(_this);
        _this.notifyAfterValidate = _this.notifyAfterValidate.bind(_this);
        _this.delayedValidate = _this.async.debounce(_this.validate, _this.props.deferredValidationTime);
        _this.loadLists();
        return _this;
    }
    /**
    * Loads the list from SharePoint current web site
    */
    PropertyFieldListMultiPickerHost.prototype.loadLists = function () {
        var _this = this;
        // Builds the SharePoint List service
        var listService = new SPListPickerService_1.default(this.props, this.props.context);
        // Gets the libs
        listService.getLibs().then(function (response) {
            response.value.map(function (list) {
                var isSelected = false;
                var indexInExisting = -1;
                // Defines if the current list must be selected by default
                if (_this.props.selectedLists) {
                    indexInExisting = _this.props.selectedLists.indexOf(list.Id);
                }
                if (indexInExisting > -1) {
                    isSelected = true;
                    _this.state.selectedKeys.push(list.Id);
                }
                // Add the option to the list
                _this.options.push({
                    key: list.Id,
                    text: list.Title,
                    checked: isSelected
                });
            });
            _this.loaded = true;
            _this.setState({ results: _this.options, selectedKeys: _this.state.selectedKeys, loaded: true });
        });
    };
    /**
    * Raises when a list has been selected
    */
    PropertyFieldListMultiPickerHost.prototype.onChanged = function (element, isChecked) {
        if (element) {
            var value_1 = element.currentTarget.value;
            var selectedKeys = this.state.selectedKeys;
            // Check if the element is selected
            if (isChecked === false) {
                // Remove the unselected item
                selectedKeys = selectedKeys.filter(function (s) { return s !== value_1; });
            }
            else {
                // Add the selected item and filter out the doubles
                selectedKeys.push(value_1);
                selectedKeys = selectedKeys.filter(function (item, pos, self) {
                    return self.indexOf(item) == pos;
                });
            }
            // Update the state and validate
            this.setState({
                selectedKeys: selectedKeys
            });
            this.delayedValidate(selectedKeys);
        }
    };
    /**
    * Validates the new custom field value
    */
    PropertyFieldListMultiPickerHost.prototype.validate = function (value) {
        var _this = this;
        if (this.props.onGetErrorMessage === null || typeof this.props.onGetErrorMessage === 'undefined') {
            this.notifyAfterValidate(this.props.selectedLists, value);
            return;
        }
        var result = this.props.onGetErrorMessage(value || []);
        if (typeof result !== 'undefined') {
            if (typeof result === 'string') {
                if (result === '') {
                    this.notifyAfterValidate(this.props.selectedLists, value);
                }
                this.setState({
                    errorMessage: result
                });
            }
            else {
                result.then(function (errorMessage) {
                    if (typeof errorMessage === 'undefined' || errorMessage === '') {
                        _this.notifyAfterValidate(_this.props.selectedLists, value);
                    }
                    _this.setState({
                        errorMessage: errorMessage
                    });
                });
            }
        }
        else {
            this.notifyAfterValidate(this.props.selectedLists, value);
        }
    };
    /**
    * Notifies the parent Web Part of a property value change
    */
    PropertyFieldListMultiPickerHost.prototype.notifyAfterValidate = function (oldValue, newValue) {
        if (this.props.onPropertyChange && newValue !== null) {
            this.props.properties[this.props.targetProperty] = newValue;
            this.props.onPropertyChange(this.props.targetProperty, oldValue, newValue);
            // Trigger the apply button
            if (typeof this.props.onChange !== 'undefined' && this.props.onChange !== null) {
                this.props.onChange(this.props.targetProperty, newValue);
            }
        }
    };
    /**
    * Called when the component will unmount
    */
    PropertyFieldListMultiPickerHost.prototype.componentWillUnmount = function () {
        this.async.dispose();
    };
    /**
    * Renders the SPListMultiplePicker controls with Office UI  Fabric
    */
    PropertyFieldListMultiPickerHost.prototype.render = function () {
        var _this = this;
        if (this.loaded === false) {
            return (React.createElement("div", null,
                React.createElement(Label_1.Label, null, this.props.label),
                React.createElement(Spinner_1.Spinner, { type: Spinner_1.SpinnerType.normal })));
        }
        else {
            var styleOfLabel = {
                color: this.props.disabled === true ? '#A6A6A6' : 'auto'
            };
            // Renders content
            return (React.createElement("div", null,
                React.createElement(Label_1.Label, null, this.props.label),
                this.options.map(function (item, index) {
                    var uniqueKey = _this.props.targetProperty + '-' + item.key;
                    return (React.createElement("div", { style: { marginBottom: '5px' }, className: 'ms-ChoiceField', key: _this.props.key + "-multiplelistpicker-" + index },
                        React.createElement(Checkbox_1.Checkbox, { defaultChecked: item.checked, disabled: _this.props.disabled, label: item.text, onChange: _this.onChanged, inputProps: { value: item.key } })));
                }),
                React.createElement(FieldErrorMessage_1.default, { errorMessage: this.state.errorMessage })));
        }
    };
    return PropertyFieldListMultiPickerHost;
}(React.Component));
exports.default = PropertyFieldListMultiPickerHost;

//# sourceMappingURL=PropertyFieldListMultiPickerHost.js.map

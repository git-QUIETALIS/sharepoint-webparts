"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactDom = require("react-dom");
var sp_webpart_base_1 = require("@microsoft/sp-webpart-base");
var PropertyFieldListPickerHost_1 = require("./PropertyFieldListPickerHost");
var PropertyFieldListMultiPickerHost_1 = require("./PropertyFieldListMultiPickerHost");
/**
 * Represents a PropertyFieldListPicker object
 */
var PropertyFieldListPickerBuilder = (function () {
    /**
     * Constructor method
     */
    function PropertyFieldListPickerBuilder(_targetProperty, _properties) {
        //Properties defined by IPropertyPaneField
        this.type = sp_webpart_base_1.PropertyPaneFieldType.Custom;
        this.disabled = false;
        this.deferredValidationTime = 200;
        this.disableReactivePropertyChanges = false;
        this.render = this.render.bind(this);
        this.targetProperty = _targetProperty;
        this.properties = _properties;
        this.properties.onDispose = this.dispose;
        this.properties.onRender = this.render;
        this.label = _properties.label;
        this.context = _properties.context;
        this.selectedList = _properties.selectedList;
        this.selectedLists = _properties.selectedLists;
        this.baseTemplate = _properties.baseTemplate;
        this.orderBy = _properties.orderBy;
        this.multiSelect = _properties.multiSelect;
        this.includeHidden = _properties.includeHidden;
        this.onPropertyChange = _properties.onPropertyChange;
        this.customProperties = _properties.properties;
        this.key = _properties.key;
        this.onGetErrorMessage = _properties.onGetErrorMessage;
        if (_properties.disabled === true) {
            this.disabled = _properties.disabled;
        }
        if (_properties.deferredValidationTime) {
            this.deferredValidationTime = _properties.deferredValidationTime;
        }
    }
    PropertyFieldListPickerBuilder.prototype.onPropertyChange = function (propertyPath, oldValue, newValue) { };
    /**
     * Renders the SPListPicker field content
     */
    PropertyFieldListPickerBuilder.prototype.render = function (elem, ctx, changeCallback) {
        var componentProps = {
            label: this.label,
            targetProperty: this.targetProperty,
            context: this.context,
            baseTemplate: this.baseTemplate,
            orderBy: this.orderBy,
            multiSelect: this.multiSelect,
            includeHidden: this.includeHidden,
            onDispose: this.dispose,
            onRender: this.render,
            onChange: changeCallback,
            onPropertyChange: this.onPropertyChange,
            properties: this.customProperties,
            key: this.key,
            disabled: this.disabled,
            onGetErrorMessage: this.onGetErrorMessage,
            deferredValidationTime: this.deferredValidationTime
        };
        // Check if the multi or single select component has to get loaded
        if (this.multiSelect) {
            // Multi selector
            componentProps['selectedLists'] = this.selectedLists;
            var element = React.createElement(PropertyFieldListMultiPickerHost_1.default, componentProps);
            // Calls the REACT content generator
            ReactDom.render(element, elem);
        }
        else {
            // Single selector
            componentProps['selectedList'] = this.selectedList;
            var element = React.createElement(PropertyFieldListPickerHost_1.default, componentProps);
            // Calls the REACT content generator
            ReactDom.render(element, elem);
        }
    };
    /**
     * Disposes the current object
     */
    PropertyFieldListPickerBuilder.prototype.dispose = function (elem) {
    };
    return PropertyFieldListPickerBuilder;
}());
/**
 * Helper method to create a SPList Picker on the PropertyPane.
 * @param targetProperty - Target property the SharePoint list picker is associated to.
 * @param properties - Strongly typed SPList Picker properties.
 */
function PropertyFieldListPicker(targetProperty, properties) {
    //Create an internal properties object from the given properties
    var newProperties = {
        label: properties.label,
        targetProperty: targetProperty,
        context: properties.context,
        selectedList: typeof properties.selectedList === 'string' ? properties.selectedList : null,
        selectedLists: typeof properties.selectedList !== 'string' ? properties.selectedList : null,
        baseTemplate: properties.baseTemplate,
        orderBy: properties.orderBy,
        multiSelect: properties.multiSelect || false,
        includeHidden: properties.includeHidden,
        onPropertyChange: properties.onPropertyChange,
        properties: properties.properties,
        onDispose: null,
        onRender: null,
        key: properties.key,
        disabled: properties.disabled,
        onGetErrorMessage: properties.onGetErrorMessage,
        deferredValidationTime: properties.deferredValidationTime
    };
    //Calls the PropertyFieldListPicker builder object
    //This object will simulate a PropertyFieldCustom to manage his rendering process
    return new PropertyFieldListPickerBuilder(targetProperty, newProperties);
}
exports.PropertyFieldListPicker = PropertyFieldListPicker;

//# sourceMappingURL=PropertyFieldListPicker.js.map

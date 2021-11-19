"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const Label_1 = require("office-ui-fabric-react/lib/Label");
const Spinner_1 = require("office-ui-fabric-react/lib/Spinner");
const Utilities_1 = require("office-ui-fabric-react/lib/Utilities");
const Checkbox_1 = require("office-ui-fabric-react/lib/Checkbox");
const SPListPickerService_1 = require("../../services/SPListPickerService");
const FieldErrorMessage_1 = require("../errorMessage/FieldErrorMessage");
/**
* Renders the controls for PropertyFieldSPListMultiplePicker component
*/
class PropertyFieldListMultiPickerHost extends React.Component {
    /**
    * Constructor
    */
    constructor(props) {
        super(props);
        this.options = [];
        this.loaded = false;
        this.onChanged = this.onChanged.bind(this);
        this.state = {
            results: this.options,
            selectedKeys: [],
            loaded: this.loaded,
            errorMessage: ''
        };
        this.async = new Utilities_1.Async(this);
        this.validate = this.validate.bind(this);
        this.notifyAfterValidate = this.notifyAfterValidate.bind(this);
        this.delayedValidate = this.async.debounce(this.validate, this.props.deferredValidationTime);
        this.loadLists();
    }
    /**
    * Loads the list from SharePoint current web site
    */
    loadLists() {
        // Builds the SharePoint List service
        const listService = new SPListPickerService_1.default(this.props, this.props.context);
        // Gets the libs
        listService.getLibs().then((response) => {
            response.value.map((list) => {
                let isSelected = false;
                let indexInExisting = -1;
                // Defines if the current list must be selected by default
                if (this.props.selectedLists) {
                    indexInExisting = this.props.selectedLists.indexOf(list.Id);
                }
                if (indexInExisting > -1) {
                    isSelected = true;
                    this.state.selectedKeys.push(list.Id);
                }
                // Add the option to the list
                this.options.push({
                    key: list.Id,
                    text: list.Title,
                    checked: isSelected
                });
            });
            this.loaded = true;
            this.setState({ results: this.options, selectedKeys: this.state.selectedKeys, loaded: true });
        });
    }
    /**
    * Raises when a list has been selected
    */
    onChanged(element, isChecked) {
        if (element) {
            const value = element.currentTarget.value;
            let selectedKeys = this.state.selectedKeys;
            // Check if the element is selected
            if (isChecked === false) {
                // Remove the unselected item
                selectedKeys = selectedKeys.filter(s => s !== value);
            }
            else {
                // Add the selected item and filter out the doubles
                selectedKeys.push(value);
                selectedKeys = selectedKeys.filter((item, pos, self) => {
                    return self.indexOf(item) == pos;
                });
            }
            // Update the state and validate
            this.setState({
                selectedKeys: selectedKeys
            });
            this.delayedValidate(selectedKeys);
        }
    }
    /**
    * Validates the new custom field value
    */
    validate(value) {
        if (this.props.onGetErrorMessage === null || typeof this.props.onGetErrorMessage === 'undefined') {
            this.notifyAfterValidate(this.props.selectedLists, value);
            return;
        }
        const result = this.props.onGetErrorMessage(value || []);
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
                result.then((errorMessage) => {
                    if (typeof errorMessage === 'undefined' || errorMessage === '') {
                        this.notifyAfterValidate(this.props.selectedLists, value);
                    }
                    this.setState({
                        errorMessage: errorMessage
                    });
                });
            }
        }
        else {
            this.notifyAfterValidate(this.props.selectedLists, value);
        }
    }
    /**
    * Notifies the parent Web Part of a property value change
    */
    notifyAfterValidate(oldValue, newValue) {
        if (this.props.onPropertyChange && newValue !== null) {
            this.props.properties[this.props.targetProperty] = newValue;
            this.props.onPropertyChange(this.props.targetProperty, oldValue, newValue);
            // Trigger the apply button
            if (typeof this.props.onChange !== 'undefined' && this.props.onChange !== null) {
                this.props.onChange(this.props.targetProperty, newValue);
            }
        }
    }
    /**
    * Called when the component will unmount
    */
    componentWillUnmount() {
        this.async.dispose();
    }
    /**
    * Renders the SPListMultiplePicker controls with Office UI  Fabric
    */
    render() {
        if (this.loaded === false) {
            return (React.createElement("div", null,
                React.createElement(Label_1.Label, null, this.props.label),
                React.createElement(Spinner_1.Spinner, { type: Spinner_1.SpinnerType.normal })));
        }
        else {
            const styleOfLabel = {
                color: this.props.disabled === true ? '#A6A6A6' : 'auto'
            };
            // Renders content
            return (React.createElement("div", null,
                React.createElement(Label_1.Label, null, this.props.label),
                this.options.map((item, index) => {
                    const uniqueKey = this.props.targetProperty + '-' + item.key;
                    return (React.createElement("div", { style: { marginBottom: '5px' }, className: 'ms-ChoiceField', key: `${this.props.key}-multiplelistpicker-${index}` },
                        React.createElement(Checkbox_1.Checkbox, { defaultChecked: item.checked, disabled: this.props.disabled, label: item.text, onChange: this.onChanged, inputProps: { value: item.key } })));
                }),
                React.createElement(FieldErrorMessage_1.default, { errorMessage: this.state.errorMessage })));
        }
    }
}
exports.default = PropertyFieldListMultiPickerHost;
//# sourceMappingURL=PropertyFieldListMultiPickerHost.js.map
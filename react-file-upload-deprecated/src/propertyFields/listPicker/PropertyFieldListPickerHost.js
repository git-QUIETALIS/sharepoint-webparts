"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const Dropdown_1 = require("office-ui-fabric-react/lib/Dropdown");
const Utilities_1 = require("office-ui-fabric-react/lib/Utilities");
const Label_1 = require("office-ui-fabric-react/lib/Label");
const SPListPickerService_1 = require("../../services/SPListPickerService");
const FieldErrorMessage_1 = require("../errorMessage/FieldErrorMessage");
// Empty list value, to be checked for single list selection
const EMPTY_LIST_KEY = 'NO_LIST_SELECTED';
/**
 * Renders the controls for PropertyFieldListPicker component
 */
class PropertyFieldListPickerHost extends React.Component {
    /**
     * Constructor method
     */
    constructor(props) {
        super(props);
        this.options = [];
        this.state = {
            results: this.options,
            errorMessage: ''
        };
        this.async = new Utilities_1.Async(this);
        this.validate = this.validate.bind(this);
        this.onChanged = this.onChanged.bind(this);
        this.notifyAfterValidate = this.notifyAfterValidate.bind(this);
        this.delayedValidate = this.async.debounce(this.validate, this.props.deferredValidationTime);
    }
    componentDidMount() {
        // Start retrieving the SharePoint lists
        this.loadLists();
    }
    /**
     * Loads the list from SharePoint current web site
     */
    loadLists() {
        const listService = new SPListPickerService_1.default(this.props, this.props.context);
        listService.getLibs().then((response) => {
            // Start mapping the list that are selected
            response.value.map((list) => {
                if (this.props.selectedList === list.Id) {
                    this.selectedKey = list.Id;
                }
                this.options.push({
                    key: list.Id,
                    text: list.Title
                });
            });
            // Option to unselect the list
            this.options.unshift({
                key: EMPTY_LIST_KEY,
                text: ''
            });
            // Update the current component state
            this.setState({
                results: this.options,
                selectedKey: this.selectedKey
            });
        });
    }
    /**
     * Raises when a list has been selected
     */
    onChanged(option, index) {
        const newValue = option.key;
        this.delayedValidate(newValue);
    }
    /**
     * Validates the new custom field value
     */
    validate(value) {
        if (this.props.onGetErrorMessage === null || this.props.onGetErrorMessage === undefined) {
            this.notifyAfterValidate(this.props.selectedList, value);
            return;
        }
        if (this.latestValidateValue === value) {
            return;
        }
        this.latestValidateValue = value;
        const result = this.props.onGetErrorMessage(value || '');
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
                result.then((errorMessage) => {
                    if (typeof errorMessage === 'undefined' || errorMessage === '') {
                        this.notifyAfterValidate(this.props.selectedList, value);
                    }
                    this.setState({
                        errorMessage: errorMessage
                    });
                });
            }
        }
        else {
            this.notifyAfterValidate(this.props.selectedList, value);
        }
    }
    /**
     * Notifies the parent Web Part of a property value change
     */
    notifyAfterValidate(oldValue, newValue) {
        // Check if the user wanted to unselect the list
        const propValue = newValue === EMPTY_LIST_KEY ? '' : newValue;
        // Deselect all options
        this.options = this.state.results.map(option => {
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
    }
    /**
     * Called when the component will unmount
     */
    componentWillUnmount() {
        if (typeof this.async !== 'undefined') {
            this.async.dispose();
        }
    }
    /**
     * Renders the SPListpicker controls with Office UI Fabric
     */
    render() {
        // Renders content
        return (React.createElement("div", null,
            React.createElement(Label_1.Label, null, this.props.label),
            React.createElement(Dropdown_1.Dropdown, { disabled: this.props.disabled, label: '', onChanged: this.onChanged, options: this.state.results, selectedKey: this.state.selectedKey }),
            React.createElement(FieldErrorMessage_1.default, { errorMessage: this.state.errorMessage })));
    }
}
exports.default = PropertyFieldListPickerHost;
//# sourceMappingURL=PropertyFieldListPickerHost.js.map
import * as React from 'react';
import { IPropertyFieldListPickerHostProps, IPropertyFieldListPickerHostState } from './IPropertyFieldListPickerHost';
/**
 * Renders the controls for PropertyFieldListPicker component
 */
export default class PropertyFieldListPickerHost extends React.Component<IPropertyFieldListPickerHostProps, IPropertyFieldListPickerHostState> {
    private options;
    private selectedKey;
    private latestValidateValue;
    private async;
    private delayedValidate;
    /**
     * Constructor method
     */
    constructor(props: IPropertyFieldListPickerHostProps);
    componentDidMount(): void;
    /**
     * Loads the list from SharePoint current web site
     */
    private loadLists;
    /**
     * Raises when a list has been selected
     */
    private onChanged;
    /**
     * Validates the new custom field value
     */
    private validate;
    /**
     * Notifies the parent Web Part of a property value change
     */
    private notifyAfterValidate;
    /**
     * Called when the component will unmount
     */
    componentWillUnmount(): void;
    /**
     * Renders the SPListpicker controls with Office UI Fabric
     */
    render(): JSX.Element;
}

import * as React from 'react';
import { IPropertyFieldListMultiPickerHostProps, IPropertyFieldListMultiPickerHostState } from './IPropertyFieldListMultiPickerHost';
/**
* Renders the controls for PropertyFieldSPListMultiplePicker component
*/
export default class PropertyFieldListMultiPickerHost extends React.Component<IPropertyFieldListMultiPickerHostProps, IPropertyFieldListMultiPickerHostState> {
    private options;
    private loaded;
    private async;
    private delayedValidate;
    /**
    * Constructor
    */
    constructor(props: IPropertyFieldListMultiPickerHostProps);
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
    * Renders the SPListMultiplePicker controls with Office UI  Fabric
    */
    render(): JSX.Element;
}

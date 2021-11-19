import { IPropertyPaneField } from '@microsoft/sp-webpart-base';
import { IPropertyFieldListPickerProps, IPropertyFieldListPickerPropsInternal } from './IPropertyFieldListPicker';
/**
 * Helper method to create a SPList Picker on the PropertyPane.
 * @param targetProperty - Target property the SharePoint list picker is associated to.
 * @param properties - Strongly typed SPList Picker properties.
 */
export declare function PropertyFieldListPicker(targetProperty: string, properties: IPropertyFieldListPickerProps): IPropertyPaneField<IPropertyFieldListPickerPropsInternal>;

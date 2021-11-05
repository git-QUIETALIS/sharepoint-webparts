import { IWebPartContext } from '@microsoft/sp-webpart-base';
import { ISPLists, IPropertyFieldListPickerHostProps } from '../propertyFields/listPicker/IPropertyFieldListPickerHost';
/**
 * Service implementation to get list & list items from current SharePoint site
 */
export default class SPListPickerService {
    private context;
    private props;
    /**
     * Service constructor
     */
    constructor(_props: IPropertyFieldListPickerHostProps, pageContext: IWebPartContext);
    /**
     * Gets the collection of libs in the current SharePoint site
     */
    getLibs(): Promise<ISPLists>;
    /**
     * Returns 3 fake SharePoint lists for the Mock mode
     */
    private getLibsFromMock();
}

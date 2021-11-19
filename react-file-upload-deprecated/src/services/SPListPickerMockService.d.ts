import { ISPLists } from '../propertyFields/listPicker/IPropertyFieldListPickerHost';
/**
 * Defines a http client to request mock data to use the web part with the local workbench
 */
export default class SPListPickerMockHttpClient {
    /**
     * Mock SharePoint result sample
     */
    private static _results;
    /**
     * Mock search People method
     */
    static getLists(restUrl: string, options?: any): Promise<ISPLists>;
}

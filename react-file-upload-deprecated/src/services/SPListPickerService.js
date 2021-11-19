"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sp_http_1 = require("@microsoft/sp-http");
const sp_core_library_1 = require("@microsoft/sp-core-library");
const IPropertyFieldListPicker_1 = require("../propertyFields/listPicker/IPropertyFieldListPicker");
const SPListPickerMockService_1 = require("./SPListPickerMockService");
/**
 * Service implementation to get list & list items from current SharePoint site
 */
class SPListPickerService {
    /**
     * Service constructor
     */
    constructor(_props, pageContext) {
        this.props = _props;
        this.context = pageContext;
    }
    /**
     * Gets the collection of libs in the current SharePoint site
     */
    getLibs() {
        if (sp_core_library_1.Environment.type === sp_core_library_1.EnvironmentType.Local) {
            // If the running environment is local, load the data from the mock
            return this.getLibsFromMock();
        }
        else {
            // If the running environment is SharePoint, request the lists REST service
            let queryUrl = `${this.context.pageContext.web.absoluteUrl}/_api/lists?$select=Title,id,BaseTemplate`;
            // Check if the orderBy property is provided
            if (this.props.orderBy !== null) {
                queryUrl += '&$orderby=';
                switch (this.props.orderBy) {
                    case IPropertyFieldListPicker_1.PropertyFieldListPickerOrderBy.Id:
                        queryUrl += 'Id';
                        break;
                    case IPropertyFieldListPicker_1.PropertyFieldListPickerOrderBy.Title:
                        queryUrl += 'Title';
                        break;
                }
            }
            // Check if the list have get filtered based on the list base template type
            if (this.props.baseTemplate !== null && this.props.baseTemplate) {
                queryUrl += '&$filter=BaseTemplate%20eq%20';
                queryUrl += this.props.baseTemplate;
                // Check if you also want to exclude hidden list in the list
                if (this.props.includeHidden === false) {
                    queryUrl += '%20and%20Hidden%20eq%20false';
                }
            }
            else {
                if (this.props.includeHidden === false) {
                    queryUrl += '&$filter=Hidden%20eq%20false';
                }
            }
            return this.context.spHttpClient.get(queryUrl, sp_http_1.SPHttpClient.configurations.v1).then((response) => {
                return response.json();
            });
        }
    }
    /**
     * Returns 3 fake SharePoint lists for the Mock mode
     */
    getLibsFromMock() {
        return SPListPickerMockService_1.default.getLists(this.context.pageContext.web.absoluteUrl).then(() => {
            const listData = {
                value: [
                    { Title: 'Mock List One', Id: '6770c83b-29e8-494b-87b6-468a2066bcc6', BaseTemplate: '109' },
                    { Title: 'Mock List Two', Id: '2ece98f2-cc5e-48ff-8145-badf5009754c', BaseTemplate: '109' },
                    { Title: 'Mock List Three', Id: 'bd5dbd33-0e8d-4e12-b289-b276e5ef79c2', BaseTemplate: '109' }
                ]
            };
            return listData;
        });
    }
}
exports.default = SPListPickerService;
//# sourceMappingURL=SPListPickerService.js.map
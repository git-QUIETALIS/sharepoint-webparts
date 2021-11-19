"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ReactDom = require("react-dom");
const sp_core_library_1 = require("@microsoft/sp-core-library");
const sp_webpart_base_1 = require("@microsoft/sp-webpart-base");
const sp_http_1 = require("@microsoft/sp-http");
const strings = require("FileUploadWebPartStrings");
const FileUpload_1 = require("./components/FileUpload");
const loader = require("@microsoft/sp-loader");
const PropertyFieldListPicker_1 = require("../../PropertyFieldListPicker");
const sp_property_pane_1 = require("@microsoft/sp-property-pane");
require("./filepicker.css");
require("./dropzone.css");
class FileUploadWebPart extends sp_webpart_base_1.BaseClientSideWebPart {
    constructor(context) {
        super();
        this.digest = "";
        loader.SPComponentLoader.loadCss('https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css');
    }
    onInit() {
        return new Promise((resolve, reject) => {
            const digestCache = this.context.serviceScope.consume(sp_http_1.DigestCache.serviceKey);
            digestCache.fetchDigest(this.context.pageContext.web.serverRelativeUrl).then((digest) => {
                // use the digest here
                this.digest = digest;
                resolve();
            });
        });
    }
    render() {
        const element = React.createElement(FileUpload_1.default, {
            digest: this.digest,
            context: this.context,
            listName: this.properties.listName,
            fileTypes: this.properties.fileTypes,
            queryString: this.properties.queryString,
            uploadFilesTo: this.properties.uploadFilesTo
        });
        ReactDom.render(element, this.domElement);
    }
    //@ts-ignore
    get dataVersion() {
        return sp_core_library_1.Version.parse('1.0');
    }
    getPropertyPaneConfiguration() {
        return {
            pages: [
                {
                    header: {
                        description: strings.PropertyPaneDescription
                    },
                    groups: [
                        {
                            groupName: strings.BasicGroupName,
                            groupFields: [
                                sp_property_pane_1.PropertyPaneDropdown('uploadFilesTo', {
                                    label: 'Upload files to',
                                    options: [{ key: 'DocumentLibrary', text: 'Document Library' },
                                        { key: 'List', text: 'As item attachments' }]
                                }),
                                PropertyFieldListPicker_1.PropertyFieldListPicker('listName', {
                                    label: 'Select a list or library',
                                    selectedList: this.properties.listName,
                                    includeHidden: true,
                                    //baseTemplate: 109,
                                    orderBy: PropertyFieldListPicker_1.PropertyFieldListPickerOrderBy.Title,
                                    // multiSelect: false,
                                    disabled: false,
                                    onPropertyChange: this.onPropertyPaneFieldChanged.bind(this),
                                    properties: this.properties,
                                    context: this.context,
                                    onGetErrorMessage: null,
                                    deferredValidationTime: 0,
                                    key: 'listPickerFieldId'
                                }),
                                sp_webpart_base_1.PropertyPaneTextField('fileTypes', {
                                    label: 'File Types (utiliser , comme separateur)',
                                }),
                                sp_webpart_base_1.PropertyPaneTextField('queryString', {
                                    label: 'Query String parameter',
                                    description: 'Si vous souhaitez joindre des fichiers a un element de liste, vous devez definir ID de lelement dans un parametre de chaine de requete, example: ID=1'
                                })
                            ]
                        }
                    ]
                }
            ]
        };
    }
}
exports.default = FileUploadWebPart;
//# sourceMappingURL=FileUploadWebPart.js.map
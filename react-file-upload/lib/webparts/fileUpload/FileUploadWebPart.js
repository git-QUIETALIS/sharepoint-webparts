"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactDom = require("react-dom");
var sp_core_library_1 = require("@microsoft/sp-core-library");
var sp_webpart_base_1 = require("@microsoft/sp-webpart-base");
var sp_http_1 = require("@microsoft/sp-http");
var strings = require("FileUploadWebPartStrings");
var FileUpload_1 = require("./components/FileUpload");
var loader = require("@microsoft/sp-loader");
var PropertyFieldListPicker_1 = require("../../PropertyFieldListPicker");
var PropertyPaneDropdown_1 = require("@microsoft/sp-webpart-base/lib/propertyPane/propertyPaneFields/propertyPaneDropdown/PropertyPaneDropdown");
require("./filepicker.css");
require("./dropzone.css");
var FileUploadWebPart = (function (_super) {
    __extends(FileUploadWebPart, _super);
    function FileUploadWebPart(context) {
        var _this = _super.call(this) || this;
        _this.digest = "";
        loader.SPComponentLoader.loadCss('https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css');
        return _this;
    }
    FileUploadWebPart.prototype.onInit = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var digestCache = _this.context.serviceScope.consume(sp_http_1.DigestCache.serviceKey);
            digestCache.fetchDigest(_this.context.pageContext.web.serverRelativeUrl).then(function (digest) {
                // use the digest here
                _this.digest = digest;
                resolve();
            });
        });
    };
    FileUploadWebPart.prototype.render = function () {
        var element = React.createElement(FileUpload_1.default, {
            digest: this.digest,
            context: this.context,
            listName: this.properties.listName,
            fileTypes: this.properties.fileTypes,
            queryString: this.properties.queryString,
            uploadFilesTo: this.properties.uploadFilesTo
        });
        ReactDom.render(element, this.domElement);
    };
    Object.defineProperty(FileUploadWebPart.prototype, "dataVersion", {
        //@ts-ignore
        get: function () {
            return sp_core_library_1.Version.parse('1.0');
        },
        enumerable: true,
        configurable: true
    });
    FileUploadWebPart.prototype.getPropertyPaneConfiguration = function () {
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
                                PropertyPaneDropdown_1.PropertyPaneDropdown('uploadFilesTo', {
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
    };
    return FileUploadWebPart;
}(sp_webpart_base_1.BaseClientSideWebPart));
exports.default = FileUploadWebPart;

//# sourceMappingURL=FileUploadWebPart.js.map

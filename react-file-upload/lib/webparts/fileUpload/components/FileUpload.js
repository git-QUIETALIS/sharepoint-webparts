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
var sp_core_library_1 = require("@microsoft/sp-core-library");
var react_dropzone_component_1 = require("react-dropzone-component");
var sp_pnp_js_1 = require("sp-pnp-js");
var FileUpload = (function (_super) {
    __extends(FileUpload, _super);
    function FileUpload(props) {
        return _super.call(this, props) || this;
    }
    FileUpload.prototype.render = function () {
        var _context = this.props.context;
        var _listName = this.props.listName;
        var _fileUploadTo = this.props.uploadFilesTo;
        var _queryStringParam = this.props.queryString;
        var queryParameters = new sp_core_library_1.UrlQueryParameterCollection(window.location.href);
        var _itemId = queryParameters.getValue(_queryStringParam);
        var _parent = this;
        var componentConfig = {
            iconFiletypes: this.props.fileTypes.split(','),
            showFiletypeIcon: true,
            postUrl: _context.pageContext.web.absoluteUrl
        };
        var myDropzone;
        var eventHandlers = {
            // This one receives the dropzone object as the first parameter
            // and can be used to additional work with the dropzone.js
            // object
            init: function (dz) {
                myDropzone = dz;
            },
            removedfile: function (file) {
                var web = new sp_pnp_js_1.Web(_context.pageContext.web.absoluteUrl);
                if (_fileUploadTo == "DocumentLibrary") {
                    web.lists.getById(_listName).rootFolder.files.getByName(file.name).delete().then(function (t) {
                        //add your code here if you want to do more after deleting the file
                    });
                }
                else {
                    web.lists.getById(_listName).items.getById(Number(_itemId)).attachmentFiles.deleteMultiple(file.name).then(function (t) {
                        //add your code here if you want to do more after deleting the file
                    });
                }
            },
            processing: function (file, xhr) {
                if (_fileUploadTo == "DocumentLibrary")
                    myDropzone.options.url = _context.pageContext.web.absoluteUrl + "/_api/web/Lists/getById('" + _parent.props.listName + "')/rootfolder/files/add(overwrite=true,url='" + file.name + "')";
                else {
                    if (_itemId)
                        myDropzone.options.url = _context.pageContext.web.absoluteUrl + "/_api/web/lists/getById('" + _parent.props.listName + "')/items(" + _itemId + ")/AttachmentFiles/add(FileName='" + file.name + "')";
                    else
                        alert('Item non trouvé ou query null!');
                }
            },
            sending: function (file, xhr) {
                var _send = xhr.send;
                xhr.send = function () {
                    _send.call(xhr, file);
                };
            },
            error: function (file, error, xhr) {
                if (_fileUploadTo != "DocumentLibrary")
                    alert("File '" + file.name + "' existe deja. Renommez le fichier ou choisissez en un autre.");
                //if(myDropzone)
                //  myDropzone.removeFile(file);
            }
        };
        var djsConfig = {
            headers: {
                "X-RequestDigest": this.props.digest
            },
            addRemoveLinks: false
        };
        return (React.createElement(react_dropzone_component_1.default, { eventHandlers: eventHandlers, djsConfig: djsConfig, config: componentConfig },
            React.createElement("div", { className: "dz-message icon" },
                "Vous avez un document \u00E0 soumettre ? Placez-le ici",
                React.createElement("img", { className: "upload-icon", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Noun_Project_cloud_upload_icon_411593_cc.svg/1130px-Noun_Project_cloud_upload_icon_411593_cc.svg.png" }))));
    };
    return FileUpload;
}(React.Component));
exports.default = FileUpload;

//# sourceMappingURL=FileUpload.js.map

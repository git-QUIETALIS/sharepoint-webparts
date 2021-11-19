"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const sp_core_library_1 = require("@microsoft/sp-core-library");
const react_dropzone_component_1 = require("react-dropzone-component");
const sp_pnp_js_1 = require("sp-pnp-js");
class FileUpload extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let _context = this.props.context;
        let _listName = this.props.listName;
        let _fileUploadTo = this.props.uploadFilesTo;
        let _queryStringParam = this.props.queryString;
        let queryParameters = new sp_core_library_1.UrlQueryParameterCollection(window.location.href);
        let _itemId = queryParameters.getValue(_queryStringParam);
        let _parent = this;
        let componentConfig = {
            iconFiletypes: this.props.fileTypes.split(','),
            showFiletypeIcon: true,
            postUrl: _context.pageContext.web.absoluteUrl
        };
        let myDropzone;
        let eventHandlers = {
            // This one receives the dropzone object as the first parameter
            // and can be used to additional work with the dropzone.js
            // object
            init: function (dz) {
                myDropzone = dz;
            },
            removedfile: function (file) {
                let web = new sp_pnp_js_1.Web(_context.pageContext.web.absoluteUrl);
                if (_fileUploadTo == "DocumentLibrary") {
                    web.lists.getById(_listName).rootFolder.files.getByName(file.name).delete().then(t => {
                        //add your code here if you want to do more after deleting the file
                    });
                }
                else {
                    web.lists.getById(_listName).items.getById(Number(_itemId)).attachmentFiles.deleteMultiple(file.name).then(t => {
                        //add your code here if you want to do more after deleting the file
                    });
                }
            },
            processing: function (file, xhr) {
                if (_fileUploadTo == "DocumentLibrary") {
                    myDropzone.options.url = `${_context.pageContext.web.absoluteUrl}/_api/web/Lists/getById('${_parent.props.listName}')/rootfolder/files/add(overwrite=true,url='${file.name}')`;
                }
                else {
                    if (_itemId) {
                        myDropzone.options.url = `${_context.pageContext.web.absoluteUrl}/_api/web/lists/getById('${_parent.props.listName}')/items(${_itemId})/AttachmentFiles/add(FileName='${file.name}')`;
                    }
                    else {
                        alert('Item non trouvé ou query null!');
                    }
                }
            },
            sending: function (file, xhr) {
                let _send = xhr.send;
                xhr.send = function () {
                    _send.call(xhr, file);
                };
            },
            error: function (file, error, xhr) {
                if (_fileUploadTo != "DocumentLibrary")
                    alert(`File '${file.name}' existe deja. Renommez le fichier ou choisissez en un autre.`);
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
    }
}
exports.default = FileUpload;
//# sourceMappingURL=FileUpload.js.map
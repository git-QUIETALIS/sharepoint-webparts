import * as React from 'react';
import styles from './DropDocumentZone.module.scss';
import { IDropDocumentZoneProps } from './IDropDocumentZoneProps';
import { IDropDocumentZoneState } from './IDropDocumentZoneState';
import { PrimaryButton } from '@microsoft/office-ui-fabric-react-bundle';
import { escape } from '@microsoft/sp-lodash-subset';

import { sp } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/files";
import "@pnp/sp/folders";

import { FilePond, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'

import "./dropzone.min.css";

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview)

export default class DropDocumentZone extends React.Component<IDropDocumentZoneProps, IDropDocumentZoneState> {
  constructor(props: IDropDocumentZoneProps, state: IDropDocumentZoneState) {
    super(props);
    sp.setup({
      spfxContext: this.props.context
    });
    this.state = ({ files: [] });

    // Get description inputText value
    const description = document.getElementById('description');
    let newDescriptionValue;

    newDescriptionValue.addEventListener('input', function(event) {
      newDescriptionValue = this.value;
      console.log('test' + newDescriptionValue);
    })
    registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview)
  }

  public render(): React.ReactElement<IDropDocumentZoneProps> {
    return (
      <div className={styles.spfxReactDropzone}>
        <FilePond
          //@ts-ignore
          files={this.state.files}
          allowMultiple={false}
          onupdatefiles={fileItems => {
            this.setState({
              files: fileItems.map(fileItem => fileItem.file)
            });
          }}
          labelIdle='Vous avez un document à soumettre ? Placez-le ici' />
        <div className={styles.describeDocument}>
          <input
            id="description"
            className={styles.describeInput}
            type="text"
            placeholder="Description du document"
          />
        </div>
        <br />
        <PrimaryButton text="Envoyer" onClick={this._uploadFiles} />

      </div>
    );
  }

  private _uploadFiles = async () => {
    this.state.files.forEach(function (file, i) {
      // you can adjust this number to control what size files are uploaded in chunks
      if (file.size <= 10485760) {
        // small upload
        const newfile = sp.web.getFolderByServerRelativeUrl("/sites/intranet/Documents%20%20trier%20Admin%20only/").files.add(file.name, file, true);
      } else {
        // large upload
        const newfile = sp.web.getFolderByServerRelativeUrl("/sites/intranet/Documents%20%20trier%20Admin%20only/").files.addChunked(file.name, file, data => {
        }, true);
      }
      // Get input with id "description" value
      
      const newDescription = sp.web.getFolderByServerRelativeUrl("/sites/intranet/Documents%20%20trier%20Admin%20only/").files.add(file.name + ".txt", descriptionInput, true);
    });
    this.setState({ files: [] })
  }
}

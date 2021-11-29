import * as React from 'react';
import styles from './DropDocumentZone.module.scss';
import { IDropDocumentZoneProps } from './IDropDocumentZoneProps';
import { IDropDocumentZoneState } from './IDropDocumentZoneState';
import { PrimaryButton } from '@microsoft/office-ui-fabric-react-bundle';

// Sharepoint webpart library
import { sp } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/files";
import "@pnp/sp/folders";

// FilePond library
import { FilePond, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'

import "./dropzone.min.css";

export default class DropDocumentZone extends React.Component<IDropDocumentZoneProps, IDropDocumentZoneState> {
  constructor(props: IDropDocumentZoneProps, state: IDropDocumentZoneState) {
    super(props);
    sp.setup({
      spfxContext: this.props.context
    });
    this.state = {
      files: [],
      description: ''
    };
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
          <input className={styles.describeInput} value={this.state.description} onChange={e => this.setState({ description: e.target.value })} type="text" placeholder="Description du document" />
        </div >
        <br />
        <PrimaryButton text="Envoyer" onClick={this._uploadFiles} />

      </div>
    );
  }

  private _uploadFiles = async () => {
    // Create folder for the file to be uploaded
    this.state.files.forEach(function (file, i) {
      if (file.size <= 10485760) {
        // small upload
        const newfile = sp.web.getFolderByServerRelativeUrl("/sites/intranet/Documents%20%20trier%20Admin%20only/").files.add(file.name, file, true);
      } else {
        // large upload
        const newfile = sp.web.getFolderByServerRelativeUrl("/sites/intranet/Documents%20%20trier%20Admin%20only/").files.addChunked(file.name, file, data => {
        }, true);
      }
    });

    // Add the .txt file to the folder
    const file = this.state.files[0];
    let descriptionName = file.name.split('.');
    const addDescription = sp.web.getFolderByServerRelativeUrl("/sites/intranet/Documents%20%20trier%20Admin%20only/").files.add(file.name + ".txt", this.state.description, true);
    this.setState({ files: [], description: '' });
  }
}

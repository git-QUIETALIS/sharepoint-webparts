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

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview)

export default class DropDocumentZone extends React.Component<IDropDocumentZoneProps, IDropDocumentZoneState> {
  constructor(props: IDropDocumentZoneProps, state: IDropDocumentZoneState) {
    super(props);
    sp.setup({
      spfxContext: this.props.context
    });
    this.state = ({ files: [] });
    registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview)
  }

  public render(): React.ReactElement<IDropDocumentZoneProps> {
    return (
      <div className={styles.spfxReactDropzone}>
        <FilePond
        // @ts-ignore
          files={this.state.files}
          allowMultiple={true}
          onupdatefiles={fileItems => {
            this.setState({
              files: fileItems.map(fileItem => fileItem.file)
            });
            console.log(this.state.files);
          }} />
        <br />
        <PrimaryButton text="Upload" onClick={this._uploadFiles} />
      </div>
    );
  }

  private _uploadFiles = async () => {
    this.state.files.forEach(function (file, i) {
      // you can adjust this number to control what size files are uploaded in chunks
      if (file.size <= 10485760) {
        // small upload
        const newfile = sp.web.getFolderByServerRelativeUrl("/sites/intranet/logo_fournisseurs/").files.add(file.name, file, true);
      } else {
        // large upload
        const newfile = sp.web.getFolderByServerRelativeUrl("/sites/intranet/logo_fournisseurs/").files.addChunked(file.name, file, data => {
        }, true);
      }
    });
    this.setState({ files: [] })
  }
}

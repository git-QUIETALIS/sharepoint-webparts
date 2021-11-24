import * as React from 'react';
//import { ReactNode, useState, useEffect } from 'react';
import styles from './DocumentSubmitter.module.scss';
import { IDocumentSubmitterProps } from './IDocumentSubmitterProps';
import { escape } from '@microsoft/sp-lodash-subset';
import Dropzone from 'react-dropzone';
import { sp } from '@pnp/sp';
import { setup as pnpSetup } from "@pnp/common"
import "@pnp/sp/webs";
import "@pnp/sp/lists/web";
import "@pnp/sp/items";
import "@pnp/sp/attachments";
import { on } from '@uifabric/utilities';

export default class DocumentSubmitter extends React.Component<IDocumentSubmitterProps, {}> {

  public render(): React.ReactElement<IDocumentSubmitterProps> {
    return (
      <div>

        <Dropzone onDrop={this.onDrop}>
          {({ getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject, acceptedFiles, fileRejections }) => {
            return (
              <div>
                <div {...getRootProps()} className={styles.container}>

                  <input {...getInputProps()} />
                  <div>
                    <h1>Drag and drop file here</h1>
                  </div>
                  {isDragReject && <div>Unsupported file type...</div>}
                </div>
              </div>

            );
          }}
        </Dropzone>

      </div >
    );
  }

  private onDrop = (acceptedFiles) => {
    //just one file
    //let file = acceptedFiles[0];
    //sp.web.lists.getByTitle("Documents").items.add({
    //  Title: "Upload Attachement"
    //}).then(r => {
    //  // this will add an attachment to the item we just created to push to sharepoint list
    //  r.item.attachmentFiles.add(file.name, file).then(result => {
    //    console.log(result);
    //  })
    //})
    sp.web.lists.getByTitle("Documents").items.get().then(r => {
      console.log(r);
    })
  }
}

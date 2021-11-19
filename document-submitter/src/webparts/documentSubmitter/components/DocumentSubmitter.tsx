import * as React from 'react';
import { ReactNode, useState, useEffect } from 'react';
import styles from './DocumentSubmitter.module.scss';
import { IDocumentSubmitterProps } from './IDocumentSubmitterProps';
import { escape } from '@microsoft/sp-lodash-subset';
import Dropzone, { FileWithPath } from 'react-dropzone';

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
      </div>
    );
  }

  private onDrop = (acceptedFiles, fileRejections) => {
    console.log(acceptedFiles);
    console.log(fileRejections);
  }
}

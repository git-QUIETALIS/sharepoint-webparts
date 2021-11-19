import * as React from 'react';
import styles from './DocumentSubmitter.module.scss';
import { IDocumentSubmitterProps } from './IDocumentSubmitterProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { useDropzone } from 'react-dropzone';

export default class DocumentSubmitter extends React.Component<IDocumentSubmitterProps, {}> {
  public render(): React.ReactElement<IDocumentSubmitterProps> {
    return (
      <div className={ styles.documentSubmitter }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Welcome to SharePoint!</span>
              <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts.</p>
              <p className={ styles.description }>{escape(this.props.description)}</p>
              <a href="https://aka.ms/spfx" className={ styles.button }>
                <span className={ styles.label }>Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

import * as React from 'react';
import styles from './FournisseursFolder.module.scss';
import { IFournisseursFolderProps } from './IFournisseursFolderProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class FournisseursFolder extends React.Component<IFournisseursFolderProps, {}> {
  private GetListItems(): void {
    this.props.spHttpClient.get(`${this.props.siteUrl}/_api/web/lists/getbytitle('${this.props.listName}')/items?$select=fieldNames`,
      SPHttpClient.configurations.v1,
      {
        headers: {
          'Accept': 'application/json;odata=nometadata',
          'odata-version': ''
        }
      })
      .then((response: SPHttpClientResponse): Promise<{ value: IListItem[] }> => {
        return response.json();
      })
      .then((response: { value: IListItem[] }): void => {
        //Write your logic to form the json object from response
      }, (error: any): void => {
        this.setState({
          status: 'Loading all items failed with error: ' + error,
        });
      });
  }
  public render(): React.ReactElement<IFournisseursFolderProps> {
    return (
      <div className={styles.fournisseursFolder}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.column}>
              <span className={styles.title}>Welcome to SharePoint!</span>
              <p className={styles.subTitle}>Customize SharePoint experiences using Web Parts.</p>
              <p className={styles.description}>{escape(this.props.description)}</p>
              <a href="https://aka.ms/spfx" className={styles.button}>
                <span className={styles.label}>Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

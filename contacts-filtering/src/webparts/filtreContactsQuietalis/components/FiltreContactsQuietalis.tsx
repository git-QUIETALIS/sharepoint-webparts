import * as React from 'react';
import styles from './FiltreContactsQuietalis.module.scss';
import { IFiltreContactsQuietalisProps } from './IFiltreContactsQuietalisProps';
import { escape } from '@microsoft/sp-lodash-subset';
// Import styles
import './styles.css';

export default class FiltreContactsQuietalis extends React.Component<IFiltreContactsQuietalisProps, {}> {
  public render(): React.ReactElement<IFiltreContactsQuietalisProps> {
    return (
      <div className={styles.filtreContactsQuietalis}>
        <div className={styles.container}>
          <a className={styles.refinerName} href='#'>
            <div className={styles.InlineBlock}>
              Agence
            </div>
          </a>
          <div className={styles.unselSec}>
            <div className={styles.unselshortList}>
              <div className={styles.value}>
                <a className={styles.displayValue} href='#'>
                  <div className={styles.refValue}>
                    Agence de Marseille
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

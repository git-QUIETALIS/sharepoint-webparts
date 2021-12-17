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
                <a className={styles.filterLink} href='#'>
                  <div className={styles.refValue}>Agence d'Angers</div>
                </a>
              </div>
              <div className={styles.value}>
                <a className={styles.filterLink} href='#'>
                  <div className={styles.refValue}>Agence de Marseille</div>
                </a>
              </div>
              <div className={styles.value}>
                <a className={styles.filterLink} href='#'>
                  <div className={styles.refValue}>Agence de Paris Ouest</div>
                </a>
              </div>
              <div className={styles.value}>
                <a className={styles.filterLink} href='#'>
                  <div className={styles.refValue}>Agence de Rennes</div>
                </a>
              </div>
              <div className={styles.value}>
                <a className={styles.filterLink} href='#'>
                  <div className={styles.refValue}>Agence de Rouen</div>
                </a>
              </div>
              <div className={styles.value}>
                <a className={styles.filterLink} href='#'>
                  <div className={styles.refValue}>Agence de Saint-Quentin</div>
                </a>
              </div>
              <div className={styles.value}>
                <a className={styles.filterLink} href='#'>
                  <div className={styles.refValue}>Agence de Strasbourg</div>
                </a>
              </div>
              <div className={styles.value}>
                <a className={styles.filterLink} href='#'>
                  <div className={styles.refValue}>Agence de Toulouse</div>
                </a>
              </div>
              <div className={styles.value}>
                <a className={styles.filterLink} href='#'>
                  <div className={styles.refValue}>Agence d'Orléans</div>
                </a>
              </div>
              <div className={styles.value}>
                <a className={styles.filterLink} href='#'>
                  <div className={styles.refValue}>Agence du Mans</div>
                </a>
              </div>
              <div className={styles.value}>
                <a className={styles.filterLink} href='#'>
                  <div className={styles.refValue}>Siège</div>
                </a>
              </div>
              <div className={styles.value}>
                <a className={styles.filterLink} href='#'>
                  <div className={styles.refValue}>Direction Régionale BARA</div>
                </a>
              </div>
              <div className={styles.value}>
                <a className={styles.filterLink} href='#'>
                  <div className={styles.refValue}>Direction Régionale GO</div>
                </a>
              </div>
              <div className={styles.value}>
                <a className={styles.filterLink} href='#'>
                  <div className={styles.refValue}>Direction Régionale IDF</div>
                </a>
              </div>
              <div className={styles.value}>
                <a className={styles.filterLink} href='#'>
                  <div className={styles.refValue}>Direction Régionale SO</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

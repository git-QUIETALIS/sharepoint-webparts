import * as React from 'react';
import styles from './FiltreContactsQuietalis.module.scss';
import { IFiltreContactsQuietalisProps } from './IFiltreContactsQuietalisProps';
import { escape } from '@microsoft/sp-lodash-subset';
// Import styles
import './styles.css';

export default class FiltreContactsQuietalis extends React.Component<IFiltreContactsQuietalisProps, {}> {
  // Function to render this div :
  // <div className=[styles.value]> <a href='#' className={styles.filterLink}><div className=[styles.refValue]>{filterValue}</div></a></div>
  // With the filterValue being the values of an array of strings and the href being 'https://quietalis365.sharepoint.com/sites/quietalis-annuaire#k=' + filterValue
  // The function below will render a div for each of the values of the array
  public renderFilters(filterValue: string[]): React.ReactElement<IFiltreContactsQuietalisProps> {
    let renderFilters: React.ReactElement<IFiltreContactsQuietalisProps>[] = [];
    for (let i = 0; i < filterValue.length; i++) {
      renderFilters.push(
        <div className={styles.value}>
          <a href={'https://quietalis365.sharepoint.com/sites/quietalis-annuaire#k=' + filterValue[i]} className={styles.filterLink}>
            <div className={styles.refValue}>{filterValue[i]}</div>
          </a>
        </div>
      );
    }
    return (
      <div>{renderFilters}</div>
    );
  }

  public render(): React.ReactElement<IFiltreContactsQuietalisProps> {
    return (
      <div className={styles.filtreContactsQuietalis}>
        <div className={styles.container}>
          <a className={styles.refinerName} href='#'>
            <div className={styles.InlineBlock}>
              Agences
            </div>
          </a>
          <div className={styles.unselSec}>
            <div className={styles.unselshortList}>
              {this.renderFilters(["Agence d'Angers", "Agence de Besançon", "Agence de Bordeaux", "Agence de Cannes", "Agence de Dijon", "Agence de Lille", "Agence de Lyon", "Agence de Lorient", "Agence de Marseille", "Agence de Nancy", "Agence de Nantes", "Agence de Nimes", "Agence de Paris Est", "Agence de Paris Nord", "Agence de Paris Ouest", "Agence de Rennes", "Agence de Rouen", "Agence de Saint-Quentin", "Agence de Toulouse", "Agence de Strasbourg", "Agence d'Orléans", "Agence du Mans", "Siège"])}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

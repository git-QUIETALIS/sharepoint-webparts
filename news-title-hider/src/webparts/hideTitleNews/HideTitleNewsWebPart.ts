import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';
import * as strings from 'HideTitleNewsWebPartStrings';

require('./styles.css')

export interface IHideTitleNewsWebPartProps {
  description: string;
}

export default class HideTitleNewsWebPart extends BaseClientSideWebPart<IHideTitleNewsWebPartProps> {

  public render(): void {
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }
}

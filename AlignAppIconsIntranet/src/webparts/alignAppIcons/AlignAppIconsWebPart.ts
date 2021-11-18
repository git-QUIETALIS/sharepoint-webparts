import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'AlignAppIconsWebPartStrings';
require('./styles.css')

export interface IAlignAppIconsWebPartProps {
  description: string;
}

export default class AlignAppIconsWebPart extends BaseClientSideWebPart<IAlignAppIconsWebPartProps> {

  protected assignNewCss(): void {
    console.log("Adding new styles");
    // Set display flex to the icons container
    const AllIcons = document.getElementsByClassName('ms-List-page')[0];
    console.log(AllIcons);
    AllIcons.classList.add('flexDisplay');

    // Set flex 1 to the icons
    const AllIconsChildren = document.getElementsByClassName('ms-List-cell');
    for (let i = 0; i < AllIconsChildren.length; i++) {
      AllIconsChildren[i].classList.add('flex1');
      console.log(AllIconsChildren[i]);
    }
  }

  public render(): void {
    this.assignNewCss();
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
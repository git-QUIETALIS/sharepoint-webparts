/// <reference types="react" />
import * as React from 'react';
import { IPropertyFieldHeaderProps, IPropertyFieldHeaderState } from './IPropertyFieldHeader';
/**
 * PropertyFieldHeader component.
 * Displays a label and a callout
 */
export default class PropertyFieldHeader extends React.Component<IPropertyFieldHeaderProps, IPropertyFieldHeaderState> {
    private _infoIcon;
    constructor(props: IPropertyFieldHeaderProps, state: IPropertyFieldHeaderState);
    render(): JSX.Element;
    private _onCalloutDismiss();
    private _onInfoIconMouseOver();
    private _onInfoIconMouseOut(e);
    private _onInfoIconClick();
}

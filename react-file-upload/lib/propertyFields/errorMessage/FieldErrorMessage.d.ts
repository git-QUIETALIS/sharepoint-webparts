/// <reference types="react" />
import * as React from 'react';
export interface IFieldErrorMessageProps {
    errorMessage: string;
}
/**
 * Component that shows an error message when something went wront with the property control
 */
export default class FieldErrorMessage extends React.Component<IFieldErrorMessageProps> {
    render(): JSX.Element;
}

import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart, IPropertyPaneConfiguration, IWebPartContext } from '@microsoft/sp-webpart-base';
export interface IFileUploadWebPartProps {
    listName: string;
    fileTypes: string;
    queryString: string;
    uploadFilesTo: string;
}
export default class FileUploadWebPart extends BaseClientSideWebPart<IFileUploadWebPartProps> {
    digest: string;
    constructor(context: IWebPartContext);
    protected onInit(): Promise<void>;
    render(): void;
    protected readonly dataVersion: Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}

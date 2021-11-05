import { IConfigurationProvider } from "../configuration";
import { TypedHash } from "../../collections/collections";
import { default as CachingConfigurationProvider } from "./cachingConfigurationProvider";
import { Web } from "../../sharepoint/webs";
/**
 * A configuration provider which loads configuration values from a SharePoint list
 *
 */
export default class SPListConfigurationProvider implements IConfigurationProvider {
    private sourceWeb;
    private sourceListTitle;
    /**
     * Creates a new SharePoint list based configuration provider
     * @constructor
     * @param {string} webUrl Url of the SharePoint site, where the configuration list is located
     * @param {string} listTitle Title of the SharePoint list, which contains the configuration settings (optional, default = "config")
     */
    constructor(sourceWeb: Web, sourceListTitle?: string);
    /**
     * Gets the url of the SharePoint site, where the configuration list is located
     *
     * @return {string} Url address of the site
     */
    readonly web: Web;
    /**
     * Gets the title of the SharePoint list, which contains the configuration settings
     *
     * @return {string} List title
     */
    readonly listTitle: string;
    /**
     * Loads the configuration values from the SharePoint list
     *
     * @return {Promise<TypedHash<string>>} Promise of loaded configuration values
     */
    getConfiguration(): Promise<TypedHash<string>>;
    /**
     * Wraps the current provider in a cache enabled provider
     *
     * @return {CachingConfigurationProvider} Caching providers which wraps the current provider
     */
    asCaching(): CachingConfigurationProvider;
}

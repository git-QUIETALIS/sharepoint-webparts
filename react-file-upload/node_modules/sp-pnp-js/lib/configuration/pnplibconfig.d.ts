import { TypedHash } from "../collections/collections";
import { HttpClientImpl } from "../net/httpclient";
import { SPFXContext } from "./spfxContextInterface";
import { GraphHttpClientImpl } from "../net/graphclient";
export interface LibraryConfiguration {
    /**
     * Allows caching to be global disabled, default: false
     */
    globalCacheDisable?: boolean;
    /**
     * Defines the default store used by the usingCaching method, default: session
     */
    defaultCachingStore?: "session" | "local";
    /**
     * Defines the default timeout in seconds used by the usingCaching method, default 30
     */
    defaultCachingTimeoutSeconds?: number;
    /**
     * If true a timeout expired items will be removed from the cache in intervals determined by cacheTimeoutInterval
     */
    enableCacheExpiration?: boolean;
    /**
     * Determines the interval in milliseconds at which the cache is checked to see if items have expired (min: 100)
     */
    cacheExpirationIntervalMilliseconds?: number;
    /**
     * SharePoint specific library settings
     */
    sp?: {
        /**
         * Any headers to apply to all requests
         */
        headers?: TypedHash<string>;
        /**
         * Defines a factory method used to create fetch clients
         */
        fetchClientFactory?: () => HttpClientImpl;
        /**
         * The base url used for all requests
         */
        baseUrl?: string;
    };
    /**
     * MS Graph specific library settings
     */
    graph?: {
        /**
         * Any headers to apply to all requests
         */
        headers?: TypedHash<string>;
        /**
         * Defines a factory method used to create fetch clients
         */
        fetchClientFactory?: () => GraphHttpClientImpl;
    };
    /**
     * Used to supply the current context from an SPFx webpart to the library
     */
    spfxContext?: any;
}
export declare class RuntimeConfigImpl {
    private _defaultCachingStore;
    private _defaultCachingTimeoutSeconds;
    private _globalCacheDisable;
    private _enableCacheExpiration;
    private _cacheExpirationIntervalMilliseconds;
    private _spfxContext;
    private _spFetchClientFactory;
    private _spBaseUrl;
    private _spHeaders;
    private _graphHeaders;
    private _graphFetchClientFactory;
    constructor();
    set(config: LibraryConfiguration): void;
    readonly defaultCachingStore: "session" | "local";
    readonly defaultCachingTimeoutSeconds: number;
    readonly globalCacheDisable: boolean;
    readonly spFetchClientFactory: () => HttpClientImpl;
    readonly spBaseUrl: string;
    readonly spHeaders: TypedHash<string>;
    readonly enableCacheExpiration: boolean;
    readonly cacheExpirationIntervalMilliseconds: number;
    readonly spfxContext: SPFXContext;
    readonly graphFetchClientFactory: () => GraphHttpClientImpl;
    readonly graphHeaders: TypedHash<string>;
}
export declare let RuntimeConfig: RuntimeConfigImpl;
export declare function setRuntimeConfig(config: LibraryConfiguration): void;

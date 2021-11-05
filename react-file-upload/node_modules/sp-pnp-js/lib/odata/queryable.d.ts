import { Dictionary } from "../collections/collections";
import { FetchOptions, ConfigOptions } from "../net/utils";
import { ODataParser } from "../odata/core";
import { ICachingOptions } from "../odata/caching";
import { RequestContext } from "../request/pipeline";
export declare abstract class ODataQueryable {
    /**
     * Additional options to be set before sending actual http request
     */
    protected _options: ConfigOptions;
    /**
     * Tracks the query parts of the url
     */
    protected _query: Dictionary<string>;
    /**
     * Tracks the url as it is built
     */
    protected _url: string;
    /**
     * Stores the parent url used to create this instance, for recursing back up the tree if needed
     */
    protected _parentUrl: string;
    /**
     * Explicitly tracks if we are using caching for this request
     */
    protected _useCaching: boolean;
    /**
     * Any options that were supplied when caching was enabled
     */
    protected _cachingOptions: ICachingOptions;
    /**
     * Directly concatonates the supplied string to the current url, not normalizing "/" chars
     *
     * @param pathPart The string to concatonate to the url
     */
    concat(pathPart: string): this;
    /**
     * Appends the given string and normalizes "/" chars
     *
     * @param pathPart The string to append
     */
    protected append(pathPart: string): void;
    /**
     * Gets the parent url used when creating this instance
     *
     */
    protected readonly parentUrl: string;
    /**
     * Provides access to the query builder for this url
     *
     */
    readonly query: Dictionary<string>;
    /**
     * Sets custom options for current object and all derived objects accessible via chaining
     *
     * @param options custom options
     */
    configure(options: ConfigOptions): this;
    /**
     * Enables caching for this request
     *
     * @param options Defines the options used when caching this request
     */
    usingCaching(options?: ICachingOptions): this;
    /**
     * Gets the currentl url, made absolute based on the availability of the _spPageContextInfo object
     *
     */
    toUrl(): string;
    /**
     * Gets the full url with query information
     *
     */
    abstract toUrlAndQuery(): string;
    /**
     * Executes the currently built request
     *
     * @param parser Allows you to specify a parser to handle the result
     * @param getOptions The options used for this request
     */
    get(parser?: ODataParser<any>, options?: FetchOptions): Promise<any>;
    getAs<T>(parser?: ODataParser<T>, options?: FetchOptions): Promise<T>;
    protected postCore(options?: FetchOptions, parser?: ODataParser<any>): Promise<any>;
    protected postAsCore<T>(options?: FetchOptions, parser?: ODataParser<T>): Promise<T>;
    protected patchCore(options?: FetchOptions, parser?: ODataParser<any>): Promise<any>;
    protected deleteCore(options?: FetchOptions, parser?: ODataParser<any>): Promise<any>;
    /**
     * Converts the current instance to a request context
     *
     * @param verb The request verb
     * @param options The set of supplied request options
     * @param parser The supplied ODataParser instance
     * @param pipeline Optional request processing pipeline
     */
    protected abstract toRequestContext<T>(verb: string, options: FetchOptions, parser: ODataParser<T>, pipeline: Array<(c: RequestContext<T>) => Promise<RequestContext<T>>>): Promise<RequestContext<T>>;
}

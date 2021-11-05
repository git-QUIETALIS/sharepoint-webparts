import { ODataParser } from "../odata/core";
import { ODataBatch } from "../sharepoint/batch";
import { ICachingOptions } from "../odata/caching";
import { FetchOptions } from "../net/utils";
import { RequestClient } from "./requestclient";
/**
 * Defines the context for a given request to be processed in the pipeline
 */
export interface RequestContext<T> {
    batch: ODataBatch;
    batchDependency: () => void;
    cachingOptions: ICachingOptions;
    hasResult?: boolean;
    isBatched: boolean;
    isCached: boolean;
    options: FetchOptions;
    parser: ODataParser<T>;
    pipeline?: Array<(c: RequestContext<T>) => Promise<RequestContext<T>>>;
    requestAbsoluteUrl: string;
    requestId: string;
    result?: T;
    verb: string;
    clientFactory: () => RequestClient;
}
/**
 * Sets the result on the context
 */
export declare function setResult<T>(context: RequestContext<T>, value: any): Promise<RequestContext<T>>;
/**
 * Executes the current request context's pipeline
 *
 * @param context Current context
 */
export declare function pipe<T>(context: RequestContext<T>): Promise<T>;
/**
 * decorator factory applied to methods in the pipeline to control behavior
 */
export declare function requestPipelineMethod(alwaysRun?: boolean): (target: any, propertyKey: string, descriptor: PropertyDescriptor) => void;
/**
 * Contains the methods used within the request pipeline
 */
export declare class PipelineMethods {
    /**
     * Logs the start of the request
     */
    static logStart<T>(context: RequestContext<T>): Promise<RequestContext<T>>;
    /**
     * Handles caching of the request
     */
    static caching<T>(context: RequestContext<T>): Promise<RequestContext<T>>;
    /**
     * Sends the request
     */
    static send<T>(context: RequestContext<T>): Promise<RequestContext<T>>;
    /**
     * Logs the end of the request
     */
    static logEnd<T>(context: RequestContext<T>): Promise<RequestContext<T>>;
    static readonly default: (<T>(context: RequestContext<T>) => Promise<RequestContext<T>>)[];
}

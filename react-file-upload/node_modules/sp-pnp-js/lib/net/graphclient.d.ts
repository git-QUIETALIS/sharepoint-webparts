import { FetchOptions } from "./utils";
import { RequestClient } from "../request/requestclient";
export declare class GraphHttpClient implements RequestClient {
    private _impl;
    constructor();
    fetch(url: string, options?: FetchOptions): Promise<Response>;
    fetchRaw(url: string, options?: FetchOptions): Promise<Response>;
    get(url: string, options?: FetchOptions): Promise<Response>;
    post(url: string, options?: FetchOptions): Promise<Response>;
    patch(url: string, options?: FetchOptions): Promise<Response>;
    delete(url: string, options?: FetchOptions): Promise<Response>;
}
export interface GraphHttpClientImpl {
    fetch(url: string, configuration: any, options: FetchOptions): Promise<Response>;
}

import { FetchOptions } from "../net/utils";
export interface RequestClient {
    fetch(url: string, options?: FetchOptions): Promise<Response>;
    fetchRaw(url: string, options?: FetchOptions): Promise<Response>;
    get(url: string, options?: FetchOptions): Promise<Response>;
    post(url: string, options?: FetchOptions): Promise<Response>;
    patch(url: string, options?: FetchOptions): Promise<Response>;
    delete(url: string, options?: FetchOptions): Promise<Response>;
}

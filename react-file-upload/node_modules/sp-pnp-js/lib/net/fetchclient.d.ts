import { HttpClientImpl } from "./httpclient";
/**
 * Makes requests using the fetch API
 */
export declare class FetchClient implements HttpClientImpl {
    fetch(url: string, options: any): Promise<Response>;
}

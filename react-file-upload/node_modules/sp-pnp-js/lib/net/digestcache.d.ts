import { Dictionary } from "../collections/collections";
import { HttpClient } from "./httpclient";
export declare class CachedDigest {
    expiration: Date;
    value: string;
}
export declare class DigestCache {
    private _httpClient;
    private _digests;
    constructor(_httpClient: HttpClient, _digests?: Dictionary<CachedDigest>);
    getDigest(webUrl: string): Promise<string>;
    clear(): void;
}

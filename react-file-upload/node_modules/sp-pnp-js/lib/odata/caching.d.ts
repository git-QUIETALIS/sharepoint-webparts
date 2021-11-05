import { ODataParser } from "../odata/core";
import { PnPClientStore, PnPClientStorage } from "../utils/storage";
export interface ICachingOptions {
    expiration?: Date;
    storeName?: "session" | "local";
    key: string;
}
export declare class CachingOptions implements ICachingOptions {
    key: string;
    protected static storage: PnPClientStorage;
    expiration: Date;
    storeName: "session" | "local";
    constructor(key: string);
    readonly store: PnPClientStore;
}
export declare class CachingParserWrapper<T> implements ODataParser<T> {
    private _parser;
    private _cacheOptions;
    constructor(_parser: ODataParser<T>, _cacheOptions: CachingOptions);
    parse(response: Response): Promise<T>;
}

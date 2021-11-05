import { SharePointQueryableConstructor } from "./sharepointqueryable";
import { ODataParser } from "../odata/core";
export declare function spExtractODataId(candidate: any): string;
export declare function spGetEntityUrl(entity: any): string;
export declare function spODataEntity<T>(factory: SharePointQueryableConstructor<T>): ODataParser<T>;
export declare function spODataEntityArray<T>(factory: SharePointQueryableConstructor<T>): ODataParser<T[]>;

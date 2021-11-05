import { ODataParser, ODataParserBase } from "./core";
export declare class ODataDefaultParser extends ODataParserBase<any> {
}
export declare function ODataValue<T>(): ODataParser<T>;
export declare class ODataRawParserImpl implements ODataParser<any> {
    parse(r: Response): Promise<any>;
}
export declare let ODataRaw: ODataRawParserImpl;
export declare class TextFileParser implements ODataParser<string> {
    parse(r: Response): Promise<string>;
}
export declare class BlobFileParser implements ODataParser<Blob> {
    parse(r: Response): Promise<Blob>;
}
export declare class JSONFileParser implements ODataParser<any> {
    parse(r: Response): Promise<any>;
}
export declare class BufferFileParser implements ODataParser<ArrayBuffer> {
    parse(r: any): Promise<ArrayBuffer>;
}

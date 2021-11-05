export interface ODataParser<T> {
    hydrate?: (d: any) => T;
    parse(r: Response): Promise<T>;
}
export declare abstract class ODataParserBase<T> implements ODataParser<T> {
    parse(r: Response): Promise<T>;
    protected handleError(r: Response, reject: (reason?: any) => void): boolean;
    protected parseODataJSON<U>(json: any): U;
}

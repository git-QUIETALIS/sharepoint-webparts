/**
 * Represents an exception with an HttpClient request
 *
 */
export declare class ProcessHttpClientResponseException extends Error {
    readonly status: number;
    readonly statusText: string;
    readonly data: any;
    constructor(status: number, statusText: string, data: any);
}
export declare class NoCacheAvailableException extends Error {
    constructor(msg?: string);
}
export declare class APIUrlException extends Error {
    constructor(msg?: string);
}
export declare class AuthUrlException extends Error {
    constructor(data: any, msg?: string);
}
export declare class NodeFetchClientUnsupportedException extends Error {
    constructor(msg?: string);
}
export declare class SPRequestExecutorUndefinedException extends Error {
    constructor();
}
export declare class MaxCommentLengthException extends Error {
    constructor(msg?: string);
}
export declare class NotSupportedInBatchException extends Error {
    constructor(operation?: string);
}
export declare class ODataIdException extends Error {
    constructor(data: any, msg?: string);
}
export declare class BatchParseException extends Error {
    constructor(msg: string);
}
export declare class AlreadyInBatchException extends Error {
    constructor(msg?: string);
}
export declare class FunctionExpectedException extends Error {
    constructor(msg?: string);
}
export declare class UrlException extends Error {
    constructor(msg: string);
}

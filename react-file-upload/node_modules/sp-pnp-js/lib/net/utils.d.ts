export interface ConfigOptions {
    headers?: string[][] | {
        [key: string]: string;
    };
    mode?: "navigate" | "same-origin" | "no-cors" | "cors";
    credentials?: "omit" | "same-origin" | "include";
    cache?: "default" | "no-store" | "reload" | "no-cache" | "force-cache" | "only-if-cached";
}
export interface FetchOptions extends ConfigOptions {
    method?: string;
    body?: any;
}
export declare function mergeOptions(target: ConfigOptions, source: ConfigOptions): void;
export declare function mergeHeaders(target: Headers, source: any): void;

import { TypedHash } from "../collections/collections";
export declare function extractWebUrl(candidateUrl: string): string;
export declare class Util {
    /**
     * Gets a callback function which will maintain context across async calls.
     * Allows for the calling pattern getCtxCallback(thisobj, method, methodarg1, methodarg2, ...)
     *
     * @param context The object that will be the 'this' value in the callback
     * @param method The method to which we will apply the context and parameters
     * @param params Optional, additional arguments to supply to the wrapped method when it is invoked
     */
    static getCtxCallback(context: any, method: Function, ...params: any[]): Function;
    /**
     * Tests if a url param exists
     *
     * @param name The name of the url paramter to check
     */
    static urlParamExists(name: string): boolean;
    /**
     * Gets a url param value by name
     *
     * @param name The name of the paramter for which we want the value
     */
    static getUrlParamByName(name: string): string;
    /**
     * Gets a url param by name and attempts to parse a bool value
     *
     * @param name The name of the paramter for which we want the boolean value
     */
    static getUrlParamBoolByName(name: string): boolean;
    /**
     * Inserts the string s into the string target as the index specified by index
     *
     * @param target The string into which we will insert s
     * @param index The location in target to insert s (zero based)
     * @param s The string to insert into target at position index
     */
    static stringInsert(target: string, index: number, s: string): string;
    /**
     * Adds a value to a date
     *
     * @param date The date to which we will add units, done in local time
     * @param interval The name of the interval to add, one of: ['year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second']
     * @param units The amount to add to date of the given interval
     *
     * http://stackoverflow.com/questions/1197928/how-to-add-30-minutes-to-a-javascript-date-object
     */
    static dateAdd(date: Date, interval: string, units: number): Date;
    /**
     * Loads a stylesheet into the current page
     *
     * @param path The url to the stylesheet
     * @param avoidCache If true a value will be appended as a query string to avoid browser caching issues
     */
    static loadStylesheet(path: string, avoidCache: boolean): void;
    /**
     * Combines an arbitrary set of paths ensuring that the slashes are normalized
     *
     * @param paths 0 to n path parts to combine
     */
    static combinePaths(...paths: string[]): string;
    /**
     * Gets a random string of chars length
     *
     * @param chars The length of the random string to generate
     */
    static getRandomString(chars: number): string;
    /**
     * Gets a random GUID value
     *
     * http://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
     */
    static getGUID(): string;
    /**
     * Determines if a given value is a function
     *
     * @param candidateFunction The thing to test for being a function
     */
    static isFunction(candidateFunction: any): boolean;
    /**
     * @returns whether the provided parameter is a JavaScript Array or not.
    */
    static isArray(array: any): boolean;
    /**
     * Determines if a string is null or empty or undefined
     *
     * @param s The string to test
     */
    static stringIsNullOrEmpty(s: string): boolean;
    /**
     * Provides functionality to extend the given object by doing a shallow copy
     *
     * @param target The object to which properties will be copied
     * @param source The source object from which properties will be copied
     * @param noOverwrite If true existing properties on the target are not overwritten from the source
     *
     */
    static extend(target: any, source: TypedHash<any>, noOverwrite?: boolean): any;
    /**
     * Determines if a given url is absolute
     *
     * @param url The url to check to see if it is absolute
     */
    static isUrlAbsolute(url: string): boolean;
    /**
     * Ensures that a given url is absolute for the current web based on context
     *
     * @param candidateUrl The url to make absolute
     *
     */
    static toAbsoluteUrl(candidateUrl: string): Promise<string>;
}

import { Util } from "./utils/util";
import { PnPClientStorage } from "./utils/storage";
import { Settings } from "./configuration/configuration";
import { Logger } from "./utils/logging";
import { SPRest } from "./sharepoint/rest";
import { LibraryConfiguration } from "./configuration/pnplibconfig";
import { GraphRest } from "./graph/rest";
/**
 * Root class of the Patterns and Practices namespace, provides an entry point to the library
 */
/**
 * Utility methods
 */
export declare const util: typeof Util;
/**
 * Provides access to the SharePoint REST interface
 */
export declare const sp: SPRest;
/**
 * Provides access to the Microsoft Graph REST interface
 */
export declare const graph: GraphRest;
/**
 * Provides access to local and session storage
 */
export declare const storage: PnPClientStorage;
/**
 * Global configuration instance to which providers can be added
 */
export declare const config: Settings;
/**
 * Global logging instance to which subscribers can be registered and messages written
 */
export declare const log: typeof Logger;
/**
 * Allows for the configuration of the library
 */
export declare const setup: (config: LibraryConfiguration) => void;
/**
 * Export everything back to the top level so it can be properly bundled
 */
export * from "./exports/core";
export * from "./exports/graph";
export * from "./exports/net";
export * from "./exports/odata";
export * from "./exports/sp";
declare const Def: {
    config: Settings;
    graph: GraphRest;
    log: typeof Logger;
    setup: (config: LibraryConfiguration) => void;
    sp: SPRest;
    storage: PnPClientStorage;
    util: typeof Util;
};
export default Def;

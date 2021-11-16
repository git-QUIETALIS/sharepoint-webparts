import { RushCommandLineParser } from '../RushCommandLineParser';
import { BaseConfiglessRushAction } from './BaseRushAction';
export interface IJsonOutput {
    /**
     * Dependencies scan from source code
     */
    detectedDependencies: string[];
    /**
     * Dependencies detected but not declared in package.json
     */
    missingDependencies: string[];
    /**
     * Dependencies declared in package.json, but not used in source code
     */
    unusedDependencies: string[];
}
export declare class ScanAction extends BaseConfiglessRushAction {
    private _jsonFlag;
    private _allFlag;
    constructor(parser: RushCommandLineParser);
    protected onDefineParameters(): void;
    protected runAsync(): Promise<void>;
}
//# sourceMappingURL=ScanAction.d.ts.map
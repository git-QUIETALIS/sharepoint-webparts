import { RushCommandLineParser } from '../RushCommandLineParser';
import { BaseRushAction } from './BaseRushAction';
export declare class CheckAction extends BaseRushAction {
    private _variant;
    private _jsonFlag;
    constructor(parser: RushCommandLineParser);
    protected onDefineParameters(): void;
    protected runAsync(): Promise<void>;
}
//# sourceMappingURL=CheckAction.d.ts.map
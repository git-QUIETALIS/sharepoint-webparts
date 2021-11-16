import { RushCommandLineParser } from '../RushCommandLineParser';
import { BaseRushAction } from './BaseRushAction';
export declare class UnlinkAction extends BaseRushAction {
    constructor(parser: RushCommandLineParser);
    protected onDefineParameters(): void;
    protected runAsync(): Promise<void>;
}
//# sourceMappingURL=UnlinkAction.d.ts.map
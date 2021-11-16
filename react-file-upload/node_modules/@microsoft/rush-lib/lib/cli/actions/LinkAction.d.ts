import { RushCommandLineParser } from '../RushCommandLineParser';
import { BaseRushAction } from './BaseRushAction';
export declare class LinkAction extends BaseRushAction {
    private _force;
    constructor(parser: RushCommandLineParser);
    protected onDefineParameters(): void;
    protected runAsync(): Promise<void>;
}
//# sourceMappingURL=LinkAction.d.ts.map
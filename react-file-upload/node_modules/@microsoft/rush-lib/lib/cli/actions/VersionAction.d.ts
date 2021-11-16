import { RushCommandLineParser } from '../RushCommandLineParser';
import { BaseRushAction } from './BaseRushAction';
export declare const DEFAULT_PACKAGE_UPDATE_MESSAGE: string;
export declare const DEFAULT_CHANGELOG_UPDATE_MESSAGE: string;
export declare class VersionAction extends BaseRushAction {
    private _ensureVersionPolicy;
    private _overrideVersion;
    private _bumpVersion;
    private _versionPolicy;
    private _bypassPolicy;
    private _targetBranch;
    private _overwriteBump;
    private _prereleaseIdentifier;
    private _ignoreGitHooksParameter;
    constructor(parser: RushCommandLineParser);
    protected onDefineParameters(): void;
    protected runAsync(): Promise<void>;
    private _overwritePolicyVersionIfNeeded;
    private _validateInput;
    private _validateResult;
    private _gitProcess;
}
//# sourceMappingURL=VersionAction.d.ts.map
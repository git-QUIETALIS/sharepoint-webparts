import { RushCommandLineParser } from '../RushCommandLineParser';
import { BaseRushAction } from './BaseRushAction';
export declare class PublishAction extends BaseRushAction {
    private _addCommitDetails;
    private _apply;
    private _includeAll;
    private _npmAuthToken;
    private _npmTag;
    private _npmAccessLevel;
    private _publish;
    private _regenerateChangelogs;
    private _registryUrl;
    private _targetBranch;
    private _prereleaseName;
    private _partialPrerelease;
    private _suffix;
    private _force;
    private _versionPolicy;
    private _applyGitTagsOnPack;
    private _commitId;
    private _releaseFolder;
    private _pack;
    private _ignoreGitHooksParameter;
    private _prereleaseToken;
    private _hotfixTagOverride;
    private _targetNpmrcPublishFolder;
    private _targetNpmrcPublishPath;
    constructor(parser: RushCommandLineParser);
    protected onDefineParameters(): void;
    /**
     * Executes the publish action, which will read change request files, apply changes to package.jsons,
     */
    protected runAsync(): Promise<void>;
    /**
     * Validate some input parameters
     */
    private _validate;
    private _publishChanges;
    private _publishAll;
    private _gitAddTags;
    private _npmPublish;
    private _packageExists;
    private _npmPack;
    private _calculateTarballName;
    private _setDependenciesBeforePublish;
    private _setDependenciesBeforeCommit;
    private _addNpmPublishHome;
    private _addSharedNpmConfig;
}
//# sourceMappingURL=PublishAction.d.ts.map
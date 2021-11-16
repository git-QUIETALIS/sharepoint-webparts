export declare class WorkbenchPage {
    private _localWorkbenchUrl;
    private _packageNameSymlinks;
    private _projectRootPath;
    private _tempFolderPath;
    private _workbenchPackagesTempPath;
    private _workbenchRootPath;
    private _cachedServeConfig;
    private _localWorkbenchManifests;
    constructor();
    handleWorkbenchRequest(request: any, response: any): void;
    private get _localWorkbenchPath();
    private _populateLocalWorkbenchManifests;
    private _generateWorkbenchPageContent;
    /**
     * Generate a favicon URL. Chrome will request one if we don't give a URL, so in order to avoid an error in the
     * console we'll give a URL.
     */
    private get _faviconUrl();
    /**
     * Find the assembly.
     */
    private get _assemblyUrl();
    /**
     * Get the running project's serve.json
     */
    private get _serveConfig();
    private _getErrorBody;
    private _getPageWithBodyAndHead;
    private _getManifestById;
    private _getModuleConfigPath;
    private _getLocalAssemblyPath;
    private _disambiguateManifestPath;
    private _getUrlForWorkbenchPackagePath;
    private _getUrlForPath;
}
//# sourceMappingURL=WorkbenchPage.d.ts.map
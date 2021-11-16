"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const node_core_library_1 = require("@rushstack/node-core-library");
const ASSEMBLY_MANIFEST_ID = '5dae53c4-db1e-4d0b-b8b2-88c874dabf83'; // workbench assembly
const CONTAINER_FOLDER_NAME = 'local-workbench';
const DEFAULT_MANIFEST_FILE_NAME_PATTERN = /(^[^\.\\\/]+)\.manifest\.json$/;
class WorkbenchPage {
    constructor() {
        this._packageNameSymlinks = new Map();
        this._projectRootPath = process.cwd();
        this._tempFolderPath = path.join(this._projectRootPath, 'temp');
        this._workbenchPackagesTempPath = path.join(this._tempFolderPath, 'workbench-packages');
        this._workbenchRootPath = path.resolve(__dirname, '..', '..');
        this.handleWorkbenchRequest = this.handleWorkbenchRequest.bind(this);
        node_core_library_1.FileSystem.ensureFolder(this._workbenchPackagesTempPath);
        node_core_library_1.FileSystem.ensureEmptyFolder(this._workbenchPackagesTempPath);
        this._localWorkbenchUrl = this._getUrlForPath(this._localWorkbenchPath);
        this._localWorkbenchManifests = this._populateLocalWorkbenchManifests();
    }
    /* tslint:disable-next-line:no-any */
    handleWorkbenchRequest(request, response) {
        const workbenchFilePath = path.join(this._tempFolderPath, 'workbench.html');
        node_core_library_1.FileSystem.ensureFolder(path.dirname(workbenchFilePath));
        node_core_library_1.FileSystem.writeFile(workbenchFilePath, this._generateWorkbenchPageContent());
        const redirectPath = this._getUrlForPath(workbenchFilePath);
        response.redirect(redirectPath);
    }
    get _localWorkbenchPath() {
        return path.resolve(this._workbenchRootPath, CONTAINER_FOLDER_NAME);
    }
    _populateLocalWorkbenchManifests() {
        const manifests = [];
        try {
            const localWorkbenchManifestPaths = node_core_library_1.FileSystem.readFolder(this._localWorkbenchPath);
            for (let i = 0; i < localWorkbenchManifestPaths.length; i++) {
                const targetFilename = localWorkbenchManifestPaths[i];
                const manifestIdMatches = targetFilename.match(DEFAULT_MANIFEST_FILE_NAME_PATTERN);
                if (manifestIdMatches) {
                    const manifestId = manifestIdMatches[1];
                    const manifest = this._getManifestById(manifestId);
                    if (manifest.loaderConfig && manifest.loaderConfig.scriptResources) {
                        if (manifest.loaderConfig.scriptResources) {
                            // tslint:disable-next-line:forin
                            for (const scriptResourceName in manifest.loaderConfig.scriptResources) {
                                const moduleConfig = manifest.loaderConfig.scriptResources[scriptResourceName];
                                switch (moduleConfig.type) {
                                    case 'path':
                                        moduleConfig.path = this._getUrlForWorkbenchPackagePath('@microsoft/sp-webpart-workbench', this._getLocalAssemblyPath(moduleConfig));
                                        break;
                                    case 'localizedPath':
                                        moduleConfig.defaultPath = this._getUrlForWorkbenchPackagePath('@microsoft/sp-webpart-workbench', this._getLocalAssemblyPath(moduleConfig));
                                        break;
                                }
                            }
                        }
                        manifest.loaderConfig.internalModuleBaseUrls = [this._localWorkbenchUrl];
                        manifests.push(manifest);
                    }
                }
            }
        }
        catch (e) {
            console.error(`Exception while reading local-workbench manifests ${e.errorMessage}`);
        }
        return manifests;
    }
    _generateWorkbenchPageContent() {
        // Get the manifests.js URL.
        const manifestsJsPath = path.join(this._tempFolderPath, 'manifests.js');
        const manifestJsUrl = this._getUrlForPath(manifestsJsPath);
        const workbenchInitUrl = this._getUrlForWorkbenchPackagePath('@microsoft/sp-webpart-workbench', path.join('lib', 'api', 'workbenchInit.js'));
        const assemblyUrl = this._assemblyUrl;
        let head;
        let body;
        if (!assemblyUrl) {
            // This doesn't need to be localized because this string can only show up when the workbench
            //  has been NPM installed, and we only ship English modules to NPM
            body = this._getErrorBody('The script containing the initialization code could not be resolved. Unable to load workbench');
        }
        else {
            head = `
    <script type="text/javascript" src="${manifestJsUrl}"></script>
    <script type="text/javascript" src="${assemblyUrl}"></script>
    <script type="text/javascript">
      // The workbenchInit.js script is commonJS and expects an "exports" object
      var exports = {};
      var localWorkbenchManifests = ${JSON.stringify(this._localWorkbenchManifests)};
    </script>
    <script type="text/javascript" src="${workbenchInitUrl}"></script>
    <script type="text/javascript">
      // Clean up the "exports" object
      exports = undefined;
    </script>`;
            body = `
    <script type="text/javascript">
      window.spModuleLoader.start(window.preloadedData);
    </script>`;
        }
        return this._getPageWithBodyAndHead(body, head);
    }
    /**
     * Generate a favicon URL. Chrome will request one if we don't give a URL, so in order to avoid an error in the
     * console we'll give a URL.
     */
    get _faviconUrl() {
        return this._getUrlForWorkbenchPackagePath('@microsoft/sp-webpart-workbench', path.join('lib', 'api', 'assets', 'server-icon.png'));
    }
    /**
     * Find the assembly.
     */
    get _assemblyUrl() {
        try {
            const assemblyManifest = this._getManifestById(ASSEMBLY_MANIFEST_ID);
            const entryModuleConfig = assemblyManifest.loaderConfig
                .scriptResources[assemblyManifest.loaderConfig.entryModuleId];
            if (!entryModuleConfig) {
                throw `Unable to find assembly id: ${assemblyManifest.loaderConfig.entryModuleId} entrypoint`;
            }
            const assemblyPath = this._getLocalAssemblyPath(entryModuleConfig);
            const assemblyDefaultUrl = this._getUrlForWorkbenchPackagePath('@microsoft/sp-webpart-workbench', assemblyPath);
            // Local workbench assembly should always load 'en-US' locale.
            return assemblyDefaultUrl.replace(entryModuleConfig.paths.default, entryModuleConfig.paths['en-US']);
        }
        catch (e) {
            // Unable to get the assembly URL. We'll inform the user if they try to load the workbench page.
            return undefined;
        }
    }
    /**
     * Get the running project's serve.json
     */
    get _serveConfig() {
        if (!this._cachedServeConfig) {
            try {
                this._cachedServeConfig = node_core_library_1.JsonFile.load(path.join(this._projectRootPath, 'config', 'serve.json'));
            }
            catch (e) {
                // Could not load serve config, setting defaults.
                this._cachedServeConfig = {
                    port: 4321,
                    initialPage: ''
                };
            }
        }
        return this._cachedServeConfig;
    }
    _getErrorBody(errorMessage) {
        return `
      <span style="font-weight:bold;color:red;font-size:20px;">
        ${errorMessage}
      </span>`;
    }
    _getPageWithBodyAndHead(body, head) {
        return `<!doctype html>
              <html dir="ltr">
              <head>
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                <title>SharePoint Web Part Workbench</title>

                <link rel="shortcut icon" href="${this._faviconUrl}" />
                ${head || ''}
              </head>
              <body>
              ${body}
              </body>
            </html>
`;
    }
    _getManifestById(id) {
        const assemblyManifestPath = path.join(this._localWorkbenchPath, `${id}.manifest.json`);
        const assemblyManifest = node_core_library_1.JsonFile.load(assemblyManifestPath);
        return assemblyManifest;
    }
    _getModuleConfigPath(assemblyModuleConfig) {
        let foundPath = undefined;
        switch (assemblyModuleConfig.type) {
            case 'path':
                foundPath = this._disambiguateManifestPath(assemblyModuleConfig.path);
                break;
            case 'localizedPath':
                foundPath = this._disambiguateManifestPath(assemblyModuleConfig.defaultPath);
                break;
        }
        return foundPath;
    }
    _getLocalAssemblyPath(moduleConfig) {
        const foundPath = this._getModuleConfigPath(moduleConfig);
        const assemblyFilename = foundPath.substr(foundPath.lastIndexOf('/') + 1);
        return `${CONTAINER_FOLDER_NAME}/${assemblyFilename}`;
    }
    _disambiguateManifestPath(pathToDisambiguate) {
        if (typeof pathToDisambiguate === 'string') {
            return pathToDisambiguate;
        }
        else {
            return pathToDisambiguate.debug || pathToDisambiguate.default;
        }
    }
    _getUrlForWorkbenchPackagePath(packageName, pathInsidePackage) {
        const normalizedPackageName = packageName.toUpperCase();
        if (!this._packageNameSymlinks.has(normalizedPackageName)) {
            const linkTargetPath = node_core_library_1.Import.resolvePackage({
                packageName: packageName,
                baseFolderPath: this._workbenchRootPath,
                allowSelfReference: true
            });
            const newLinkPath = path.join(this._workbenchPackagesTempPath, packageName.replace(/\//g, '_') // Replace slashes with underscores so we don't create nested directories
            );
            node_core_library_1.FileSystem.createSymbolicLinkJunction({ linkTargetPath, newLinkPath });
            this._packageNameSymlinks.set(normalizedPackageName, newLinkPath);
        }
        const linkedPackagePath = this._packageNameSymlinks.get(normalizedPackageName);
        const filePath = path.join(linkedPackagePath, pathInsidePackage);
        return this._getUrlForPath(filePath);
    }
    _getUrlForPath(filePath) {
        const relativePath = path.relative(this._projectRootPath, filePath);
        return ((this._serveConfig.https ? 'https' : 'http') +
            `://localhost:${this._serveConfig.port}/${relativePath.replace(/\\/g, '/')}`);
    }
}
exports.WorkbenchPage = WorkbenchPage;
//# sourceMappingURL=WorkbenchPage.js.map
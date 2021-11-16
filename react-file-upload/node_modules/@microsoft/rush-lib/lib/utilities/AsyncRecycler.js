"use strict";
// Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
// See LICENSE in the project root for license information.
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsyncRecycler = void 0;
const child_process = __importStar(require("child_process"));
const os = __importStar(require("os"));
const path = __importStar(require("path"));
const node_core_library_1 = require("@rushstack/node-core-library");
const Utilities_1 = require("./Utilities");
/**
 * For deleting large folders, AsyncRecycler is significantly faster than Utilities.dangerouslyDeletePath().
 * It works by moving one or more folders into a temporary "recycler" folder, and then launches a separate
 * background process to recursively delete that folder.
 */
class AsyncRecycler {
    constructor(recyclerFolder) {
        this._recyclerFolder = path.resolve(recyclerFolder);
        this._movedFolderCount = 0;
        this._deleting = false;
    }
    /**
     * The full path of the recycler folder.
     * Example: `C:\MyRepo\common\rush-recycler`
     */
    get recyclerFolder() {
        return this._recyclerFolder;
    }
    /**
     * Synchronously moves the specified folder into the recycler folder.  If the specified folder
     * does not exist, then no operation is performed.  After calling this function one or more times,
     * deleteAll() must be called to actually delete the contents of the recycler folder.
     */
    moveFolder(folderPath) {
        if (this._deleting) {
            throw new Error('AsyncRecycler.moveFolder() must not be called after deleteAll() has started');
        }
        if (node_core_library_1.Path.isUnder(this.recyclerFolder, folderPath)) {
            throw new Error('AsyncRecycler.moveFolder() cannot be called on a parent of the recycler folder');
        }
        if (!node_core_library_1.FileSystem.exists(folderPath)) {
            return;
        }
        ++this._movedFolderCount;
        // We need to do a simple "FileSystem.move" here, however if the folder we're trying to rename
        // has a lock, or if its destination container doesn't exist yet,
        // then there seems to be some OS process (virus scanner?) that holds
        // a lock on the folder for a split second, which causes renameSync to
        // fail. To workaround that, retry for up to 7 seconds before giving up.
        const maxWaitTimeMs = 7 * 1000;
        const oldFolderName = path.basename(folderPath);
        const newFolderPath = path.join(this.recyclerFolder, `${oldFolderName}_${new Date().getTime()}`);
        if (!node_core_library_1.FileSystem.exists(this.recyclerFolder)) {
            Utilities_1.Utilities.createFolderWithRetry(this.recyclerFolder);
        }
        Utilities_1.Utilities.retryUntilTimeout(() => node_core_library_1.FileSystem.move({ sourcePath: folderPath, destinationPath: newFolderPath }), maxWaitTimeMs, (e) => new Error(`Error: ${e}${os.EOL}Often this is caused by a file lock ` +
            'from a process like the virus scanner.'), 'recycleFolder');
    }
    /**
     * This deletes all items under the specified folder, except for the items in the membersToExclude.
     * To be conservative, a case-insensitive comparison is used for membersToExclude.
     * The membersToExclude must be file/folder names that would match readdir() results.
     */
    moveAllItemsInFolder(folderPath, membersToExclude) {
        const resolvedFolderPath = path.resolve(folderPath);
        const excludeSet = new Set((membersToExclude || []).map((x) => x.toUpperCase()));
        for (const memberPath of node_core_library_1.FileSystem.readFolder(resolvedFolderPath, { absolutePaths: true })) {
            const normalizedMemberName = path.basename(memberPath).toUpperCase();
            if (!excludeSet.has(normalizedMemberName)) {
                let shouldMove = false;
                try {
                    const stats = node_core_library_1.FileSystem.getLinkStatistics(memberPath);
                    shouldMove = stats.isDirectory();
                }
                catch (error) {
                    // If we fail to access the item, assume it's not a folder
                }
                if (shouldMove) {
                    this.moveFolder(memberPath);
                }
                else {
                    node_core_library_1.FileSystem.deleteFolder(memberPath);
                }
            }
        }
    }
    /**
     * Starts an asynchronous process to delete the recycler folder.  Deleting will continue
     * even if the current Node.js process is killed.
     *
     * NOTE: To avoid spawning multiple instances of the same command, moveFolder()
     * MUST NOT be called again after deleteAll() has started.
     */
    deleteAll() {
        if (this._deleting) {
            throw new Error('AsyncRecycler.deleteAll() must not be called more than once');
        }
        this._deleting = true;
        if (this._movedFolderCount === 0) {
            // Nothing to do
            return;
        }
        // Asynchronously delete the folder contents.
        let command;
        let args;
        const options = {
            detached: true,
            // The child won't stay alive unless we detach its stdio
            stdio: 'ignore'
        };
        if (os.platform() === 'win32') {
            // PowerShell.exe doesn't work with a detached console, so we need cmd.exe to create
            // the new console for us.
            command = 'cmd.exe';
            // In PowerShell single-quote literals, single quotes are escaped by doubling them
            const escapedRecyclerFolder = node_core_library_1.Text.replaceAll(this.recyclerFolder, "'", "''");
            // As of PowerShell 3.0, the "\\?" prefix can be used for paths that exceed MAX_PATH.
            // (This prefix does not seem to work for cmd.exe's "rd" command.)
            args = [
                '/c',
                '"' +
                    'PowerShell.exe -Version 3.0 -NoLogo -NonInteractive -WindowStyle Hidden -Command' +
                    ` Get-ChildItem -Force '${escapedRecyclerFolder}'` +
                    // The "^|" here prevents cmd.exe from interpreting the "|" symbol
                    ` ^| ForEach ($_) { Remove-Item -ErrorAction Ignore -Force -Recurse "\\\\?\\$($_.FullName)" }` +
                    '"'
            ];
            options.windowsVerbatimArguments = true;
        }
        else {
            command = 'rm';
            args = ['-rf'];
            let pathCount = 0;
            // child_process.spawn() doesn't expand wildcards.  To be safe, we will do it manually
            // rather than rely on an unknown shell.
            for (const filename of node_core_library_1.FileSystem.readFolder(this.recyclerFolder)) {
                // The "." and ".." are supposed to be excluded, but let's be safe
                if (filename !== '.' && filename !== '..') {
                    args.push(path.join(this.recyclerFolder, filename));
                    ++pathCount;
                }
            }
            if (pathCount === 0) {
                // Nothing to do
                return;
            }
        }
        const process = child_process.spawn(command, args, options);
        // The child won't stay alive unless we unlink it from the parent process
        process.unref();
    }
}
exports.AsyncRecycler = AsyncRecycler;
//# sourceMappingURL=AsyncRecycler.js.map
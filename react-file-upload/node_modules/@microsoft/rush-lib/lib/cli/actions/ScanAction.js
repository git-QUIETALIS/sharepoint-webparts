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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScanAction = void 0;
const safe_1 = __importDefault(require("colors/safe"));
const path = __importStar(require("path"));
const builtin_modules_1 = __importDefault(require("builtin-modules"));
const node_core_library_1 = require("@rushstack/node-core-library");
const BaseRushAction_1 = require("./BaseRushAction");
const glob = node_core_library_1.Import.lazy('glob', require);
class ScanAction extends BaseRushAction_1.BaseConfiglessRushAction {
    constructor(parser) {
        super({
            actionName: 'scan',
            summary: 'When migrating projects into a Rush repo, this command is helpful for detecting' +
                ' undeclared dependencies.',
            documentation: `The Node.js module system allows a project to import NPM packages without explicitly` +
                ` declaring them as dependencies in the package.json file.  Such "phantom dependencies"` +
                ` can cause problems.  Rush and PNPM use symlinks specifically to protect against phantom dependencies.` +
                ` These protections may cause runtime errors for existing projects when they are first migrated into` +
                ` a Rush monorepo.  The "rush scan" command is a handy tool for fixing these errors. It scans the "./src"` +
                ` and "./lib" folders for import syntaxes such as "import __ from '__'", "require('__')",` +
                ` and "System.import('__').  It prints a report of the referenced packages.  This heuristic is` +
                ` not perfect, but it can save a lot of time when migrating projects.`,
            safeForSimultaneousRushProcesses: true,
            parser
        });
    }
    onDefineParameters() {
        this._jsonFlag = this.defineFlagParameter({
            parameterLongName: '--json',
            description: 'If this flag is specified, output will be in JSON format.'
        });
        this._allFlag = this.defineFlagParameter({
            parameterLongName: '--all',
            description: 'If this flag is specified, output will list all detected dependencies.'
        });
    }
    async runAsync() {
        const packageJsonFilename = path.resolve('./package.json');
        if (!node_core_library_1.FileSystem.exists(packageJsonFilename)) {
            throw new Error('You must run "rush scan" in a project folder containing a package.json file.');
        }
        const requireRegExps = [
            // Example: require('something')
            /\brequire\s*\(\s*[']([^']+\s*)[']\)/,
            /\brequire\s*\(\s*["]([^"]+)["]\s*\)/,
            // Example: require.ensure('something')
            /\brequire.ensure\s*\(\s*[']([^']+\s*)[']\)/,
            /\brequire.ensure\s*\(\s*["]([^"]+)["]\s*\)/,
            // Example: require.resolve('something')
            /\brequire.resolve\s*\(\s*[']([^']+\s*)[']\)/,
            /\brequire.resolve\s*\(\s*["]([^"]+)["]\s*\)/,
            // Example: System.import('something')
            /\bSystem.import\s*\(\s*[']([^']+\s*)[']\)/,
            /\bSystem.import\s*\(\s*["]([^"]+)["]\s*\)/,
            // Example:
            //
            // import {
            //   A, B
            // } from 'something';
            /\bfrom\s*[']([^']+)[']/,
            /\bfrom\s*["]([^"]+)["]/,
            // Example:  import 'something';
            /\bimport\s*[']([^']+)[']\s*\;/,
            /\bimport\s*["]([^"]+)["]\s*\;/,
            // Example:
            // /// <reference types="something" />
            /\/\/\/\s*<\s*reference\s+types\s*=\s*["]([^"]+)["]\s*\/>/
        ];
        // Example: "my-package/lad/dee/dah" --> "my-package"
        // Example: "@ms/my-package" --> "@ms/my-package"
        const packageRegExp = /^((@[a-z\-0-9!_]+\/)?[a-z\-0-9!_]+)\/?/;
        const requireMatches = new Set();
        for (const filename of glob.sync('{./*.{ts,js,tsx,jsx},./{src,lib}/**/*.{ts,js,tsx,jsx}}')) {
            try {
                const contents = node_core_library_1.FileSystem.readFile(filename);
                const lines = contents.split('\n');
                for (const line of lines) {
                    for (const requireRegExp of requireRegExps) {
                        const requireRegExpResult = requireRegExp.exec(line);
                        if (requireRegExpResult) {
                            requireMatches.add(requireRegExpResult[1]);
                        }
                    }
                }
            }
            catch (error) {
                console.log(safe_1.default.bold('Skipping file due to error: ' + filename));
            }
        }
        const packageMatches = new Set();
        requireMatches.forEach((requireMatch) => {
            const packageRegExpResult = packageRegExp.exec(requireMatch);
            if (packageRegExpResult) {
                packageMatches.add(packageRegExpResult[1]);
            }
        });
        const detectedPackageNames = [];
        packageMatches.forEach((packageName) => {
            if (builtin_modules_1.default.indexOf(packageName) < 0) {
                detectedPackageNames.push(packageName);
            }
        });
        detectedPackageNames.sort();
        const declaredDependencies = new Set();
        const declaredDevDependencies = new Set();
        const missingDependencies = [];
        const unusedDependencies = [];
        const packageJsonContent = node_core_library_1.FileSystem.readFile(packageJsonFilename);
        try {
            const manifest = JSON.parse(packageJsonContent);
            if (manifest.dependencies) {
                for (const depName of Object.keys(manifest.dependencies)) {
                    declaredDependencies.add(depName);
                }
            }
            if (manifest.devDependencies) {
                for (const depName of Object.keys(manifest.devDependencies)) {
                    declaredDevDependencies.add(depName);
                }
            }
        }
        catch (e) {
            console.error(`JSON.parse ${packageJsonFilename} error`);
        }
        for (const detectedPkgName of detectedPackageNames) {
            /**
             * Missing(phantom) dependencies are
             * - used in source code
             * - not decalred in dependencies and devDependencies in package.json
             */
            if (!declaredDependencies.has(detectedPkgName) && !declaredDevDependencies.has(detectedPkgName)) {
                missingDependencies.push(detectedPkgName);
            }
        }
        for (const declaredPkgName of declaredDependencies) {
            /**
             * Unused dependencies are
             * - declared in dependencies in package.json (devDependencies not included)
             * - not used in source code
             */
            if (!detectedPackageNames.includes(declaredPkgName) && !declaredPkgName.startsWith('@types/')) {
                unusedDependencies.push(declaredPkgName);
            }
        }
        const output = {
            detectedDependencies: detectedPackageNames,
            missingDependencies: missingDependencies,
            unusedDependencies: unusedDependencies
        };
        if (this._jsonFlag.value) {
            console.log(JSON.stringify(output, undefined, 2));
        }
        else if (this._allFlag.value) {
            if (detectedPackageNames.length !== 0) {
                console.log('Dependencies that seem to be imported by this project:');
                for (const packageName of detectedPackageNames) {
                    console.log('  ' + packageName);
                }
            }
            else {
                console.log('This project does not seem to import any NPM packages.');
            }
        }
        else {
            let wroteAnything = false;
            if (missingDependencies.length > 0) {
                console.log(safe_1.default.yellow('Possible phantom dependencies') +
                    " - these seem to be imported but aren't listed in package.json:");
                for (const packageName of missingDependencies) {
                    console.log('  ' + packageName);
                }
                wroteAnything = true;
            }
            if (unusedDependencies.length > 0) {
                if (wroteAnything) {
                    console.log('');
                }
                console.log(safe_1.default.yellow('Possible unused dependencies') +
                    " - these are listed in package.json but don't seem to be imported:");
                for (const packageName of unusedDependencies) {
                    console.log('  ' + packageName);
                }
                wroteAnything = true;
            }
            if (!wroteAnything) {
                console.log(safe_1.default.green('Everything looks good.') + '  No missing or unused dependencies were found.');
            }
        }
    }
}
exports.ScanAction = ScanAction;
//# sourceMappingURL=ScanAction.js.map
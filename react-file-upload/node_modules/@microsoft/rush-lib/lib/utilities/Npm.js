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
exports.Npm = void 0;
const Utilities_1 = require("./Utilities");
const semver = __importStar(require("semver"));
class Npm {
    static publishedVersions(packageName, cwd, env, extraArgs = []) {
        const versions = [];
        try {
            const packageTime = Utilities_1.Utilities.executeCommandAndCaptureOutput('npm', ['view', packageName, 'time', '--json', ...extraArgs], cwd, env, true);
            if (packageTime && packageTime !== '') {
                Object.keys(JSON.parse(packageTime)).forEach((v) => {
                    if (semver.valid(v)) {
                        versions.push(v);
                    }
                });
            }
            else {
                console.log(`Package ${packageName} time value does not exist. Fall back to versions.`);
                // time property does not exist. It happens sometimes. Fall back to versions.
                const packageVersions = Utilities_1.Utilities.executeCommandAndCaptureOutput('npm', ['view', packageName, 'versions', '--json', ...extraArgs], cwd, env, true);
                if (packageVersions && packageVersions.length > 0) {
                    JSON.parse(packageVersions).forEach((version) => {
                        versions.push(version);
                    });
                }
                else {
                    console.log(`No version is found for ${packageName}`);
                }
            }
        }
        catch (error) {
            if (error.message.indexOf('npm ERR! 404') >= 0) {
                console.log(`Package ${packageName} does not exist in the registry.`);
            }
            else {
                console.log(`Failed to get NPM information about ${packageName}.`);
                throw error;
            }
        }
        return versions;
    }
}
exports.Npm = Npm;
//# sourceMappingURL=Npm.js.map
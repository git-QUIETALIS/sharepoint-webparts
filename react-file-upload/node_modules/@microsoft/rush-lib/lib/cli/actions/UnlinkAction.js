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
exports.UnlinkAction = void 0;
const os = __importStar(require("os"));
const BaseRushAction_1 = require("./BaseRushAction");
const UnlinkManager_1 = require("../../logic/UnlinkManager");
class UnlinkAction extends BaseRushAction_1.BaseRushAction {
    constructor(parser) {
        super({
            actionName: 'unlink',
            summary: 'Delete node_modules symlinks for all projects in the repo',
            documentation: 'This removes the symlinks created by the "rush link" command. This is useful for' +
                ' cleaning a repo using "git clean" without accidentally deleting source files, or for using standard NPM' +
                ' commands on a project.',
            parser
        });
    }
    onDefineParameters() {
        // No parameters
    }
    async runAsync() {
        const unlinkManager = new UnlinkManager_1.UnlinkManager(this.rushConfiguration);
        if (!unlinkManager.unlink()) {
            console.log('Nothing to do.');
        }
        else {
            console.log(os.EOL + 'Done.');
        }
    }
}
exports.UnlinkAction = UnlinkAction;
//# sourceMappingURL=UnlinkAction.js.map
"use strict";
// Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
// See LICENSE in the project root for license information.
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkAction = void 0;
const node_core_library_1 = require("@rushstack/node-core-library");
const BaseRushAction_1 = require("./BaseRushAction");
const linkManagerFactoryModule = node_core_library_1.Import.lazy('../../logic/LinkManagerFactory', require);
class LinkAction extends BaseRushAction_1.BaseRushAction {
    constructor(parser) {
        super({
            actionName: 'link',
            summary: 'Create node_modules symlinks for all projects',
            documentation: 'Create node_modules symlinks for all projects.  This operation is normally performed' +
                ' automatically as part of "rush install" or "rush update".  You should only need to use "rush link"' +
                ' if you performed "rush unlink" for some reason, or if you specified the "--no-link" option' +
                ' for "rush install" or "rush update".',
            parser
        });
    }
    onDefineParameters() {
        this._force = this.defineFlagParameter({
            parameterLongName: '--force',
            parameterShortName: '-f',
            description: 'Deletes and recreates all links, even if the filesystem state seems to indicate that this is ' +
                'unnecessary.'
        });
    }
    async runAsync() {
        const linkManager = linkManagerFactoryModule.LinkManagerFactory.getLinkManager(this.rushConfiguration);
        await linkManager.createSymlinksForProjects(this._force.value);
    }
}
exports.LinkAction = LinkAction;
//# sourceMappingURL=LinkAction.js.map
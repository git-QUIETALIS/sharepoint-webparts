"use strict";
// Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
// See LICENSE in the project root for license information.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckAction = void 0;
const safe_1 = __importDefault(require("colors/safe"));
const BaseRushAction_1 = require("./BaseRushAction");
const VersionMismatchFinder_1 = require("../../logic/versionMismatch/VersionMismatchFinder");
const Variants_1 = require("../../api/Variants");
class CheckAction extends BaseRushAction_1.BaseRushAction {
    constructor(parser) {
        super({
            actionName: 'check',
            summary: "Checks each project's package.json files and ensures that all dependencies are of the same " +
                'version throughout the repository.',
            documentation: "Checks each project's package.json files and ensures that all dependencies are of the " +
                'same version throughout the repository.',
            safeForSimultaneousRushProcesses: true,
            parser
        });
    }
    onDefineParameters() {
        this._variant = this.defineStringParameter(Variants_1.Variants.VARIANT_PARAMETER);
        this._jsonFlag = this.defineFlagParameter({
            parameterLongName: '--json',
            description: 'If this flag is specified, output will be in JSON format.'
        });
    }
    async runAsync() {
        const variant = this.rushConfiguration.currentInstalledVariant;
        if (!this._variant.value && variant) {
            console.log(safe_1.default.yellow(`Variant '${variant}' has been installed, but 'rush check' is currently checking the default variant. ` +
                `Use 'rush check --variant '${variant}' to check the current installation.`));
        }
        VersionMismatchFinder_1.VersionMismatchFinder.rushCheck(this.rushConfiguration, {
            variant: this._variant.value,
            printAsJson: this._jsonFlag.value
        });
    }
}
exports.CheckAction = CheckAction;
//# sourceMappingURL=CheckAction.js.map
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
exports.BaseRushAction = exports.BaseConfiglessRushAction = void 0;
const safe_1 = __importDefault(require("colors/safe"));
const os = __importStar(require("os"));
const path = __importStar(require("path"));
const ts_command_line_1 = require("@rushstack/ts-command-line");
const node_core_library_1 = require("@rushstack/node-core-library");
const EventHooksManager_1 = require("../../logic/EventHooksManager");
const Utilities_1 = require("../../utilities/Utilities");
/**
 * The base class for a few specialized Rush command-line actions that
 * can be used without a rush.json configuration.
 */
class BaseConfiglessRushAction extends ts_command_line_1.CommandLineAction {
    constructor(options) {
        super(options);
        this._parser = options.parser;
        this._safeForSimultaneousRushProcesses = !!options.safeForSimultaneousRushProcesses;
    }
    get rushConfiguration() {
        return this._parser.rushConfiguration;
    }
    get rushGlobalFolder() {
        return this._parser.rushGlobalFolder;
    }
    get parser() {
        return this._parser;
    }
    onExecute() {
        this._ensureEnvironment();
        if (this.rushConfiguration) {
            if (!this._safeForSimultaneousRushProcesses) {
                if (!node_core_library_1.LockFile.tryAcquire(this.rushConfiguration.commonTempFolder, 'rush')) {
                    console.log(safe_1.default.red(`Another Rush command is already running in this repository.`));
                    process.exit(1);
                }
            }
        }
        if (!Utilities_1.Utilities.shouldRestrictConsoleOutput()) {
            console.log(`Starting "rush ${this.actionName}"${os.EOL}`);
        }
        return this.runAsync();
    }
    _ensureEnvironment() {
        if (this.rushConfiguration) {
            // eslint-disable-next-line dot-notation
            let environmentPath = process.env['PATH'];
            environmentPath =
                path.join(this.rushConfiguration.commonTempFolder, 'node_modules', '.bin') +
                    path.delimiter +
                    environmentPath;
            // eslint-disable-next-line dot-notation
            process.env['PATH'] = environmentPath;
        }
    }
}
exports.BaseConfiglessRushAction = BaseConfiglessRushAction;
/**
 * The base class that most Rush command-line actions should extend.
 */
class BaseRushAction extends BaseConfiglessRushAction {
    get eventHooksManager() {
        if (!this._eventHooksManager) {
            this._eventHooksManager = new EventHooksManager_1.EventHooksManager(this.rushConfiguration);
        }
        return this._eventHooksManager;
    }
    get rushConfiguration() {
        return super.rushConfiguration;
    }
    onExecute() {
        if (!this.rushConfiguration) {
            throw Utilities_1.Utilities.getRushConfigNotFoundError();
        }
        return super.onExecute();
    }
}
exports.BaseRushAction = BaseRushAction;
//# sourceMappingURL=BaseRushAction.js.map
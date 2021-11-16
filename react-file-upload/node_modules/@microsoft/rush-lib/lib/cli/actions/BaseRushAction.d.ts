import { CommandLineAction, ICommandLineActionOptions } from '@rushstack/ts-command-line';
import { RushConfiguration } from '../../api/RushConfiguration';
import { EventHooksManager } from '../../logic/EventHooksManager';
import { RushCommandLineParser } from './../RushCommandLineParser';
import { RushGlobalFolder } from '../../api/RushGlobalFolder';
export interface IBaseRushActionOptions extends ICommandLineActionOptions {
    /**
     * By default, Rush operations acquire a lock file which prevents multiple commands from executing simultaneously
     * in the same repo folder.  (For example, it would be a mistake to run "rush install" and "rush build" at the
     * same time.)  If your command makes sense to run concurrently with other operations,
     * set safeForSimultaneousRushProcesses=true to disable this protection.  In particular, this is needed for
     * custom scripts that invoke other Rush commands.
     */
    safeForSimultaneousRushProcesses?: boolean;
    /**
     * The rush parser.
     */
    parser: RushCommandLineParser;
}
/**
 * The base class for a few specialized Rush command-line actions that
 * can be used without a rush.json configuration.
 */
export declare abstract class BaseConfiglessRushAction extends CommandLineAction {
    private _parser;
    private _safeForSimultaneousRushProcesses;
    protected get rushConfiguration(): RushConfiguration | undefined;
    protected get rushGlobalFolder(): RushGlobalFolder;
    protected get parser(): RushCommandLineParser;
    constructor(options: IBaseRushActionOptions);
    protected onExecute(): Promise<void>;
    /**
     * All Rush actions need to implement this method. This method runs after
     * environment has been set up by the base class.
     */
    protected abstract runAsync(): Promise<void>;
    private _ensureEnvironment;
}
/**
 * The base class that most Rush command-line actions should extend.
 */
export declare abstract class BaseRushAction extends BaseConfiglessRushAction {
    private _eventHooksManager;
    protected get eventHooksManager(): EventHooksManager;
    protected get rushConfiguration(): RushConfiguration;
    protected onExecute(): Promise<void>;
}
//# sourceMappingURL=BaseRushAction.d.ts.map
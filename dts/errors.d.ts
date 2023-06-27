export declare const DEFAULT_ERROR_HEADER: string;
export declare const DEFAULT_ERROR_ACTION: string;
interface WidgetErrorConfig {
    header?: string;
    action?: string;
    message?: string;
    error?: unknown;
}
export declare class WidgetError extends Error {
    header: string;
    action: string;
    /** The original error, if this is a wrapped error. */
    error: unknown;
    dismissable: boolean;
    constructor(config: WidgetErrorConfig);
}
export declare class UnknownError extends WidgetError {
    constructor(config: WidgetErrorConfig);
}
/**
 * A Promise which rejects with a known WidgetError.
 * Although it is well-typed, this typing only works when using the Promise as a Thennable, not through async/await.
 * @example widgetPromise.catch((reason: WidgetError) => console.error(reason.error))
 */
export declare class WidgetPromise<V, R extends WidgetError = WidgetError> extends Promise<V> {
    static from<P extends {
        then(onfulfilled: (value: any) => any): any;
        catch(onrejected: (reason: any) => any): any;
    }, V extends Parameters<Parameters<P['then']>[0]>[0], R extends Parameters<Parameters<P['catch']>[0]>[0], WidgetValue = V, WidgetReason extends WidgetError = WidgetError>(value: P | (() => P), 
    /** Synchronously maps the value to the WidgetPromise value. Any thrown reason must be mappable by onrejected. */
    onfulfilled: ((value: V) => WidgetValue) | null, 
    /**
     * Synchronously maps the reason to the WidgetPromise reason. Must throw the mapped reason.
     * @throws {@link WidgetReason}
     */
    onrejected: (reason: R) => never): WidgetPromise<WidgetValue, WidgetReason & UnknownError>;
    catch<T = never>(onrejected?: ((reason: R) => T | Promise<T>) | undefined | null): Promise<V | T>;
}
/** Integration errors are considered fatal. They are caused by invalid integrator configuration. */
export declare class IntegrationError extends WidgetError {
    constructor(message: string);
}
/** Dismissable errors are not be considered fatal by the ErrorBoundary. */
export declare class DismissableError extends WidgetError {
    constructor(config: WidgetErrorConfig);
}
export declare class UserRejectedRequestError extends DismissableError {
    constructor();
}
/** Connection errors are considered fatal. They are caused by wallet integrations. */
declare abstract class ConnectionError extends WidgetError {
    constructor(config: WidgetErrorConfig);
}
export declare class MetaMaskConnectionError extends ConnectionError {
    constructor();
}
export {};

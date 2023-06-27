import { RouterPreference } from 'hooks/routing/types';
export interface Slippage {
    auto: boolean;
    max: string | undefined;
}
export interface Settings {
    slippage: Slippage;
    transactionTtl: number | undefined;
    routerPreference: RouterPreference;
}
export declare const controlledAtom: import("jotai").Atom<Settings | undefined> & {
    write: (get: {
        <Value>(atom: import("jotai").Atom<Value | Promise<Value>>): Value;
        <Value_1>(atom: import("jotai").Atom<Promise<Value_1>>): Value_1;
        <Value_2>(atom: import("jotai").Atom<Value_2>): Value_2 extends Promise<infer V> ? V : Value_2;
    } & {
        <Value_3>(atom: import("jotai").Atom<Value_3 | Promise<Value_3>>, unstable_promise: true): Value_3 | Promise<Value_3>;
        <Value_4>(atom: import("jotai").Atom<Promise<Value_4>>, unstable_promise: true): Value_4 | Promise<Value_4>;
    }, set: {
        <Value_5, Result extends void | Promise<void>>(atom: import("jotai").WritableAtom<Value_5, undefined, Result>): Result;
        <Value_6, Update, Result_1 extends void | Promise<void>>(atom: import("jotai").WritableAtom<Value_6, Update, Result_1>, update: Update): Result_1;
    }, update: Settings | ((prev: Settings | undefined) => Settings | undefined) | undefined) => void;
    onMount?: (<S extends (update?: Settings | ((prev: Settings | undefined) => Settings | undefined) | undefined) => void>(setAtom: S) => void | (() => void)) | undefined;
} & {
    init: Settings | undefined;
};
export declare const stateAtom: import("jotai").WritableAtom<Settings, Settings | typeof import("jotai/utils").RESET | ((prev: Settings) => Settings), void>;
export declare const settingsAtom: import("jotai").WritableAtom<Settings, Settings | typeof import("jotai/utils").RESET | ((prev: Settings) => Settings), void>;
export declare const slippageAtom: import("jotai").WritableAtom<Slippage, Slippage, void>;
export declare const transactionTtlAtom: import("jotai").WritableAtom<number | undefined, number | undefined, void>;
export declare const routerPreferenceAtom: import("jotai").WritableAtom<RouterPreference, RouterPreference, void>;
/** An integration hook called when the user resets settings. */
export type OnSettingsReset = () => void;
/** An integration hook called when the user changes slippage settings. */
export type OnSlippageChange = (slippage: Slippage) => void;
/** An integration hook called when the user changes transaction deadline settings. */
export type OnTransactionDeadlineChange = (ttl: number | undefined) => void;
export type OnRouterPreferenceChange = (routerPreference: RouterPreference) => void;
export interface SettingsEventHandlers {
    onSettingsReset?: OnSettingsReset;
    onSlippageChange?: OnSlippageChange;
    onTransactionDeadlineChange?: OnTransactionDeadlineChange;
    onRouterPreferenceChange?: OnRouterPreferenceChange;
}

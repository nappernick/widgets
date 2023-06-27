import { SupportedChainId } from 'constants/chains';
/** Defined by EIP-3085. */
export interface AddEthereumChainParameter {
    chainId: string;
    chainName: string;
    nativeCurrency: {
        name: string;
        symbol: string;
        decimals: 18;
    };
    blockExplorerUrls: [string];
    rpcUrls: string[];
}
/**
 * An integration hook called when the user tries to switch chains.
 * If the hook returns a Promise, it is assumed the integrator is attempting to switch the chain, and no further attempts will be made.
 * If that Promise rejects, the error will be ignored so as not to crash the widget.
 */
export type OnSwitchChain = (addChainParameter: AddEthereumChainParameter) => void | Promise<void>;
export declare const onSwitchChainAtom: import("jotai").Atom<OnSwitchChain | undefined> & {
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
    }, update: OnSwitchChain | ((prev: OnSwitchChain | undefined) => OnSwitchChain | undefined) | undefined) => void;
    onMount?: (<S extends (update?: OnSwitchChain | ((prev: OnSwitchChain | undefined) => OnSwitchChain | undefined) | undefined) => void>(setAtom: S) => void | (() => void)) | undefined;
} & {
    init: OnSwitchChain | undefined;
};
export default function useSwitchChain(): (chainId: SupportedChainId) => Promise<void>;

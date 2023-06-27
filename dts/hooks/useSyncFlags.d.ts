import { Atom } from 'jotai';
export interface Flags {
    brandedFooter?: boolean;
    permit2?: boolean;
}
export declare const flagsAtom: Atom<Flags> & {
    write: (get: {
        <Value>(atom: Atom<Value | Promise<Value>>): Value;
        <Value_1>(atom: Atom<Promise<Value_1>>): Value_1;
        <Value_2>(atom: Atom<Value_2>): Value_2 extends Promise<infer V> ? V : Value_2;
    } & {
        <Value_3>(atom: Atom<Value_3 | Promise<Value_3>>, unstable_promise: true): Value_3 | Promise<Value_3>;
        <Value_4>(atom: Atom<Promise<Value_4>>, unstable_promise: true): Value_4 | Promise<Value_4>;
    }, set: {
        <Value_5, Result extends void | Promise<void>>(atom: import("jotai").WritableAtom<Value_5, undefined, Result>): Result;
        <Value_6, Update, Result_1 extends void | Promise<void>>(atom: import("jotai").WritableAtom<Value_6, Update, Result_1>, update: Update): Result_1;
    }, update: Flags | ((prev: Flags) => Flags)) => void;
    onMount?: (<S extends (update: Flags | ((prev: Flags) => Flags)) => void>(setAtom: S) => void | (() => void)) | undefined;
} & {
    init: Flags;
};
export declare function useInitialFlags({ brandedFooter, permit2 }: Flags): [[Atom<Flags>, Flags]];
export declare function useBrandedFooter(): boolean;
export declare function usePermit2(): boolean;

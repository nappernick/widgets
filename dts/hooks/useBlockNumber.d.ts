import { PropsWithChildren } from 'react';
/** Requires that BlockUpdater be installed in the DOM tree. */
export default function useBlockNumber(): number | undefined;
export declare function useFastForwardBlockNumber(): (block: number) => void;
export declare function Provider({ children }: PropsWithChildren): import("react/jsx-runtime").JSX.Element;

import { PropsWithChildren } from 'react';
export declare const Context: import("react").Context<{
    open: boolean;
    collapse: () => void;
    onToggleOpen: () => void;
}>;
export declare function Provider({ children }: PropsWithChildren): import("react/jsx-runtime").JSX.Element;
export declare function useCollapseToolbar(): () => void;

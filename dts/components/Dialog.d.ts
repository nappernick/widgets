import 'wicg-inert';
import { ReactElement, ReactNode } from 'react';
import { Color } from 'theme';
declare global {
    interface HTMLElement {
        inert: boolean;
    }
}
export interface DialogOptions {
    animationType?: DialogAnimationType;
    pageCentered?: boolean;
}
export interface DialogWidgetProps {
    dialog?: HTMLDivElement | null;
    dialogOptions?: DialogOptions;
}
export declare enum DialogAnimationType {
    SLIDE = "slide",
    FADE = "fade",
    NONE = "none"
}
export declare const MIN_PAGE_CENTERED_DIALOG_WIDTH = 400;
interface ProviderProps {
    value: HTMLElement | null;
    children: ReactNode;
    options?: DialogOptions;
}
export declare function Provider({ value, children, options }: ProviderProps): import("react/jsx-runtime").JSX.Element;
export declare function useCloseDialog(): (() => void) | undefined;
export declare function useDialogAnimationType(): DialogAnimationType | undefined;
export declare function useIsDialogPageCentered(): boolean | undefined;
interface HeaderProps {
    title?: ReactElement;
    closeButton?: ReactElement;
}
export declare function Header({ title, closeButton }: HeaderProps): import("react/jsx-runtime").JSX.Element;
export declare const Modal: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {
    color: Color;
    constrain?: boolean | undefined;
    padded?: boolean | undefined;
}, never>;
interface DialogProps {
    color: Color;
    children: ReactNode;
    onClose?: () => void;
    forceContain?: boolean;
    padded?: boolean;
}
export default function Dialog({ color, children, onClose, forceContain, padded }: DialogProps): import("react").ReactPortal | null;
export {};

import { PropsWithChildren } from 'react';
interface ResponsiveDialogProps {
    open: boolean;
    setOpen: (open: boolean) => void;
    defaultView?: 'dialog' | 'popover';
    anchor?: React.ReactNode;
    mobileBottomSheet?: boolean;
    bottomSheetTitle?: string;
}
/**
 * A Dialog or Popover that renders as a bottom sheet on mobile.
 */
export declare function ResponsiveDialog({ children, open, setOpen, defaultView, anchor, mobileBottomSheet, bottomSheetTitle, }: PropsWithChildren<ResponsiveDialogProps>): import("react/jsx-runtime").JSX.Element;
export {};

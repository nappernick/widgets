import { PropsWithChildren } from 'react';
type BottomSheetModalProps = PropsWithChildren<{
    onClose: () => void;
    open: boolean;
    title?: string;
}>;
export declare function BottomSheetModal({ children, onClose, open, title }: BottomSheetModalProps): import("react/jsx-runtime").JSX.Element;
export {};

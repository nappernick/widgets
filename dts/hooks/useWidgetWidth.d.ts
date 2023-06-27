import { PropsWithChildren } from 'react';
interface WidgetWidthProviderProps {
    width: number;
}
export declare function WidgetWidthProvider({ width, children }: PropsWithChildren<WidgetWidthProviderProps>): import("react/jsx-runtime").JSX.Element;
export declare function useWidgetWidth(): number;
export declare function useIsWideWidget(): boolean;
export {};

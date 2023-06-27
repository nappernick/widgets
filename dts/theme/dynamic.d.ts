import { ReactNode } from 'react';
import { DefaultTheme } from 'styled-components/macro';
export declare function getDynamicTheme(theme: DefaultTheme, color: string): DefaultTheme;
interface DynamicThemeProviderProps {
    color?: string;
    children: ReactNode;
}
export declare function DynamicThemeProvider({ color, children }: DynamicThemeProviderProps): import("react/jsx-runtime").JSX.Element;
export {};

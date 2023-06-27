import 'assets/fonts.scss';
import './external';
import { PropsWithChildren } from 'react';
import { Layer } from './layer';
import type { Colors, Theme } from './theme';
export * from './animations';
export * from './dynamic';
export * from './layer';
export type { Color, Colors, Theme } from './theme';
export * as ThemedText from './type';
export declare const brand = "hsl(328, 97%, 53%)";
export declare const lightTheme: Colors;
export declare const darkTheme: Colors;
export declare const defaultTheme: {
    accent: string;
    accentSoft: string;
    container: string;
    module: string;
    interactive: string;
    outline: string;
    dialog: string;
    scrim: string;
    primary: string;
    onAccent: string;
    secondary: string;
    hint: string;
    onInteractive: string;
    active: string;
    activeSoft: string;
    success: string;
    warning: string;
    warningSoft: string;
    error: string;
    critical: string;
    criticalSoft: string;
    networkDefaultShadow: string;
    deepShadow: string;
    currentColor: "currentColor";
    borderRadius: {
        large: number;
        medium: number;
        small: number;
        xsmall: number;
    };
    zIndex: {
        modal: Layer;
    };
    fontFamily: {
        font: string;
        variable: string;
    };
    fontFamilyCode: string;
    tokenColorExtraction: boolean;
};
export declare function useSystemTheme(): Colors;
export interface ThemeProps {
    theme?: Theme;
}
export declare function Provider({ theme, children }: PropsWithChildren<ThemeProps>): import("react/jsx-runtime").JSX.Element;

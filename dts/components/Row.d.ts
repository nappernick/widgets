import { ReactNode } from 'react';
import { Color, Theme } from 'theme';
export interface RowProps {
    color?: Color;
    align?: string;
    justify?: string;
    flow?: string;
    pad?: number;
    gap?: number;
    flex?: true;
    grow?: true | 'first' | 'last';
    children?: ReactNode;
    theme: Theme;
}
declare const Row: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, RowProps, never>;
export default Row;

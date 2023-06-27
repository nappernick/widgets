import { Icon } from 'icons';
import { ReactNode } from 'react';
import { Color, Colors } from 'theme';
import { RowProps } from './Row';
export declare const Overlay: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, RowProps & {
    hasAction: boolean;
    narrow?: boolean | undefined;
}, never>;
export interface Action {
    message: ReactNode;
    icon?: Icon;
    tooltipContent?: ReactNode;
    onClick?: () => void;
    color?: Color;
    children?: ReactNode;
    hideButton?: boolean;
    disableButton?: boolean;
}
export type ActionButtonColor = keyof Pick<Colors, 'accent' | 'accentSoft' | 'warningSoft' | 'interactive' | 'critical'>;
interface BaseProps {
    color?: ActionButtonColor;
    action?: Action;
    wrapperProps?: Omit<React.HtmlHTMLAttributes<HTMLDivElement>, keyof RowProps>;
    shouldUseDisabledColor?: boolean;
    narrow?: boolean;
}
export type ActionButtonProps = BaseProps & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps>;
export default function ActionButton({ color, disabled, shouldUseDisabledColor, action, onClick, children, wrapperProps, narrow, ...rest }: ActionButtonProps): import("react/jsx-runtime").JSX.Element;
export {};

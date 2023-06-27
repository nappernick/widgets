import { FunctionComponent, SVGProps } from 'react';
import { Icon as FeatherIcon } from 'react-feather';
import { Color } from 'theme';
type SVGIcon = FunctionComponent<SVGProps<SVGSVGElement>>;
declare function icon(Icon: FeatherIcon | SVGIcon): import("styled-components").StyledComponent<SVGIcon | FeatherIcon, import("styled-components").DefaultTheme, {
    color?: keyof import("theme").Colors | undefined;
}, never>;
export declare const largeIconCss: import("styled-components").FlattenInterpolation<import("styled-components").ThemedStyledProps<{
    iconSize: number;
}, import("styled-components").DefaultTheme>>;
export type Icon = ReturnType<typeof icon> | typeof LargeIcon;
interface LargeIconProps {
    icon?: Icon;
    color?: Color;
    size?: number;
    strokeWidth?: number;
    onClick?: () => void;
    className?: string;
}
export declare function LargeIcon({ icon: Icon, color, size, strokeWidth, onClick, className }: LargeIconProps): import("react/jsx-runtime").JSX.Element;
export declare const AlertTriangle: import("styled-components").StyledComponent<SVGIcon | FeatherIcon, import("styled-components").DefaultTheme, {
    color?: keyof import("theme").Colors | undefined;
}, never>;
export declare const ArrowDown: import("styled-components").StyledComponent<SVGIcon | FeatherIcon, import("styled-components").DefaultTheme, {
    color?: keyof import("theme").Colors | undefined;
}, never>;
export declare const ArrowRight: import("styled-components").StyledComponent<SVGIcon | FeatherIcon, import("styled-components").DefaultTheme, {
    color?: keyof import("theme").Colors | undefined;
}, never>;
export declare const ArrowLeft: import("styled-components").StyledComponent<SVGIcon | FeatherIcon, import("styled-components").DefaultTheme, {
    color?: keyof import("theme").Colors | undefined;
}, never>;
export declare const ArrowUp: import("styled-components").StyledComponent<SVGIcon | FeatherIcon, import("styled-components").DefaultTheme, {
    color?: keyof import("theme").Colors | undefined;
}, never>;
export declare const BarChart: import("styled-components").StyledComponent<SVGIcon | FeatherIcon, import("styled-components").DefaultTheme, {
    color?: keyof import("theme").Colors | undefined;
}, never>;
export declare const ChevronDown: import("styled-components").StyledComponent<SVGIcon | FeatherIcon, import("styled-components").DefaultTheme, {
    color?: keyof import("theme").Colors | undefined;
}, never>;
export declare const ChevronUp: import("styled-components").StyledComponent<SVGIcon | FeatherIcon, import("styled-components").DefaultTheme, {
    color?: keyof import("theme").Colors | undefined;
}, never>;
export declare const Clock: import("styled-components").StyledComponent<SVGIcon | FeatherIcon, import("styled-components").DefaultTheme, {
    color?: keyof import("theme").Colors | undefined;
}, never>;
export declare const HelpCircle: import("styled-components").StyledComponent<SVGIcon | FeatherIcon, import("styled-components").DefaultTheme, {
    color?: keyof import("theme").Colors | undefined;
}, never>;
export declare const Identicon: import("styled-components").StyledComponent<SVGIcon | FeatherIcon, import("styled-components").DefaultTheme, {
    color?: keyof import("theme").Colors | undefined;
}, never>;
export declare const Info: import("styled-components").StyledComponent<SVGIcon | FeatherIcon, import("styled-components").DefaultTheme, {
    color?: keyof import("theme").Colors | undefined;
}, never>;
export declare const Link: import("styled-components").StyledComponent<SVGIcon | FeatherIcon, import("styled-components").DefaultTheme, {
    color?: keyof import("theme").Colors | undefined;
}, never>;
export declare const AutoRouter: import("styled-components").StyledComponent<SVGIcon | FeatherIcon, import("styled-components").DefaultTheme, {
    color?: keyof import("theme").Colors | undefined;
}, never>;
export declare const Settings: import("styled-components").StyledComponent<SVGIcon | FeatherIcon, import("styled-components").DefaultTheme, {
    color?: keyof import("theme").Colors | undefined;
}, never>;
export declare const Slash: import("styled-components").StyledComponent<SVGIcon | FeatherIcon, import("styled-components").DefaultTheme, {
    color?: keyof import("theme").Colors | undefined;
}, never>;
export declare const Trash2: import("styled-components").StyledComponent<SVGIcon | FeatherIcon, import("styled-components").DefaultTheme, {
    color?: keyof import("theme").Colors | undefined;
}, never>;
export declare const Wallet: import("styled-components").StyledComponent<SVGIcon | FeatherIcon, import("styled-components").DefaultTheme, {
    color?: keyof import("theme").Colors | undefined;
}, never>;
export declare const X: import("styled-components").StyledComponent<SVGIcon | FeatherIcon, import("styled-components").DefaultTheme, {
    color?: keyof import("theme").Colors | undefined;
}, never>;
export declare const XOctagon: import("styled-components").StyledComponent<SVGIcon | FeatherIcon, import("styled-components").DefaultTheme, {
    color?: keyof import("theme").Colors | undefined;
}, never>;
export declare const Reverse: import("styled-components").StyledComponent<SVGIcon | FeatherIcon, import("styled-components").DefaultTheme, {
    color?: keyof import("theme").Colors | undefined;
}, never>;
export declare const Search: import("styled-components").StyledComponent<SVGIcon | FeatherIcon, import("styled-components").DefaultTheme, {
    color?: keyof import("theme").Colors | undefined;
}, never>;
export declare const Check: import("styled-components").StyledComponent<SVGIcon | FeatherIcon, import("styled-components").DefaultTheme, {
    color?: keyof import("theme").Colors | undefined;
} & {
    color?: keyof import("theme").Colors | undefined;
}, never>;
export declare const Expando: import("styled-components").StyledComponent<SVGIcon | FeatherIcon, import("styled-components").DefaultTheme, {
    color?: keyof import("theme").Colors | undefined;
} & {
    open: boolean;
}, never>;
export declare const Logo: import("styled-components").StyledComponent<SVGIcon | FeatherIcon, import("styled-components").DefaultTheme, {
    color?: keyof import("theme").Colors | undefined;
}, never>;
export declare const WalletDisconnect: import("styled-components").StyledComponent<SVGIcon | FeatherIcon, import("styled-components").DefaultTheme, {
    color?: keyof import("theme").Colors | undefined;
} & {
    color?: keyof import("theme").Colors | undefined;
}, never>;
export declare const rotate: import("styled-components").Keyframes;
export declare const Spinner: import("styled-components").StyledComponent<SVGIcon | FeatherIcon, import("styled-components").DefaultTheme, {
    color?: keyof import("theme").Colors | undefined;
} & {
    color?: keyof import("theme").Colors | undefined;
}, never>;
export declare const LargeCheck: import("styled-components").StyledComponent<SVGIcon | FeatherIcon, import("styled-components").DefaultTheme, {
    color?: keyof import("theme").Colors | undefined;
} & {
    color?: keyof import("theme").Colors | undefined;
}, never>;
export declare const LargeAlert: import("styled-components").StyledComponent<typeof LargeIcon, import("styled-components").DefaultTheme, {
    icon: import("styled-components").StyledComponent<SVGIcon | FeatherIcon, import("styled-components").DefaultTheme, {
        color?: keyof import("theme").Colors | undefined;
    }, never>;
    color: "error";
    size: 6;
    strokeWidth: 1;
}, "color" | "size" | "strokeWidth" | "icon">;
export declare const LargeSpinner: import("styled-components").StyledComponent<SVGIcon | FeatherIcon, import("styled-components").DefaultTheme, {
    color?: keyof import("theme").Colors | undefined;
} & {
    color?: keyof import("theme").Colors | undefined;
}, never>;
export declare const LargeArrow: import("styled-components").StyledComponent<SVGIcon | FeatherIcon, import("styled-components").DefaultTheme, {
    color?: keyof import("theme").Colors | undefined;
} & {
    color?: keyof import("theme").Colors | undefined;
}, never>;
export declare const Gas: import("styled-components").StyledComponent<SVGIcon | FeatherIcon, import("styled-components").DefaultTheme, {
    color?: keyof import("theme").Colors | undefined;
} & {
    color?: keyof import("theme").Colors | undefined;
}, never>;
export declare const StyledXButton: import("styled-components").StyledComponent<SVGIcon | FeatherIcon, import("styled-components").DefaultTheme, {
    color?: keyof import("theme").Colors | undefined;
}, never>;
export {};

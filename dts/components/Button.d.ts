import { Icon } from 'icons';
import { ComponentProps } from 'react';
export declare const BaseButton: import("styled-components").StyledComponent<"button", import("styled-components").DefaultTheme, {}, never>;
declare const _default: import("styled-components").StyledComponent<"button", import("styled-components").DefaultTheme, {
    color?: keyof import("theme").Colors | undefined;
}, never>;
export default _default;
export declare const TextButton: import("styled-components").StyledComponent<"button", import("styled-components").DefaultTheme, {
    color?: keyof import("theme").Colors | undefined;
}, never>;
interface IconButtonProps {
    icon: Icon;
    iconProps?: ComponentProps<Icon>;
}
export declare const IconButton: import("react").ForwardRefExoticComponent<Omit<IconButtonProps & {
    [x: string]: any;
    [x: number]: any;
    [x: symbol]: any;
} & {
    theme?: import("styled-components").DefaultTheme | undefined;
} & {
    as?: string | import("react").ComponentType<any> | undefined;
    forwardedAs?: string | import("react").ComponentType<any> | undefined;
}, "ref"> & import("react").RefAttributes<HTMLButtonElement>>;

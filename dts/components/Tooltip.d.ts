import { Placement } from '@popperjs/core';
import { Icon } from 'icons';
import { ComponentProps, ReactNode } from 'react';
import { ThemedText } from 'theme';
export declare function useTooltip(tooltip: Node | null | undefined): boolean;
export declare const SmallToolTipBody: import("styled-components").StyledComponent<typeof ThemedText.Caption, import("styled-components").DefaultTheme, {}, never>;
interface TooltipBaseProps {
    children: ReactNode;
    placement?: Placement;
    offset?: number;
    contained?: true;
}
interface TooltipProps extends TooltipBaseProps {
    icon?: Icon;
    iconProps?: ComponentProps<Icon>;
}
export default function Tooltip({ icon: Icon, iconProps, children, placement, offset, contained, }: TooltipProps): import("react/jsx-runtime").JSX.Element;
interface TooltipTextProps extends TooltipBaseProps {
    text?: ReactNode;
}
export declare function TooltipText({ text, children, placement, offset, contained }: TooltipTextProps): import("react/jsx-runtime").JSX.Element;
export {};

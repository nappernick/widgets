import { ColumnProps } from 'components/Column';
import { PropsWithChildren, ReactNode } from 'react';
export declare const IconPrefix: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
interface ExpandoProps extends ColumnProps {
    title: ReactNode;
    iconPrefix?: ReactNode;
    open: boolean;
    onExpand: () => void;
    height?: number;
    maxHeight?: number;
    styledWrapper?: boolean;
}
/** A scrollable Expando with an absolute height. */
export default function Expando({ title, iconPrefix, open, onExpand, height, maxHeight, children, styledWrapper, ...rest }: PropsWithChildren<ExpandoProps>): import("react/jsx-runtime").JSX.Element;
export {};

import { Placement } from '@popperjs/core';
import React, { PropsWithChildren } from 'react';
export declare function PopoverBoundaryProvider({ value, children, }: PropsWithChildren<{
    value: HTMLDivElement | null;
    updateTrigger?: any;
}>): import("react/jsx-runtime").JSX.Element;
export interface PopoverProps {
    content: React.ReactNode;
    show: boolean;
    children: React.ReactNode;
    placement: Placement;
    offset?: number;
    contained?: true;
    showArrow?: boolean;
}
export default function Popover({ content, show, children, placement, offset, contained, showArrow, }: PopoverProps): import("react/jsx-runtime").JSX.Element;

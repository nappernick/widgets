import { Icon } from 'icons';
import { ReactNode } from 'react';
import { Color } from 'theme';
export declare const SUMMARY_COLUMN_GAP_REM = 0.75;
export declare const SUMMARY_ROW_HEIGHT_REM: number;
export interface SummaryRowProps {
    name: ReactNode;
    value: ReactNode;
    color?: Color;
    nameTooltip?: {
        content: ReactNode;
    };
    valueTooltip?: {
        content: ReactNode;
        icon: Icon;
    };
}
interface ToolbarTradeSummaryProps {
    rows: SummaryRowProps[];
}
export default function ToolbarTradeSummary({ rows }: ToolbarTradeSummaryProps): import("react/jsx-runtime").JSX.Element;
export {};

import { ReactNode } from 'react';
import { Color } from 'theme';
import { ExplorerDataType } from 'utils/getExplorerLink';
interface EtherscanLinkProps {
    type: ExplorerDataType;
    data?: string;
    color?: Color;
    children: ReactNode;
    showIcon?: boolean;
}
export default function EtherscanLink({ data, type, color, children, showIcon, }: EtherscanLinkProps): import("react/jsx-runtime").JSX.Element;
export {};

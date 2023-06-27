import { TokenInfo } from '@uniswap/token-lists';
import { DialogWidgetProps } from 'components/Dialog';
import { OnError } from 'components/Error/ErrorBoundary';
import { SupportedLocale } from 'constants/locales';
import { TransactionEventHandlers } from 'hooks/transactions';
import { Flags } from 'hooks/useSyncFlags';
import { WidgetEventHandlers } from 'hooks/useSyncWidgetEventHandlers';
import { ProviderProps as Web3Props } from 'hooks/web3';
import { PropsWithChildren } from 'react';
import { Theme } from 'theme';
export declare const DialogWrapper: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export interface WidgetProps extends Flags, TransactionEventHandlers, Web3Props, WidgetEventHandlers, DialogWidgetProps {
    theme?: Theme;
    locale?: SupportedLocale;
    tokenList?: string | TokenInfo[];
    width?: string | number;
    className?: string;
    onError?: OnError;
}
export default function Widget(props: PropsWithChildren<WidgetProps>): import("react/jsx-runtime").JSX.Element;

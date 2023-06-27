import { Currency, CurrencyAmount } from '@uniswap/sdk-core';
import { InterfaceTrade } from 'state/routing/types';
import { TradeTooltip } from './GasEstimateTooltip';
export declare function Connecting(): import("react/jsx-runtime").JSX.Element;
export declare function Error(): import("react/jsx-runtime").JSX.Element;
export declare function MissingInputs(): import("react/jsx-runtime").JSX.Element;
export declare function LoadingTrade({ gasUseEstimateUSD }: TradeTooltip): import("react/jsx-runtime").JSX.Element;
interface WrapProps {
    inputCurrency: Currency;
    outputCurrency: Currency;
}
export declare function Wrap({ inputCurrency, outputCurrency }: WrapProps): import("react/jsx-runtime").JSX.Element;
export interface TradeProps {
    trade: InterfaceTrade;
    loading: boolean;
    outputUSDC?: CurrencyAmount<Currency>;
}
interface ExpandProps {
    expanded: boolean;
    warning?: 'warning' | 'error';
}
export declare function Trade({ trade, outputUSDC, gasUseEstimateUSD, expanded, loading, warning, }: TradeProps & TradeTooltip & ExpandProps): import("react/jsx-runtime").JSX.Element;
export declare function PriceImpactWarningTooltipContent(): import("react/jsx-runtime").JSX.Element;
export {};

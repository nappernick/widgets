import { CurrencyAmount, Token } from '@uniswap/sdk-core';
import { InterfaceTrade } from 'state/routing/types';
export interface TradeTooltip {
    trade?: InterfaceTrade;
    gasUseEstimateUSD?: CurrencyAmount<Token> | null;
}
/**
 * Renders a Gas Icon and estimated gas cost in USD.
 *
 * On mobile widths, clicking the view opens a bottom sheet with the routing diagram.
 * On larger widths, hovering or focusing the view shows a popover with the routing diagram.
 */
export declare function GasEstimateTooltip({ gasUseEstimateUSD, trade }: TradeTooltip): import("react/jsx-runtime").JSX.Element;

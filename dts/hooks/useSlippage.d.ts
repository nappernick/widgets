import { CurrencyAmount, Percent, Token } from '@uniswap/sdk-core';
import { InterfaceTrade } from 'state/routing/types';
export declare function toPercent(maxSlippage: string | undefined): Percent | undefined;
export interface Slippage {
    auto: boolean;
    allowed: Percent;
    warning?: 'warning' | 'error';
}
export declare const DEFAULT_SLIPPAGE: {
    auto: boolean;
    allowed: Percent;
};
/** Returns the allowed slippage, and whether it is auto-slippage. */
export default function useSlippage(trade: {
    trade?: InterfaceTrade;
    gasUseEstimateUSD?: CurrencyAmount<Token>;
}): Slippage;
export declare const MAX_VALID_SLIPPAGE: Percent;
export declare const MIN_HIGH_SLIPPAGE: Percent;
export declare function getSlippageWarning(slippage?: Percent): 'warning' | 'error' | undefined;
export declare function formatSlippage(slippage: Slippage): string;

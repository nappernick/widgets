import { CurrencyAmount, Percent, Token } from '@uniswap/sdk-core';
import { InterfaceTrade } from 'state/routing/types';
export declare const DEFAULT_AUTO_SLIPPAGE: Percent;
/**
 * Returns slippage tolerance based on values from current trade, gas estimates from api, and active network.
 */
export default function useAutoSlippageTolerance({ trade, gasUseEstimateUSD, }?: {
    trade?: InterfaceTrade;
    gasUseEstimateUSD?: CurrencyAmount<Token>;
}): Percent;

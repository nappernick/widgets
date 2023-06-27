import type { SwapRoute } from '@uniswap/smart-order-router';
import { QuoteResult } from 'state/routing/types';
export declare function transformSwapRouteToGetQuoteResult({ quote, quoteGasAdjusted, route, routeString, estimatedGasUsed, estimatedGasUsedQuoteToken, estimatedGasUsedUSD, gasPriceWei, methodParameters, blockNumber, trade: { tradeType, inputAmount, outputAmount }, }: SwapRoute & {
    routeString: string;
}): QuoteResult;

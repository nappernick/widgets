import type { AlphaRouterConfig } from '@uniswap/smart-order-router';
import { GetQuoteArgs, QuoteResult } from 'state/routing/types';
export declare function getClientSideQuoteResult({ tokenInAddress, tokenInChainId, tokenInDecimals, tokenInSymbol, tokenOutAddress, tokenOutChainId, tokenOutDecimals, tokenOutSymbol, amount, tradeType, provider, }: GetQuoteArgs, routerConfig: Partial<AlphaRouterConfig>): Promise<QuoteResult>;

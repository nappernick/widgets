import { MixedRouteSDK } from '@uniswap/router-sdk';
import { Currency, CurrencyAmount } from '@uniswap/sdk-core';
import { Route as V2Route } from '@uniswap/v2-sdk';
import { Route as V3Route } from '@uniswap/v3-sdk';
import { QuoteData, TradeResult } from './types';
import { GetQuoteArgs } from './types';
/**
 * Transforms a Routing API quote into an array of routes that can be used to
 * create a `Trade`.
 */
export declare function computeRoutes(tokenInIsNative: boolean, tokenOutIsNative: boolean, routes: QuoteData['route']): {
    routev3: V3Route<Currency, Currency> | null;
    routev2: V2Route<Currency, Currency> | null;
    mixedRoute: MixedRouteSDK<Currency, Currency> | null;
    inputAmount: CurrencyAmount<Currency>;
    outputAmount: CurrencyAmount<Currency>;
}[] | undefined;
export declare function transformQuoteToTradeResult(args: GetQuoteArgs, data: QuoteData): TradeResult;
export declare function currencyAddressForSwapQuote(currency: Currency): string;

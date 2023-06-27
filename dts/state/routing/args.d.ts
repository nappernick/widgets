import { BaseProvider } from '@ethersproject/providers';
import { SkipToken } from '@reduxjs/toolkit/query/react';
import { Currency, CurrencyAmount, TradeType } from '@uniswap/sdk-core';
import { QuoteConfig } from 'hooks/routing/types';
import { GetQuoteArgs } from './types';
export declare function serializeGetQuoteArgs(args: GetQuoteArgs): string;
/** Omits the non-serializable keys from GetQuoteArgs' cache key. */
export declare function serializeGetQuoteQueryArgs({ endpointName, queryArgs, }: {
    endpointName: string;
    queryArgs: GetQuoteArgs;
}): string;
/**
 * Returns GetQuoteArgs for the Routing API query or SkipToken if the query should be skipped
 * (this includes if the window is not visible).
 * NB: Input arguments do not need to be memoized, as they will be destructured.
 */
export declare function useGetQuoteArgs({ provider, tradeType, amountSpecified, currencyIn, currencyOut, }: Partial<{
    provider: BaseProvider;
    tradeType: TradeType;
    amountSpecified: CurrencyAmount<Currency>;
    currencyIn: Currency;
    currencyOut: Currency;
}>, quoteConfig: QuoteConfig): GetQuoteArgs | SkipToken;

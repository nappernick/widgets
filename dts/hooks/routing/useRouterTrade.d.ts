import { Currency, CurrencyAmount, Token, TradeType } from '@uniswap/sdk-core';
import { InterfaceTrade, TradeState } from 'state/routing/types';
import { QuoteConfig } from './types';
/**
 * Returns the best trade by invoking the routing api or the smart order router on the client
 * @param tradeType whether the swap is an exact in/out
 * @param amountSpecified the exact amount to swap in/out
 * @param currencyIn the input currency
 * @param currencyOut the output currency
 */
export declare function useRouterTrade(tradeType: TradeType, amountSpecified: CurrencyAmount<Currency> | undefined, currencyIn: Currency | undefined, currencyOut: Currency | undefined, quoteConfig: QuoteConfig): {
    state: TradeState;
    trade?: InterfaceTrade;
    gasUseEstimateUSD?: CurrencyAmount<Token>;
};

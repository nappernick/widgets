import { Currency, CurrencyAmount, Price, Token } from '@uniswap/sdk-core';
/**
 * Returns the price in USDC of the input currency
 * @param currency currency to compute the USDC price of
 */
export default function useUSDCPrice(currency?: Currency): Price<Currency, Token> | undefined;
export declare function useUSDCValue(currencyAmount: CurrencyAmount<Currency> | undefined | null): CurrencyAmount<Token> | undefined;

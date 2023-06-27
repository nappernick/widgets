import { CurrencyAmount, Token } from '@uniswap/sdk-core';
export declare const STABLECOIN_AMOUNT_OUT: {
    [chainId: number]: CurrencyAmount<Token>;
};
/**
 *
 * @param fiatValue string representation of a USD amount
 * @returns CurrencyAmount where currency is stablecoin on active chain
 */
export declare function useStablecoinAmountFromFiatValue(fiatValue: string | null | undefined): CurrencyAmount<Token> | undefined;

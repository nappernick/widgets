import { Currency, CurrencyAmount, Price } from '@uniswap/sdk-core';
interface FormatCurrencyAmountArgs {
    amount: CurrencyAmount<Currency> | undefined;
    isUsdPrice?: boolean;
}
/**
 * Returns currency amount formatted as a human readable string.
 * @param amount currency amount
 * @param isUsdPrice whether the amount is denominated in USD or USD equivalent
 */
export declare function formatCurrencyAmount({ amount, isUsdPrice }: FormatCurrencyAmountArgs): string;
/**
 * Returns price formatted as a human readable string.
 * @param price price
 */
export declare function formatPrice(price: Price<Currency, Currency> | undefined): string;
export {};

import { Currency, CurrencyAmount, Price } from '@uniswap/sdk-core';
export declare function currencyAmountToPreciseFloat(currencyAmount: CurrencyAmount<Currency> | undefined): number | undefined;
export declare function priceToPreciseFloat(price: Price<Currency, Currency> | undefined): number | undefined;
interface FormatDollarArgs {
    num: number | undefined | null;
    lessPreciseStablecoinValues?: boolean;
}
export declare function formatDollar({ num, lessPreciseStablecoinValues }: FormatDollarArgs): string;
export declare function formatTransactionAmount(num: number | undefined | null, maxDigits?: number): string;
export {};

import { Currency, CurrencyAmount, Percent } from '@uniswap/sdk-core';
export declare function computeFiatValuePriceImpact(fiatValueInput: CurrencyAmount<Currency> | undefined | null, fiatValueOutput: CurrencyAmount<Currency> | undefined | null): Percent | undefined;

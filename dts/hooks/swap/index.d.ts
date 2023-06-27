import { Currency } from '@uniswap/sdk-core';
import { Field } from 'state/swap';
export { ChainError, default as useSwapInfo } from './useSwapInfo';
export declare function useSwitchSwapCurrencies(): () => void;
export declare function useSwapCurrency(field: Field): [Currency | undefined, (currency: Currency) => void];
export declare function useIsSwapFieldIndependent(field: Field): boolean;
/** Returns true if the user has entered a non-zero amount. */
export declare function useIsAmountPopulated(): boolean;
export declare function useSwapAmount(field: Field): [string | undefined, (amount: string, origin?: 'max') => void];

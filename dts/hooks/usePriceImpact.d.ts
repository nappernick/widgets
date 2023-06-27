import { Percent } from '@uniswap/sdk-core';
import { InterfaceTrade } from 'state/routing/types';
export interface PriceImpact {
    percent: Percent;
    warning?: 'warning' | 'error';
}
export declare function usePriceImpact(trade?: InterfaceTrade): PriceImpact | undefined;
export declare function useFiatValueChange(trade?: InterfaceTrade): {
    percent: Percent;
    warning: "warning" | "error" | undefined;
} | undefined;

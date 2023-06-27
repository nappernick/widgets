import { Currency, CurrencyAmount, Token } from '@uniswap/sdk-core';
import { Allowance } from 'hooks/usePermit2Allowance';
import { PriceImpact } from 'hooks/usePriceImpact';
import { Slippage } from 'hooks/useSlippage';
import { PropsWithChildren } from 'react';
import { InterfaceTrade, TradeState } from 'state/routing/types';
import { Field } from 'state/swap';
import { SwapApproval } from './useSwapApproval';
export declare enum ChainError {
    UNCONNECTED_CHAIN = 0,
    ACTIVATING_CHAIN = 1,
    UNSUPPORTED_CHAIN = 2,
    MISMATCHED_TOKEN_CHAINS = 3,
    MISMATCHED_CHAINS = 4
}
interface SwapField {
    currency?: Currency;
    amount?: CurrencyAmount<Currency>;
    balance?: CurrencyAmount<Currency>;
    usdc?: CurrencyAmount<Currency>;
}
interface SwapInfo {
    [Field.INPUT]: SwapField;
    [Field.OUTPUT]: SwapField;
    error?: ChainError;
    trade: {
        state: TradeState;
        trade?: InterfaceTrade;
        gasUseEstimateUSD?: CurrencyAmount<Token>;
    };
    approval: SwapApproval;
    allowance: Allowance;
    slippage: Slippage;
    impact?: PriceImpact;
    fiatValueChange?: PriceImpact;
}
export declare function SwapInfoProvider({ children }: PropsWithChildren): import("react/jsx-runtime").JSX.Element;
/** Requires that SwapInfoUpdater be installed in the DOM tree. **/
export default function useSwapInfo(): SwapInfo;
export {};

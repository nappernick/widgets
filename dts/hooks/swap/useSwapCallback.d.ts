import { BigNumber } from '@ethersproject/bignumber';
import { Percent } from '@uniswap/sdk-core';
import { FeeOptions } from '@uniswap/v3-sdk';
import { SignatureData } from 'hooks/usePermit';
import { ReactNode } from 'react';
import { InterfaceTrade } from 'state/routing/types';
import { SwapTransactionInfo } from 'state/transactions';
export declare enum SwapCallbackState {
    INVALID = 0,
    LOADING = 1,
    VALID = 2
}
interface UseSwapCallbackReturns {
    state: SwapCallbackState;
    callback?: () => Promise<SwapTransactionInfo>;
    error?: ReactNode;
}
interface UseSwapCallbackArgs {
    trade: InterfaceTrade | undefined;
    allowedSlippage: Percent;
    recipientAddressOrName: string | null | undefined;
    signatureData: SignatureData | null | undefined;
    deadline: BigNumber | undefined;
    feeOptions?: FeeOptions;
}
export declare function useSwapCallback({ trade, allowedSlippage, recipientAddressOrName, signatureData, deadline, feeOptions, }: UseSwapCallbackArgs): UseSwapCallbackReturns;
export {};

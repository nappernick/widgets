import { BigNumber } from '@ethersproject/bignumber';
import { Percent } from '@uniswap/sdk-core';
import { FeeOptions } from '@uniswap/v3-sdk';
import { WidgetPromise } from 'errors';
import { InterfaceTrade } from 'state/routing/types';
import { SwapTransactionInfo } from 'state/transactions';
import { PermitSignature } from './usePermitAllowance';
interface SwapOptions {
    slippageTolerance: Percent;
    deadline?: BigNumber;
    permit?: PermitSignature;
    feeOptions?: FeeOptions;
}
/**
 * Returns a callback to submit a transaction to the universal router.
 *
 * The callback returns the TransactionResponse if the transaction was submitted,
 * or undefined if the user rejected the transaction.
 **/
export declare function useUniversalRouterSwapCallback(trade: InterfaceTrade | undefined, options: SwapOptions): () => WidgetPromise<SwapTransactionInfo, import("errors").WidgetError & import("errors").UnknownError>;
export {};

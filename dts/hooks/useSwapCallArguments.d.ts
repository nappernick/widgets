import { BigNumber } from '@ethersproject/bignumber';
import { Percent } from '@uniswap/sdk-core';
import { FeeOptions } from '@uniswap/v3-sdk';
import { InterfaceTrade } from 'state/routing/types';
import { SignatureData } from './usePermit';
interface SwapCall {
    address: string;
    calldata: string;
    value: string;
}
/**
 * Returns the swap calls that can be used to make the trade
 * @param trade trade to execute
 * @param allowedSlippage user allowed slippage
 * @param recipientAddressOrName the ENS name or address of the recipient of the swap output
 * @param signatureData the signature data of the permit of the input token amount, if available
 */
export declare function useSwapCallArguments(trade: InterfaceTrade | undefined, allowedSlippage: Percent, recipientAddressOrName: string | null | undefined, signatureData: SignatureData | null | undefined, deadline: BigNumber | undefined, feeOptions: FeeOptions | undefined): SwapCall[];
export {};

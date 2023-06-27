import { JsonRpcProvider, TransactionResponse } from '@ethersproject/providers';
import { InterfaceTrade } from 'state/routing/types';
interface SwapCall {
    address: string;
    calldata: string;
    value: string;
}
export default function useSendSwapTransaction(account: string | null | undefined, chainId: number | undefined, provider: JsonRpcProvider | undefined, trade: InterfaceTrade | undefined, swapCalls: SwapCall[]): {
    callback: null | (() => Promise<TransactionResponse>);
};
export {};

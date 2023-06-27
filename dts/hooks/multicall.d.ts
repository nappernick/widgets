import multicall from 'state/multicall';
export type { CallStateResult } from '@uniswap/redux-multicall';
export { NEVER_RELOAD } from '@uniswap/redux-multicall';
type MulticallParams<T extends (chainId: number | undefined, latestBlock: number | undefined, ...args: any) => any> = Parameters<T> extends [any, any, ...infer P] ? P : never;
export declare function useMultipleContractSingleData(...args: MulticallParams<typeof multicall.hooks.useMultipleContractSingleData>): import("@uniswap/redux-multicall").CallState[];
export declare function useSingleCallResult(...args: MulticallParams<typeof multicall.hooks.useSingleCallResult>): import("@uniswap/redux-multicall").CallState;
export declare function useSingleContractMultipleData(...args: MulticallParams<typeof multicall.hooks.useSingleContractMultipleData>): import("@uniswap/redux-multicall").CallState[];
export declare function useSingleContractWithCallData(...args: MulticallParams<typeof multicall.hooks.useSingleContractWithCallData>): import("@uniswap/redux-multicall").CallState[];

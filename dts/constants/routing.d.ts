import { NativeCurrency, Token } from '@uniswap/sdk-core';
type ChainTokenList = {
    readonly [chainId: number]: Array<Token | NativeCurrency>;
};
export declare const BASES_TO_CHECK_TRADES_AGAINST: ChainTokenList;
export declare const ADDITIONAL_BASES: {
    [chainId: number]: {
        [tokenAddress: string]: Token[];
    };
};
/**
 * Some tokens can only be swapped via certain pairs, so we override the list of bases that are considered for these
 * tokens.
 */
export declare const CUSTOM_BASES: {
    [chainId: number]: {
        [tokenAddress: string]: Token[];
    };
};
export {};

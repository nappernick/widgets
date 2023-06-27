import { Token } from '@uniswap/sdk-core';
import { TokenInfo } from '@uniswap/token-lists';
import { SupportedChainId } from 'constants/chains';
import { PropsWithChildren } from 'react';
import { WrappedTokenInfo } from 'state/lists/wrappedTokenInfo';
export { useQueryTokens } from './useQueryTokens';
export declare const UNISWAP_TOKEN_LIST = "https://gateway.ipfs.io/ipns/tokens.uniswap.org";
export declare const EMPTY_TOKEN_LIST: never[];
export declare function useIsTokenListLoaded(): boolean;
export default function useTokenList(): WrappedTokenInfo[];
export type TokenMap = {
    [address: string]: Token;
};
export declare function useTokenMap(chainId?: SupportedChainId): TokenMap;
export declare function TestableProvider({ list, children }: PropsWithChildren<{
    list: TokenInfo[];
}>): import("react/jsx-runtime").JSX.Element;
export declare function Provider({ list, children }: PropsWithChildren<{
    list?: string | TokenInfo[];
}>): import("react/jsx-runtime").JSX.Element;

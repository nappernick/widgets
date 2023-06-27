import { JsonRpcProvider } from '@ethersproject/providers';
import { SupportedChainId } from 'constants/chains';
import { PropsWithChildren } from 'react';
export type JsonRpcConnectionMap = {
    [chainId: number]: string | string[] | JsonRpcProvider | JsonRpcProvider[];
};
export declare function Provider({ jsonRpcMap, children }: PropsWithChildren<{
    jsonRpcMap?: JsonRpcConnectionMap;
}>): import("react/jsx-runtime").JSX.Element;
export default function useJsonRpcUrlsMap(): Record<SupportedChainId, string[]>;
export declare function toJsonRpcConnectionMap(connectionMap?: JsonRpcConnectionMap): Record<SupportedChainId, JsonRpcProvider>;
export declare function toJsonRpcUrlMap(connectionMap?: JsonRpcConnectionMap): Record<SupportedChainId, string>;
export declare function toJsonRpcUrlsMap(connectionMap?: JsonRpcConnectionMap): Record<SupportedChainId, string[]>;

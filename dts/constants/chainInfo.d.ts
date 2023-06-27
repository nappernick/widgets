import { SupportedChainId, SupportedL1ChainId, SupportedL2ChainId } from './chains';
export declare const STANDARD_L1_BLOCK_TIME: number;
export declare enum NetworkType {
    L1 = 0,
    L2 = 1
}
interface BaseChainInfo {
    readonly networkType: NetworkType;
    readonly blockWaitMsBeforeWarning?: number;
    readonly docs: string;
    readonly bridge?: string;
    readonly explorer: string;
    readonly infoLink: string;
    readonly logoUrl: string;
    readonly safe?: {
        label?: string;
        symbol?: string;
    };
    readonly label: string;
    readonly helpCenterUrl?: string;
    readonly nativeCurrency: {
        name: string;
        symbol: string;
        decimals: 18;
    };
    readonly color?: string;
    readonly backgroundColor?: string;
}
export interface L1ChainInfo extends BaseChainInfo {
    readonly networkType: NetworkType.L1;
}
export interface L2ChainInfo extends BaseChainInfo {
    readonly networkType: NetworkType.L2;
    readonly bridge: string;
    readonly statusPage?: string;
}
export type ChainInfoMap = {
    readonly [chainId: number]: L1ChainInfo | L2ChainInfo;
} & {
    readonly [chainId in SupportedL2ChainId]: L2ChainInfo;
} & {
    readonly [chainId in SupportedL1ChainId]: L1ChainInfo;
};
export declare function getChainInfo(chainId: SupportedL1ChainId): L1ChainInfo;
export declare function getChainInfo(chainId: SupportedL2ChainId): L2ChainInfo;
export declare function getChainInfo(chainId: SupportedChainId): L1ChainInfo | L2ChainInfo;
export declare function getChainInfo(chainId: SupportedChainId | SupportedL1ChainId | SupportedL2ChainId | number | undefined): L1ChainInfo | L2ChainInfo | undefined;
export declare const MAINNET_INFO: L1ChainInfo;
export declare function getChainInfoOrDefault(chainId: number | undefined): L1ChainInfo | L2ChainInfo;
export declare function isSupportedChainId(chainId: number | undefined): chainId is SupportedChainId;
export {};

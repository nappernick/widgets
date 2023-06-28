import { Contract } from '@ethersproject/contracts';
import { ArgentWalletDetector, EnsPublicResolver, EnsRegistrar, Erc20, Weth } from 'abis/types';
import { UniswapInterfaceMulticall } from 'types/v3';
export declare function useContract<T extends Contract = Contract>(addressOrAddressMap: string | {
    [chainId: number]: string;
} | undefined, ABI: any, withSignerIfPossible?: boolean): T | null;
export declare function useTokenContract(tokenAddress?: string, withSignerIfPossible?: boolean): Erc20 | null;
export declare function useWETHContract(withSignerIfPossible?: boolean): Weth | null;
export declare function useArgentWalletDetectorContract(): ArgentWalletDetector | null;
export declare function useENSRegistrarContract(withSignerIfPossible?: boolean): EnsRegistrar | null;
export declare function useENSResolverContract(address: string | undefined, withSignerIfPossible?: boolean): EnsPublicResolver | null;
export declare function useBytes32TokenContract(tokenAddress?: string, withSignerIfPossible?: boolean): Contract | null;
export declare function useEIP2612Contract(tokenAddress?: string): Contract | null;
export declare function useInterfaceMulticall(): UniswapInterfaceMulticall;

import { Ether, NativeCurrency, Token } from '@uniswap/sdk-core';
import { SupportedChainId } from './chains';
export declare const USDC_MAINNET: Token;
export declare const USDC_ROPSTEN: Token;
export declare const USDC_RINKEBY: Token;
export declare const USDC_GOERLI: Token;
export declare const USDC_KOVAN: Token;
export declare const USDC_OPTIMISM: Token;
export declare const USDC_ARBITRUM: Token;
export declare const USDC_ARBITRUM_RINKEBY: Token;
export declare const USDC_POLYGON: Token;
export declare const USDC_POLYGON_MUMBAI: Token;
export declare const PORTAL_USDC_CELO: Token;
export declare const USDC_CELO_ALFAJORES: Token;
export declare const AMPL: Token;
export declare const DAI: Token;
export declare const DAI_ARBITRUM_ONE: Token;
export declare const DAI_OPTIMISM: Token;
export declare const USDC_BNB_CHAIN: Token;
export declare const USDC: {
    [chainId in SupportedChainId]: Token;
};
export declare const DAI_POLYGON: Token;
export declare const USDT_POLYGON: Token;
export declare const WBTC_POLYGON: Token;
export declare const USDT: Token;
export declare const USDT_ARBITRUM_ONE: Token;
export declare const USDT_OPTIMISM: Token;
export declare const WBTC: Token;
export declare const WBTC_ARBITRUM_ONE: Token;
export declare const WBTC_OPTIMISM: Token;
export declare const FEI: Token;
export declare const TRIBE: Token;
export declare const FRAX: Token;
export declare const FXS: Token;
export declare const renBTC: Token;
export declare const ETH2X_FLI: Token;
export declare const sETH2: Token;
export declare const rETH2: Token;
export declare const SWISE: Token;
export declare const WETH_POLYGON_MUMBAI: Token;
export declare const WETH_POLYGON: Token;
export declare const CELO_CELO: Token;
export declare const CUSD_CELO: Token;
export declare const CEUR_CELO: Token;
export declare const PORTAL_ETH_CELO: Token;
export declare const CMC02_CELO: Token;
export declare const CELO_CELO_ALFAJORES: Token;
export declare const CUSD_CELO_ALFAJORES: Token;
export declare const CEUR_CELO_ALFAJORES: Token;
export declare const USDT_BNB_CHAIN: Token;
export declare const ETH_BNB_CHAIN: Token;
export declare const MATIC_BNB_CHAIN: Token;
export declare const FRAX_BNB_CHAIN: Token;
export declare const BTC_BNB_CHAIN: Token;
export declare const CAKE_BNB_CHAIN: Token;
export declare const BUSD_BNB_CHAIN: Token;
export declare const DAI_BNB_CHAIN: Token;
export declare const UNI: {
    [chainId: number]: Token;
};
export declare const WRAPPED_NATIVE_CURRENCY: {
    [chainId: number]: Token | undefined;
};
export declare function isCelo(chainId: number): chainId is SupportedChainId.CELO | SupportedChainId.CELO_ALFAJORES;
export declare class ExtendedEther extends Ether {
    get wrapped(): Token;
    private static _cachedExtendedEther;
    static onChain(chainId: number): ExtendedEther;
}
export declare function nativeOnChain(chainId: number): NativeCurrency | Token;
export declare const TOKEN_SHORTHANDS: {
    [shorthand: string]: {
        [chainId in SupportedChainId]?: string;
    };
};

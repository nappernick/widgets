/**
 * List of all the networks supported by the Uniswap Interface
 */
export declare enum SupportedChainId {
    MAINNET = 1,
    ROPSTEN = 3,
    RINKEBY = 4,
    GOERLI = 5,
    KOVAN = 42,
    ARBITRUM_ONE = 42161,
    ARBITRUM_RINKEBY = 421611,
    OPTIMISM = 10,
    OPTIMISM_GOERLI = 420,
    POLYGON = 137,
    POLYGON_MUMBAI = 80001,
    CELO = 42220,
    CELO_ALFAJORES = 44787,
    BNB = 56
}
export declare enum ChainName {
    MAINNET = "mainnet",
    ROPSTEN = "ropsten",
    RINKEBY = "rinkeby",
    GOERLI = "goerli",
    KOVAN = "kovan",
    OPTIMISM = "optimism-mainnet",
    OPTIMISM_GOERLI = "optimism-goerli",
    ARBITRUM_ONE = "arbitrum-mainnet",
    ARBITRUM_RINKEBY = "arbitrum-rinkeby",
    POLYGON = "polygon-mainnet",
    POLYGON_MUMBAI = "polygon-mumbai",
    CELO = "celo",
    CELO_ALFAJORES = "celo-alfajores",
    BNB = "bnb"
}
export declare const CHAIN_NAMES_TO_IDS: {
    [chainName: string]: SupportedChainId;
};
/**
 * Array of all the supported chain IDs
 */
export declare const ALL_SUPPORTED_CHAIN_IDS: SupportedChainId[];
export declare const SUPPORTED_GAS_ESTIMATE_CHAIN_IDS: SupportedChainId[];
/**
 * All the chain IDs that are running the Ethereum protocol.
 */
export declare const L1_CHAIN_IDS: readonly [SupportedChainId.MAINNET, SupportedChainId.ROPSTEN, SupportedChainId.RINKEBY, SupportedChainId.GOERLI, SupportedChainId.KOVAN, SupportedChainId.POLYGON, SupportedChainId.POLYGON_MUMBAI, SupportedChainId.CELO, SupportedChainId.CELO_ALFAJORES];
export type SupportedL1ChainId = typeof L1_CHAIN_IDS[number];
/**
 * Controls some L2 specific behavior, e.g. slippage tolerance, special UI behavior.
 * The expectation is that all of these networks have immediate transaction confirmation.
 */
export declare const L2_CHAIN_IDS: readonly [SupportedChainId.ARBITRUM_ONE, SupportedChainId.ARBITRUM_RINKEBY, SupportedChainId.OPTIMISM, SupportedChainId.OPTIMISM_GOERLI];
export type SupportedL2ChainId = typeof L2_CHAIN_IDS[number];
export declare function isPolygonChain(chainId: number): chainId is SupportedChainId.POLYGON | SupportedChainId.POLYGON_MUMBAI;

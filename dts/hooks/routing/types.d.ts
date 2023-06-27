export declare enum RouterPreference {
    API = "api",
    CLIENT = "client"
}
export declare enum QuoteType {
    TRADE = "trade",
    PRICE = "price",
    SKIP = "skip"
}
export type QuoteConfig = {
    type: QuoteType.TRADE;
    preference: RouterPreference;
} | {
    type: QuoteType.PRICE;
    preference: RouterPreference;
} | {
    type: QuoteType.SKIP;
};
export declare enum PoolType {
    V2Pool = "v2-pool",
    V3Pool = "v3-pool"
}
export declare enum SwapRouterNativeAssets {
    MATIC = "MATIC",
    ETH = "ETH"
}

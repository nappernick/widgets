export type LogoTableInput = {
    address?: string | null;
    chainId: number;
    isNative?: boolean;
    logoURI?: string;
};
declare abstract class LogoSrc {
    abstract key: string;
    abstract getUri: () => string | undefined;
    abstract useAlternateUri?: () => string | undefined;
}
/** Contains all sources for a specific asset */
export declare class LogoStore {
    private srcs;
    private keys;
    constructor(asset: LogoTableInput);
    addSrc(newSrc: LogoSrc): void;
    addUri(uri: string): void;
    /** Invalidates the current src and returns the new current source if available */
    invalidateSrc(): LogoSrc | undefined;
    getAllUris(): string[];
    getCurrent(): LogoSrc | undefined;
}
export declare class LogoTable {
    private map;
    private initialized;
    private static instance;
    /** Implements Singleton pattern to keep one source of logos */
    static getInstance(): LogoTable;
    private constructor();
    /** Adds a new asset to the table and returns the newly added entry  */
    addToTable(asset: LogoTableInput): LogoStore;
    initialize(tokens: LogoTableInput[]): void;
    isInitialized(): boolean;
    getEntry(asset: LogoTableInput | undefined): LogoStore | undefined;
}
export {};

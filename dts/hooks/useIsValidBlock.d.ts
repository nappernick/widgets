export declare function useSetOldestValidBlock(): (block: number) => void;
export declare function useGetIsValidBlock(maxBlockAge?: number): (block: number) => boolean;
export default function useIsValidBlock(block: number): boolean;

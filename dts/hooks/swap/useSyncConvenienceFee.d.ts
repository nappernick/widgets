export interface FeeOptions {
    convenienceFee?: number;
    convenienceFeeRecipient?: string | string | {
        [chainId: number]: string;
    };
}
export default function useSyncConvenienceFee({ convenienceFee, convenienceFeeRecipient }: FeeOptions): void;

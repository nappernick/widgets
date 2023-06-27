import { BigNumber } from '@ethersproject/bignumber';
import { Currency, CurrencyAmount } from '@uniswap/sdk-core';
export declare enum PermitType {
    AMOUNT = 1,
    ALLOWED = 2
}
export interface PermitInfo {
    type: PermitType;
    name: string;
    version?: string;
}
export declare enum PermitState {
    NOT_APPLICABLE = 0,
    LOADING = 1,
    NOT_SIGNED = 2,
    SIGNED = 3
}
interface BaseSignatureData {
    v: number;
    r: string;
    s: string;
    deadline: number;
    nonce: number;
    owner: string;
    spender: string;
    chainId: number;
    tokenAddress: string;
    permitType: PermitType;
}
interface StandardSignatureData extends BaseSignatureData {
    amount: string;
}
interface AllowedSignatureData extends BaseSignatureData {
    allowed: true;
}
export type SignatureData = StandardSignatureData | AllowedSignatureData;
export declare function usePermit(currencyAmount: CurrencyAmount<Currency> | null | undefined, spender: string | null | undefined, transactionDeadline: BigNumber | undefined, overridePermitInfo: PermitInfo | undefined | null): {
    state: PermitState;
    signatureData?: SignatureData;
    sign?: () => Promise<void>;
};
export {};

import { CurrencyAmount, Token } from '@uniswap/sdk-core';
import { PermitSignature } from 'hooks/usePermitAllowance';
export declare enum AllowanceState {
    LOADING = 0,
    REQUIRED = 1,
    ALLOWED = 2
}
export interface AllowanceRequired {
    state: AllowanceState.REQUIRED;
    token: Token;
    shouldRequestApproval: boolean;
    isApprovalLoading: boolean;
    approveAndPermit: () => Promise<void>;
}
export type Allowance = {
    state: AllowanceState.LOADING;
} | {
    state: AllowanceState.ALLOWED;
    permitSignature?: PermitSignature;
} | AllowanceRequired;
export default function usePermit2Allowance(amount?: CurrencyAmount<Token>, spender?: string): Allowance;

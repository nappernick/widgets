import { Currency, CurrencyAmount } from '@uniswap/sdk-core';
import { SignatureData } from 'hooks/usePermit';
export { ApprovalState } from '../useApproval';
export declare enum SwapApprovalState {
    REQUIRES_APPROVAL = 0,
    PENDING_APPROVAL = 1,
    REQUIRES_SIGNATURE = 2,
    PENDING_SIGNATURE = 3,
    APPROVED = 4
}
export interface SwapApproval {
    state: SwapApprovalState;
    signatureData?: SignatureData;
    approve?: () => Promise<void>;
}
/**
 * Returns all relevant statuses and callback functions for approvals.
 * Considers both standard approval and ERC20 permit.
 */
export declare function useSwapApproval(amount?: CurrencyAmount<Currency>): SwapApproval;

import { PermitSingle } from '@uniswap/permit2-sdk';
import { CurrencyAmount, Token } from '@uniswap/sdk-core';
import { WidgetError, WidgetPromise } from 'errors';
export declare function usePermitAllowance(token?: Token, owner?: string, spender?: string): {
    permitAllowance: CurrencyAmount<Token> | undefined;
    expiration: number | undefined;
    nonce: number | undefined;
};
interface Permit extends PermitSingle {
    sigDeadline: number;
}
export interface PermitSignature extends Permit {
    signature: string;
}
export declare function useUpdatePermitAllowance(token: Token | undefined, spender: string | undefined, nonce: number | undefined, onPermitSignature: (signature: PermitSignature) => void): () => WidgetPromise<void | undefined, WidgetError & import("errors").UnknownError>;
export {};

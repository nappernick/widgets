import { BigNumber } from '@ethersproject/bignumber';
/** Returns the default transaction TTL for the chain, in minutes. */
export declare function useDefaultTransactionTtl(): number;
/** Returns the user-inputted transaction TTL, in minutes. */
export declare function useTransactionTtl(): [number | undefined, (ttl?: number) => void];
export default function useTransactionDeadline(): BigNumber | undefined;

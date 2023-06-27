import { Percent } from '@uniswap/sdk-core';
import JSBI from 'jsbi';
export declare const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";
export declare const NetworkContextName = "NETWORK";
export declare const IS_IN_IFRAME: boolean;
export declare const MS_IN_SECOND = 1000;
export declare const DEFAULT_DEADLINE_FROM_NOW: number;
export declare const L2_DEADLINE_FROM_NOW: number;
export declare const DEFAULT_TXN_DISMISS_MS = 25000;
export declare const L2_TXN_DISMISS_MS = 5000;
export declare const BIG_INT_SECONDS_IN_WEEK: JSBI;
export declare const BIG_INT_ZERO: JSBI;
export declare const ONE_BIPS: Percent;
export declare const ALLOWED_PRICE_IMPACT_LOW: Percent;
export declare const ALLOWED_PRICE_IMPACT_MEDIUM: Percent;
export declare const ALLOWED_PRICE_IMPACT_HIGH: Percent;
export declare const PRICE_IMPACT_WITHOUT_FEE_CONFIRM_MIN: Percent;
export declare const BLOCKED_PRICE_IMPACT_NON_EXPERT: Percent;
export declare const BETTER_TRADE_LESS_HOPS_THRESHOLD: Percent;
export declare const ZERO_PERCENT: Percent;
export declare const TWO_PERCENT: Percent;
export declare const ONE_HUNDRED_PERCENT: Percent;
export declare const TX_GAS_MARGIN = 0.2;
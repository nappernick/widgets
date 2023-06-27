import { TradeType } from '@uniswap/sdk-core';
import { Field } from 'state/swap';
export declare function isExactInput(tradeType: TradeType): boolean;
export declare function invertTradeType(tradeType: TradeType): TradeType;
export declare function toTradeType(modifiedField: Field): TradeType;

import { Currency } from '@uniswap/sdk-core';
import { KeyboardEvent } from 'react';
export interface TokenOptionsHandle {
    onKeyDown: (e: KeyboardEvent) => void;
}
interface TokenOptionsProps {
    tokens: Currency[];
    onSelect: (token: Currency) => void;
}
declare const TokenOptions: import("react").ForwardRefExoticComponent<TokenOptionsProps & import("react").RefAttributes<TokenOptionsHandle>>;
export default TokenOptions;

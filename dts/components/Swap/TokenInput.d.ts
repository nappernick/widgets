/// <reference types="react" />
import 'setimmediate';
import { Currency } from '@uniswap/sdk-core';
import { Field } from 'state/swap';
export interface TokenInputHandle {
    focus: () => void;
}
interface TokenInputProps {
    field: Field;
    amount: string;
    currency?: Currency;
    approved?: boolean;
    loading?: boolean;
    disabled?: boolean;
    onChangeInput: (input: string) => void;
    onChangeCurrency: (currency: Currency) => void;
}
export declare const TokenInput: import("react").ForwardRefExoticComponent<TokenInputProps & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<TokenInputHandle>>;
export default TokenInput;

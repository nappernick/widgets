/// <reference types="react" />
import { Currency } from '@uniswap/sdk-core';
import { Field } from 'state/swap';
interface TokenSelectDialogProps {
    value?: Currency;
    onSelect: (token: Currency) => void;
    onClose: () => void;
}
export declare function TokenSelectDialogContent({ value, onSelect, onClose }: TokenSelectDialogProps): import("react/jsx-runtime").JSX.Element;
interface TokenSelectProps {
    field: Field;
    value?: Currency;
    approved?: boolean;
    disabled?: boolean;
    onSelect: (value: Currency) => void;
}
declare const _default: import("react").NamedExoticComponent<TokenSelectProps>;
export default _default;

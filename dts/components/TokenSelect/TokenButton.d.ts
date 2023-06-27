import { Currency } from '@uniswap/sdk-core';
interface TokenButtonProps {
    value?: Currency;
    approved?: boolean;
    disabled?: boolean;
    onClick: () => void;
}
export default function TokenButton({ value, approved, disabled, onClick }: TokenButtonProps): import("react/jsx-runtime").JSX.Element;
export {};

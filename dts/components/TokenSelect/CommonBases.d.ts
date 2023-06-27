import { Currency } from '@uniswap/sdk-core';
export default function CommonBases({ chainId, onSelect, selected, }: {
    chainId?: number;
    selected?: Currency | null;
    onSelect: (currency: Currency) => void;
}): import("react/jsx-runtime").JSX.Element | null;

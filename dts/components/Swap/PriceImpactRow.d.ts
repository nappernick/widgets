import { PriceImpact } from 'hooks/usePriceImpact';
interface PriceImpactProps {
    impact: PriceImpact | undefined | null;
    tooltipText?: string;
    reverse?: boolean;
}
export declare function PriceImpactRow({ impact, reverse, tooltipText }: PriceImpactProps): import("react/jsx-runtime").JSX.Element | null;
export {};

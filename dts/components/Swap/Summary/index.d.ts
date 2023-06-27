import { Currency, CurrencyAmount, Token } from '@uniswap/sdk-core';
import { Allowance } from 'hooks/usePermit2Allowance';
import { PriceImpact } from 'hooks/usePriceImpact';
import { Slippage } from 'hooks/useSlippage';
import { InterfaceTrade } from 'state/routing/types';
import Summary from './Summary';
export default Summary;
export declare function ConfirmButton({ trade, slippage, onConfirm, triggerImpactSpeedbump, allowance, }: {
    trade: InterfaceTrade;
    slippage: Slippage;
    onConfirm: () => Promise<void>;
    triggerImpactSpeedbump: () => boolean;
    allowance: Allowance;
}): import("react/jsx-runtime").JSX.Element;
interface SummaryDialogProps {
    trade: InterfaceTrade;
    slippage: Slippage;
    gasUseEstimateUSD?: CurrencyAmount<Token>;
    inputUSDC?: CurrencyAmount<Currency>;
    outputUSDC?: CurrencyAmount<Currency>;
    impact?: PriceImpact;
    onConfirm: () => Promise<void>;
    allowance: Allowance;
}
export declare function SummaryDialog(props: SummaryDialogProps): import("react/jsx-runtime").JSX.Element;

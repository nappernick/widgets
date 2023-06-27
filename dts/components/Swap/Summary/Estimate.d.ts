import { Slippage } from 'hooks/useSlippage';
import { ReactNode } from 'react';
import { InterfaceTrade } from 'state/routing/types';
interface EstimateProps {
    slippage: Slippage;
    trade: InterfaceTrade;
}
export default function SwapInputOutputEstimate({ trade, slippage }: EstimateProps): import("react/jsx-runtime").JSX.Element;
export declare function getEstimateMessage(trade: InterfaceTrade | undefined, slippage: Slippage): {
    estimateMessage: string;
    descriptor: ReactNode;
    value: string;
};
export {};

import { Currency, CurrencyAmount, Token } from '@uniswap/sdk-core';
import { PriceImpact } from 'hooks/usePriceImpact';
import { Slippage } from 'hooks/useSlippage';
import { InterfaceTrade } from 'state/routing/types';
interface DetailsProps {
    trade: InterfaceTrade;
    slippage: Slippage;
    gasUseEstimateUSD?: CurrencyAmount<Token>;
    inputUSDC?: CurrencyAmount<Currency>;
    outputUSDC?: CurrencyAmount<Currency>;
    impact?: PriceImpact;
}
export default function Details({ trade, slippage, gasUseEstimateUSD, inputUSDC, outputUSDC, impact }: DetailsProps): import("react/jsx-runtime").JSX.Element;
export {};

/// <reference types="react" />
import { CurrencyAmount, Token } from '@uniswap/sdk-core';
import { InterfaceTrade } from 'state/routing/types';
export declare const AutoRouterHeader: import("react").ForwardRefExoticComponent<Omit<{
    [x: string]: any;
    [x: number]: any;
    [x: symbol]: any;
} & {
    theme?: import("styled-components").DefaultTheme | undefined;
} & {
    as?: string | import("react").ComponentType<any> | undefined;
    forwardedAs?: string | import("react").ComponentType<any> | undefined;
}, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
export default function RoutingDiagram({ trade, gasUseEstimateUSD, hideHeader, }: {
    trade: InterfaceTrade;
    gasUseEstimateUSD?: CurrencyAmount<Token> | null;
    hideHeader?: boolean;
}): import("react/jsx-runtime").JSX.Element;

import React from 'react';
import { LogoTableInput } from './LogoTable';
export * from './hooks';
export * from './util';
export type LogoBasePops = {
    symbol?: string | null;
    backupImg?: string | null;
    size?: string;
    style?: React.CSSProperties;
};
/**
 * Renders an image by prioritizing a list of sources, and then eventually a fallback triangle alert
 */
type LogoProps = {
    currency: LogoTableInput;
} & LogoBasePops;
export declare function Logo({ currency, symbol, backupImg, size, style, ...rest }: LogoProps): import("react/jsx-runtime").JSX.Element;

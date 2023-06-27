import { SupportedLocale } from 'constants/locales';
import { ReactNode } from 'react';
export declare function dynamicActivate(locale: SupportedLocale): Promise<void>;
interface ProviderProps {
    locale?: SupportedLocale;
    forceRenderAfterLocaleChange?: boolean;
    onActivate?: (locale: SupportedLocale) => void;
    children: ReactNode;
}
export declare function TestableProvider({ locale, forceRenderAfterLocaleChange, children }: ProviderProps): import("react/jsx-runtime").JSX.Element;
export declare function Provider({ locale, forceRenderAfterLocaleChange, onActivate, children }: ProviderProps): import("react/jsx-runtime").JSX.Element;
export {};

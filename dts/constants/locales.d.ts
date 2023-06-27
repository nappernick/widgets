export declare const SUPPORTED_LOCALES: string[];
export type SupportedLocale = typeof SUPPORTED_LOCALES[number] | 'pseudo';
export declare const DEFAULT_LOCALE: SupportedLocale;
export declare const LOCALE_LABEL: {
    [locale in SupportedLocale]: string;
};

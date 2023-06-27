import { LogoTableInput } from './LogoTable';
/** An optional component to update table with logos as sources change */
export declare function LogoUpdater({ assets }: {
    assets: LogoTableInput[];
}): null;
export declare function useLogos(currency: LogoTableInput | undefined): string[] | undefined;
export declare function useLogo(currency: LogoTableInput | undefined): {
    src: string | undefined;
    invalidateSrc: () => void;
};

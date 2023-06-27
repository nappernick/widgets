import { SupportedChainId } from 'constants/chains';
import { LogoTableInput } from './LogoTable';
export declare function getAssetsRepoURI(asset: LogoTableInput): string | undefined;
export declare function getNativeLogoURI(chainId?: SupportedChainId): string;

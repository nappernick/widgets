import { JsonRpcProvider } from '@ethersproject/providers';
import { Provider as Eip1193Provider } from '@web3-react/types';
import { SupportedChainId } from 'constants/chains';
import { PropsWithChildren } from 'react';
import { JsonRpcConnectionMap } from './useJsonRpcUrlsMap';
export interface ProviderProps {
    defaultChainId?: SupportedChainId;
    jsonRpcUrlMap?: JsonRpcConnectionMap;
    /**
     * If null, no auto-connection (MetaMask or WalletConnect) will be attempted.
     * This is appropriate for integrations which wish to control the connected provider.
     */
    provider?: Eip1193Provider | JsonRpcProvider | null;
}
export declare function TestableProvider({ provider, children }: PropsWithChildren<{
    provider: JsonRpcProvider;
}>): import("react/jsx-runtime").JSX.Element;
export declare function Provider({ defaultChainId: chainId, jsonRpcUrlMap, provider, children, }: PropsWithChildren<ProviderProps>): import("react/jsx-runtime").JSX.Element;

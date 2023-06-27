import { EIP1193 } from '@web3-react/eip1193';
import { MetaMask } from '@web3-react/metamask';
import { Network } from '@web3-react/network';
import { PropsWithChildren } from 'react';
import JsonRpcConnector from 'utils/JsonRpcConnector';
import { WalletConnectPopup, WalletConnectQR } from 'utils/WalletConnect';
export interface Connectors {
    user: EIP1193 | JsonRpcConnector | undefined;
    metaMask: MetaMask;
    walletConnect: WalletConnectPopup;
    walletConnectQR: WalletConnectQR;
    network: Network;
}
export declare function Provider({ connectors, children }: PropsWithChildren<{
    connectors: Connectors;
}>): import("react/jsx-runtime").JSX.Element;
export default function useConnectors(): Connectors;

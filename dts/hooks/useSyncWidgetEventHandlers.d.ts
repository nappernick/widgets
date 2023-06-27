import { OnError } from 'components/Error/ErrorBoundary';
import { OnSwitchChain } from 'hooks/useSwitchChain';
import { OnConnectWalletClick } from 'state/wallet';
export type { OnError } from 'components/Error/ErrorBoundary';
export type { AddEthereumChainParameter, OnSwitchChain } from 'hooks/useSwitchChain';
export type { OnConnectWalletClick } from 'state/wallet';
export interface WidgetEventHandlers {
    onConnectWalletClick?: OnConnectWalletClick;
    onError?: OnError;
    onSwitchChain?: OnSwitchChain;
}
export default function useSyncWidgetEventHandlers({ onConnectWalletClick, onSwitchChain }: WidgetEventHandlers): void;

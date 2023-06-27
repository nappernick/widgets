import 'setimmediate';
import { WalletConnect, WalletConnectConstructorArgs } from '@web3-react/walletconnect';
export declare class WalletConnectPopup extends WalletConnect {
    constructor({ actions, options, defaultChainId, timeout, onError }: WalletConnectConstructorArgs);
}
export declare class WalletConnectQR extends WalletConnect {
    static SVG_AVAILABLE: string;
    svg?: string;
    constructor({ actions, options, defaultChainId, timeout, onError }: WalletConnectConstructorArgs);
    deactivate(): Promise<void>;
}

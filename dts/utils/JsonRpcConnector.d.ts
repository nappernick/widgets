import { JsonRpcProvider } from '@ethersproject/providers';
import { Actions, Connector } from '@web3-react/types';
export default class JsonRpcConnector extends Connector {
    customProvider: JsonRpcProvider;
    constructor({ actions, provider, onError, }: {
        actions: Actions;
        provider: JsonRpcProvider;
        onError?: (error: Error) => void;
    });
    activate(): Promise<void>;
}

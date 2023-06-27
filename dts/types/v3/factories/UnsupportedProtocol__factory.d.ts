import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { UnsupportedProtocol, UnsupportedProtocolInterface } from "../UnsupportedProtocol";
export declare class UnsupportedProtocol__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<UnsupportedProtocol>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): UnsupportedProtocol;
    connect(signer: Signer): UnsupportedProtocol__factory;
    static readonly bytecode = "0x608080604052346013576043908160198239f35b600080fdfe60808060405234603157807fea3559ef0000000000000000000000000000000000000000000000000000000060049252fd5b600080fdfea164736f6c6343000811000a";
    static readonly abi: ({
        inputs: never[];
        name: string;
        type: string;
        stateMutability?: undefined;
    } | {
        stateMutability: string;
        type: string;
        inputs?: undefined;
        name?: undefined;
    })[];
    static createInterface(): UnsupportedProtocolInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): UnsupportedProtocol;
}

import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { BytesLib, BytesLibInterface } from "../BytesLib";
export declare class BytesLib__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<BytesLib>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): BytesLib;
    connect(signer: Signer): BytesLib__factory;
    static readonly bytecode = "0x6080806040523460175760119081601d823930815050f35b600080fdfe600080fdfea164736f6c6343000811000a";
    static readonly abi: {
        inputs: never[];
        name: string;
        type: string;
    }[];
    static createInterface(): BytesLibInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): BytesLib;
}

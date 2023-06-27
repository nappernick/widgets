import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { UniswapV2Library, UniswapV2LibraryInterface } from "../UniswapV2Library";
export declare class UniswapV2Library__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<UniswapV2Library>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): UniswapV2Library;
    connect(signer: Signer): UniswapV2Library__factory;
    static readonly bytecode = "0x6080806040523460175760119081601d823930815050f35b600080fdfe600080fdfea164736f6c6343000811000a";
    static readonly abi: {
        inputs: never[];
        name: string;
        type: string;
    }[];
    static createInterface(): UniswapV2LibraryInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): UniswapV2Library;
}

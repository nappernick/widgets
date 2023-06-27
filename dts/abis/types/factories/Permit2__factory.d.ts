import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { Permit2, Permit2Interface } from "../Permit2";
export declare class Permit2__factory {
    static readonly abi: {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): Permit2Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): Permit2;
}

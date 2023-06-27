import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { V3SwapRouter, V3SwapRouterInterface } from "../V3SwapRouter";
export declare class V3SwapRouter__factory {
    static readonly abi: ({
        inputs: never[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: never[];
        stateMutability: string;
        type: string;
    })[];
    static createInterface(): V3SwapRouterInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): V3SwapRouter;
}

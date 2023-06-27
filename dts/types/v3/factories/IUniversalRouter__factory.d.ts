import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IUniversalRouter, IUniversalRouterInterface } from "../IUniversalRouter";
export declare class IUniversalRouter__factory {
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
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
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    })[];
    static createInterface(): IUniversalRouterInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IUniversalRouter;
}

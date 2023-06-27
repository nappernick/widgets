import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IRewardsCollector, IRewardsCollectorInterface } from "../IRewardsCollector";
export declare class IRewardsCollector__factory {
    static readonly abi: {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: never[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): IRewardsCollectorInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IRewardsCollector;
}

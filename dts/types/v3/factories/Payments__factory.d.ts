import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { Payments, PaymentsInterface } from "../Payments";
export declare class Payments__factory {
    static readonly abi: {
        inputs: never[];
        name: string;
        type: string;
    }[];
    static createInterface(): PaymentsInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Payments;
}

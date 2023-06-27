import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ICryptoPunksMarket, ICryptoPunksMarketInterface } from "../ICryptoPunksMarket";
export declare class ICryptoPunksMarket__factory {
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
    static createInterface(): ICryptoPunksMarketInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ICryptoPunksMarket;
}

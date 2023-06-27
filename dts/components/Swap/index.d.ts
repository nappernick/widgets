import { SwapController } from 'hooks/swap/useSyncController';
import { FeeOptions } from 'hooks/swap/useSyncConvenienceFee';
import { SwapEventHandlers } from 'hooks/swap/useSyncSwapEventHandlers';
import { TokenDefaults } from 'hooks/swap/useSyncTokenDefaults';
export interface SwapProps extends FeeOptions, SwapController, SwapEventHandlers, TokenDefaults {
    hideConnectionUI?: boolean;
    routerUrl?: string;
}
export default function Swap(props: SwapProps): import("react/jsx-runtime").JSX.Element;

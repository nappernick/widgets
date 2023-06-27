import { Swap } from 'state/swap';
import { Settings } from 'state/swap/settings';
export interface SwapController {
    value?: Swap;
    settings?: Settings;
}
export default function useSyncController({ value, settings }: SwapController): void;

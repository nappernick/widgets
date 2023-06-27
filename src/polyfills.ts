import { Buffer } from 'buffer'
if (typeof window !== 'undefined') {
  // WalletConnect relies on Buffer, so it must be polyfilled.
  if (!('Buffer' in window)) {
    // @ts-ignore
    window.Buffer = Buffer
  }
}

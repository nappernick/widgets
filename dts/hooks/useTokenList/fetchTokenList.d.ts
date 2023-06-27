import type { TokenList } from '@uniswap/token-lists';
/** Fetches and validates a token list. */
export default function fetchTokenList(listUrl: string, resolveENSContentHash: (ensName: string) => Promise<string>): Promise<TokenList>;

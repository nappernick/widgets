import { BaseQueryFn, FetchBaseQueryError, skipToken } from '@reduxjs/toolkit/query/react';
import { GetQuoteArgs, TradeResult } from './types';
export declare const routing: import("@reduxjs/toolkit/query/react").Api<BaseQueryFn<GetQuoteArgs, TradeResult, FetchBaseQueryError, {}, {}>, {
    getTradeQuote: import("@reduxjs/toolkit/query/react").QueryDefinition<GetQuoteArgs | typeof skipToken, BaseQueryFn<GetQuoteArgs, TradeResult, FetchBaseQueryError, {}, {}>, never, TradeResult, "routing">;
}, "routing", never, typeof import("@reduxjs/toolkit/dist/query/core/module").coreModuleName | typeof import("@reduxjs/toolkit/dist/query/react/module").reactHooksModuleName>;
export declare const useLazyGetTradeQuoteQuery: import("@reduxjs/toolkit/dist/query/react/buildHooks").UseLazyQuery<import("@reduxjs/toolkit/query/react").QueryDefinition<GetQuoteArgs | typeof skipToken, BaseQueryFn<GetQuoteArgs, TradeResult, FetchBaseQueryError, {}, {}>, never, TradeResult, "routing">>;
export declare const useGetTradeQuoteQueryState: import("@reduxjs/toolkit/dist/query/react/buildHooks").UseQueryState<import("@reduxjs/toolkit/query/react").QueryDefinition<GetQuoteArgs | typeof skipToken, BaseQueryFn<GetQuoteArgs, TradeResult, FetchBaseQueryError, {}, {}>, never, TradeResult, "routing">>;

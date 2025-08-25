import { type QueryFunctionContext, queryOptions } from '@tanstack/react-query';

import type { SwrKey } from '_types/swr';

import { binanceSwrFn } from '_api/axios';
import { binanceRoutes } from '_api/routes/binance';

import type { BinanceExchanges } from '_api/types/binance/exchanges';

export class BinanceApi {
  static async getExchanges(ctx: QueryFunctionContext<SwrKey>) {
    return binanceSwrFn<BinanceExchanges.Res>(ctx).then(v => v.data);
  }

  static $getExchanges = queryOptions({
    queryKey: binanceRoutes.v3.exchangeInfo(),
    queryFn: this.getExchanges,
  });

  static $getExchangeSymbols = queryOptions({
    queryKey: binanceRoutes.v3.exchangeInfo(),
    queryFn: this.getExchanges,

    select: data => data.symbols.flatMap((v, i) => i < 50 ? [v.symbol] : []),
  });
}

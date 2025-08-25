import axios from 'axios';
import { type QueryFunctionContext } from '@tanstack/react-query';

import { _ } from '_utils/url';

export const binanceApi = axios.create({
  baseURL: 'https://api.binance.com/api',

  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
});

export function binanceSwrFn<Data>(ctx: QueryFunctionContext<any>) {
  return binanceApi.get<Data>(_(...ctx.queryKey));
}

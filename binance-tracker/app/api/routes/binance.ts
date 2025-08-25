import { query } from '_utils/url';

export const binanceRoutes = {
  v3: {
    exchangeInfo: (q?: object) => ['v3', 'exchangeInfo', query(q)] as const,
  },
} as const;

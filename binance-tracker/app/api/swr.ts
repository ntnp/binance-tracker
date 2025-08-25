import { keepPreviousData, QueryClient } from '@tanstack/react-query';

import { binanceSwrFn } from '_api/axios';

export const binanceSwr = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: binanceSwrFn,
      placeholderData: keepPreviousData,
    },
  },
});

export { useQuery } from '@tanstack/react-query';

import { query } from '_utils/url';

const dataStreamBase = 'wss://data-stream.binance.com';

export const binanceWsRoutes = {
  dataStream: {
    stream: (streams: string, q?: object) => [dataStreamBase, 'stream', query({ ...q, streams })] as const,
  },
} as const;

import { useCallback, useState } from 'react';
import useWebSocket from 'react-use-websocket';

import { binanceWsRoutes } from '_api/routes/binance-ws';

import type { SymbolTicker } from '_api/types/binance-ws/symbols';

import { useTracker } from '_app/context/Tracker/TrackerCtx';
import { useTrackerUpdates } from '_app/context/Tracker/TrackerUpdatesCtx';

import { _ } from '_utils/url';
import { isTicker } from '_app/utils/symbols';

import { Table, Tbody, Td, Th, Thead, Tr } from '_ui/table';

import { PercentageBadge } from '_features/Tracker/Watchlist/PercentageBadge';

export function WatchlistTable() {
  const { list } = useTracker();
  const { updates, setUpdates } = useTrackerUpdates();

  const [isFetching, setIsFetching] = useState(true);

  const wsStreams = list.symbols.map(s => s.toLowerCase() + '@ticker').join('/');
  const wsUrl = _(...binanceWsRoutes.dataStream.stream(wsStreams));

  const appendUpdate = useCallback(
    (ticker: SymbolTicker) => {
      setUpdates(prev => ({ ...prev, [ticker.s]: ticker }));
    },
    [setUpdates],
  );

  const onMessage = useCallback(
    (e: MessageEvent<string>) => {
      let eventData: { stream: string; data: any };

      try {
        eventData = JSON.parse(e.data);
      } catch (err) {
        console.error('⚠️ Error parsing Binance event data.');
        console.error(err);

        setIsFetching(false);

        return;
      }

      isTicker(eventData.data) && appendUpdate(eventData.data);
      setIsFetching(false);
    },
    [appendUpdate],
  );
  const onError = useCallback(
    () => {
      setIsFetching(false);
    },
    [],
  );

  useWebSocket(wsUrl, { onMessage, onError });

  return (
    <Table>
      <Thead sticky>
        <Tr className="border-b">
          <Th>Symbol</Th>
          <Th numeric>Last Price</Th>
          <Th numeric>Bid Price</Th>
          <Th numeric>Ask Price</Th>
          <Th numeric>Price Change</Th>
        </Tr>
      </Thead>

      <Tbody>
        {!list.symbols.length ? (
          <Tr>
            <Td colSpan={5} className="text-subtle-foreground text-center">
              No symbols are being tracked.
            </Td>
          </Tr>
        ) : isFetching ? (
          <Tr>
            <Td colSpan={5} className="text-subtle-foreground text-center">
              Loading...
            </Td>
          </Tr>
        ) : (
          list.symbols.map(
            symbol => <Row key={symbol} symbol={symbol} ticker={updates[symbol]} />,
          )
        )}
      </Tbody>
    </Table>
  );
}

function Row({ symbol, ticker }: { symbol: string; ticker: SymbolTicker | undefined }) {
  const lastPrice = Number(ticker?.c);
  const bidPrice = Number(ticker?.b);
  const askPrice = Number(ticker?.a);
  const priceChange = Number(ticker?.P);

  return (
    <Tr className="border-b">
      <Td colSpan={ticker ? 1 : 5}>
        {symbol}
      </Td>

      {ticker && <>
        <Td numeric>
          {lastPrice.toFixed(4)}
        </Td>

        <Td numeric>
          {bidPrice.toFixed(4)}
        </Td>

        <Td numeric>
          {askPrice.toFixed(4)}
        </Td>

        <Td numeric>
          <PercentageBadge value={priceChange}>
            {priceChange.toFixed(2)}
          </PercentageBadge>
        </Td>
      </>}
    </Tr>
  );
}

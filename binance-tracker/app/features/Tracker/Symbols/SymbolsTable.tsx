import { useCallback, useMemo } from 'react';
import { produce } from 'immer';

import { binanceSwr, useQuery } from '_api/swr';
import { BinanceApi } from '_api/defs/binance';

import { useTracker } from '_app/context/Tracker/TrackerCtx';

import { Table, Tbody, Td, Thead, Tr } from '_ui/table';

import { SymbolButton } from '_features/Tracker/Symbols/SymbolButton';

export function SymbolsTable() {
  const { list, setLists, currentList, filter } = useTracker();
  const { data: symbols = [], isLoading } = useQuery(BinanceApi.$getExchangeSymbols, binanceSwr);

  const isAllChecked = useMemo(
    () => {
      return (symbols.length > 0) && symbols.every(s => list.symbols.includes(s));
    },
    [symbols, list.symbols],
  );

  const handleToggleAll = useCallback(
    () => {
      setLists(prev => produce(prev, lists => {
        const list = lists[currentList];
        const nextSymbols = isAllChecked ? [] : [...symbols];

        list.symbols = nextSymbols;
      }));
    },
    [setLists, currentList, isAllChecked, symbols],
  );

  return (
    <Table>
      <Thead sticky>
        <Tr className="border-b">
          <Td slim>
            <SymbolButton checked={isAllChecked} onClick={handleToggleAll} className="font-semibold text-primary">
              Symbol
            </SymbolButton>
          </Td>
        </Tr>
      </Thead>

      <Tbody>
        {isLoading ? (
          <Tr>
            <Td colSpan={5} className="text-subtle-foreground text-center">
              Loading...
            </Td>
          </Tr>
        ) : !symbols.length ? (
          <Tr>
            <Td colSpan={5} className="text-subtle-foreground text-center">
              No symbols found.
            </Td>
          </Tr>
        ) : (
          symbols.flatMap(s => {
            if (!s.toLowerCase().includes(filter.toLowerCase())) {
              return [];
            }

            return [<Row key={s} symbol={s} />];
          })
        )}
      </Tbody>
    </Table>
  );
}

function Row({ symbol }: { symbol: string }) {
  const { list, setLists, currentList } = useTracker();

  const isChecked = useMemo(
    () => {
      return list.symbols.includes(symbol);
    },
    [list.symbols, symbol],
  );

  const variant = isChecked ? 'accent_subtle' : 'ghost';

  const handleToggle = useCallback(
    () => {
      setLists(prev => produce(prev, lists => {
        const list = lists[currentList];
        const nextSymbols = isChecked ? list.symbols.filter(v => v !== symbol) : [...list.symbols, symbol];

        lists[currentList].symbols = nextSymbols;
      }));
    },
    [setLists, currentList, isChecked, symbol],
  );

  return (
    <Tr>
      <Td slim>
        <SymbolButton variant={variant} checked={isChecked} onClick={handleToggle}>
          {symbol}
        </SymbolButton>
      </Td>
    </Tr>
  );
}

import { createContext, createElement, type Dispatch, type ReactNode, type SetStateAction, useContext, useMemo, useState } from 'react';

import type { SymbolTicker } from '_api/types/binance-ws/symbols';

export interface TrackerUpdatesCtx {
  updates: Record<string, SymbolTicker>;
  setUpdates: Dispatch<SetStateAction<Record<string, SymbolTicker>>>;
}

const TrackerUpdatesCtx = createContext<TrackerUpdatesCtx | null>(null);

export function useTrackerUpdates() {
  const ctx = useContext(TrackerUpdatesCtx);

  if (ctx === null) {
    throw new Error('useTrackerUpdates must be used within [TrackerUpdatesCtx].');
  }

  return ctx;
}

export function TrackerUpdatesProvider({ children }: { children: ReactNode }) {
  const [updates, setUpdates] = useState({});

  const value = useMemo(
    () => ({ updates, setUpdates }),
    [updates, setUpdates],
  );

  return createElement(TrackerUpdatesCtx, { value, children });
}

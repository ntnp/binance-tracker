import { createContext, createElement, type Dispatch, type ReactNode, type SetStateAction, useContext, useMemo, useState } from 'react';

import type { List } from '_app/types/lists';

export interface TrackerCtx {
  lists: Record<string, List>;
  setLists: Dispatch<SetStateAction<Record<string, List>>>;

  currentList: string;
  setCurrentList: Dispatch<SetStateAction<string>>;

  filter: string;
  setFilter: Dispatch<SetStateAction<string>>;

  list: List;
}

const TrackerCtx = createContext<TrackerCtx | null>(null);

export function useTracker() {
  const ctx = useContext(TrackerCtx);

  if (ctx === null) {
    throw new Error('useTrackerCtx must be used within [TrackerCtx].');
  }

  return ctx;
}

export function TrackerProvider({ children }: { children: ReactNode }) {
  const [lists, setLists] = useState({ A: { name: 'A', symbols: [] } } as Record<string, List>);
  const [currentList, setCurrentList] = useState('A');
  const [filter, setFilter] = useState('');

  const list = lists[currentList];

  const value = useMemo(
    () => ({ lists, setLists, currentList, setCurrentList, list, filter, setFilter }),
    [lists, setLists, currentList, setCurrentList, list, filter, setFilter],
  );

  return createElement(TrackerCtx, { value, children });
}

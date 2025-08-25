import { useCallback } from 'react';

import type { List } from '_app/types/lists';

import { useTracker } from '_app/context/Tracker/TrackerCtx';

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '_ui/select';

export function WatchlistSelect() {
  const { lists, currentList, setCurrentList } = useTracker();

  const handleChange = useCallback(
    (name: string) => {
      const list = lists[name];

      if (list) {
        setCurrentList(name);
      }
    },
    [lists, setCurrentList],
  );

  return (
    <Select value={currentList} onValueChange={handleChange}>
      <SelectTrigger className="grow" aria-label="Select the currently visible list">
        <SelectValue placeholder="List" />
      </SelectTrigger>

      <SelectContent>
        {Object.values(lists).map(list => <Row key={list.name} {...{ list }} />)}
      </SelectContent>
    </Select>
  );
}

function Row({ list }: { list: List }) {
  return (
    <SelectItem value={list.name}>List {list.name}</SelectItem>
  );
}

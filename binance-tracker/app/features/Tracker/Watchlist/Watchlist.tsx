import { type ComponentPropsWithRef } from 'react';

import { HStack, VStack } from '_ui/box';
import { Paper } from '_ui/paper';
import { H1 } from '_ui/typography';

import { WatchlistSelect } from '_features/Tracker/Watchlist/WatchlistSelect';
import { WatchlistAdd } from '_features/Tracker/Watchlist/WatchlistAdd';
import { WatchlistTable } from '_features/Tracker/Watchlist/WatchlistTable';

interface WatchlistProps extends ComponentPropsWithRef<typeof Paper> {
  children?: never;
}

export function Watchlist({ ...props }: WatchlistProps) {
  return (
    <Paper {...props}>
      <H1>Lists</H1>

      <HStack className="shrink-0 gap-2 lg:gap-4">
        <WatchlistSelect />
        <WatchlistAdd />
      </HStack>

      <VStack className="grow shrink overflow-auto">
        <WatchlistTable />
      </VStack>
    </Paper>
  );
}

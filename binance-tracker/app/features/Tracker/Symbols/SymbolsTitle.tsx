import { type ComponentPropsWithRef } from 'react';

import { useTracker } from '_app/context/Tracker/TrackerCtx';

import { H1 } from '_ui/typography';

interface SymbolsTitleProps extends ComponentPropsWithRef<typeof H1> {
  children?: never;
}

export function SymbolsTitle({ ...props }: SymbolsTitleProps) {
  const { currentList } = useTracker();

  return (
    <H1 {...props}>
      List {currentList} Symbols
    </H1>
  );
}

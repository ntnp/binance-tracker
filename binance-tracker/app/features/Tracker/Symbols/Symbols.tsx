import { type ComponentPropsWithRef } from 'react';

import { HStack, VStack } from '_ui/box';
import { Paper } from '_ui/paper';

import { SymbolsTitle } from '_features/Tracker/Symbols/SymbolsTitle';
import { SymbolsFilter } from '_features/Tracker/Symbols/SymbolsFilter';
import { SymbolsTable } from '_features/Tracker/Symbols/SymbolsTable';

interface SymbolsProps extends ComponentPropsWithRef<typeof Paper> {
  children?: never;
}

export function Symbols({ ...props }: SymbolsProps) {
  return (
    <Paper {...props}>
      <SymbolsTitle />

      <HStack className="shrink-0">
        <SymbolsFilter />
      </HStack>

      <VStack className="grow shrink overflow-auto">
        <SymbolsTable />
      </VStack>
    </Paper>
  );
}

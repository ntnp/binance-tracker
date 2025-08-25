import { type ChangeEvent, useCallback, useState } from 'react';
import { useDebounce } from 'use-debounce';

import { useTracker } from '_app/context/Tracker/TrackerCtx';

import { Input, InputField, InputSlot } from '_ui/input';

import { SearchIcon } from 'lucide-react';

export function SymbolsFilter() {
  const { filter, setFilter } = useTracker();

  const [value, setValue] = useState(filter);
  const [setSafeFilter] = useDebounce(setFilter, 500);

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
      setSafeFilter(e.target.value);
    },
    [setSafeFilter],
  );

  return (
    <Input className="grow">
      <InputField placeholder="Search" value={value} onChange={handleChange} />

      <InputSlot through>
        <SearchIcon aria-hidden />
      </InputSlot>
    </Input>
  );
}

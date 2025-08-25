import { useCallback, useRef, useState } from 'react';
import { produce } from 'immer';

import { useTracker } from '_app/context/Tracker/TrackerCtx';

import { getNextLetter } from '_app/utils/lists';

import { Button } from '_ui/button';

import { CheckIcon, PlusIcon, XIcon } from 'lucide-react';

type Status = typeof Status[keyof typeof Status]

const Status = {
  Idle: 'idle',
  Success: 'success',
  Error: 'error',
};

export function WatchlistAdd() {
  const { lists, setLists, currentList, setCurrentList } = useTracker();

  const [status, setStatus] = useState<Status>(Status.Idle);
  const statusTimeoutRef = useRef<number | undefined>(undefined);

  const { variant, disabled, ButtonIcon } = ({
    [Status.Idle]: {
      variant: 'accent',
      disabled: false,

      ButtonIcon: PlusIcon,
    },
    [Status.Success]: {
      variant: 'success',
      disabled: true,

      ButtonIcon: CheckIcon,
    },
    [Status.Error]: {
      variant: 'destructive',
      disabled: true,

      ButtonIcon: XIcon,
    },
  } as const)[status];

  const handleAdd = useCallback(
    () => {
      clearTimeout(statusTimeoutRef.current);

      const lastLetter = Object.keys(lists).at(-1);
      const nextLetter = lastLetter ? getNextLetter(lastLetter) : undefined;

      if (!nextLetter || nextLetter in lists) {
        setStatus(Status.Error);
      }
      else {
        setLists(prev => produce(prev, lists => {
          const name = nextLetter;
          const symbols = [...lists[currentList].symbols];

          lists[nextLetter] = { name, symbols };
        }));
        setCurrentList(nextLetter);

        setStatus(Status.Success);
      }

      statusTimeoutRef.current = (
        setTimeout(() => setStatus(Status.Idle), 1000)
      );
    },
    [lists, setLists, currentList, setCurrentList],
  );

  return (
    <Button variant={variant} icon disabled={disabled} aria-label="Add new list" onClick={handleAdd} className="opacity-100">
      <ButtonIcon aria-hidden />
    </Button>
  );
}

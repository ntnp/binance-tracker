import { tv } from 'tailwind-variants';

import { hStack } from '_ui/box/styles';
import { inputRoot } from '_ui/input/styles';
import { text } from '_ui/typography/styles';

export const selectTrigger = tv({
  extend: inputRoot,
  base: [
    'items-center',
    'outline-0',
  ],
});

export const selectValue = tv({
  extend: text,
  base: [
    'inline-flex grow pt-0.5',
    'truncate',

    'first:pl-3',
    'last:pr-3',

    '[[data-placeholder]_&]:text-subtle-foreground',
  ],
});

export const selectContent = tv({
  base: [
    'relative z-50 max-h-(--radix-select-content-available-height) min-w-32',
    'border rounded-md shadow-md overflow-x-hidden overflow-y-auto',
    'bg-popover border-border text-popover-foreground',
    'origin-(--radix-select-content-transform-origin) ',

    'data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95',
    'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95',
    'data-[side=bottom]:translate-y-1 data-[side=bottom]:slide-in-from-top-2',
    'data-[side=left]:-translate-x-1 data-[side=left]:slide-in-from-right-2',
    'data-[side=right]:translate-x-1 data-[side=right]:slide-in-from-left-2',
    'data-[side=top]:-translate-y-1 data-[side=top]:slide-in-from-bottom-2',
  ],
});

export const selectViewport = tv({
  base: [
    'p-1 h-(--radix-select-trigger-height) min-w-(--radix-select-trigger-width) w-full',
    'scroll-my-1',
  ],
});

export const selectItem = tv({
  extend: hStack,
  base: [
    'items-center gap-3 relative pl-3 pr-8 py-2 w-full',
    'text-sm/normal rounded-sm outline-hidden select-none cursor-default',
    'text-primary',

    'focus:bg-background-subtle',
    'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',

    '[&_svg]:shrink-0 [&_svg]:size-4 [&_svg]:pointer-events-none',
    '[&_svg]:text-primary',
  ],
});

export const selectItemIndicator = tv({
  extend: hStack,
  base: [
    'items-center justify-center absolute right-2 size-3.5',
  ],
});

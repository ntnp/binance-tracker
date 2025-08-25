import { tv } from 'tailwind-variants';

import { hStack } from '_ui/box/styles';

export const inputRoot = tv({
  extend: hStack,
  base: [
    'grow items-stretch',
    'h-9',
    'lg:h-10',
    'border ring-offset-2 rounded-md',
    'border-border text-input-foreground ring-ring ring-offset-background',
    'transition-colors duration-200 ease-in-out',

    'focus-within:ring-2',

    '[&_svg]:size-4',
    '[&_svg]:text-input-foreground',
  ],
});

export const inputSlot = tv({
  extend: hStack,
  base: [
    'shrink-0 items-center justify-center',
    'px-2 h-full',
    'lg:px-3',

    'first:rounded-l-md',
    'last:rounded-r-md',
  ],

  variants: {
    through: { true: 'pointer-events-none' },
  },
});

export const inputField = tv({
  base: [
    'grow shrink pt-0.5',
    'outline-0',

    'placeholder:text-input-placeholder',
    'first:pl-2',
    'first:lg:pl-3',
    'last:pr-2',
    'last:lg:pr-3',
  ],
});

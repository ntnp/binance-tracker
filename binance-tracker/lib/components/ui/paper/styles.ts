import { tv } from 'tailwind-variants';

import { vStack } from '_ui/box/styles';

export const paperRoot = tv({
  extend: vStack,
  base: [
    'gap-4 p-4',
    'lg:p-6',
    'rounded-lg shadow-lg dark:border dark:shadow-none',
    'bg-background border-muted',
  ],
});

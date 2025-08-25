import { tv } from 'tailwind-variants';

import { variantPropsToForward } from '_utils/ui/tailwind';

import { hStack } from '_ui/box/styles';

export const buttonRoot = tv({
  extend: hStack,
  base: [
    'shrink-0 items-center justify-center',
    'gap-2 px-2 h-9',
    'lg:gap-3 lg:px-3 lg:h-10',
    'font-medium truncate outline-0 rounded-md cursor-pointer',
    'ring-ring',
    'transition-colors duration-200 ease-in-out',
  ],

  variants: {
    variant: {
      primary: [
        'bg-primary hover:bg-primary/85 focus:bg-primary/85 text-primary-foreground',
      ],
      subtle: [
        'bg-gray-3 hover:bg-gray-4 focus:bg-gray-4 text-gray-11',
      ],
      ghost: [
        'hover:bg-gray-3 focus:bg-gray-3 text-gray-11',
      ],
      accent: [
        'bg-accent-9 hover:bg-accent-9/85 focus:bg-accent-9/85 text-white',
      ],
      accent_subtle: [
        'bg-accent-3 hover:bg-accent-4 focus:bg-accent-4 text-accent-11',
      ],
      success: [
        'bg-green-9 hover:bg-green-9/85 focus:bg-green-9/85 text-white',
      ],
      destructive: [
        'bg-red-9 hover:bg-red-9/85 focus:bg-red-9/85 text-white',
      ],
    },

    slim: { true: 'p-0 lg:p-0 h-auto lg:h-auto' },
    icon: { true: 'p-0 lg:p-0 w-9 lg:w-10' },
    disabled: { true: 'opacity-50 pointer-events-none' },

    [variantPropsToForward]: {
      disabled: true,
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});

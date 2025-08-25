import { tv } from 'tailwind-variants';

import { text } from '_ui/typography/styles';

export const badgeRoot = tv({
  extend: text,
  base: [
    'shrink-0',
    'gap-2 px-2 py-1',
    'font-medium rounded-sm',
    'transition-colors duration-200 ease-in-out',
  ],

  variants: {
    variant: {
      subtle: '',
    },
    tint: {
      gray: '',
      green: '',
      red: '',
    },
  },
  defaultVariants: {
    variant: 'subtle',
    tint: 'gray',
  },

  compoundVariants: [
    { variant: 'subtle', tint: 'gray', className: 'bg-gray-3 text-gray-9 [&_svg]:text-gray-9' },
    { variant: 'subtle', tint: 'green', className: 'bg-green-3 text-green-9 [&_svg]:text-green-9' },
    { variant: 'subtle', tint: 'red', className: 'bg-red-3 text-red-9 [&_svg]:text-red-9' },
  ],
});

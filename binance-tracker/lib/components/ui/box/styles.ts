import { tv } from 'tailwind-variants';

export const flex = tv({
  base: 'flex',
});

export const hStack = tv({
  extend: flex,

  variants: {
    reverse: {
      true: 'flex-row-reverse',
      false: 'flex-row',
    },
  },
});

export const vStack = tv({
  extend: flex,

  variants: {
    reverse: {
      true: 'flex-col-reverse',
      false: 'flex-col',
    },
  },
});

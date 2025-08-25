import { tv } from 'tailwind-variants';

export const text = tv({
  base: '',
});

export const heading = tv({
  extend: text,
  base: 'leading-normal',

  variants: {
    as: {
      h1: 'font-bold text-xl lg:text-2xl',
      h2: 'font-bold text-lg lg:text-xl',
    },
  },
});

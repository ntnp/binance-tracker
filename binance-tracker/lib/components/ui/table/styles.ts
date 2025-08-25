import { tv } from 'tailwind-variants';

export const tableRoot = tv({
  base: '',
});

export const tableHead = tv({
  base: [
    'bg-background-subtle',
  ],

  variants: {
    sticky: { true: 'sticky top-0 left-0 w-full' },
  },
});

export const tableBody = tv({
  base: '',
});

export const tableRow = tv({
  base: [
    '[thead_&]:border-border',
    '[tbody_&]:border-background-subtle',
  ],
});

export const tableHeading = tv({
  base: [
    'p-3',
    'lg:p-4',
    'font-semibold text-left',
  ],

  variants: {
    numeric: { true: 'tabular-nums text-right' },
    slim: { true: 'p-0 lg:p-0' },
  },
});

export const tableData = tv({
  base: [
    'p-3',
    'lg:p-4',
    'text-left',
  ],

  variants: {
    numeric: { true: 'tabular-nums text-right' },
    slim: { true: 'p-0 lg:p-0' },
  },
});

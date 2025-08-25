import { type ComponentPropsWithRef } from 'react';

import { Badge } from '_ui/badge';

interface PercentageBadgeProps extends ComponentPropsWithRef<typeof Badge> {
  value: number;

  tint?: never;
  children: string | number;
}

export function PercentageBadge({ value, children, ...props }: PercentageBadgeProps) {
  const isPos = value > 0;
  const isNeg = value < 0;

  const tint = isNeg ? 'red' : isPos ? 'green' : 'gray';

  return (
    <Badge {...props} tint={tint}>{children}%</Badge>
  );
}

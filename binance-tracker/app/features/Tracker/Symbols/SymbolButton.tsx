import { type ComponentPropsWithRef, type ReactNode } from 'react';

import { cn } from '_utils/ui/tailwind';

import { Button } from '_ui/button';
import { VStack } from '_ui/box';
import { CheckIcon } from 'lucide-react';

interface SymbolButtonProps extends ComponentPropsWithRef<typeof Button> {
  checked: boolean;

  children: ReactNode;
}

export function SymbolButton({ checked, children, ...props }: SymbolButtonProps) {
  const className = cn(
    'justify-start gap-3 p-3 lg:gap-4 lg:p-4 w-full font-normal rounded-none',
    props.className,
  );

  return (
    <Button variant="subtle" {...props} slim className={className}>
      <VStack
        data-checked={checked}
        className="items-center justify-center bg-input border border-border text-white rounded-sm size-4 lg:size-5 data-[checked=true]:bg-accent-9 data-[checked=true]:border-accent-9"
      >
        {checked && <CheckIcon className="size-3 lg:size-4 text-current" />}
      </VStack>

      {children}
    </Button>
  );
}

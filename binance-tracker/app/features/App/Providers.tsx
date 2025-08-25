import { type ReactNode } from 'react';

import { ThemeProviders } from '_features/App/ThemeProviders';

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProviders>
      {children}
    </ThemeProviders>
  );
}

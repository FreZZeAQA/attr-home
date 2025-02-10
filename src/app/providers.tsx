import React from 'react';

import { GlobalProvider } from '@/contexts/contextGlobal';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <GlobalProvider>
      {children}
    </GlobalProvider>
  );
}
import type { ReactNode } from 'react';
import { StoreProvider } from '@/libs/redux/provider/StoreProvider';
import AppFooter from './AppFooter';
import AppHeader from './AppHeader';
import '@/app/tailwind.css';

function AppLayout({ children }: { children: ReactNode }) {
  return (
    <StoreProvider>
      <AppHeader />
      <main>{children}</main>
      <AppFooter />
    </StoreProvider>
  );
}

export default AppLayout;

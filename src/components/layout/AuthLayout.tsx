import type { ReactNode } from 'react';
import { StoreProvider } from '../../libs/redux/provider/StoreProvider';
import AuthHeader from './AuthHeader';
import AuthFooter from './AuthFooter';
import '@/app/tailwind.css';

function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <StoreProvider>
      <AuthHeader />
      <main>{children}</main>
      <AuthFooter />
    </StoreProvider>
  );
}

export default AuthLayout;

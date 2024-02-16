import type { ReactNode } from "react";
import { StoreProvider } from "../provider/StoreProvider";
import AppFooter from "./AppFooter";
import AppHeader from "./AppHeader";

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

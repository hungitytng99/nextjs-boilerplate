import type { ReactNode } from "react";
import { StoreProvider } from "../provider/StoreProvider";

function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <StoreProvider>
      <div>
        <div>Header AuthLayout</div>
        <main>{children}</main>
        <div>Footer AuthLayout</div>
      </div>
    </StoreProvider>
  );
}

export default AuthLayout;

import type { ReactNode } from "react";
import { StoreProvider } from "../provider/StoreProvider";
import AuthHeader from "./AuthHeader";
import AuthFooter from "./AuthFooter";

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

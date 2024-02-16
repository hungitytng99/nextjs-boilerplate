import type { ReactNode } from "react";

function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <div>Header AppLayout</div>
      <main>{children}</main>
      <div>Footer AppLayout</div>
    </div>
  );
}

export default AppLayout;

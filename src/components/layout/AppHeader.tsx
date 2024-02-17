"use client";

import { selectUser } from "@/lib/redux/slices";
import { useAppSelector } from "@/lib/redux/store/hook";

function AppHeader() {
  const userLogined = useAppSelector(selectUser);
  return (
    <div>
      <div>{userLogined.name}</div>
      AppHeader <br />
    </div>
  );
}

export default AppHeader;

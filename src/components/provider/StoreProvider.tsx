"use client";

import { reduxStore } from "@/lib/redux/store/store";
import { Provider } from "react-redux";

export const StoreProvider = (props: React.PropsWithChildren) => {
  return <Provider store={reduxStore}>{props.children}</Provider>;
};

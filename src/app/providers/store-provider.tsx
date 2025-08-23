import type { PropsWithChildren } from "react";

import { Provider } from "mobx-react";

import { cityStore } from "@/entities/city";
import { weatherStore } from "@/features/weather";

interface Stores {
  cityStore: typeof cityStore;
  weatherStore: typeof weatherStore;
}

export const StoreProvider = ({ children }: PropsWithChildren) => {
  const stores: Stores = {
    cityStore,
    weatherStore,
  };
  return <Provider {...stores}>{children}</Provider>;
};

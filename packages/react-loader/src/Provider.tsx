import React, { useMemo, FC } from "react";
import { CacheContext, createCacheStore, CacheStore } from "./cache";

type Props = {
  config?: {
    provider?: CacheStore;
  };
};

export const Provider: FC<Props> = ({ children, config }) => {
  const cache = useMemo(() => config?.provider ?? createCacheStore(), [config?.provider]);

  return <CacheContext.Provider value={cache}>{children}</CacheContext.Provider>;
};

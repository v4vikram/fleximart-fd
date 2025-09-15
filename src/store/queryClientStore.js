// store/queryClientStore.js
import { create } from "zustand";
import { QueryClient } from "@tanstack/react-query";

export const useQueryClientStore = create(() => ({
  queryClient: new QueryClient(),
}));

import { mountStoreDevtool } from "simple-zustand-devtools";
import { create } from "zustand";
import type { SearchModelStore } from "../hooks/SearchModelStore";

const useSelectedSearchStore = create<SearchModelStore>(set => ({
  search: null,
  handleSearch: (searchParam: string) => set(()=> ({ search: searchParam })),
  handleSearchClear: () => set(() => ({search: null}))
}));

if (process.env.NODE_ENV == "development") {
  mountStoreDevtool('useSelectedSearchStore', useSelectedSearchStore);
}

export default useSelectedSearchStore;
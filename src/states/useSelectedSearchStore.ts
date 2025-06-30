import { mountStoreDevtool } from "simple-zustand-devtools";
import { create } from "zustand";

export interface SearchModelStore {
  search: string | null;
  handleSearch: (searchParam: string) => void;
  handleSearchClear: () => void;
}

const useSelectedSearchStore = create<SearchModelStore>(set => ({
  search: null,
  handleSearch: (searchParam: string) => set(()=> ({ search: searchParam })),
  handleSearchClear: () => set(() => ({search: null}))
}));

if (process.env.NODE_ENV == "development") {
  mountStoreDevtool('useSelectedSearchStore', useSelectedSearchStore);
}

export default useSelectedSearchStore;
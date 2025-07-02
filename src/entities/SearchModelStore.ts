
export interface SearchModelStore {
  search: string | null;
  handleSearch: (searchParam: string) => void;
  handleSearchClear: () => void;
}

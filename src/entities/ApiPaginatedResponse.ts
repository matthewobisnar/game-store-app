
export interface ApiPaginatedResponse<T> {
  count: number;
  results: T[];
}

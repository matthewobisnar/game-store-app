import type { AxiosRequestConfig } from "axios";
import apiClient from "./api-client";
import type { ApiPaginatedResponse } from "@/hooks/useFetchData";

export class ApiClientService<T> {
  private endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  setUri(uri: string) : this {
    this.endpoint = this.endpoint + "/" + uri;
    return this;
  }

  getAll(): Promise<T[]> {
    return apiClient.get<ApiPaginatedResponse<T>>(this.endpoint).then(response => response.data.results)
  }

  getOne(): Promise<T> {
    return apiClient.get<T>(this.endpoint).then(response => response.data)
  }

  getAllWithParams(config: AxiosRequestConfig): Promise<T[]>  {
    return apiClient.get<ApiPaginatedResponse<T>>(this.endpoint, config)
    .then(response => response.data.results)
  }
}
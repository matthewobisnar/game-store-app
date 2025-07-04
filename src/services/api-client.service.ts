import type { AxiosRequestConfig } from "axios";
import apiClient from "./api-client";
import type { ApiPaginatedResponse } from "@/entities/ApiPaginatedResponse";

export class ApiClientService<T> {
  private endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll(): Promise<T[]> {
    return apiClient.get<ApiPaginatedResponse<T>>(this.endpoint).then(response => response.data.results)
  }

  getOne(uri: string): Promise<T> {
    return apiClient.get<T>(`${this.endpoint}/${uri}`).then(response => response.data)
  }

  getAllWithParams(config: AxiosRequestConfig): Promise<T[]>  {
    return apiClient.get<ApiPaginatedResponse<T>>(this.endpoint, config)
    .then(response => response.data.results)
  }
}
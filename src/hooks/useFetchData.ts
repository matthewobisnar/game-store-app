import apiClient from "@/services/api-client";
import { CanceledError, type AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";
import { useErrorBoundary } from "react-error-boundary";
import type { ApiPaginatedResponse } from "../entities/ApiPaginatedResponse";

const useFetchData = <T,>(uri:string, requestConfig?: AxiosRequestConfig, deps?: any[]) => {
  
    const [ data, setData ] = useState<T[]>([]);
    const [ loading, setLoading ] = useState<boolean>(false);
    const { showBoundary } = useErrorBoundary();

    useEffect(() => {
  
      setLoading(true);
  
      const controller = new AbortController();
      
      apiClient.get<ApiPaginatedResponse<T>>(uri, {
          signal: controller.signal,
          ...requestConfig
      })
      .then(response => {
          setData(response.data.results);
          setLoading(false);
      })
      .catch(error => {
  
          if (error instanceof CanceledError) return;
          showBoundary(error);
          setLoading(false);
      
      });
  
      
      return () => controller.abort();
  
    }, deps ? [...deps]: []);
  
    return {
      data, 
      loading, 
      setLoading
    }

  return {}
}

export default useFetchData
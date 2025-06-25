import apiClient from "@/services/api-client";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import { useErrorBoundary } from "react-error-boundary";

export interface ApiPaginatedResponse<T> {
    count: number;
    results: T[]
}

const useFetchData = <T,>(uri:string) => {
  
    const [ data, setData ] = useState<T[]>([]);
    const [ loading, setLoading ] = useState<boolean>(false);
    const { showBoundary } = useErrorBoundary();
  
    useEffect(() => {
  
      setLoading(true);
  
      const controller = new AbortController();
      
      apiClient.get<ApiPaginatedResponse<T>>(uri, {
          signal: controller.signal
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
  
    }, []);
  
    return {
      data, 
      loading, 
      setLoading
    }

  return {}
}

export default useFetchData
import apiClient from "@/services/api-client";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import { useErrorBoundary } from "react-error-boundary";

export interface GenreModel {
    id: number;
    name: string;
    slug: string;
    games_count: number;
    image_background: string;
}

export interface GenrePaginatedModel {
    count: number;
    results: GenreModel[]
}

const useGenres = () => {
  
    const [ genres, setGenres ] = useState<GenreModel[]>([]);
    const [ loading, setLoading ] = useState<boolean>(false);
    const { showBoundary } = useErrorBoundary();
  
    useEffect(() => {
  
      setLoading(true);
  
      const controller = new AbortController();
      
      apiClient.get<GenrePaginatedModel>('/genres', {
          signal: controller.signal
      })
      .then(response => {
          setGenres(response.data.results);
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
      genres, 
      loading, 
      setLoading
    }

  return {}
}

export default useGenres
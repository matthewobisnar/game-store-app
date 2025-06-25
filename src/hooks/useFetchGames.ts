import apiClient from '@/services/api-client';
import { CanceledError } from 'axios';
import { useEffect, useState } from 'react'
import { useErrorBoundary } from 'react-error-boundary';

export interface PlatformModel {
    id: number;
    slug: string;
    name: string;
}

export interface platformObject {
    platform: PlatformModel;
}

export interface GameModel {
    id: number;
    name: string;
    background_image: string;
    platforms: platformObject[];
}




export interface GamesPaginationModel {
    count:number;
    results: GameModel[]
}

const useFetchGames = () => {

  const [ games, setGames ] = useState<GameModel[]>([]);
  const [ loading, setLoading ] = useState<boolean>(false);
  const { showBoundary } = useErrorBoundary();

  useEffect(() => {

    setLoading(true);

    const controller = new AbortController();
    
    apiClient.get<GamesPaginationModel>('/games', {
        signal: controller.signal
    })
    .then(response => {
        setGames(response.data.results);
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
    games, 
    loading, 
    setLoading
  }
}

export default useFetchGames;
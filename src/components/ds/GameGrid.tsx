"use client";

import apiClient from '@/services/api-client';
import { CanceledError } from 'axios';
import { useEffect, useState } from 'react'
import { useErrorBoundary } from 'react-error-boundary';

interface GameModel {
    id: number;
    name: string
}

interface GamesPaginationModel {
    count:number;
    results: GameModel[]
}

const GameGrid = () => {
  
  const [games, setGames] = useState<GameModel[]>([]);
  const { showBoundary } = useErrorBoundary();


  useEffect(() => {
    
    const controller = new AbortController();
    
    apiClient.get<GamesPaginationModel>('/games', {
        signal: controller.signal
    })
    .then(response => setGames(response.data.results))
    .catch(error => {
        if (error instanceof CanceledError) return;

        showBoundary(error);
    });

    
    return () => controller.abort();
  },[]);

  return (
    <ul>
        {games.map((gameItem: GameModel) => (
            <li key={gameItem.id}>{gameItem.name}</li>
        ))}
    </ul>
  )
}

export default GameGrid;
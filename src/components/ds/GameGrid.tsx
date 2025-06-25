"use client";

import useFetchGames, { type GameModel } from '@/hooks/useFetchGames';
import { Text } from '@chakra-ui/react';

const GameGrid = () => {

  const { games, loading } = useFetchGames();

  return (
    <ul>
        {loading && <Text>Loading...</Text> }
        {games.map((gameItem: GameModel) => (
            <li key={gameItem.id}>{gameItem.name}</li>
        ))}
    </ul>
  )
}

export default GameGrid;
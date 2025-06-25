"use client";

import useFetchGames, { type GameModel } from '@/hooks/useFetchGames';
import { SimpleGrid, Text } from '@chakra-ui/react';
import GameCard from './GameCard';


const gridSizeConfig ={
    sm: 1,
    md: 2,
    lg: 3,
    xl: 4
}
const GameGrid = () => {

  const { games, loading } = useFetchGames();

  return (
    <>
        {loading && <Text>Loading...</Text> }
        {
            !loading && (
                <SimpleGrid columns={gridSizeConfig} gap={10} padding={`10px`}>
                    {games.map((gameItem: GameModel) => (
                        <GameCard key={gameItem.id} game={gameItem}/>
                    ))}
                </SimpleGrid>
            )
        }
    </>
  )
}

export default GameGrid;
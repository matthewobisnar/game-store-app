"use client";

import useFetchGames, { type GameModel } from '@/hooks/useFetchGames';
import { SimpleGrid } from '@chakra-ui/react';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';

const gridSizeConfig = {
    sm: 1,
    md: 2,
    lg: 3,
    xl: 4
}

const GameGrid = () => {

  const { games, loading } = useFetchGames();
const indices = [...Array(10).keys()];

  return (
    <>
        <SimpleGrid columns={gridSizeConfig} gap={10} padding={`10px`}>
            {loading && (indices.map((_) => (<GameCardSkeleton key={_}/>)))}
            {!loading && (games.map((gameItem: GameModel) => (
                <GameCard key={gameItem.id} game={gameItem}/>
            )))}
        </SimpleGrid>
    </>
  )
}

export default GameGrid;
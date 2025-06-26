"use client";

import { SimpleGrid } from '@chakra-ui/react';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import useGames, { type GameModel } from '@/hooks/useGames';
import { useStoreContext } from '@/contexts/StoreContextProvider';

const indices = [...Array(10).keys()];
const gridSizeConfig = {
    sm: 1,
    md: 2,
    lg: 3,
    xl: 4
}

const GameGrid = () => {

  const { selectedGenre, selectedPlatform } = useStoreContext();
  const { data: games, loading } = useGames(selectedGenre, selectedPlatform);

  return (
    <>
        <SimpleGrid columns={gridSizeConfig} gap={10}>
            {loading && (indices.map((_) => (<GameCardSkeleton key={_}/>)))}
            {!loading && (games?.map((gameItem: GameModel) => (
                <GameCard key={gameItem.id} game={gameItem}/>
            )))}
        </SimpleGrid>
    </>
  )
}

export default GameGrid;
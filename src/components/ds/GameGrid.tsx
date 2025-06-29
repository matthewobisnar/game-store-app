"use client";

import { SimpleGrid } from '@chakra-ui/react';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import { type GameModel } from '@/hooks/useGames';
import { useStoreContext } from '@/contexts/StoreContextProvider';
import useFetchGames from '@/hooks/useFetchGames';

const indices = [...Array(10).keys()];
const gridSizeConfig = {
    sm: 1,
    md: 2,
    lg: 3,
    xl: 4
}

const GameGrid = () => {

  const { selectedGenre, selectedPlatform, selectedOrder, search } = useStoreContext();
  const { data: games, isLoading }= useFetchGames(selectedGenre, selectedPlatform, selectedOrder, search);

  return (
    <>
        <SimpleGrid columns={gridSizeConfig} gap={10}>
            {isLoading && (indices.map((_) => (<GameCardSkeleton key={_}/>)))}
            {!isLoading && (games?.map((gameItem: GameModel) => (
                <GameCard key={gameItem.id} game={gameItem}/>
            )))}
        </SimpleGrid>
    </>
  )
}

export default GameGrid;
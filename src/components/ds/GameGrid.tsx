"use client";

import { SimpleGrid } from '@chakra-ui/react';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import { type GameModel } from '@/hooks/useGames';
import useSelectedGenreStore from '@/states/useSelectedGenreStore';
import useSelectedOrderStore from '@/states/useSelectedOrderStore';
import useSelectedPlatformStore from '@/states/useSelectedPlatformStore';
import useSelectedSearchStore from '@/states/useSelectedSearchStore';
import useFetchGamesQuery from '@/hooks/useFetchGamesQuery';
import { Link } from 'react-router-dom';

const indices = [...Array(10).keys()];
const gridSizeConfig = {
    sm: 1,
    md: 2,
    lg: 3,
    xl: 4
}

const GameGrid = () => {

  const { selectedGenre } = useSelectedGenreStore();
  const { selectedOrder } = useSelectedOrderStore();
  const { selectedPlatform } = useSelectedPlatformStore();
  const { search } = useSelectedSearchStore();

  const { data: games, isLoading }= useFetchGamesQuery(selectedGenre, selectedPlatform, selectedOrder, search);

  return (
    <>
        <SimpleGrid columns={gridSizeConfig} gap={10}>
            {isLoading && (indices.map((_) => (<GameCardSkeleton key={_}/>)))}
            {!isLoading && (games?.map((gameItem: GameModel) => (
              <Link to={`/games/${gameItem.id}`}>
                <GameCard key={gameItem.id} game={gameItem}/>
              </Link>
            )))}
        </SimpleGrid>
    </>
  )
}

export default GameGrid;
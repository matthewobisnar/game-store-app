import { SimpleGrid } from '@chakra-ui/react'
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import type { GameModel } from '@/hooks/useGames';
import { Fragment } from 'react/jsx-runtime';
import InfiniteScroll from 'react-infinite-scroll-component';
import useSelectedGenreStore from '@/states/useSelectedGenreStore';
import useSelectedOrderStore from '@/states/useSelectedOrderStore';
import useSelectedPlatformStore from '@/states/useSelectedPlatformStore';
import useSelectedSearchStore from '@/states/useSelectedSearchStore';
import useInfiniteFetchGamesQuery from '@/hooks/useInfiniteFetchGamesQuery';

const indices = [...Array(10).keys()];
const gridSizeConfig = {
    sm: 1,
    md: 2,
    lg: 3,
    xl: 4
}

const GameGridInfinite = () => {

  const { selectedGenre } = useSelectedGenreStore();
  const { selectedOrder } = useSelectedOrderStore();
  const { selectedPlatform } = useSelectedPlatformStore();
  const { search } = useSelectedSearchStore();


  const { data: gameGroup, isLoading, fetchNextPage, hasNextPage }= useInfiniteFetchGamesQuery(selectedGenre, selectedPlatform, selectedOrder, search);

  const infinitScrollLength = gameGroup?.pages.reduce((total, page) => total += page.length, 0) || 0;

  return (
    <>
      <InfiniteScroll 
        dataLength={infinitScrollLength}
        hasMore={!!hasNextPage}
        next={() => fetchNextPage()}
        loader={<p>Loading...</p>}
      >
        <SimpleGrid columns={gridSizeConfig} gap={10}>
          {isLoading && (indices.map((_) => (<GameCardSkeleton key={_}/>)))}
          {!isLoading && (gameGroup?.pages.map((games: GameModel[], index: number) => (
            <Fragment key={index}>
              {games.map((gameItem:GameModel) => (
                  <GameCard key={gameItem.id} game={gameItem}/>
              ))}
            </Fragment>
          )))}
        </SimpleGrid>
      </InfiniteScroll>
    </>
  )
}

export default GameGridInfinite;
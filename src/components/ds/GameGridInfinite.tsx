import { useStoreContext } from '@/contexts/StoreContextProvider';
import useInfiniteFetchGames from '@/hooks/useInfiniteFetchGames';
import { SimpleGrid } from '@chakra-ui/react'
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import type { GameModel } from '@/hooks/useGames';
import { Fragment } from 'react/jsx-runtime';
import InfiniteScroll from 'react-infinite-scroll-component';

const indices = [...Array(10).keys()];
const gridSizeConfig = {
    sm: 1,
    md: 2,
    lg: 3,
    xl: 4
}

const GameGridInfinite = () => {

  const { selectedGenre, selectedPlatform, selectedOrder, search } = useStoreContext();
  const { data: gameGroup, isLoading, fetchNextPage, hasNextPage }= useInfiniteFetchGames(selectedGenre, selectedPlatform, selectedOrder, search);

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
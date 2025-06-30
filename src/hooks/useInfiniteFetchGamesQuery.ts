import { useInfiniteQuery } from "@tanstack/react-query"
import type { GenreModel } from "./useGenresQuery"
import type { PlatformModel } from "./usePlatformsQuery"
import type { OrderModel } from "@/contexts/StoreContextProvider"
import { GAME_API_URI } from "@/services/api-client"
import { ApiClientService } from "@/services/api-client.service"
import type { GameModel } from "./useGames"

const apiClientService = new ApiClientService<GameModel>(GAME_API_URI)


const useInfiniteFetchGamesQuery = (
   selectedGenre?: GenreModel | null,
    selectedPlatform?: PlatformModel | null,
    selectedOrder?: OrderModel | null,
    search?: string | null
) => {

    const TOPICS =  [ 
      GAME_API_URI,
      selectedGenre?.id, 
      selectedPlatform?.id, 
      (selectedOrder?.state+""+selectedOrder?.value),
      search
    ].filter(topic => 
        topic != null && 
        topic != undefined && 
        topic?.toString().length > 0 &&
        topic != 'undefinedundefined'
    )

  return useInfiniteQuery<GameModel[], Error>({
    queryKey: TOPICS,
    queryFn: ({ pageParam }) => apiClientService.getAllWithParams({
      params: { 
          genres: selectedGenre?.id,
          parent_platforms: selectedPlatform?.id,
          ordering: (selectedOrder?.state+""+selectedOrder?.value),
          search: search && search.length > 0 ? search : undefined,
          page: pageParam,
          page_size: 10
      },
    }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) => lastPage.length > 0 ? pages.length + 1 : undefined
  })
}

export default useInfiniteFetchGamesQuery
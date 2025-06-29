import { ApiClientService } from '@/services/api-client.service';
import { useQuery } from '@tanstack/react-query';
import type { GenreModel } from './useGenres';
import type { PlatformModel } from './usePlatforms';
import type { OrderModel } from '@/contexts/StoreContextProvider';
import { GAME_API_URI } from '@/services/api-client';
import type { GameModel } from './useGames';

const apiClientService = new ApiClientService<GameModel>(GAME_API_URI)

const useFetchGames = (
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

  return useQuery<GameModel[],Error>({
    queryKey: TOPICS,
    queryFn: () => apiClientService.getAllWithParams({
        params: { 
            genres: selectedGenre?.id,
            parent_platforms: selectedPlatform?.id,
            ordering: (selectedOrder?.state+""+selectedOrder?.value),
            search: search && search.length > 0 ? search : undefined
        }
    })
  });
}

export default useFetchGames;
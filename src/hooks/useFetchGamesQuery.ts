import { ApiClientService } from '@/services/api-client.service';
import { useQuery } from '@tanstack/react-query';
import type { GenreModel } from '../entities/GenreModel';
import type { PlatformModelV2 } from "../entities/PlatformModelV2";
import { GAME_API_URI } from '@/services/api-client';
import type { GameModel } from '../entities/GameModel';
import type { OrderModel } from '@/entities/OrderModel';

const apiClientService = new ApiClientService<GameModel>(GAME_API_URI)

const useFetchGamesQuery = (
  selectedGenre?: GenreModel | null,
  selectedPlatform?: PlatformModelV2 | null,
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

export default useFetchGamesQuery;
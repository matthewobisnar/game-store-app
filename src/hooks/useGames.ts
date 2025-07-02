import useFetchData from './useFetchData'
import type { GenreModel } from '../entities/GenreModel';
import type { PlatformModel } from '../entities/PlatformModel';
import type { GameModel } from '../entities/GameModel';
import type { OrderModel } from '@/entities/OrderModel';

const useGames = (
    selectedGenre?: GenreModel | null,
    selectedPlatform?: PlatformModel | null,
    selectedOrder?: OrderModel | null,
    search?: string | null
) => useFetchData<GameModel>('/games', {
    params: { 
        genres: selectedGenre?.id,
        parent_platforms: selectedPlatform?.id,
        ordering: (selectedOrder?.state+""+selectedOrder?.value),
        search: search && search.length > 0 ? search : undefined
    }
}, 
[
    selectedGenre?.id, 
    selectedPlatform?.id, 
    (selectedOrder?.state+""+selectedOrder?.value),
    search
]);

export default useGames
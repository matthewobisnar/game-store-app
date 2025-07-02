import { useQuery } from '@tanstack/react-query';
import { ApiClientService } from '@/services/api-client.service';
import { GAME_GENRE_API_URI } from '@/services/api-client';
import ms  from 'ms';
import type { GenreModel } from '../entities/GenreModel';

const apiClientService = new ApiClientService<GenreModel>(GAME_GENRE_API_URI)
const useGenresQuery = () => {
    return useQuery<GenreModel[], Error>({
        queryKey: [GAME_GENRE_API_URI],
        queryFn: () => apiClientService.getAll(),
        staleTime: ms('1d')
    })
}

export default useGenresQuery;
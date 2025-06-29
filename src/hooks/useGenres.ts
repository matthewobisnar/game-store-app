import { useQuery } from '@tanstack/react-query';
import { ApiClientService } from '@/services/api-client.service';
import { GAME_GENRE_API_URI } from '@/services/api-client';

export interface GenreModel {
    id: number;
    name: string;
    slug: string;
    games_count: number;
    image_background: string;
}

const apiClientService = new ApiClientService<GenreModel>(GAME_GENRE_API_URI)

const useGenres = () => {
    return useQuery<GenreModel[], Error>({
        queryKey: [GAME_GENRE_API_URI],
        queryFn: () => apiClientService.getAll(),
        staleTime: 24 * 60 * 60 * 1000
    })
}

export default useGenres;
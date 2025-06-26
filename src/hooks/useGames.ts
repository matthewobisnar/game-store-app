import useFetchData from './useFetchData'
import type { GenreModel } from './useGenres';

export interface PlatformModel {
    id: number;
    slug: string;
    name: string;
}

export interface platformObject {
    platform: PlatformModel;
}

export interface GameModel {
    id: number;
    name: string;
    background_image: string;
    platforms: platformObject[];
    metacritic: number
}

const useGames = (
    selectedGenre?: GenreModel | null,
    selectedPlatform?: PlatformModel | null
) => useFetchData<GameModel>('/games', {
    params: { 
        genres: selectedGenre?.id,
        parent_platforms: selectedPlatform?.id
    }
}, [selectedGenre?.id, selectedPlatform?.id]);

export default useGames
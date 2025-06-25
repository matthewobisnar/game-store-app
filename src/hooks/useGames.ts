import useFetchData from './useFetchData'

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

const useGames = () => useFetchData<GameModel>('/games');

export default useGames
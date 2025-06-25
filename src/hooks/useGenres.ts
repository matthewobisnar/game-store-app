import useFetchData from './useFetchData'

export interface GenreModel {
    id: number;
    name: string;
    slug: string;
    games_count: number;
    image_background: string;
}

const useGenres = () => useFetchData<GenreModel>('/genres')

export default useGenres;
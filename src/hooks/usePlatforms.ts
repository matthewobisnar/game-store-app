import useFetchData from "./useFetchData";

export interface PlatformModel {
    id: number;
    name: string;
    slug: string;
    games_count: number;
    image_background: string;
    image: string;
    year_start: number;
    year_end: number;
}

const usePlatforms = () => useFetchData<PlatformModel>('/platforms/lists/parents');

export default usePlatforms;
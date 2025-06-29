import { ApiClientService } from "@/services/api-client.service";
import { PLATFORM_API_URI } from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";

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

const apiClientService = new ApiClientService<PlatformModel>(PLATFORM_API_URI)

const usePlatforms = () => {
    return useQuery<PlatformModel[], Error>({
        queryKey: [PLATFORM_API_URI],
        queryFn: () => apiClientService.getAll(),
        staleTime: 24 * 60 * 60 * 1000
    });
}
    
    // useFetchData<PlatformModel>('/platforms/lists/parents');

export default usePlatforms;
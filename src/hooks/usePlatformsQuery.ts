import { ApiClientService } from "@/services/api-client.service";
import { PLATFORM_API_URI } from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import type { PlatformModelV2 } from "../entities/PlatformModelV2";

const apiClientService = new ApiClientService<PlatformModelV2>(PLATFORM_API_URI)

const usePlatformsQuery = () => {
    return useQuery<PlatformModelV2[], Error>({
        queryKey: [PLATFORM_API_URI],
        queryFn: () => apiClientService.getAll(),
        staleTime: ms('1d')
    });
}
    
    // useFetchData<PlatformModel>('/platforms/lists/parents');

export default usePlatformsQuery;
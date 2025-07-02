import { ApiClientService } from "@/services/api-client.service";
import { useQuery } from "@tanstack/react-query";
import type { GameTrailerModel } from "../entities/GameTrailerModel";


const useGameTrailer = (slug: string) => {

  const apiClient = new ApiClientService<GameTrailerModel>(`games/${slug}/movies`)

  return useQuery({
    queryKey: ['trailers', slug],
    queryFn: () => apiClient.getAll()
  });
}

export default useGameTrailer;

import { GAME_DETAIL_API_URI, GAME_GENRE_API_URI } from "@/services/api-client";
import { ApiClientService } from "@/services/api-client.service";
import { useQuery } from "@tanstack/react-query";
import ms from "ms";


interface MetacriticPlatform {
  metascore: number;
  url: string;
}

interface GameDetail {
  id: number;
  slug: string;
  name: string;
  name_original: string;
  description: string;
  description_raw: string;
  metacritic: number;
  metacritic_platforms: MetacriticPlatform[];
}

const apiClientService = new ApiClientService<GameDetail>(GAME_DETAIL_API_URI);

const useFetchGameDetail = (slug: string) => useQuery({
  queryKey: [slug],
  queryFn: () => apiClientService.setUri(slug).getOne(),
  staleTime: ms('1 day')
});

export default useFetchGameDetail;
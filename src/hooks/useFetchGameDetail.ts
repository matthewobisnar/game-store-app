import { GAME_DETAIL_API_URI } from "@/services/api-client";
import { ApiClientService } from "@/services/api-client.service";
import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import type { GameDetail } from "../entities/GameDetail";


const apiClientService = new ApiClientService<GameDetail>(GAME_DETAIL_API_URI);

const useFetchGameDetail = (slug: string) => useQuery({
  queryKey: [slug],
  queryFn: () => apiClientService.setUri(slug).getOne(),
  staleTime: ms('1 day')
});

export default useFetchGameDetail;
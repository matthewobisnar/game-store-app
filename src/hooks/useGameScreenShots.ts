import { ApiClientService } from "@/services/api-client.service"
import { useQuery } from "@tanstack/react-query"
import type { GameScreenshotModel } from "../entities/GameScreenshotModel";

const useGameScreenShots = (gamePk: number) => {

  const apiClient = new ApiClientService<GameScreenshotModel>(`games/${gamePk}/screenshots`);

  return useQuery({
    queryKey: ['screenshots', ],
    queryFn: () => apiClient.getAll()
  })
}

export default useGameScreenShots;
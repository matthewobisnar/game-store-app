import type { GameScreenshotModel } from "@/entities/GameScreenshotModel";
import useGameScreenShots from "@/hooks/useGameScreenShots"
import { Image, SimpleGrid } from "@chakra-ui/react"

const GameScreenShots = ({ gamePk }: {gamePk: number}) => {

  const {data, isLoading, error} = useGameScreenShots(gamePk);

  if (isLoading) return null;

  if (error) return null;

  return (
    <SimpleGrid gap={4} columns={{base: 1, md: 2}}>
      {data?.map((image: GameScreenshotModel) => (
        <Image src={image.image}/>
      ))}
    </SimpleGrid>
  )
}

export default GameScreenShots
import type { GameModel } from "@/hooks/useFetchGames"
import { Card, HStack, Image } from "@chakra-ui/react"
import PlatformIcons from "./PlatformIcons";
import {} from 'react'
import GameScore from "./GameScore";

const GameCard = ({ game }: { game: GameModel}) => {

  return (
    <Card.Root 
      borderRadius={`10px`} 
      border={`none`} 
      overflow={`hidden`}
    >
        <Image src={game.background_image}/>
        <Card.Body gap="2">
            <Card.Title fontSize={`2xl`}>{game.name}</Card.Title>
            <HStack justifyContent={`space-between`}>
              <PlatformIcons platforms={game.platforms.map(data => data.platform)}/>
              <GameScore score={game.metacritic}/>
            </HStack>
        </Card.Body>
    </Card.Root>
  )
}

export default GameCard
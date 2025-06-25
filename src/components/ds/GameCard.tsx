import type { GameModel } from "@/hooks/useFetchGames"
import { Card, Image } from "@chakra-ui/react"
import PlatformIcons from "./PlatformIcons";
import {} from 'react'

const GameCard = ({ game }: { game: GameModel}) => {

console.log(game.platforms.map(data => data.platform));

  return (
    <Card.Root 
      borderRadius={`10px`} 
      border={`none`} 
      overflow={`hidden`}
    >
        <Image src={game.background_image}/>
        <Card.Body gap="2">
            <Card.Title fontSize={`2xl`}>{game.name}</Card.Title>
            <PlatformIcons platforms={game.platforms.map(data => data.platform)}/>
        </Card.Body>
    </Card.Root>
  )
}

export default GameCard
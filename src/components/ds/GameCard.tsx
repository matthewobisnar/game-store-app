import { Card, HStack, Image } from "@chakra-ui/react"
import PlatformIcons from "./PlatformIcons";
import {} from 'react'
import GameScore from "./GameScore";
import type { GameModel } from '@/entities/GameModel';
import { NoImage } from "@/configs/images";

const GameCard = ({ game }: { game: GameModel}) => {

  return (
    <Card.Root 
     _hover={{
        transform: "scale(1.02)",
        borderRadius:"10px",
        overflow:"auto"
      }}
      transition={`transform .2s`}
      borderRadius={`10px`} 
      border={`none`} 
      overflow={`hidden`}
    >
        {game.background_image && (<Image src={game.background_image}/>)}
        {!game.background_image && (<Image src={NoImage}/>)}

        <Card.Body gap="2">
           
          <Card.Title fontSize={`2xl`}>{game.name}</Card.Title>
            <HStack justifyContent={`space-between`}>
              <PlatformIcons platforms={game.platforms.map((data: any) => data.platform)}/>
              <GameScore score={game.metacritic}/>
            </HStack>
        </Card.Body>
    </Card.Root>
  )
}

export default GameCard
import ListBox from '@/components/ds/ListBox'
import { GridItem, SimpleGrid, Text } from '@chakra-ui/react'
import type { GameDetail } from './GameDetail'
import GameScore from '@/components/ds/GameScore'

const GameAttributes = ({gameDetail}: {gameDetail?: GameDetail}) => {
  return (
    <SimpleGrid columns={2}>
        <GridItem>
          <ListBox title="Platform">
              {gameDetail?.platforms.map(({platform}) => (
                <Text key={platform.id}>{platform.name}</Text>
              ))}
          </ListBox>
        </GridItem>

        <GridItem>
          <ListBox title="Metascore">
            <GameScore score={gameDetail?.metacritic || 0}/>
          </ListBox>
        </GridItem>

        <GridItem>
          <ListBox title="Genres">
            {gameDetail?.genres.map(({id, name}) => (
                <Text key={id}>{name}</Text>
              ))}
          </ListBox>
        </GridItem>

        <GridItem>
          <ListBox title="Publisher">
              {gameDetail?.publishers.map(({id, name}) => (
                <Text key={id}>{name}</Text>
              ))}
          </ListBox>
        </GridItem>
    </SimpleGrid>
  )
}

export default GameAttributes
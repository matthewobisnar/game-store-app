import { useStoreContext } from '@/contexts/StoreContextProvider'
import { Heading } from '@chakra-ui/react';

const GameHeading = () => {

  const { selectedGenre, selectedPlatform } = useStoreContext();

  return (
    <Heading 
      marginY={`lg`} 
      size="6xl"
    >
      {selectedPlatform?.name} {selectedGenre?.name} Games
    </Heading>
  )
}

export default GameHeading
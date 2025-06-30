import useSelectedGenreStore from '@/states/useSelectedGenreStore';
import useSelectedPlatformStore from '@/states/useSelectedPlatformStore';
import { Heading } from '@chakra-ui/react';

const GameHeading = () => {

  const selectedGenre = useSelectedGenreStore((genre) => genre.selectedGenre);
  const selectedPlatform =  useSelectedPlatformStore((platform) => platform.selectedPlatform);

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
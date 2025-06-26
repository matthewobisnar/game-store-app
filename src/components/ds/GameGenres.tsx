import useGenres, { type GenreModel } from "@/hooks/useGenres";
import { HStack, Image, List, Text } from "@chakra-ui/react";
import GameGenreSkeleton from "./GameGenreSkeleton";
import { useStoreContext } from "@/contexts/StoreContextProvider";

const indices = [...Array(20).keys()];

const GameGenres = () => {

  const { data: genres, loading } = useGenres();
  const { selectedGenre, handleSelectedGenre }  = useStoreContext();

  return (
    <List.Root listStyle={`none`}>
        {loading && (indices.map((index) => (
          <GameGenreSkeleton key={index}/>
        )))}
        {!loading && genres?.map((genre: GenreModel) => (
            <List.Item 
              backgroundColor={
                selectedGenre?.id == genre.id ? `gray.900` : ''
              }
              _hover={{
                backgroundColor: "gray.900",
                borderRadius: "5px",
                transition: "ease"
              }}
              key={genre.id} 
              paddingY={`5px`}
              cursor={`pointer`}
              onClick={()=> handleSelectedGenre(genre)}
            >
              <HStack gap={5} justifyItems={`center`}>
                <Image src={genre.image_background} w={`50px`} h={`40px`} borderRadius={`5px`}/>
                <Text fontWeight={selectedGenre?.id == genre.id ? `bold` : ''} fontSize={`lg`}>{genre.name}</Text>
              </HStack>
            </List.Item>
        ))}
    </List.Root>
  )
}

export default GameGenres;
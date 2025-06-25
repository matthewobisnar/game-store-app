import useGenres, { type GenreModel } from "@/hooks/useGenres";
import { HStack, Image, List, Text } from "@chakra-ui/react";
import GameGenreSkeleton from "./GameGenreSkeleton";

const indices = [...Array(20).keys()];

const GameGenres = () => {

  const { data: genres, loading } = useGenres();

  return (
    <List.Root listStyle={`none`}>
        {loading && (indices.map((index) => (
          <GameGenreSkeleton key={index}/>
        )))}
        {!loading && genres?.map((genre: GenreModel) => (
            <List.Item 
              key={genre.id} 
              paddingY={`5px`}
              cursor={`pointer`}
            >
              <HStack gap={5} justifyItems={`center`}>
                <Image src={genre.image_background} w={`50px`} h={`40px`} borderRadius={`5px`}/>
                <Text fontSize={`lg`}>{genre.name}</Text>
              </HStack>
            </List.Item>
        ))}
    </List.Root>
  )
}

export default GameGenres;
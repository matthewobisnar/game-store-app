import GameScreenShots from "@/components/ds/GameScreenShots";
import GameTrailer from "@/components/ds/GameTrailer";
import TextCollapsible from "@/components/ds/TextCollapsible";
import GameAttributes from "@/entities/GameAttributes";
import useFetchGameDetail from "@/hooks/useFetchGameDetail";
import { GridItem, Heading, SimpleGrid } from "@chakra-ui/react";
import { useParams } from "react-router-dom"

const StoreDetail = () => {

   const route = useParams();

   const { data: gameDetail, isLoading } = useFetchGameDetail(route.slug || '');

   if (isLoading) 
    return <><p>Loading...</p></>

  return (
    <>
      <SimpleGrid 
        paddingX={5}
        columns={{base: 1, md: 2}}
      >
        <GridItem>
          <SimpleGrid gap={2}>
            <Heading size="5xl" marginY={5}>{gameDetail?.name}</Heading>
            <TextCollapsible text={gameDetail?.description_raw || ''} displayLength={300} defaultValue={true}/>
            <GameAttributes gameDetail={gameDetail}/>
          </SimpleGrid>
        </GridItem>
  

        <GridItem>
            <GameTrailer gameId={route?.slug || ''}/>
            {gameDetail && <GameScreenShots gamePk={gameDetail?.id}/>}
        </GridItem>

      </SimpleGrid>
    </>
  )
}

export default StoreDetail
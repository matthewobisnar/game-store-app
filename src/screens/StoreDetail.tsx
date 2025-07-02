import useFetchGameDetail from "@/hooks/useFetchGameDetail";
import { Heading, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom"

const StoreDetail = () => {

   const route = useParams();

   const { data: gameDetail, isLoading } = useFetchGameDetail(route.slug || '');

   if (isLoading) 
    return <><p>Loading...</p></>

  return (
    <>
      <Heading size="5xl">{gameDetail?.name}</Heading>
      <Text>{gameDetail?.description_raw}</Text>
    </>
  )
}

export default StoreDetail
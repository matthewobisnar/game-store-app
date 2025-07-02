import TextCollapsible from "@/components/ds/TextCollapsible";
import useFetchGameDetail from "@/hooks/useFetchGameDetail";
import { Heading } from "@chakra-ui/react";
import { useParams } from "react-router-dom"

const StoreDetail = () => {

   const route = useParams();

   const { data: gameDetail, isLoading } = useFetchGameDetail(route.slug || '');

   if (isLoading) 
    return <><p>Loading...</p></>

  return (
    <>
      <Heading size="5xl">{gameDetail?.name}</Heading>
      <TextCollapsible text={gameDetail?.description_raw || ''} displayLength={300} defaultValue={true}/>
    </>
  )
}

export default StoreDetail
import { useParams } from "react-router-dom"

const StoreDetail = () => {

   const route = useParams();


  return (
    <div>{`StoreDetail id: ${route.id}`}</div>
  )
}

export default StoreDetail
import { HStack } from "@chakra-ui/react"
import PlatformListFilter from "./PlatformListFilter"
import OrderFilter from "./OrderFilter"

const GameFilters = () => {
  return (
    <HStack gap={3}>
        <PlatformListFilter/>
        <OrderFilter/>
    </HStack>
  )
}

export default GameFilters
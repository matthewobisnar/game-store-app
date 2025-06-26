import { HStack } from "@chakra-ui/react"
import PlatformListFilter from "./PlatformListFilter"

const GameFilters = () => {
  return (
    <HStack gap={3}>
        <PlatformListFilter/>
    </HStack>
  )
}

export default GameFilters
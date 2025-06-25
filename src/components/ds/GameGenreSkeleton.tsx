import { HStack, List, Skeleton, Stack } from "@chakra-ui/react"

const GameGenreSkeleton = () => {
  return (
        <HStack gap="5" paddingY={`5px`}>
            <Skeleton w={`50px`} h={`40px`} borderRadius={`5px`} />
            <Stack flex="1">
                <Skeleton height="5" width="80%" />
            </Stack>
        </HStack>
  )
}

export default GameGenreSkeleton
import { Card, Skeleton, SkeletonText } from '@chakra-ui/react'

const skeletonMinWConfig = {
    md:`sm`, 
    lg:`md`
}

const GameCardSkeleton = () => {
  return (
    <Card.Root
     minW={skeletonMinWConfig}
     borderRadius={`10px`} 
     border={`none`} 
     overflow={`hidden`}
    >
        <Skeleton height={`200px`}/>
        <Card.Body>
            <SkeletonText/>
        </Card.Body>
    </Card.Root>
  )
}

export default GameCardSkeleton
import { Badge } from '@chakra-ui/react'

const GameScore = ({ score }: { score: number }) => {

    let color = (score > 75 ? 'green' : score > 60 ? `yellow` : '');
    
    return (
        <Badge 
            colorPalette={color} 
            paddingX={2} 
            paddingY={1} 
            borderRadius={`4px`} 
            fontSize={`14px`}
        >
            {score}
        </Badge>
    )
}

export default GameScore
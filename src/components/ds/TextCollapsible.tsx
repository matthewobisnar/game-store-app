import { Button, Text } from '@chakra-ui/react';
import{ useState } from 'react'

const TextCollapsible = ({ text, displayLength, defaultValue = true }: {text: string, displayLength: number, defaultValue: boolean}) => {

  const [isCollapse, setIsCollapse] = useState<boolean>(defaultValue);

  const handleCollapse = () => {
    setIsCollapse((prev) => !prev)
  };

  return (
   <>
    <Text fontSize={`lg`}>{isCollapse ? `${text.substring(0, displayLength)}...` : text}
      <Button 
        fontWeight={`bold`} 
        size={`sm`} 
        bg={`yellow.400`} 
        marginLeft={1} 
        onClick={handleCollapse}
      >
        {isCollapse ? 'Read more' : 'Show less'}
      </Button>
    </Text>
   </>
  )
}

export default TextCollapsible;
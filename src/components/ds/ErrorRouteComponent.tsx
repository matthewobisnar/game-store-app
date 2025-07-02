import { Text } from '@chakra-ui/react'

const ErrorRouteComponent = () => {
  return (
    <div>
      <Text fontSize={`xl`} fontWeight={`bold`}>Oops</Text>
      <Text>This page does not exists.</Text>
    </div>
  )
}

export default ErrorRouteComponent
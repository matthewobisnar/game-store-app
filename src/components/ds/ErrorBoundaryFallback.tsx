import { Container, Text } from '@chakra-ui/react';
import { useErrorBoundary } from 'react-error-boundary';

const ErrorBoundaryFallback = () => {

  const { resetBoundary } = useErrorBoundary();


  return (
    <Container>
      <Text color={'white'}>Something went wrong!</Text>
      <button onClick={resetBoundary}>Reset</button>
    </Container>
  )
}

export default ErrorBoundaryFallback;
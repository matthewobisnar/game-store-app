import { Heading } from '@chakra-ui/react'
import type { ReactNode } from 'react'

const ListBox = ({ title, children } : { title: string, children?: ReactNode }) => {
  return (
    <>
        <Heading 
          marginBottom={1} 
          fontWeight={`bolder`} 
          color={`gray.600`}
          fontSize={`1xl`}
        >{title}</Heading>
        {children}
    </>    
  )
}

export default ListBox
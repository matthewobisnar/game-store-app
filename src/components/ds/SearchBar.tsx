import { Input, InputGroup } from '@chakra-ui/react'
import { IoSearchOutline } from "react-icons/io5";

const SearchBar = () => {
  return (
    <InputGroup 
        startElement={
            <IoSearchOutline size={`24px`}/>
        } 
        borderRadius={25}
        bg={`#252525`}
        border={`solid 1px black`}
    >
        <Input 
            placeholder="Search games..." 
            border={`green`} 
            color={`#434343`}
            borderRadius="25px"
        />
    </InputGroup>
  )
}

export default SearchBar
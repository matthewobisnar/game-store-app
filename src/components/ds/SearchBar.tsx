import { Input, InputGroup } from '@chakra-ui/react'
import type { ChangeEvent } from 'react';
import { IoSearchOutline } from "react-icons/io5";
import { GrClear } from "react-icons/gr";
import useSelectedSearchStore from '@/states/useSelectedSearchStore';
import { useNavigate } from 'react-router-dom';



const SearchBar = () => {

  const { search, handleSearch, handleSearchClear } = useSelectedSearchStore();
  const navigate = useNavigate();

  const handleSearchOnSubmit = (event: ChangeEvent<HTMLInputElement>) =>  {
    handleSearch(event.target.value);
    navigate("/");
  }

  return (
    <InputGroup 
        startElement={
            <IoSearchOutline size={`24px`}/>
        } 
        endElement={search && search.length > 0 ? <GrClear size={`24px`} onClick={handleSearchClear}/> : null}
        borderRadius={25}
        bg={`#EDEDED`}
        _dark={{bg: "#252525"}}
    >
        <Input 
            placeholder="Search games..." 
            border={`green`} 
            color={`#434343`}
            borderRadius="25px"
            value={search || ''}
            onChange={handleSearchOnSubmit}
        />
    </InputGroup>
  )
}

export default SearchBar
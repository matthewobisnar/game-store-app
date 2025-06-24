import { HStack, Image } from '@chakra-ui/react'

import {Logo} from '@/configs/images';
import SearchBar from './SearchBar';
import DarkModeToggle from './DarkModeToggle';

const Navigation = () => {
  return (
    <HStack alignItems={`center`} alignContent={`center`}>
        <Image src={Logo} w={`60px`} />
        <SearchBar />
        <DarkModeToggle />
    </HStack>
  );
}

export default Navigation;
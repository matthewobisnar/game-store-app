import { HStack, Image } from '@chakra-ui/react'

import {Logo} from '@/configs/images';
import SearchBar from './SearchBar';
// import DarkModeToggle from './DarkModeToggle';
import { ColorModeButton } from '../ui/color-mode';

const Navigation = () => {
  return (
    <HStack alignItems={`center`} alignContent={`center`} padding={`10px`}>
        <Image src={Logo} w={`60px`} />
        <SearchBar />
        {/* <DarkModeToggle/> */}
        <ColorModeButton size={`2xl`} />
    </HStack>
  );
}

export default Navigation;
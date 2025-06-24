import { HStack, Image } from '@chakra-ui/react'

import {Logo} from '@/configs/images';
import SearchBar from './SearchBar';
import { ColorModeButton } from '../ui/color-mode';

const Navigation = () => {
  return (
    <HStack alignItems={`center`} alignContent={`center`}>
        <Image src={Logo} w={`60px`} />
        <SearchBar />
        <ColorModeButton size={`2xl`} />
    </HStack>
  );
}

export default Navigation;
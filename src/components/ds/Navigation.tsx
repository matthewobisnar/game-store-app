import { HStack, Image } from '@chakra-ui/react'

import {Logo} from '@/configs/images';
import SearchBar from './SearchBar';
// import DarkModeToggle from './DarkModeToggle';
import { ColorModeButton } from '../ui/color-mode';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <HStack alignItems={`center`} alignContent={`center`} padding={`10px`}>
        <Link to={''}>
          <Image src={Logo} w={`60px`} />
        </Link>
        <SearchBar />
        {/* <DarkModeToggle/> */}
        <ColorModeButton size={`2xl`} />
    </HStack>
  );
}

export default Navigation;
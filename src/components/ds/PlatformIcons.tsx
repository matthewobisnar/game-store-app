import type { PlatformModel } from "@/hooks/useFetchGames"
import { FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid } from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md'
import { SiNintendo } from 'react-icons/si';
import {BsGlobe} from 'react-icons/bs';

import { HStack, Icon, Text } from "@chakra-ui/react"
import type { IconType } from "react-icons/lib";

const PlatformIcons = ({ platforms }: { platforms: PlatformModel[] }) => {

    const platformIcons: { [key: string]: IconType } = {
        pc: FaWindows,
        playstation1: FaPlaystation,
        playstation2: FaPlaystation,
        playstation3: FaPlaystation,
        playstation4: FaPlaystation,
        playstation5: FaPlaystation,
        xbox360: FaXbox,
        macos: FaApple,
        linux: FaLinux,
        android: FaAndroid

    }

  return (
    <HStack marginY={2}>
        {platforms.map(({ slug }) => (
            platformIcons[slug] && (
            <Icon as={platformIcons[slug]} size={`md`} margin={1} color={`gray.500`}/>)
        ))}
    </HStack>
  )
}

export default PlatformIcons
import { FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid } from 'react-icons/fa';

import { HStack, Icon, Text } from "@chakra-ui/react"
import type { IconType } from "react-icons/lib";
import type { PlatformModel } from '@/hooks/useGames';

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
            <Icon 
              key={slug} 
              as={platformIcons[slug]} 
              size={`md`} 
              margin={1} 
              color={`gray.500`}
            />)
        ))}
    </HStack>
  )
}

export default PlatformIcons
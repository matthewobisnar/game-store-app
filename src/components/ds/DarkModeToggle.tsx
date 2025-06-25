import { Switch, Text } from "@chakra-ui/react";
import { useColorMode } from "../ui/color-mode";

const DarkModeToggle = () => {
 
  const {toggleColorMode, colorMode} = useColorMode();

  return (
    <Switch.Root key={"lg"} paddingX={`5px`} size={"md"} colorPalette={'green'} checked={colorMode == 'dark'} onCheckedChange={toggleColorMode} >
        <Switch.HiddenInput/>
        <Switch.Control/>
        <Switch.Label>
            <Text 
              fontSize={`md`} 
              fontWeight={`normal`} 
              textWrap={'nowrap'}>
                {colorMode == "dark" ? `Dark Mode` : `Light Mode`}
            </Text>
        </Switch.Label>
    </Switch.Root>
  )
}

export default DarkModeToggle;

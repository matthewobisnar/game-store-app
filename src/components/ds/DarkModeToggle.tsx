import { Switch, Text } from "@chakra-ui/react";

const DarkModeToggle = () => {
  return (
    <Switch.Root key={"lg"} paddingX={`5px`} size={"md"} colorPalette={'green'} defaultChecked>
        <Switch.HiddenInput/>
        <Switch.Control/>
        <Switch.Label>
            <Text fontSize={`md`} fontWeight={`normal`} textWrap={'nowrap'}>Dark Mode</Text>
        </Switch.Label>
    </Switch.Root>
  )
}

export default DarkModeToggle;

import usePlatformsQuery from "@/hooks/usePlatformsQuery";
import { type PlatformModel } from "@/entities/PlatformModelV2";
import useSelectedPlatformStore from "@/states/useSelectedPlatformStore";
import { Button, Menu, Portal, Skeleton } from "@chakra-ui/react"
import { BsChevronDown } from 'react-icons/bs';

const PlatformListFilter = () => {

  const { handleSelectedPlatform, selectedPlatform } = useSelectedPlatformStore();
  const {data: platforms, isLoading } = usePlatformsQuery();

  return (
    <>
      {isLoading && (<Skeleton width="132px" height="44px" borderRadius={`5px`} variant="pulse" />)}
      {!isLoading && (
        <Menu.Root>
            <Menu.Trigger asChild>
              <Button variant="outline" size="lg">
                {selectedPlatform ? selectedPlatform?.name : `Platform`}
                <BsChevronDown/>
              </Button>
          </Menu.Trigger>

          <Portal>
            <Menu.Positioner>
              <Menu.Content>
                {platforms?.map((platform: PlatformModel) => (
                    <Menu.Item 
                      key={platform.id} 
                      onClick={() => handleSelectedPlatform(platform)} value={platform.id.toString()}>
                        {platform.name}
                    </Menu.Item>
                ))}            
              </Menu.Content>
            </Menu.Positioner>
          </Portal>
        </Menu.Root>
      )}
    </>
  )
}

export default PlatformListFilter
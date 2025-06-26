import { useStoreContext } from "@/contexts/StoreContextProvider";
import usePlatforms, { type PlatformModel } from "@/hooks/usePlatforms";
import { Button, Menu, Portal, Skeleton } from "@chakra-ui/react"
import { BsChevronDown } from 'react-icons/bs';

const PlatformListFilter = () => {

  const { handleSelectedPlatform, selectedPlatform } = useStoreContext();
  const {data: platforms, loading } = usePlatforms();

  return (
    <>
      {loading && (<Skeleton width="132px" height="44px" borderRadius={`5px`} variant="pulse" />)}
      {!loading && (
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
                      onClick={() => handleSelectedPlatform(platform)} value="new-txt">
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
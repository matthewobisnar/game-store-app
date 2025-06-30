import { type OrderModel } from '@/contexts/StoreContextProvider'
import useSelectedOrderStore from '@/states/useSelectedOrderStore';
import { Menu, Portal } from '@ark-ui/react'
import { Button } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'

const orders: OrderModel[] = [
    {
        state: "-",
        value: "release",
        label: "Date Released"
    },
    {
        state: "",
        value: "name",
        label: "Name"
    },
    {
        state: "-",
        value: "added",
        label: "Date Added"
    },
    {
        state: "",
        value: "created",
        label: "Created"
    },
    {
        state: "-",
        value: "updated",
        label: "Updated"
    },
    {
        state: "-",
        value: "rating",
        label: "Rating"
    },
    {
        state: "-",
        value: "metacritic",
        label: "Popularity"
    }
];

const OrderFilter = () => {
    const { handleSelectedOrder, selectedOrder } = useSelectedOrderStore();

  return (
        <>
            <Menu.Root>
                <Menu.Trigger asChild>
                  <Button variant="outline" size="lg" cursor={`pointer`}>
                    {`Order by: ` + (selectedOrder ? selectedOrder?.label : '') }
                    <BsChevronDown/>
                  </Button>
              </Menu.Trigger>
    
              <Portal>
                <Menu.Positioner>
                  <Menu.Content>
                    {orders?.map((platform: OrderModel, index) => (
                        <Menu.Item 
                          key={index} 
                          onClick={() => handleSelectedOrder(platform)} value={platform.label}>
                            {`${platform.label}`}
                        </Menu.Item>
                    ))}            
                  </Menu.Content>
                </Menu.Positioner>
              </Portal>

            </Menu.Root>
        </>
  )
}

export default OrderFilter
import type { GenreModel } from '@/entities/GenreModel';
import type { PlatformModelV2 } from "@/entities/PlatformModelV2";
import { createContext, useContext, useState, type ReactNode } from 'react'
import type { OrderModel } from '@/entities/OrderModel';
import type { StoreContextModel } from '@/entities/StoreContextModel';

export const StoreContext = createContext<StoreContextModel | null>(null);

const StoreContextProvider = ({ children }: {children: ReactNode}) => {

    const [selectedGenre, setSelectedGenre] = useState<GenreModel | null>(null);
    const [selectedPlatform, setSelectedPlatform] = useState<PlatformModelV2 | null>(null);
    const [selectedOrder, setSelectedOrder] = useState<OrderModel| null> (null);
    const [search, setSearch] = useState<string | null>('');

    const handleSelectedGenre = (genre: GenreModel) => setSelectedGenre(genre);

    const handleSelectedPlatform = (platform: PlatformModelV2) => setSelectedPlatform(platform);

    const handleSelectedOrder = (order: OrderModel) => setSelectedOrder(order);

    const handleSearch = (searchParam: string) => setSearch(searchParam);

    const handleSearchClear = () => setSearch('');

    const contextValue = {
        selectedGenre,
        handleSelectedGenre,
        selectedPlatform,
        handleSelectedPlatform,
        selectedOrder,
        handleSelectedOrder,
        search,
        handleSearch,
        handleSearchClear
    }

  return (
    <>
        <StoreContext.Provider value={contextValue}>
            {children}
        </StoreContext.Provider>
    </>
  )
}

export default StoreContextProvider;

export const useStoreContext = () => {
    const context = useContext(StoreContext);
    if (!context) {
        throw new Error('useStoreContext must be used within a StoreContextProvider');
    }
    return context;
};
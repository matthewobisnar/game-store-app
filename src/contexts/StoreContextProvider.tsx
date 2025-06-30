import type { GenreModel } from '@/hooks/useGenresQuery';
import type { PlatformModel } from '@/hooks/usePlatformsQuery';
import { createContext, useContext, useState, type ReactNode } from 'react'

export interface StoreContextModel {
    selectedGenre: GenreModel | null;
    selectedPlatform: PlatformModel | null;
    handleSelectedGenre: (genre: GenreModel) => void;
    handleSelectedPlatform: (platform: PlatformModel) => void;
    selectedOrder: OrderModel | null;
    handleSelectedOrder: (order: OrderModel) => void;
    search: string | null;
    handleSearch: (searchParam: string) => void;
    handleSearchClear: () => void;
}

export interface OrderModel {
    state: string;
    value: string,
    label: string
}

export const StoreContext = createContext<StoreContextModel | null>(null);

const StoreContextProvider = ({ children }: {children: ReactNode}) => {

    const [selectedGenre, setSelectedGenre] = useState<GenreModel | null>(null);
    const [selectedPlatform, setSelectedPlatform] = useState<PlatformModel | null>(null);
    const [selectedOrder, setSelectedOrder] = useState<OrderModel| null> (null);
    const [search, setSearch] = useState<string | null>('');

    const handleSelectedGenre = (genre: GenreModel) => setSelectedGenre(genre);

    const handleSelectedPlatform = (platform: PlatformModel) => setSelectedPlatform(platform);

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
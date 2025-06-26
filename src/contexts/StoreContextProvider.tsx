import type { GenreModel } from '@/hooks/useGenres';
import type { PlatformModel } from '@/hooks/usePlatforms';
import { createContext, useContext, useState, type ReactNode } from 'react'

export interface StoreContextModel {
    selectedGenre: GenreModel | null;
    selectedPlatform: PlatformModel | null;
    handleSelectedGenre: (genre: GenreModel) => void;
    handleSelectedPlatform: (platform: PlatformModel) => void
}

export const StoreContext = createContext<StoreContextModel | null>(null);

const StoreContextProvider = ({ children }: {children: ReactNode}) => {

    const [selectedGenre, setSelectedGenre] = useState<GenreModel | null>(null);
    const [selectedPlatform, setSelectedPlatform] = useState<PlatformModel | null>(null);

    const handleSelectedGenre = (genre: GenreModel) => setSelectedGenre(genre);

    const handleSelectedPlatform = (platform: PlatformModel) => setSelectedPlatform(platform);

    const contextValue = {
        selectedGenre,
        handleSelectedGenre,
        selectedPlatform,
        handleSelectedPlatform
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
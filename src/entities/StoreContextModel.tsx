import type { GenreModel } from '@/entities/GenreModel';
import type { PlatformModelV2 } from '@/entities/PlatformModelV2';
import type { OrderModel } from './OrderModel';


export interface StoreContextModel {
    selectedGenre: GenreModel | null;
    selectedPlatform: PlatformModelV2 | null;
    handleSelectedGenre: (genre: GenreModel) => void;
    handleSelectedPlatform: (platform: PlatformModelV2) => void;
    selectedOrder: OrderModel | null;
    handleSelectedOrder: (order: OrderModel) => void;
    search: string | null;
    handleSearch: (searchParam: string) => void;
    handleSearchClear: () => void;
}

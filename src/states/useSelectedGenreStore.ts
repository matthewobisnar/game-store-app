


import type { GenreModel } from '@/hooks/useGenresQuery';
import { create } from 'zustand';
import {mountStoreDevtool} from 'simple-zustand-devtools'

export interface SelectedGenreStoreModel {
  selectedGenre: GenreModel | null;
  handleSelectedGenre: (genre: GenreModel) => void;
}


const useSelectedGenreStore = create<SelectedGenreStoreModel>(set => ({
  selectedGenre: null,
  handleSelectedGenre: (genre: GenreModel) => set(() => ({ selectedGenre: genre }))
}));

if (process.env.NODE_ENV == "development") {
  mountStoreDevtool('useSelectedGenreStore', useSelectedGenreStore);
}

export default useSelectedGenreStore;
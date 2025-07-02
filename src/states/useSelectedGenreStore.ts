


import type { GenreModel } from '@/entities/GenreModel';
import { create } from 'zustand';
import {mountStoreDevtool} from 'simple-zustand-devtools'
import type { SelectedGenreStoreModel } from '../entities/SelectedGenreStoreModel';

const useSelectedGenreStore = create<SelectedGenreStoreModel>(set => ({
  selectedGenre: null,
  handleSelectedGenre: (genre: GenreModel) => set(() => ({ selectedGenre: genre }))
}));

if (process.env.NODE_ENV == "development") {
  mountStoreDevtool('useSelectedGenreStore', useSelectedGenreStore);
}

export default useSelectedGenreStore;
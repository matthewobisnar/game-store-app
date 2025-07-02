import type { GenreModel } from '@/entities/GenreModel';


export interface SelectedGenreStoreModel {
  selectedGenre: GenreModel | null;
  handleSelectedGenre: (genre: GenreModel) => void;
}

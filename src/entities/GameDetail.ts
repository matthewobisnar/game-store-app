import type { GenreModel } from "./GenreModel";
import type { MetacriticPlatform } from "./MetacriticPlatform";
import type { platformObject } from "./platformObject";
import type { Publisher } from "./Publisher";


export interface GameDetail {
  id: number;
  slug: string;
  name: string;
  name_original: string;
  description: string;
  description_raw: string;
  metacritic: number;
  metacritic_platforms: MetacriticPlatform[];
  platforms: platformObject[];
  publishers: Publisher[];
  genres: GenreModel[];
}

import type { platformObject } from './platformObject';


export interface GameModel {
    id: number;
    name: string;
    slug: string;
    background_image: string;
    platforms: platformObject[];
    metacritic: number;
}

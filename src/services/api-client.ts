import axios from 'axios';

export const GAME_API_URI = '/games';

export const GAME_GENRE_API_URI = '/genres';

export const PLATFORM_API_URI = '/platforms/lists/parents';

export const GAME_DETAIL_API_URI = GAME_API_URI;

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "846a968b23c045eea3b813b8f9aef950"
    }
});
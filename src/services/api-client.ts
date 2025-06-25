import axios from 'axios';


export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "846a968b23c045eea3b813b8f9aef950"
    }
});
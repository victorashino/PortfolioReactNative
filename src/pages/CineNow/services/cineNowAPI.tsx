import axios from "axios";

const apiKey = "1fbdd7c0e0f20b1c5c26edf483b110bf";

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params: {
        api_key: apiKey,
    },
});

export const getNowPlaying = async () => {
    try {
        const response = await api.get("/movie/now_playing?language=en-US&page=1");
        return response.data.results;
    } catch (error) {
        console.error("Error fetching popular movies:", error);
        throw error;
    }
};
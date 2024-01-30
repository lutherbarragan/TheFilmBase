const axios = require("axios");

const TMDB_API_KEY = process.env.NEXT_PUBLIC_ACCESS_TOKEN_AUTH;
const BASE_URL = "https://api.themoviedb.org/3";

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        accept: "application/json",
        Authorization: `Bearer ${TMDB_API_KEY}`,
    },
});

const handleRequest = async (config) => {
    try {
        const response = await axiosInstance.request(config);
        return response.data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw new Error("Failed to fetch data from the API.");
    }
};

export const getList = async (mediaType, listName) => {
    const url =
        listName === "trending"
            ? `/trending/all/day`
            : `/${mediaType}/${listName}?with_original_language=en`;
    const config = {
        method: "GET",
        url,
    };
    return handleRequest(config);
};

export const getMediaLogo = async (mediaType, id) => {
    const config = {
        method: "GET",
        url: `/${mediaType}/${id}/images`,
    };
    return handleRequest(config);
};

export const getDetails = async (type, id) => {
    const config = {
        method: "GET",
        url: `/${type}/${id}`,
    };
    return handleRequest(config);
};

// getReviews
export const getCredits = async (type, id) => {
    const config = {
        method: "GET",
        url: `/${type}/${id}/credits?language=en-US`,
    };
    return handleRequest(config);
};

// getVideos

// getCredits

// getExternalIds

// getSimilar

// getWatchProviders

const axios = require("axios");

export const getList = (mediaType, listName) => {
    const API_KEY = process.env.NEXT_PUBLIC_ACCESS_TOKEN_AUTH;

    const options = {
        method: "GET",
        url: `https://api.themoviedb.org/3/${mediaType}/${listName}?with_original_language=en`,
        headers: {
            accept: "application/json",
            Authorization: `Bearer ${API_KEY}`,
        },
    };

    return axios
        .request(options)
        .then((res) => res.data)
        .catch((err) => err);
};

export const getMovieLogo = (id) => {
    const API_KEY = process.env.NEXT_PUBLIC_ACCESS_TOKEN_AUTH;

    const options = {
        method: "GET",
        url: `https://api.themoviedb.org/3/movie/${id}/images`,
        headers: {
            accept: "application/json",
            Authorization: `Bearer ${API_KEY}`,
        },
    };

    return axios
        .request(options)
        .then((res) => res.data)
        .catch((err) => err);
};

export const getAllTrending = () => {
    const API_KEY = process.env.NEXT_PUBLIC_ACCESS_TOKEN_AUTH;

    const options = {
        method: "GET",
        url: "https://api.themoviedb.org/3/trending/all/day",
        headers: {
            accept: "application/json",
            Authorization: `Bearer ${API_KEY}`,
        },
    };

    return axios
        .request(options)
        .then((res) => res.data)
        .catch((err) => err);
};

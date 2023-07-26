const axios = require("axios");

export const getMovieList = (movieList) => {
    const API_KEY = process.env.NEXT_PUBLIC_ACCESS_TOKEN_AUTH;

    const options = {
        method: "GET",
        url: `https://api.themoviedb.org/3/movie/${movieList}`,
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

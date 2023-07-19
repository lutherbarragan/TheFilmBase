const axios = require("axios");

export const getPopularMovies = () => {
    const API_KEY = process.env.TMDB_API_KEY;
    const options = {
        method: "GET",
        url: "https://api.themoviedb.org/3/movie/popular",
        headers: {
            accept: "application/json",
            Authorization: `Bearer ${API_KEY}`,
        },
    };

    return axios
        .request(options)
        .then(function (res) {
            return res.data;
        })
        .catch(function (error) {
            console.error(error);
        });
};

// https://image.tmdb.org/t/p/original

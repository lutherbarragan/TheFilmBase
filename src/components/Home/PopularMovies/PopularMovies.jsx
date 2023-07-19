"use client";

import { useState, useEffect } from "react";
import { getPopularMovies } from "@/config/API";

export default function PopularMovies() {
    const [movies, setMovies] = useState([]);
    const [movieShown, setMovieShown] = useState(0);

    useEffect(() => {
        getPopularMovies().then((res) => {
            setMovies(res.results);
            console.log(res.results);
        });
    }, []);

    setInterval(() => {
        if (movieShown + 1 > movies.length - 1) setMovieShown(0);
        else setMovieShown(movieShown + 1);
    }, 5000);

    return (
        <div>
            <div className="relative" key={movies[movieShown]?.id}>
                <p className="absolute top-2 left-2 text-xl font-semibold">
                    {movies[movieShown]?.title}
                </p>
                <img
                    src={`https://image.tmdb.org/t/p/original${movies[movieShown]?.backdrop_path}`}
                    alt="Movie Backdrop"
                    className="mb-2"
                />
            </div>

            <p className="text-left">POPULAR MOVIES</p>

            <div className="flex overflow-x-scroll pt-4 pb-20 gap-2">
                {movies.map((movie) => (
                    <img
                        src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`}
                        alt="Movie Backdrop"
                        className={`w-40 duration-300 ${
                            movies[movieShown]?.id == movie?.id
                                ? " scale-125 mx-6"
                                : ""
                        }`}
                        key={movie?.id}
                    />
                ))}
            </div>
        </div>
    );
}

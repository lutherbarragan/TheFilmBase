"use client";

import { useState, useEffect } from "react";
import { getDetails } from "@/config/API";

export default function MoviePage({ params }) {
    const [hasMounted, setHasMounted] = useState(false);
    const [movie, setMovie] = useState({});

    useEffect(() => {
        getDetails("movie", params.id).then((res, err) => {
            if (err) {
                console.log(err);
                return;
            }
            if (res) {
                console.log(res);
                setMovie(res);
            }
        });
    }, []);

    if (Object.keys(movie).length <= 0) return <></>;

    return (
        <div className="relative mt-4 ">
            <img
                src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                alt={movie.title}
                className="blur-sm"
            />

            <div className="absolute top-1/2 px-4 -translate-y-1/2 w-full flex ">
                <div className=" w-full flex justify-between">
                    <img
                        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                        alt={`${movie.title} Poster`}
                        className="h-40 shadow-xl"
                    />
                    <div className="pl-4 w-full">
                        <h1 className="text-lg font-bold mb-2">
                            {movie.title}
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

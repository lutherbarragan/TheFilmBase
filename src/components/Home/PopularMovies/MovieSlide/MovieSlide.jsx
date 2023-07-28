"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { getMovieLogo } from "@/config/API";

export default function MovieSlide({ movie, index }) {
    const [backdrop, setBackdrop] = useState(null);
    const [logo, setLogo] = useState(null);

    useEffect(() => {
        if (!logo && !backdrop) {
            getMovieLogo(movie.id).then((res) => {
                console.log(res);
                setBackdrop(res.backdrops[0].file_path);

                if (res.logos[0]?.file_path) {
                    setLogo(res.logos[0].file_path);
                }
            });
        }
    }, [logo, backdrop]);

    return (
        <Link href={`/movies/${movie.id}`}>
            <div
                className={`keen-slider__slide number-slide${index++} relative bg-black`}
            >
                <img
                    src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                    alt={movie.title}
                    className=" w-full -z-10"
                />
                <div className="slider_content absolute top-0 left-0 w-full h-full p-2">
                    {logo ? (
                        <img
                            src={`https://image.tmdb.org/t/p/original${logo}`}
                            className="absolute bottom-4 left-1/2 -translate-x-1/2 max-h-16 px-12"
                        />
                    ) : (
                        <h2 className="absolute bottom-4 left-1/2 -translate-x-1/2 text-3xl font-thin text-left">
                            {movie.title}
                        </h2>
                    )}
                </div>
            </div>
        </Link>
    );
}

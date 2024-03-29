"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { getMediaLogo } from "@/config/API";

import "./MainSlide.css";

export default function MovieSlide({ mediaDetails, index, mediaType }) {
    const [backdrop, setBackdrop] = useState(null);
    const [logo, setLogo] = useState(null);

    useEffect(() => {
        if (!logo && !backdrop) {
            getMediaLogo(mediaType, mediaDetails.id).then((res) => {
                setBackdrop(res.backdrops[0]?.file_path);

                if (res.logos) {
                    for (const logo of res.logos) {
                        if (logo.iso_639_1 === "en") {
                            setLogo(logo.file_path);
                            break;
                        }
                    }
                }
            });
        }
    }, [logo, backdrop]);

    return (
        <Link href={`/${mediaType}/${mediaDetails.id}`}>
            <div
                className={`keen-slider__slide number-slide${index++} relative w-screen max-h-screen`}
            >
                <img
                    src={`https://image.tmdb.org/t/p/original${mediaDetails.backdrop_path}`}
                    alt={mediaDetails.title}
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
                            {mediaDetails.title}
                        </h2>
                    )}
                </div>
            </div>
        </Link>
    );
}

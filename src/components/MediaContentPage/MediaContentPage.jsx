"use client";

import { useState, useEffect } from "react";
import { getDetails } from "@/config/API";

export default function MediaContentPage({ mediaType, mediaId }) {
    const [mediaContent, setMediaContent] = useState({});
    const [expanded, setExpanded] = useState(false);
    const [overviewText, setOverviewText] = useState("");
    const MAX_OVERVIEW_LENGTH = 350;

    useEffect(() => {
        console.log(mediaType, mediaId);
        getDetails(mediaType, mediaId)
            .then((res) => {
                console.log(res);
                setMediaContent(res);
                setOverviewText(res.overview);
            })
            .catch((err) => {
                console.error("Error fetching media details:", err);
            });
    }, []);

    const toggleExpansion = () => {
        setExpanded(!expanded);
    };

    if (Object.keys(mediaContent).length <= 0) return <></>;

    return (
        <div className="relative mt-4">
            <img
                src={`https://image.tmdb.org/t/p/original${mediaContent.backdrop_path}`}
                alt={mediaContent.title}
                className={`blur-sm object-cover transition-all duration-500 ease-in-out brightness-50 w-full ${
                    expanded ? " h-80" : "h-56"
                }`}
            />

            <div className="absolute inset-0 p-2 pb-8 w-full flex justify-between">
                <div className="w-2/6">
                    <img
                        src={`https://image.tmdb.org/t/p/original${mediaContent.poster_path}`}
                        alt={`${mediaContent.title} Poster`}
                        className=" w-full shadow-xl"
                    />

                    <div className="flex flex-wrap justify-center">
                        {mediaContent.genres.map((genre, i) => (
                            <span
                                key={genre.name}
                                className="leading-4 text-xs mr-1"
                            >
                                • {genre.name}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="pl-2 w-4/6 overflow-hidden">
                    <h1 className="text-lg font-bold">
                        {mediaType == "movie"
                            ? mediaContent.title
                            : mediaContent.name || mediaContent.original_name}
                    </h1>

                    <p className="text-xs mb-1">
                        {mediaType == "movie"
                            ? mediaContent.release_date?.split("-")[0]
                            : mediaContent.first_air_date?.split("-")[0]}

                        {mediaType == "movie"
                            ? ` • ${mediaContent.runtime} mins`
                            : ` • ${mediaContent.number_of_seasons} Seasons`}
                    </p>

                    <p className="text-xs my-2 ">{overviewText}</p>
                </div>
            </div>

            {overviewText.length > MAX_OVERVIEW_LENGTH && (
                <button
                    className="absolute bottom-3 left-1/2 text-red-600 font-semibold text-sm focus:outline-none"
                    onClick={toggleExpansion}
                >
                    {expanded ? "↑ Read Less ↑" : "↓ Read more ↓"}
                </button>
            )}
        </div>
    );
}

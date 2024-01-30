"use client";

import { useState, useEffect } from "react";
import { getDetails } from "@/config/API";
import BlurredBackground from "./BlurredBackground/BlurredBackground";
import ExpandButton from "./ExpandButton/ExpandButton";
import GenreList from "./GenreList/GenreList";

export default function MediaContentPage({ mediaType, mediaId }) {
    const [expanded, setExpanded] = useState(false);
    const [title, setTitle] = useState("");
    const [year, setYear] = useState("");
    const [duration, setDuration] = useState("");
    const [mediaContent, setMediaContent] = useState({});

    const MAX_OVERVIEW_LENGTH = 350;

    useEffect(() => {
        getDetails(mediaType, mediaId)
            .then((res) => {
                console.log(res);
                setMediaContent(res);
                setTitle(getTitle(res));
                setYear(getYear(res));
                setDuration(getDuration(res));
            })
            .catch((err) => {
                console.error("Error fetching media details:", err);
            });
    }, []);

    const toggleExpansion = () => {
        setExpanded(!expanded);
    };

    const getTitle = (data) => {
        if (mediaType === "movie") return data.title || data.original_title;
        else if (mediaType === "tv") return data.name || data.original_name;
    };
    const getYear = (data) => {
        if (mediaType === "movie") return data.release_date.split("-")[0];
        else if (mediaType === "tv") return data.first_air_date.split("-")[0];
    };
    const getDuration = (data) => {
        if (mediaType === "movie") return `${data.runtime} Mins`;
        else if (mediaType === "tv")
            return `${data.seasons.length} ${
                data.seasons.length === 1 ? "Season" : "Seasons"
            }`;
    };

    if (Object.keys(mediaContent).length <= 0) return null;

    return (
        <div className="relative mt-4">
            <BlurredBackground
                backdrop_path={mediaContent.backdrop_path}
                title={title}
                expanded={expanded}
            />

            <div className="absolute inset-0 p-2 pb-8 w-full flex justify-between">
                <div className="w-2/6">
                    <img
                        src={`https://image.tmdb.org/t/p/original${mediaContent.poster_path}`}
                        alt={`${title} Poster`}
                        className=" w-full shadow-xl"
                    />

                    <GenreList genres={mediaContent.genres} />
                </div>

                <div className="pl-2 w-4/6 overflow-hidden">
                    <h1 className="text-lg font-bold">{title}</h1>

                    <p className="text-xs mb-1">
                        {year} • {duration}
                    </p>

                    <p className="text-xs my-2 ">{mediaContent.overview}</p>
                </div>
            </div>

            {mediaContent.overview.length > MAX_OVERVIEW_LENGTH && (
                <ExpandButton onClick={toggleExpansion} isExpanded={expanded} />
            )}
        </div>
    );
}

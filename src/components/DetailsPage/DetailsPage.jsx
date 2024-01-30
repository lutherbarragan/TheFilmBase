"use client";

import { useState, useEffect } from "react";
import { getDetails } from "@/config/API";

import MainDetails from "./MainDetails/MainDetails";

export default function DetailsPage({ mediaType, mediaId }) {
    const [expanded, setExpanded] = useState(false);
    const [title, setTitle] = useState("");
    const [year, setYear] = useState("");
    const [duration, setDuration] = useState("");
    const [mediaContent, setMediaContent] = useState({});

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
        <>
            <MainDetails
                posterPath={mediaContent.poster_path}
                backdropPath={mediaContent.backdrop_path}
                title={title}
                genres={mediaContent.genres}
                year={year}
                duration={duration}
                overview={mediaContent.overview}
                expanded={expanded}
                setExpanded={setExpanded}
            />
        </>
    );
}

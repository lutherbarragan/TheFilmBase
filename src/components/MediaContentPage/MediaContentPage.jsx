"use client";

import { useState, useEffect } from "react";
import { getDetails } from "@/config/API";

export default function MediaContentPage({ mediaType, mediaId }) {
    const [mediaContent, setMediaContent] = useState({});

    useEffect(() => {
        getDetails(mediaType, mediaId).then((res, err) => {
            if (err) {
                console.log(err);
                return;
            }
            if (res) {
                console.log(res);
                setMediaContent(res);
            }
        });
    }, []);

    if (Object.keys(mediaContent).length <= 0) return <></>;

    return (
        <>
            <div className="relative mt-4">
                <img
                    src={`https://image.tmdb.org/t/p/original${mediaContent.backdrop_path}`}
                    alt={mediaContent.title}
                    className="blur-sm"
                />

                <div className="absolute inset-0 px-2 py-2">
                    <div className=" w-full flex justify-between">
                        <img
                            src={`https://image.tmdb.org/t/p/original${mediaContent.poster_path}`}
                            alt={`${mediaContent.title} Poster`}
                            className="h-40 shadow-xl"
                        />
                        <div className="pl-4 w-full">
                            <h1 className="text-lg font-bold">
                                {mediaType == "movie"
                                    ? mediaContent.title
                                    : mediaContent.original_name}
                            </h1>
                            <p className="text-xs mb-4">
                                {mediaContent.release_date.split("-")[0]}
                            </p>

                            <p className="text-xs h-28 overflow-scroll">
                                {mediaContent.overview}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

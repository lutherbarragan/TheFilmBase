"use client";

import BlurredBackground from "./BlurredBackground/BlurredBackground";
import ExpandButton from "./ExpandButton/ExpandButton";
import GenreList from "./GenreList/GenreList";

export default function MainDetails({
    posterPath,
    backdropPath,
    title,
    genres,
    year,
    duration,
    overview,
    expanded,
    setExpanded,
}) {
    const MAX_OVERVIEW_LENGTH = 350;

    const toggleExpansion = () => {
        setExpanded(!expanded);
    };

    return (
        <div className="relative mt-4">
            <BlurredBackground
                backdrop_path={backdropPath}
                title={title}
                expanded={expanded}
            />

            <div className="absolute inset-0 p-2 pb-8 w-full flex justify-between">
                <div className="w-2/6">
                    <img
                        src={`https://image.tmdb.org/t/p/original${posterPath}`}
                        alt={`${title} Poster`}
                        className=" w-full shadow-xl"
                    />

                    <GenreList genres={genres} />
                </div>

                <div className="pl-2 w-4/6 overflow-hidden">
                    <h1 className="text-lg font-bold">{title}</h1>

                    <p className="text-xs mb-1">
                        {year} • {duration}
                    </p>

                    <p className="text-xs my-2 ">{overview}</p>
                </div>
            </div>

            {overview.length > MAX_OVERVIEW_LENGTH && (
                <ExpandButton onClick={toggleExpansion} isExpanded={expanded} />
            )}
        </div>
    );
}

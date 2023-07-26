"use client";

export default function MovieSlide({ movie, index }) {
    return (
        <div
            className={`keen-slider__slide number-slide${index++} relative bg-black`}
        >
            <img
                src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                alt={movie.title}
                className=" w-full -z-10"
            />
            <div className="slider_content absolute top-0 left-0 w-full h-full p-2">
                <h2 className="absolute text-xl font-thin text-left bottom-12 left-4">
                    {movie.title}
                </h2>
            </div>
        </div>
    );
}

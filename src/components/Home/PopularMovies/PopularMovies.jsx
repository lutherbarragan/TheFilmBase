"use client";
import { useState, useEffect } from "react";
import { getMovieList, getAllTrending } from "@/config/API";

import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronLeft,
    faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import "./PopularMovies.css";
import MovieSlide from "./MovieSlide/MovieSlide";

export default function PopularMovies() {
    const [movies, setMovies] = useState([]);
    const [hasMounted, setHasMounted] = useState(false);
    const [loaded, setLoaded] = useState(false);

    const [sliderRef, instanceRef] = useKeenSlider(
        {
            loop: true,
            created() {
                setLoaded(true);
            },
        },
        [
            (slider) => {
                let timeout;
                let mouseOver = false;
                function clearNextTimeout() {
                    clearTimeout(timeout);
                }
                function nextTimeout() {
                    clearTimeout(timeout);
                    if (mouseOver) return;
                    timeout = setTimeout(() => {
                        slider.next();
                    }, 3000);
                }
                slider.on("created", () => {
                    slider.container.addEventListener("mouseover", () => {
                        mouseOver = true;
                        clearNextTimeout();
                    });
                    slider.container.addEventListener("mouseout", () => {
                        mouseOver = false;
                        nextTimeout();
                    });
                    nextTimeout();
                });
                slider.on("dragStarted", clearNextTimeout);
                slider.on("animationEnded", nextTimeout);
                slider.on("updated", nextTimeout);
            },
        ]
    );

    useEffect(() => {
        if (!hasMounted) {
            getMovieList("upcoming").then((res, err) => {
                if (err) {
                    console.log(err);
                    return;
                }
                if (res?.results) {
                    const movieSlides = [...res.results].slice(0, 10);
                    console.log(res);
                    setMovies(movieSlides);
                    setHasMounted(true);
                }
            });
        }
    }, [hasMounted]);

    if (!hasMounted) return <></>;
    return (
        <>
            <div className="navigation-wrapper relative">
                <div ref={sliderRef} className="keen-slider">
                    {movies.map((movie, i) => {
                        return (
                            <MovieSlide
                                movie={movie}
                                index={i}
                                key={movie.id}
                            />
                        );
                    })}
                </div>

                {loaded && instanceRef.current && (
                    <>
                        <Arrow
                            left
                            onClick={(e) =>
                                e.stopPropagation() ||
                                instanceRef.current?.prev()
                            }
                        />

                        <Arrow
                            onClick={(e) =>
                                e.stopPropagation() ||
                                instanceRef.current?.next()
                            }
                        />
                    </>
                )}
            </div>
        </>
    );
}

function Arrow(props) {
    const disabeld = props.disabled ? " arrow--disabled" : "";
    return (
        <span
            onClick={props.onClick}
            className={`arrow absolute top-0 text-xl h-full flex items-center pb-8 cursor-pointer ${
                props.left
                    ? "arrow--left left-0 px-2"
                    : "arrow--right right-0 px-2"
            } ${disabeld}`}
        >
            <FontAwesomeIcon
                icon={props.left ? faChevronLeft : faChevronRight}
            />
        </span>
    );
}

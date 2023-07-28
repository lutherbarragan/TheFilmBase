"use client";
import { useState, useEffect } from "react";
import { getMovieList, getAllTrending } from "@/config/API";

import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import MovieSlide from "./MainSlide/MainSlide";
import SliderArrow from "../SliderArrow/SliderArrow";

export default function MainSlider() {
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
                    }, 2000);
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
                        <SliderArrow
                            left
                            onClick={(e) =>
                                e.stopPropagation() ||
                                instanceRef.current?.prev()
                            }
                        />

                        <SliderArrow
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

"use client";

import { useState, useEffect } from "react";
import { getList } from "@/config/API";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import CarouselItem from "./CarouselItem/CarouselItem";
import SliderArrow from "../SliderArrow/SliderArrow";

const Carousel = ({ mediaType, listName }) => {
    const [items, setItems] = useState([]);
    const [hasMounted, setHasMounted] = useState(false);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        if (!hasMounted) {
            getList(mediaType, listName).then((res, err) => {
                if (err) {
                    console.log(err);
                    return;
                }
                if (res?.results) {
                    const results = [...res.results];
                    console.log(res);
                    setItems(results);
                    setHasMounted(true);
                }
            });
        }
    }, [items]);

    const [sliderRef, instanceRef] = useKeenSlider({
        slides: {
            perView: 3.3,
            spacing: 8,
        },
        created() {
            setLoaded(true);
        },
    });

    if (!hasMounted) return <></>;
    return (
        <div className="pl-4">
            <h1 className="text-left mt-2 mb-2 ">
                {listName.replaceAll("_", " ")}
            </h1>

            <div ref={sliderRef} className="Carousel keen-slider">
                {items.map((item, i) => {
                    return (
                        <CarouselItem
                            key={item.id}
                            item={item}
                            href={`/${
                                mediaType == "movie" ? "movies" : "shows"
                            }/${item.id}`}
                        />
                    );
                })}
                <CarouselItem
                    href={`/${mediaType == "movie" ? "movies" : "shows"}`}
                    lastSlide={true}
                />
                ;
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
        </div>
    );
};

export default Carousel;

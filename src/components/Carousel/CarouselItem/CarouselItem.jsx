import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleRight } from "@fortawesome/free-solid-svg-icons";

const CarouselItem = ({ item, lastSlide, href }) => {
    if (lastSlide) {
        return (
            <Link href="/movies/discover">
                <div className="keen-slider__slide bg-zinc-900 text-white flex justify-center items-center mr-4">
                    <div>
                        <p>Discover</p>
                        <p>more</p>
                        <p className="text-red-600">
                            <FontAwesomeIcon icon={faCircleRight} />
                        </p>
                    </div>
                </div>
            </Link>
        );
    }

    return (
        <Link href={href}>
            <div className="keen-slider__slide">
                <img
                    src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                    alt={item.title}
                />
            </div>
        </Link>
    );
};

export default CarouselItem;

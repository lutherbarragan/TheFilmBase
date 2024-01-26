import MainSlider from "@/components/MainSlider/MainSlider";
import Carousel from "@/components/Carousel/Carousel";

export default function Home() {
    return (
        <div className="text-center">
            <MainSlider mediaType="all" listName="trending" />
            <h1 className="text-left border-b-2 border-red-600 pb-1 mx-4 text-2xl">
                Movies
            </h1>
            <Carousel mediaType="movie" listName="popular" />
            <Carousel mediaType="movie" listName="upcoming" />
            <Carousel mediaType="movie" listName="top_rated" />
            <h1 className="text-left border-b-2 border-red-600 pb-1 mt-2 mx-4 text-2xl">
                Shows
            </h1>
            <Carousel mediaType="tv" listName="popular" />
            <Carousel mediaType="tv" listName="on_the_air" />
            <Carousel mediaType="tv" listName="top_rated" />
        </div>
    );
}

import MainSlider from "@/components/MainSlider/MainSlider";
import Carousel from "@/components/Carousel/Carousel";

export default function Home() {
    return (
        <div className="text-center">
            <MainSlider />
            <Carousel listName="popular" />
            <Carousel listName="upcoming" />
            <Carousel listName="top_rated" />
        </div>
    );
}

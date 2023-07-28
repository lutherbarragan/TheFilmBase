import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronLeft,
    faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import "./SliderArrow.css";

const SliderArrow = (props) => {
    const disabeld = props.disabled ? " arrow--disabled" : "";
    return (
        <span
            onClick={props.onClick}
            className={`carouselArrow arrow absolute top-0 text-xl h-full flex items-center px-2 cursor-pointer ${
                props.left ? "arrow--left left-0" : "arrow--right right-0"
            } ${disabeld}`}
        >
            <FontAwesomeIcon
                icon={props.left ? faChevronLeft : faChevronRight}
            />
        </span>
    );
};

export default SliderArrow;

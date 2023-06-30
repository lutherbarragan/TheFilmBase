import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faUser,
    faMagnifyingGlass,
    faBars,
} from "@fortawesome/free-solid-svg-icons";

import "./Navbar.css";

const Navbar = () => {
    return (
        <nav>
            <div className="flex relative items-center justify-between">
                <FontAwesomeIcon icon={faBars} className=" text-2xl" />

                <div className="flex mx-auto px-2">
                    <img
                        src="/src/assets/film-logo02.png"
                        alt="Film Logo"
                        className="w-48"
                    />
                </div>

                <div className="flex gap-2">
                    <div className="SearchIcon flex justify-center items-center w-7 h-7 text-xs text-zinc-700 border-zinc-700 active:bg-zinc-700 rounded-full duration-300 active:w-52 active:justify-start active:pl-2 active:text-zinc-300 ">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </div>
                    <span className="w-7 h-7 flex justify-center items-center bg-gray-300 rounded-full">
                        <FontAwesomeIcon icon={faUser} />
                    </span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

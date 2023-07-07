import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "../Sidebar/Sidebar";
import "./Navbar.css";
import Searchbar from "../Searchbar/Searchbar";

const Navbar = () => {
    return (
        <nav>
            <div className="flex items-center pt-2 justify-between">
                <Sidebar />

                <div className="mx-auto">
                    <img
                        src="/assets/film-logo02.png"
                        alt="Film Logo"
                        className="w-48"
                    />
                </div>

                <div>
                    <Link
                        href="/profile"
                        className="w-7 h-7 flex justify-center items-center bg-neutral-800 text-neutral-600 rounded-full"
                    >
                        <FontAwesomeIcon icon={faUser} />
                    </Link>
                </div>
            </div>

            <Searchbar />
        </nav>
    );
};

export default Navbar;

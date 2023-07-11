import ProfileIcon from "../profileIcon/profileIcon";
import Sidebar from "../Sidebar/Sidebar";
import Searchbar from "../Searchbar/Searchbar";

import "./Navbar.css";

const Navbar = () => {
    return (
        <nav>
            <div className="flex items-center justify-between pt-2">
                <Sidebar />

                <div className="mx-auto">
                    <img
                        src="/assets/film-logo02.png"
                        alt="Film Logo"
                        className="w-48"
                    />
                </div>

                <ProfileIcon className="w-9 h-9" />
            </div>

            <Searchbar />
        </nav>
    );
};

export default Navbar;

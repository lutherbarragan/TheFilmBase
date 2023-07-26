import Sidebar from "../Sidebar/Sidebar";
import Searchbar from "../Searchbar/Searchbar";
import Link from "next/link";
import Button from "../Button/Button";
import AuthDynamicRenderer from "../AuthDynamicRenderer/AuthDynamicRenderer";
import ProfileIcon from "../profileIcon/profileIcon";
import "./Navbar.css";

const Navbar = () => {
    return (
        <nav className="p-4 pb-0">
            <div className="flex items-center justify-between">
                <Sidebar />

                <div className="mx-auto">
                    <img
                        src="/assets/film-logo02.png"
                        alt="Film Logo"
                        className="w-48 ml-5"
                    />
                </div>
                {/* <NavbarDynamicContent /> */}
                <AuthDynamicRenderer>
                    <Link href="/login">
                        <Button className="text-xs font-bold">Sign In</Button>
                    </Link>

                    <ProfileIcon className="w-9 h-9" />
                </AuthDynamicRenderer>
            </div>

            <Searchbar />
        </nav>
    );
};

export default Navbar;

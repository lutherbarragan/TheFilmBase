import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHouse,
    faCompass,
    faFilm,
    faTv,
    faClockRotateLeft,
    faBookmark,
    faList,
    faStar,
    faDownload,
    faGear,
    faCircleQuestion,
    faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

import MenuLink from "./MenuLink/MenuLink";
import Button from "../Button/Button";

const Sidebar = ({ isBarOpen, closeBar }) => {
    return (
        <div
            className={`absolute z-50 w-full h-full min-h-screen ${
                isBarOpen ? "left-0" : "-left-full duration-500"
            }`}
        >
            <div
                onClick={closeBar}
                className={`absolute w-full h-full bg-black  ${
                    isBarOpen ? "opacity-60 duration-500" : "opacity-0"
                }`}
            ></div>

            <div
                className={`relative h-full overflow-y-scroll w-2/5 duration-500 p-4 bg-neutral-900 ${
                    isBarOpen ? "left-0" : "-left-1/2"
                }`}
            >
                <div className="h-full flex flex-col justify-between">
                    <div>
                        <div className="border-b pb-4 mb-4">
                            <a href="#" className="outline-none">
                                <img
                                    src="/src/assets/film-logo-no-text.png"
                                    alt="site logo"
                                    className="mx-auto h-8"
                                />
                            </a>
                        </div>
                        <div>
                            <h2 className="font-semibold mb-3">MENU</h2>
                            <MenuLink active>
                                <FontAwesomeIcon
                                    icon={faHouse}
                                    className="mr-2"
                                />
                                Home
                            </MenuLink>
                            <MenuLink>
                                <FontAwesomeIcon
                                    icon={faCompass}
                                    className="mr-2"
                                />
                                Discover
                            </MenuLink>
                        </div>

                        <div>
                            <h2 className="font-semibold mt-8 mb-3">
                                CATEGORY
                            </h2>
                            <MenuLink>
                                <FontAwesomeIcon
                                    icon={faFilm}
                                    className="mr-2"
                                />
                                Movies
                            </MenuLink>
                            <MenuLink>
                                <FontAwesomeIcon icon={faTv} className="mr-2" />
                                Shows
                            </MenuLink>
                        </div>

                        <div>
                            <h2 className="font-semibold mt-8 mb-3">LIBRARY</h2>
                            <MenuLink>
                                <FontAwesomeIcon
                                    icon={faClockRotateLeft}
                                    className="mr-2"
                                />
                                Recent
                            </MenuLink>
                            <MenuLink>
                                <FontAwesomeIcon
                                    icon={faBookmark}
                                    className="mr-2"
                                />
                                Bookmarks
                            </MenuLink>
                            <MenuLink>
                                <FontAwesomeIcon
                                    icon={faList}
                                    className="mr-2"
                                />
                                My Lists
                            </MenuLink>
                            <MenuLink>
                                <FontAwesomeIcon
                                    icon={faStar}
                                    className="mr-2"
                                />
                                Rated
                            </MenuLink>
                            <MenuLink>
                                <FontAwesomeIcon
                                    icon={faDownload}
                                    className="mr-2"
                                />
                                Downloads
                            </MenuLink>
                        </div>

                        <div>
                            <h2 className="font-semibold mt-8 mb-3">GENERAL</h2>
                            <MenuLink>
                                <FontAwesomeIcon
                                    icon={faGear}
                                    className="mr-2"
                                />
                                Settings
                            </MenuLink>
                            <MenuLink>
                                <FontAwesomeIcon
                                    icon={faCircleQuestion}
                                    className="mr-2"
                                />
                                Help
                            </MenuLink>
                        </div>
                    </div>

                    <Button className="w-full mt-8">
                        <span className="mr-2">Log Out</span>
                        <FontAwesomeIcon icon={faArrowRightFromBracket} />
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;

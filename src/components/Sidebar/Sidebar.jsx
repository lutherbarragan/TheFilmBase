"use client";

import React, { useState } from "react";
import Link from "next/link";
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

import SidebarIcon from "./SidebarIcon/SidebarIcon";
import MenuLink from "./MenuLink/MenuLink";
import Button from "../Button/Button";

const Sidebar = () => {
    const [sidebarState, setSidebarState] = useState(false);

    return (
        <div>
            <SidebarIcon setSidebarState={setSidebarState} />

            <div
                className={`SIDEBAR z-50 absolute top-0 w-full h-full -left-full min-h-screen ${
                    sidebarState ? "left-0" : "-left-full duration-500"
                }`}
            >
                <div
                    onClick={() => setSidebarState(false)}
                    className={`SIDEBAR-BACKGROUND-SHADOW absolute w-full h-full bg-black  ${
                        sidebarState ? "opacity-60 duration-500" : "opacity-0"
                    }`}
                ></div>

                <div
                    className={`SIDEBAR-BODY relative h-full overflow-y-scroll w-2/5 duration-500 p-4 bg-neutral-900 ${
                        sidebarState ? "left-0" : "-left-1/2"
                    }`}
                >
                    <div className="h-full flex flex-col justify-between">
                        <div>
                            <div className="border-b pb-4 mb-4">
                                <Link href="/" className="outline-none">
                                    <img
                                        src="/assets/film-logo-no-text.png"
                                        alt="site logo"
                                        className="mx-auto h-8"
                                    />
                                </Link>
                            </div>
                            <div>
                                <h2 className="font-semibold mb-3">MENU</h2>
                                <MenuLink to="/">
                                    <FontAwesomeIcon
                                        icon={faHouse}
                                        className="mr-2"
                                    />
                                    Home
                                </MenuLink>

                                <MenuLink to="/discover">
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
                                <MenuLink to="/movies">
                                    <FontAwesomeIcon
                                        icon={faFilm}
                                        className="mr-2"
                                    />
                                    Movies
                                </MenuLink>

                                <MenuLink to="/shows">
                                    <FontAwesomeIcon
                                        icon={faTv}
                                        className="mr-2"
                                    />
                                    Shows
                                </MenuLink>
                            </div>

                            <div>
                                <h2 className="font-semibold mt-8 mb-3">
                                    LIBRARY
                                </h2>
                                <MenuLink to="/recent">
                                    <FontAwesomeIcon
                                        icon={faClockRotateLeft}
                                        className="mr-2"
                                    />
                                    Recent
                                </MenuLink>

                                <MenuLink to="/bookmarks">
                                    <FontAwesomeIcon
                                        icon={faBookmark}
                                        className="mr-2"
                                    />
                                    Bookmarks
                                </MenuLink>

                                <MenuLink to="/my-lists">
                                    <FontAwesomeIcon
                                        icon={faList}
                                        className="mr-2"
                                    />
                                    My Lists
                                </MenuLink>

                                <MenuLink to="/rated">
                                    <FontAwesomeIcon
                                        icon={faStar}
                                        className="mr-2"
                                    />
                                    Rated
                                </MenuLink>

                                <MenuLink to="/downloads">
                                    <FontAwesomeIcon
                                        icon={faDownload}
                                        className="mr-2"
                                    />
                                    Downloads
                                </MenuLink>
                            </div>

                            <div>
                                <h2 className="font-semibold mt-8 mb-3">
                                    GENERAL
                                </h2>
                                <MenuLink to="/settings">
                                    <FontAwesomeIcon
                                        icon={faGear}
                                        className="mr-2"
                                    />
                                    Settings
                                </MenuLink>

                                <MenuLink to="/help">
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
        </div>
    );
};

export default Sidebar;

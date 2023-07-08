"use client";

import React, { useEffect, useState } from "react";
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
import SidebarLink from "./SidebarLink/SidebarLink";
import Button from "../Button/Button";

const Sidebar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div>
            <SidebarIcon setIsSidebarOpen={setIsSidebarOpen} />

            <div
                className={`SIDEBAR z-50 absolute top-0 w-full h-full -left-full min-h-screen ${
                    isSidebarOpen ? "left-0" : "-left-full duration-1000"
                }`}
            >
                <div
                    onClick={() => setIsSidebarOpen(false)}
                    className={`SIDEBAR-BACKGROUND-SHADOW absolute w-full h-full bg-black  ${
                        isSidebarOpen ? "opacity-60 duration-500" : "opacity-0"
                    }`}
                ></div>

                <div
                    className={`SIDEBAR-BODY relative h-full overflow-y-scroll w-2/5 duration-500 p-4 bg-neutral-900 ${
                        isSidebarOpen ? "left-0" : "-left-1/2"
                    }`}
                >
                    <div className="h-full flex flex-col justify-between">
                        <div>
                            <div
                                className="border-b pb-4 mb-4"
                                onClick={() => setIsSidebarOpen(false)}
                            >
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
                                <SidebarLink
                                    to="/"
                                    setIsSidebarOpen={setIsSidebarOpen}
                                >
                                    <FontAwesomeIcon
                                        icon={faHouse}
                                        className="mr-2"
                                    />
                                    Home
                                </SidebarLink>

                                <SidebarLink
                                    to="/discover"
                                    setIsSidebarOpen={setIsSidebarOpen}
                                >
                                    <FontAwesomeIcon
                                        icon={faCompass}
                                        className="mr-2"
                                    />
                                    Discover
                                </SidebarLink>
                            </div>

                            <div>
                                <h2 className="font-semibold mt-8 mb-3">
                                    CATEGORY
                                </h2>
                                <SidebarLink
                                    to="/movies"
                                    setIsSidebarOpen={setIsSidebarOpen}
                                >
                                    <FontAwesomeIcon
                                        icon={faFilm}
                                        className="mr-2"
                                    />
                                    Movies
                                </SidebarLink>

                                <SidebarLink
                                    to="/shows"
                                    setIsSidebarOpen={setIsSidebarOpen}
                                >
                                    <FontAwesomeIcon
                                        icon={faTv}
                                        className="mr-2"
                                    />
                                    Shows
                                </SidebarLink>
                            </div>

                            <div>
                                <h2 className="font-semibold mt-8 mb-3">
                                    LIBRARY
                                </h2>
                                <SidebarLink
                                    to="/recent"
                                    setIsSidebarOpen={setIsSidebarOpen}
                                >
                                    <FontAwesomeIcon
                                        icon={faClockRotateLeft}
                                        className="mr-2"
                                    />
                                    Recent
                                </SidebarLink>

                                <SidebarLink
                                    to="/bookmarks"
                                    setIsSidebarOpen={setIsSidebarOpen}
                                >
                                    <FontAwesomeIcon
                                        icon={faBookmark}
                                        className="mr-2"
                                    />
                                    Bookmarks
                                </SidebarLink>

                                <SidebarLink
                                    to="/my-lists"
                                    setIsSidebarOpen={setIsSidebarOpen}
                                >
                                    <FontAwesomeIcon
                                        icon={faList}
                                        className="mr-2"
                                    />
                                    My Lists
                                </SidebarLink>

                                <SidebarLink
                                    to="/rated"
                                    setIsSidebarOpen={setIsSidebarOpen}
                                >
                                    <FontAwesomeIcon
                                        icon={faStar}
                                        className="mr-2"
                                    />
                                    Rated
                                </SidebarLink>

                                <SidebarLink
                                    to="/downloads"
                                    setIsSidebarOpen={setIsSidebarOpen}
                                >
                                    <FontAwesomeIcon
                                        icon={faDownload}
                                        className="mr-2"
                                    />
                                    Downloads
                                </SidebarLink>
                            </div>

                            <div>
                                <h2 className="font-semibold mt-8 mb-3">
                                    GENERAL
                                </h2>
                                <SidebarLink
                                    to="/settings"
                                    setIsSidebarOpen={setIsSidebarOpen}
                                >
                                    <FontAwesomeIcon
                                        icon={faGear}
                                        className="mr-2"
                                    />
                                    Settings
                                </SidebarLink>

                                <SidebarLink
                                    to="/help"
                                    setIsSidebarOpen={setIsSidebarOpen}
                                >
                                    <FontAwesomeIcon
                                        icon={faCircleQuestion}
                                        className="mr-2"
                                    />
                                    Help
                                </SidebarLink>
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

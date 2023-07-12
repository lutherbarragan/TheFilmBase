"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import useUserStore, { signOutUser } from "@/config/store";

import ProfileIcon from "../profileIcon/profileIcon";

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
    faGear,
    faCircleQuestion,
} from "@fortawesome/free-solid-svg-icons";

import SidebarIcon from "./SidebarIcon/SidebarIcon";
import SidebarLink from "./SidebarLink/SidebarLink";
import AuthButton from "../AuthButton/AuthButton";

const Sidebar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const isAuth = useUserStore((state) => state.signedIn);
    const router = useRouter();

    const onClickHandler = () => {
        if (isAuth) {
            signOutUser();
        } else {
            router.push("/login");
            setIsSidebarOpen(false);
        }
    };

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
                                className="border-b mb-4"
                                onClick={() => setIsSidebarOpen(false)}
                            >
                                <div className="flex flex-col justify-center items-center mb-4">
                                    <ProfileIcon className="w-14 h-14 text-2xl mb-1" />
                                    {isAuth ? (
                                        <></>
                                    ) : (
                                        <Link href="/login">Sign in</Link>
                                    )}
                                </div>
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
                        <AuthButton isAuth={isAuth} onClick={onClickHandler} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;

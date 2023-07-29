"use client";

import React, { useState, useEffect } from "react";
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
    faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import SidebarIcon from "./SidebarIcon/SidebarIcon";
import LinksArea from "./LinksArea/LinksArea";
import SidebarLink from "./SidebarLink/SidebarLink";
import AuthButton from "../AuthButton/AuthButton";

const Sidebar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [authText, setAuthText] = useState("Sign in");

    const isAuth = useUserStore((state) => state.signedIn);
    const router = useRouter();

    useEffect(() => {
        if (isAuth) {
            setAuthText("Sign out");
        } else {
            setAuthText("Sign in");
        }
    }, [isAuth]);

    const onClickHandler = () => {
        if (isAuth) {
            signOutUser();
        }
        router.push("/login");
        setIsSidebarOpen(false);
    };

    return (
        <div>
            <SidebarIcon setIsSidebarOpen={setIsSidebarOpen} />

            <div
                className={`SIDEBAR z-50 fixed top-0 w-full h-full -left-full min-h-screen ${
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
                    className={`SIDEBAR-BODY relative h-full overflow-y-scroll w-2/5 duration-500 px-4 py-2 sm:py-4 bg-zinc-950 ${
                        isSidebarOpen ? "left-0" : "-left-1/2"
                    }`}
                >
                    <div className="h-full flex flex-col justify-between">
                        <div>
                            <div className="border-b-2 border-neutral-800 mb-3 pb-3">
                                <ProfileIcon
                                    className="mx-auto"
                                    size="md"
                                    onClick={() => setIsSidebarOpen(false)}
                                />
                            </div>

                            <LinksArea title="MENU">
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
                            </LinksArea>

                            <LinksArea title="CATEGORY">
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
                            </LinksArea>

                            <LinksArea title="LIBRARY">
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
                            </LinksArea>

                            <LinksArea title="GENERAL">
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
                            </LinksArea>
                        </div>

                        <AuthButton onClick={onClickHandler}>
                            <span className="mr-2">{authText}</span>
                            <FontAwesomeIcon icon={faArrowRightFromBracket} />
                        </AuthButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;

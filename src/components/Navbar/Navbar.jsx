"use client";

import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faUser,
    faMagnifyingGlass,
    faBars,
} from "@fortawesome/free-solid-svg-icons";

import Sidebar from "../Sidebar/Sidebar";
import "./Navbar.css";
import Button from "../Button/Button";

const Navbar = () => {
    const [sidebarState, setSidebarState] = useState(false);

    return (
        <nav>
            <Sidebar
                isBarOpen={sidebarState}
                closeBar={() => setSidebarState(false)}
            />

            <div className="flex relative items-center pt-2 justify-between">
                <FontAwesomeIcon
                    icon={faBars}
                    className=" text-2xl"
                    onClick={() => setSidebarState(true)}
                />

                <div className="flex mx-auto px-2">
                    <img
                        src="/assets/film-logo02.png"
                        alt="Film Logo"
                        className="w-48"
                    />
                </div>

                <div className="flex gap-2">
                    <span className="w-7 h-7 flex justify-center items-center bg-neutral-800 text-neutral-600 rounded-full">
                        <FontAwesomeIcon icon={faUser} />
                    </span>
                </div>
            </div>

            {/* MAKE IT A SEPARATE COMPONENT &&  DECIDE WHERE IT'S BETTER TO USE IT (MAYBE JUST USE IT IN HOME PAGE?)*/}
            <div className="relative group text-sm text-neutral-700 my-3 flex-grow">
                <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    className="absolute 
                            top-1/2 
                            right-0
                            pr-0.5
                            rounded-full
                            -translate-x-1/2
                            -translate-y-1/2
                            z-50
                            duration-300
                            hover:cursor-pointer
                            hover:text-red-700
                            group-active:text-red-700
                            group-focus-within:text-red-700
                            "
                />
                <input
                    type="text"
                    placeholder="Search movies, TV shows, series..."
                    className="
                            SearchBarInput
                            pl-2
                            pr-8
                            text-sm 
                            w-full
                            bg-transparent 
                            rounded-full 
                            h-7
                            border-neutral-700 
                            duration-300 
                          group-active:text-neutral-400 group-active:border-neutral-400 
                          group-focus-within:text-neutral-400 group-focus-within:border-neutral-400
                            "
                />
            </div>
        </nav>
    );
};

export default Navbar;

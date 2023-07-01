import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faUser,
    faMagnifyingGlass,
    faBars,
} from "@fortawesome/free-solid-svg-icons";

import Sidebar from "../Sidebar/Sidebar";
import "./Navbar.css";

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
                        src="/src/assets/film-logo02.png"
                        alt="Film Logo"
                        className="w-48"
                    />
                </div>

                <div className="flex gap-2">
                    <div className="relative group text-sm text-neutral-700">
                        <FontAwesomeIcon
                            icon={faMagnifyingGlass}
                            className="absolute 
                            top-1/2 
                            left-1/2 
                            -translate-x-1/2 
                            -translate-y-1/2
                            -z-50
                            duration-300 
                            group-active:left-0 group-active:translate-x-1/2 group-active:text-neutral-400
                            group-focus-within:left-0 group-focus-within:translate-x-1/2 group-focus-within:text-neutral-400
                            "
                        />
                        <input
                            type="text"
                            className="
                            SearchBarInput 
                            text-transparent 
                            text-sm 
                            w-7 
                            bg-transparent 
                            rounded-full 
                            h-7 
                            border-neutral-700 
                            duration-300 
                            group-active:w-48 group-active:pl-6 group-active:text-neutral-400 group-active:border-neutral-400 
                            group-focus-within:w-48 group-focus-within:pl-6 group-focus-within:text-neutral-400 group-focus-within:border-neutral-400
                            "
                        />
                    </div>

                    <span className="w-7 h-7 flex justify-center items-center bg-neutral-800 text-neutral-600 rounded-full">
                        <FontAwesomeIcon icon={faUser} />
                    </span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

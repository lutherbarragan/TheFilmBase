"use client";
import { usePathname } from "next/navigation";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const isRouteValid = () => {
    const pathname = usePathname();

    return (
        pathname === "/" ||
        pathname === "/discover" ||
        pathname === "/movies" ||
        pathname === "/shows" ||
        pathname === "/recent" ||
        pathname === "/bookmarks" ||
        pathname === "/my-lists" ||
        pathname === "/rated" ||
        pathname === "/downloads"
    );
};

export default function Searchbar() {
    if (!isRouteValid()) return <></>;

    return (
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
    );
}

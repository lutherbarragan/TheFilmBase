"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPen,
    faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

import useUserStore, { getUserData, signOutUser } from "@/config/store";

import ProfileIcon from "@/components/profileIcon/profileIcon";
import AuthButton from "@/components/AuthButton/AuthButton";
import AuthDynamicRenderer from "@/components/AuthDynamicRenderer/AuthDynamicRenderer";
import Button from "@/components/Button/Button";

export default function Profile() {
    const router = useRouter();
    let isAuth = useUserStore((state) => state.signedIn);

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [memberDate, setMemberDate] = useState("");

    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    useEffect(() => {
        if (isAuth) {
            getUserData().then((res) => {
                const data = {
                    email: res.email,
                    username: res.email.split("@")[0],
                    created_at: res.created_at.split("T")[0],
                };
                setUsername(data.username);
                setEmail(data.email);
                setMemberDate(
                    `
                        ${months[data.created_at.split("-")[1] - 1]}
                        ${data.created_at.split("-")[2]}
                        ${data.created_at.split("-")[0]}
                    `
                );
            });
        } else {
            router.push("/login");
            console.log("PROFILE PAGE: Use Effect");
        }
    }, [isAuth]);

    const signOutHandler = () => {
        signOutUser();
        isAuth = false;
    };

    return (
        <div className="p-4">
            <ProfileIcon className="mx-auto w-32 h-32 text-2xl mb-1" />

            <div className="text-center">
                <span className="group inline-block font-semibold text-lg text-neutral-200 mb-6 mx-auto relative hover:cursor-pointer">
                    {username}
                    <FontAwesomeIcon
                        icon={faPen}
                        className="absolute top-1/2 -translate-y-1/2 ml-2 text-sm group-hover:text-red-700 duration-300"
                    />
                </span>
            </div>

            <div>
                <p className="flex relative mb-6 py-1 text-neutral-200 border-b-2 border-neutral-800">
                    <span className="absolute -top-1/3 left-0 text-xs text-neutral-500">
                        Email
                    </span>
                    <span className="mr-2">{email}</span>
                    <Button className="text-xs absolute right-0">Edit</Button>
                </p>

                <p className="flex relative justify-between mb-6 py-1 border-b-2 text-neutral-200 border-neutral-800">
                    <span className="absolute -top-1/3 left-0 text-xs text-neutral-500">
                        Member since
                    </span>
                    <span className="mr-2">{memberDate}</span>
                </p>
            </div>

            <AuthDynamicRenderer>
                <></>

                <AuthButton onClick={signOutHandler}>
                    Sign Out
                    <FontAwesomeIcon
                        icon={faArrowRightFromBracket}
                        className="ml-2"
                    />
                </AuthButton>
            </AuthDynamicRenderer>
        </div>
    );
}

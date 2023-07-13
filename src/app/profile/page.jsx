"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faPen } from "@fortawesome/free-solid-svg-icons";

import useUserStore, { signOutUser } from "@/config/store";

import ProfileIcon from "@/components/profileIcon/profileIcon";
import AuthButton from "@/components/AuthButton/AuthButton";
import Button from "@/components/Button/Button";

export default function Profile() {
    const router = useRouter();
    const USERNAME = useUserStore((state) => state.username);
    const EMAIL = useUserStore((state) => state.email);
    const DATE_CREATED = useUserStore((state) => state.created_at)
        .split("T")[0]
        .split("-")
        .join(" / ");
    let isAuth = useUserStore((state) => state.signedIn);

    useEffect(() => {
        if (!isAuth) {
            router.push("/login");
            console.log("PROFILE PAGE: Use Effect");
        }
    }, [isAuth]);

    const signOutHandler = () => {
        signOutUser();
        isAuth = false;
    };

    return (
        <div className="pt-6">
            <ProfileIcon className="mx-auto w-32 h-32 text-2xl mb-1" />

            <div className="text-center">
                <span className="group inline-block font-semibold text-lg text-neutral-200 mb-6 mx-auto relative hover:cursor-pointer">
                    {USERNAME ? USERNAME : EMAIL.split("@")[0]}
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
                    <span className="mr-2">{EMAIL}</span>
                    {/* <FontAwesomeIcon
                        icon={faPen}
                        className="text-xs absolute top-1/2 right-0 -translate-y-1/2 text-neutral-400"
                    /> */}
                    <Button className="text-xs absolute right-0">Edit</Button>
                </p>

                <p className="flex relative justify-between mb-6 py-1 border-b-2 text-neutral-200 border-neutral-800">
                    <span className="absolute -top-1/3 left-0 text-xs text-neutral-500">
                        Member since
                    </span>
                    <span className="mr-2">{DATE_CREATED}</span>
                </p>
            </div>
            <AuthButton isAuth={isAuth} onClick={signOutHandler} />
        </div>
    );
}

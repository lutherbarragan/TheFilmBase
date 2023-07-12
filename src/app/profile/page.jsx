"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import useUserStore, { signOutUser } from "@/config/store";

import ProfileIcon from "@/components/profileIcon/profileIcon";
import Button from "@/components/Button/Button";
import AuthButton from "@/components/AuthButton/AuthButton";

export default function Profile() {
    const router = useRouter();
    let isAuth = useUserStore((state) => state.signedIn);

    useEffect(() => {
        if (!isAuth) {
            router.push("/login");
            console.log("Use Effect");
        }
    }, [isAuth]);

    const signOutHandler = () => {
        signOutUser();
        isAuth = false;
        console.log("LOG OUT SUCCESSFUL");
    };

    return (
        <div className="text-center pt-6">
            <ProfileIcon className="mx-auto w-32 h-32 text-2xl mb-1" />

            <p className="font-semibold text-xl mb-6">@USERNAME</p>

            <div>
                <p>ID: {useUserStore((state) => state.id)}</p>
                <p>Email: {useUserStore((state) => state.email)}</p>
                <p>
                    Member since:{" "}
                    {useUserStore((state) => state.created_at.split("T")[0])}
                </p>
            </div>
            <AuthButton isAuth={isAuth} onClick={signOutHandler} />
        </div>
    );
}

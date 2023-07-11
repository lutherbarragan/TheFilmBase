"use client";

import { useRouter } from "next/navigation";
import useUserStore, { signOutUser } from "@/config/store";
import Button from "@/components/Button/Button";
import { useEffect } from "react";
import ProfileIcon from "@/components/profileIcon/profileIcon";

export default function Profile() {
    const router = useRouter();
    const isAuth = useUserStore((state) => state.signedIn);

    useEffect(() => {
        if (!isAuth) {
            router.push("/login");
        }
    }, []);

    const logOut = () => {
        signOutUser();
        router.push("/login");
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

            <Button onClick={() => logOut()} className="w-full mt-16">
                Log Out
            </Button>
        </div>
    );
}

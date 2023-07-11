"use client";

import { useRouter } from "next/navigation";
import useUserStore, { signOutUser } from "@/config/store";
import Button from "@/components/Button/Button";
import { useEffect } from "react";

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
            <div className="mx-auto w-28 mb-2">
                <img
                    src="/assets/default-profile-img.png"
                    alt="Profile image"
                />
            </div>

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

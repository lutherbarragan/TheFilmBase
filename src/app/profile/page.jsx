"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import supabase from "@/config/dbConnection";
import { useUserStore } from "@/config/store";

import Button from "@/components/Button/Button";

export default function Profile() {
    const router = useRouter();

    function removeStateData() {
        const user = {
            id: "",
            email: "",
            username: "",
            created_at: "",
            signedIn: false,
        };

        useUserStore.setState({ ...user });
    }

    async function signOutUser() {
        const { error } = await supabase.auth.signOut();
        console.log("SIGNED OUT SUCCESSFUL");

        removeStateData();
        router.push("/login");
    }

    const dynamicContent = (
        <>
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

            <Button onClick={() => signOutUser()} className="w-full mt-16">
                Log Out
            </Button>
        </>
    );

    if (useUserStore((state) => state.signedIn)) {
        return <div className="text-center pt-6">{dynamicContent}</div>;
    } else {
        return (
            <div className="text-center pt-6">
                <h1 className="text-2xl font-semibold">PLEASE LOG IN</h1>
            </div>
        );
    }
}

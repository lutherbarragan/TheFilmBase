"use client";

import { useEffect, useState } from "react";
import supabase from "@/config/dbConnection";
import Button from "@/components/Button/Button";

export default function Profile() {
    const [user, setUser] = useState({});

    useEffect(() => {
        async function getUserData() {
            await supabase.auth.getUser().then((res) => {
                if (res.data?.user) {
                    console.log(res.data.user);
                    setUser(res.data.user);
                }
            });
        }
        getUserData();
    }, []);

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
                <p>{user.email}</p>
                <p>Member since {user.created_at?.split("T")[0]}</p>
            </div>

            <Button className="w-full mt-16">Log Out</Button>
        </div>
    );
}

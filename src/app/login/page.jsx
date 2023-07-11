"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import supabase from "@/config/dbConnection";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useUserStore } from "@/config/store";

export default function Login() {
    const router = useRouter();

    async function getUserData() {
        const {
            data: { user },
        } = await supabase.auth.getUser();

        return user;
    }

    supabase.auth.onAuthStateChange((event) => {
        if (event == "SIGNED_IN") {
            console.log("SIGNED IN SUCCESSFUL");
            getUserData().then((res) => {
                const user = {
                    id: res.id,
                    email: res.email,
                    username: res.username,
                    created_at: res.created_at,
                    signedIn: true,
                };
                useUserStore.setState({ ...user });
                router.push("/profile");
            });
        }
    });

    return (
        <div className="text-center pt-4">
            <button onClick={() => (authStatus = true)}>change auth</button>
            <Auth
                supabaseClient={supabase}
                appearance={{
                    theme: ThemeSupa,
                    variables: {
                        default: {
                            colors: {
                                brand: "red",
                                brandAccent: "darkred",
                            },
                        },
                    },
                }}
                theme="dark"
                providers={["google", "facebook"]}
            />
        </div>
    );
}

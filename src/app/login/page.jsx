"use client";

import { useRouter } from "next/navigation";
import supabase from "@/config/dbConnection";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import useUserStore, { getUserData } from "@/config/store";
import { useEffect } from "react";

export default function Login() {
    const router = useRouter();
    const isAuth = useUserStore((state) => state.signedIn);

    useEffect(() => {
        if (isAuth) {
            router.push("/profile");
        }
    }, []);

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

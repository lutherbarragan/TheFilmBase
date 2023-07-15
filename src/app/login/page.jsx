"use client";

import { useRouter } from "next/navigation";
import supabase from "@/config/dbConnection";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import useUserStore, { getUserData } from "@/config/store";
import { useEffect } from "react";

export default function Login() {
    const router = useRouter();
    let isAuth = useUserStore((state) => state.signedIn);

    useEffect(() => {
        if (isAuth) {
            router.push("/profile");
            console.log("LOGIN PAGE: Use Effect()");
        }
    }, [isAuth]);

    supabase.auth.onAuthStateChange((event) => {
        console.log(event);
        if (event == "SIGNED_IN") {
            getUserData().then((res) => {
                useUserStore.setState({ signedIn: true });
                isAuth = true;
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
                providers={[]}
            />
        </div>
    );
}

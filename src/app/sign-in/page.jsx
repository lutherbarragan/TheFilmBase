"use client";
import { useRouter } from "next/navigation";
import supabase from "@/config/dbConnection";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";

export default function SignIn() {
    const router = useRouter();

    supabase.auth.onAuthStateChange(async (event) => {
        if (event == "SIGNED_IN") {
            // Navigate to Profile?
            router.push("/profile");
        } else {
            // Navigate to Home
            () => {
                router.push("/");
            };
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

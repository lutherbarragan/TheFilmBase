"use client";
import { create } from "zustand";
import supabase from "@/config/dbConnection";

const useUserStore = create((set) => ({
    id: "",
    username: "",
    email: "",
    created_at: "",
    signedIn: false,
    setSignedIn: (isSignedIn) => set({ isSignedIn }),
}));

function removeStateData() {
    const user = {
        id: "",
        email: "",
        username: "",
        created_at: "",
        signedIn: false,
    };

    useUserStore.setState({ ...user });
    console.log("REMOVED SESSION DATA SUCCESSFULLY");
}

export async function getUserData() {
    const {
        data: { user },
    } = await supabase.auth.getUser();

    return user;
}

export async function signOutUser() {
    removeStateData();

    const { error } = await supabase.auth.signOut();
    if (error) {
        console.log(error);
    }

    console.log("SIGNED OUT SUCCESSFUL");
}

export async function getSession() {
    console.log("===================[GET SESSION]===================");
    const { data, error } = await supabase.auth.getSession();

    console.log(data);

    if (data.session) {
        const user = data.session.user;
        const userData = {
            id: user.id,
            email: user.email,
            username: user.username,
            created_at: user.created_at,
            signedIn: true,
        };

        useUserStore.setState({ ...userData });
        return userData;
    }
    return null;
}

export default useUserStore;

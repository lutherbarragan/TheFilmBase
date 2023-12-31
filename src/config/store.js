"use client";
import { create } from "zustand";
import supabase from "@/config/dbConnection";

const useUserStore = create((set) => ({
    signedIn: false,
    setSignedIn: (isSignedIn) => set({ isSignedIn }),
}));

export async function getUserData() {
    const {
        data: { user },
    } = await supabase.auth.getUser();

    return user;
}

export async function signOutUser() {
    useUserStore.setState({ signedIn: false });

    const { error } = await supabase.auth.signOut();
    if (error) {
        console.log(error);
    }

    console.log("SIGNED OUT SUCCESSFUL");
}

export async function getSession() {
    const { data, error } = await supabase.auth.getSession();
    if (data.session) {
        useUserStore.setState({ signedIn: true });
        return true;
    }
    return false;
}

export default useUserStore;

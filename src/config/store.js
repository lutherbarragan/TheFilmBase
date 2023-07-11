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
    const { error } = await supabase.auth.signOut();
    console.log("SIGNED OUT SUCCESSFUL");
    removeStateData();
}

export default useUserStore;

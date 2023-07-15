"use client";
import { create } from "zustand";
import supabase from "@/config/dbConnection";

const useUserStore = create((set) => ({
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
    const { data, error } = await supabase.auth.getSession();
    console.log("===================[GET SESSION]===================");
    console.log(data);
    if (data.session) {
        useUserStore.setState({ signedIn: true });
    }
    return false;
}

export default useUserStore;

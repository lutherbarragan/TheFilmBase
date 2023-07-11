"use client";

import { create } from "zustand";

export const useUserStore = create((set) => ({
    id: "",
    username: "",
    email: "",
    created_at: "",
    signedIn: false,
    setSignedIn: (isSignedIn) => set({ isSignedIn }),
}));

export const authStore = create((set) => false);

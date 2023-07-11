"use client";

import { useRef } from "react";
import useUserStore from "./store";

export function StoreInitializer({ user }) {
    const isInitialized = useRef(false);

    if (!isInitialized.current) {
        useUserStore.setState({
            ...user,
        });
        isInitialized.current = true;
    }
    console.log(useUserStore());
    return null;
}

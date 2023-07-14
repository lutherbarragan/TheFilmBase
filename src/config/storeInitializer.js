"use client";

import { useRef } from "react";
import useUserStore, { getSession } from "./store";

export function StoreInitializer() {
    const isInitialized = useRef(false);

    const userData = getSession();
    console.log(userData);

    // useUserStore.setState({ ...userData });
    isInitialized.current = true;
    console.log("INITIALIZED SUCCESSFUL");
    return;
}

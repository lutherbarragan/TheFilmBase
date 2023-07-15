"use client";

import { useRef } from "react";
import useUserStore, { getSession } from "./store";

export function StoreInitializer() {
    const isInitialized = useRef(false);

    // initialize userStore here, {} if no session, {...data} if session ???
    const userData = getSession();
    console.log(userData);

    // useUserStore.setState({ ...userData });
    isInitialized.current = true;
    console.log("INITIALIZED SUCCESSFUL");
    return;
}

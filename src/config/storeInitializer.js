"use client";

import { useRef } from "react";
import useUserStore, { getSession } from "./store";

export function StoreInitializer() {
    const isInitialized = useRef(false);

    const userData = getSession();

    isInitialized.current = true;
    return;
}

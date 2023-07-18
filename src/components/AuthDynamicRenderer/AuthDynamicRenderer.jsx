"use client";
import { useState, useEffect } from "react";
import useUserStore from "@/config/store";

const AuthDynamicRenderer = ({ children }) => {
    const [hasMounted, setHasMounted] = useState(false);
    const isAuth = useUserStore((state) => state.signedIn);
    let content = children[0];

    useEffect(() => {
        setHasMounted(true);
    }, []);
    if (!hasMounted) {
        return null;
    }

    if (isAuth) {
        content = children[1];
    }

    return <>{content}</>;
};

export default AuthDynamicRenderer;

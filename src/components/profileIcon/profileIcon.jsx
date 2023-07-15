"use client";

import useUserStore from "@/config/store";
import Link from "next/link";

import { useState, useEffect } from "react";

const ProfileIcon = ({ className }) => {
    const [linkUrl, setLinkUrl] = useState("/login");
    const [profileSrc, setProfileSrc] = useState(
        "/assets/default-profile-offline.png"
    );
    const isAuth = useUserStore((state) => state.signedIn);

    useEffect(() => {
        if (isAuth) {
            setLinkUrl("/profile");
            setProfileSrc("/assets/default-profile-online.png");
        }
    }, [isAuth]);

    return (
        <Link
            href={linkUrl}
            className={`flex justify-center items-center rounded-full ${className}`}
        >
            <img src={profileSrc} alt="profile picture" />
        </Link>
    );
};

export default ProfileIcon;
